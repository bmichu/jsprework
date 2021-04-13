/* Function */
{

function getMoveName(argMoveId){
    if(argMoveId == 1){
    return 'kamień';}
    else if(argMoveId == 2){
        return 'papier';}
    else if(argMoveId == 3){
        return 'nożyce';}
    else {}
    return 'nieznany ruch';}

function displayResult(computerMove, playerInput){
    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerInput);
    if(computerMove == 'kamień' && playerInput == 'papier') {
        printMessage('Ty wygrywasz!');
    }  
    else if(computerMove == 'kamień' && playerInput == 'nożyce'){
        printMessage('Komputer wygrał!');
    }
    else if(computerMove == 'kamień' && playerInput == 'kamień'){
        printMessage('Mamy remis!');
    }
    else if(computerMove == 'papier' && playerInput == 'papier'){
        printMessage('Mamy remis!');
        
    }
    else if(computerMove == 'papier' && playerInput == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }    
    else if(computerMove == 'papier' && playerInput == 'kamień'){
        printMessage('Komputer wygrał!');

    }   
    else if(computerMove == 'nożyce' && playerInput == 'papier'){
            printMessage('Komputer wygrał!');
    }   
    else if(computerMove == 'nożyce' && playerInput == 'nożyce'){
            printMessage('Mamy remis!');
    }   
    else if(computerMove == 'nożyce' && playerInput == 'kamień'){
            printMessage('Ty wygrywasz!');
    }   
    else
            printMessage('Coś nie pykło');
    }

    document.getElementById('play-rock').addEventListener("click", function () {
	playGame('kamień');
    });

    document.getElementById('play-paper').addEventListener("click", function () {
	playGame('papier');
    });

    document.getElementById('play-scissors').addEventListener("click", function () {
	playGame('nożyce');
    });
    
function playGame(playerInput) {
    clearMessages();
    randomNumber = Math.floor(Math.random() * 3 + 1);
    computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);
    printMessage('Twój ruch to: ' + playerInput);
    displayResult(computerMove, playerInput);
    printMessage(playerScore + ':' + computerScore);
}

}