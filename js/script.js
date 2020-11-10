function playGame(playerInput){
  clearMessages()



  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  let computerMove = getMoveName(randomNumber);
  // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  console.log('Gracz wpisał: ' + playerInput);
  let playerMove = getMoveName(playerInput);

  displayResult(computerMove, playerMove);


}

  document.getElementById('kamień').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('papier').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('nożyce').addEventListener('click', function(){
    playGame(3);
  });

