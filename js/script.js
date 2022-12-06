function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3){
    return 'nożyce';
  }else{
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}
 function displayResult(argComputerMove, argPlayerMove){
  console.log('moves:', argComputerMove, argPlayerMove);
  if(argComputerMove == 'kamień' && argPlayerMove== 'papier'){
    return 'Ty wygrywasz!'
  }else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    return 'Remis!';
  }else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    return 'Komputer okazał się lepszy!';
  }else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
    return 'Remis!';
  }else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    return 'Komputer okazał się lepszy!';
  }else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    return 'Ty wygrywasz!';
  }else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    return 'Komputer okazał się lepszy!';
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    return 'Ty wygrywasz!';
  }else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    return 'Remis!';
  }else if (playerMove == 'nieznany ruch') {
    return 'Nie oszukuj!';
  }

 }

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/* if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
  computerMove = 'papier';
}else{
  computerMove = 'nożyce';
}*/

printMessage('Mój ruch to: ' + argComputerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);



/*if(playerInput == '1'){
  playerMove = 'kamień';
}else if(playerInput == 2){
    playerMove = 'papier';
  }else if (playerInput == 3){
    playerMove = 'nożyce';
  }else {
    playerMove = 'nieznany ruch'
  }*/


printMessage('Twój ruch to: ' + argPlayerMove);

let gameScore = displayResult(argComputerMove, argPlayerMove);

printMessage('Wynik to: ' + gameScore);

/*if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }else if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  }else if ( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Komputer okazał się lepszy!');
  }else if ( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
  }else if ( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Komputer okazał się lepszy!');
  }else if ( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }else if ( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Komputer okazał się lepszy!');
  } else if ( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }else if ( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
  }else if (playerMove == 'nieznany ruch') {
    printMessage('Nie oszukuj!');
  }*/