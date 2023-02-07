const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const atlasUsername = process.env.atlasLogin;
const atlaspass = process.env.atlasPassword;
app.use(express.urlencoded({extended :   false}));

//app.use(express.urlencoded({ extended: false }))

// Connect to the database with IIFE
(async function () {
    try {
        const url = process.env.MONGODB_URL || `mongodb+srv://yatzyUser:yatzyersjovt@yatzydb.swynlat.mongodb.net/?retryWrites=true&w=majority`;
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Database connected:", mongoose.connection.name);
    } catch (e) {
        console.error("Failed to connect to database", e)
    }
})();

const User = mongoose.model('Users', {
    "email": String,
    "password": String,
});

app.post('/register', async (req, res) => {
    console.log(req.body);
    if(req.body.psw !== req.body.psw_repeat){
        res.status(404);
        return;
    }
    let newUser = new User({ "email": req.body.email, "password": req.body.psw })
    await newUser.save();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})