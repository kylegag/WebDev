var myBet;
var origBet;
var totalRolls = 0;
var highestWon = 0;
var rollAtHighWin = 0;

function inputIsValid() {
  var bet = document.getElementById("startingBet").value;
  if (bet == "" || isNaN(bet)) {
    return false;
  }
  myBet = Number(bet);
  return true;
}

function rollDice() {
  return Math.ceil(Math.random() * (1 + 6 - 1));
}

function startGame() {
  if (!inputIsValid()) {
    alert("Starting Bet must be a number!");
    return;
  }
  if (myBet <= 0) {
    alert("Starting Bet must be greter than 0!");
    return;
  }
  var lDie;
  var rDie;
  origBet = myBet;
  highestWon = myBet;
  /*console.log("New Game:");*/
  while (0 < myBet) {
    totalRolls++;
    lDie = rollDice();
    rDie = rollDice();
    if (rDie + lDie === 7) {
      myBet += 4;
    } else {
      myBet--;
    }
    /*console.log("bet: " + myBet + " leftDie: " + lDie + " rightDie: " + rDie);*/
    if (highestWon < myBet) {
      highestWon = myBet;
      rollAtHighWin = totalRolls;
    }
    if (myBet < 0) {
      myBet = 0;
    }
    document.getElementById("startingBet").value = myBet;
  }
  document.getElementById("origBet").innerText = "$" + origBet;
  document.getElementById("totRoll").innerText = totalRolls;
  document.getElementById("highWin").innerText = "$" + highestWon;
  document.getElementById("rollCount").innerText = rollAtHighWin;
  document.getElementById("myTable").style.display = "block";
  document.getElementById("playButton").innerText = "Play Again";
  totalRolls = 0;
  rollAtHighWin = 0;
}