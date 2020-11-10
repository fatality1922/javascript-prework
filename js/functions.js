function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
	if(argMoveId == 1){
	  return 'kamień';
	} 
		else if(argMoveId == 2){
			return 'papier';
		}
		else if (argMoveId ==3){
			return 'nożyce';
		}
		else {
			printMessage('Wprowadz prawidłową wartość');
			return 'nieznany ruch';
		}
	}
  
  
  function displayResult(computerMove, playerMove){
	printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
  
	if(( computerMove == 'kamień' && playerMove == 'papier')||
    (computerMove == 'nożyce' && playerMove == 'kamień')||
    (computerMove == 'papier' && playerMove == 'nożyce')){
    printMessage('Ty wygrywasz!');
  	}	
		else if (computerMove == playerMove){
				printMessage('Remis');
		}
		else if (playerMove == 'nieznany ruch'){
				printMessage('Wprowadź prawidłową wartość');
		}
			else printMessage ('Nie popisałeś się, komputer wygrywa');
	}

  