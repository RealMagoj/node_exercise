var prompt = require('prompt-sync')();
var player_bankroll = 100;

function random_number(min, max) {
  return Math.floor(Math.random() * (max - min +1) + min);
};

do {
  console.log("Your bankroll is @ $" + player_bankroll + "!");
  var rand = random_number(1, 10);
  console.log(rand);
  var player_bet = parseInt(prompt('Please enter your bet (5-10):'));
  var player_guess = parseInt(prompt('Please enter your guess (1-10):'));
  if (player_guess === rand) {
    player_bankroll += player_bet;
  } else if ((player_guess === (rand +1)) || (player_guess === (rand -1))){
    player_bankroll = player_bankroll
  } else {
    player_bankroll -= player_bet;
  };
} while (player_bankroll > 0);
console.log("YOU LOSE SUCKA!!!");