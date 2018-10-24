  



   //var dice,roundScore,activePlayer;
   //dice=Math.floor(Math.random() * 6)+1;
   //console.log(dice);
   var roundScore,activePlayer,scores,gamePlaying;
   scores=[0,0];
   activePlayer=0;
   	roundScore=0;

  nextGame(); 



  document.querySelector('.btn-2').addEventListener('click', function() {

  	
if(gamePlaying){



var dice=Math.floor(Math.random() * 6) +1;
if(dice === 6){
	var dice1 = 0;
	 dice1 += dice
	 if(dice1 == 12){
	 	document.querySelector('#current-' + activePlayer).textContent='0';
	 	document.querySelector('#score-' + activePlayer).textContent='0';
	 	
	 }
}
   //document.querySelector('.player-score').textContent=dice;
   var diceDOM=document.querySelector('.imn');
   document.querySelector('.imn').style.display='block';
   diceDOM.src= 'dice-' + dice + '.png';

   if(dice !== 1){
   

   	roundScore += dice;
   	document.querySelector('#current-' + activePlayer).textContent = roundScore;
   }
   else{
   	nextPlayer();
   	

   }

}

   


  });

  document.querySelector('.btn-3').addEventListener('click', function() {


if(gamePlaying){

scores[activePlayer] += roundScore;
  	

	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

	if(scores[activePlayer] >= 20){
		document.querySelector('#name-' + activePlayer).textContent= 'winner';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		document.querySelector('.imn').style.display='none;'
		gamePlaying=false;

	} else{
		nextPlayer();

	}
	


}
  	

  });

  function nextPlayer(){


activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
   	roundScore=0;

document.querySelector('.current-0').textContent='0';
   	document.querySelector('.current-1').textContent='0';

   		document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


  }
  function nextGame(){
scores=[0,0];
   activePlayer=0;
   	roundScore=0;
   	gamePlaying = true;

  	 document.querySelector('.imn').style.display='none';
   document.getElementById('score-0').textContent='0';
   document.getElementById('score-1').textContent='0';
   document.getElementById('current-1').textContent='0';
   document.getElementById('current-0').textContent='0';
   document.querySelector('.player-0-panel').classList.remove('winner');
   document.querySelector('.player-1-panel').classList.remove('winner');
   document.querySelector('.player-0-panel').classList.remove('winner');
   document.querySelector('.player-1-panel').classList.remove('winner');
		document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('#name-0').textContent='player-1';
document.querySelector('#name-1').textContent='player-2';
  
  }
    

    document.querySelector('.btn-1').addEventListener('click', function() {


nextGame();




    });
