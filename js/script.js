{
let playerScore = 0;
let computerScore = 0;

function playGame(playerInput) {
  clearMessages();

  // if (playerScore == 10 || computerScore == 10) {
  //   printMessage('koniec gry');
  //   return;
  // }

  console.log('Gracz wpisał: ' + playerInput);
  const playerMove = getMoveName(playerInput);

  if (Math.random() > 0.75) {
    if (playerMove == 'papier') {
      computerMove = 'nożyce';
    } else if (playerMove == 'kamień') {
      computerMove = 'papier';
    } else {
      computerMove = 'kamień';
    }

  } else {
    if (playerMove == 'papier') {
      computerMove = 'kamień';
    } else if (playerMove == 'kamień') {
      computerMove = 'nożyce';
    } else {
      computerMove = 'papier';
    }
  }

  // let randomNumber = Math.floor(Math.random() * 3 + 1);
  // console.log('Wylosowana liczba to: ' + randomNumber);
  // let computerMove = getMoveName(randomNumber);

  displayResult(computerMove, playerMove);
  printMessage('Gracz ' + playerScore + ' Komputer ' + computerScore);

}
// while (playerScore < 1000) {
//   playGame(1);
// }

document.getElementById('kamień').addEventListener('click', function () {
  playGame(1);
});
document.getElementById('papier').addEventListener('click', function () {
  playGame(2);
});
document.getElementById('nożyce').addEventListener('click', function () {
  playGame(3);
});
}

