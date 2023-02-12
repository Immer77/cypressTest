let numberOfRolls = 0;


function buttonClicked(btnName){
    document.getElementById(btnName).style.opacity = 0.5;
    document.getElementById(btnName).disabled = true;
}

function rollUp(){
    numberOfRolls++;
    document.getElementById("turnRolled").textContent = `Turn Rolled ${numberOfRolls}`;
        
}
