function playGame(playerInput){
  clearMessages()

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

    let ComputerMove = getMoveName(randomNumber);


    printMessage('Mój ruch to: ' + ComputerMove);


   /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    */

    console.log('Gracz wpisał: ' + playerInput);

    let PlayerMove = getMoveName(playerInput);


    printMessage('Twój ruch to: ' + PlayerMove);

    let gameScore = displayResult(ComputerMove, PlayerMove);

    printMessage('Wynik to: ' + gameScore);

  }
  
  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-papper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });