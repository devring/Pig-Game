/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/



var scores,currentScore,activePlayer,gamePlaying,finalScore;



init();



document.querySelector('.btn-roll').addEventListener('click',function(){

          if(gamePlaying){

          var dice=Math.floor(Math.random()*6)+1;

          var dice1=Math.floor(Math.random()*6)+1;



          document.querySelector('.dice').style.display = 'block';

          document.querySelector('.dice1').style.display = 'block';

          document.querySelector('.dice').src = 'https://raw.githubusercontent.com/jonasschmedtmann/complete-javascript-course/master/4-DOM-pig-game/starter/dice-' + dice + '.png';

          document.querySelector('.dice1').src = 'https://raw.githubusercontent.com/jonasschmedtmann/complete-javascript-course/master/4-DOM-pig-game/starter/dice-' + dice1 + '.png';



           if(dice!==1 && dice1!==1)

          {

              // scores[activePlayer]+=dice;

              currentScore+=dice+dice1;

              // document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];

              document.getElementById('current-'+activePlayer).textContent=currentScore;



          }

            else {

                  nextPlayer();



          }

}

});



document.querySelector('.btn-hold').addEventListener('click',function(){

              if(gamePlaying){

              scores[activePlayer]+=currentScore;

              document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];

              if(scores[activePlayer]>=finalScore)

              {

                document.getElementById('name-'+activePlayer).textContent='Winner!';

                document.querySelector('.dice').style.display='none';

                document.querySelector('.dice1').style.display='none';

                document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');

                gamePlaying=false;

              }

              else{

              nextPlayer();

            }



}

});



document.querySelector('.btn-new').addEventListener('click',init);



function nextPlayer()

{

 currentScore=0;

 activePlayer===0 ? activePlayer=1 : activePlayer=0;

 document.getElementById('current-0').textContent='0';

 document.getElementById('current-1').textContent='0';



 document.querySelector('.player-0-panel').classList.toggle('active');

 document.querySelector('.player-1-panel').classList.toggle('active');

}



document.querySelector('.btn-score').addEventListener('click',function(){

           var input = document.querySelector('.final-score').value;

           if(input)

           {

             finalScore = input;

           }

           else{

             finalScore=20;

           }



});







function init()

{

  scores=[0,0];

  currentScore=0;

  activePlayer=0;

  gamePlaying=true;

  finalScore=20;



  document.querySelector('.dice').style.display='none';

  document.querySelector('.dice1').style.display='none';

  document.getElementById('score-0').textContent='0';

  document.getElementById('score-1').textContent='0';

  document.getElementById('current-0').textContent='0';

  document.getElementById('current-1').textContent='0';

  document.getElementById('name-0').textContent='Player 1';

  document.getElementById('name-1').textContent='Player 2';



  document.querySelector('.player-0-panel').classList.remove('winner');

  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.remove('active');

  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');

}
