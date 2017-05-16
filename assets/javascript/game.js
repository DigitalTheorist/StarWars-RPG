//PSEUDOCODE

//onclick - select character and move to "playerchoice" section.

//onclick - select opponent and move to opponent section.
//---------------------------------

//Attack by clicking attack button.

//attack damages defender a random number based on attack strenth?

//each character has three attributes.

// var attackPower
// // when character attacks attackPower increases by its base attackPower (attackPower += attackPower)
// var counterAttackPower

$(document).ready(function(){

var characterSwitch = true;

var healthPoints = 0
var attackPower = 0
var counterAttackPower = 0

var opponentHealthPoints = 0


        //ATTACK BUTTON FUNCTION.
//------------------------------------------
$(".attackButton").on("click", function(){
console.log("at attack click PHP = " + healthPoints);
  console.log("at attack click PAP = " + attackPower);
    console.log("at attack click OCAP = " + counterAttackPower);
      console.log("at attack click OHP = " + opponentHealthPoints);

  opponentHealthPoints -= attackPower;
  console.log("Opponent's HP reduced to " + opponentHealthPoints);

  healthPoints -= counterAttackPower;
  console.log("Player's HP reduced to " + healthPoints);

  attackPower += attackPower;
  console.log("player AP increased to " + attackPower);

  if (healthPoints <= 0) {
    console.log("player loses")

  } else if (opponentHealthPoints <= 0) {
    console.log ("you've defeated your oppenent")
  }
});

//------------------------------------------

$(".cha1").on("click", function(){

  if (characterSwitch === true) {
    $("#akbar").appendTo(".playerArena");
    characterSwitch = false;

    healthPoints = 50;
    attackPower = 10;
    console.log("The player's healthPoints are " + healthPoints);
    console.log("The player's attackPower is " + attackPower);

    } else if (characterSwitch === false) {
      $("#akbar").appendTo(".opponentArena");

      opponentHealthPoints = 50;
      counterAttackPower = 10;
      console.log("the opponent's healthPoints are " + opponentHealthPoints)
      console.log("The opponent's counterAttackPower is " + counterAttackPower)


    }
});
//------------------------------------------
$(".cha2").on("click", function(){

  if (characterSwitch === true) {
    $("#bobafett").appendTo(".playerArena");
    characterSwitch = false;

    healthPoints = 60;
    attackPower = 15;
    console.log("The player's healthPoints are " + healthPoints);
    console.log("The player's attackPower is " + attackPower);

  } else if (characterSwitch === false) {
      $("#bobafett").appendTo(".opponentArena");

      opponentHealthPoints = 60;
      counterAttackPower = 15;
      console.log("the opponent's healthPoints are " + opponentHealthPoints)
      console.log("The opponent's counterAttackPower is " + counterAttackPower)

    }
});
//------------------------------------------
$(".cha3").on("click", function(){
  if (characterSwitch === true) {
    $("#chewbacca").appendTo(".playerArena");
    characterSwitch = false;

    healthPoints = 70;
    attackPower = 20;
    console.log("The player's healthPoints are " + healthPoints);
    console.log("The player's attackPower is " + attackPower);

  } else if (characterSwitch === false) {
      $("#chewbacca").appendTo(".opponentArena");

      opponentHealthPoints = 70;
      counterAttackPower = 20;
      console.log("the opponent's healthPoints are " + opponentHealthPoints)
      console.log("The opponent's counterAttackPower is " + counterAttackPower)

    }
});
//------------------------------------------
$(".cha4").on("click", function(){
  if (characterSwitch === true) {
    $("#darthmaul").appendTo(".playerArena");
    characterSwitch = false;

    healthPoints = 60;
    attackPower = 25;
    console.log("The player's healthPoints are " + healthPoints);
    console.log("The player's attackPower is " + attackPower);

  } else if (characterSwitch === false) {
      $("#darthmaul").appendTo(".opponentArena");

      opponentHealthPoints = 60;
      counterAttackPower = 25;
      console.log("the opponent's healthPoints are " + opponentHealthPoints)
      console.log("The opponent's counterAttackPower is " + counterAttackPower)

    }
});
//------------------------------------------
$(".cha5").on("click", function(){
  if (characterSwitch === true) {
    $("#quigonjinn").appendTo(".playerArena");
    characterSwitch = false;

    healthPoints = 90;
    attackPower = 30;
    console.log("The player's healthPoints are " + healthPoints);
    console.log("The player's attackPower is " + attackPower);

  } else if (characterSwitch === false) {
    $("#quigonjinn").appendTo(".opponentArena");

    opponentHealthPoints = 90;
    counterAttackPower = 30;
    console.log("the opponent's healthPoints are " + opponentHealthPoints)
    console.log("The opponent's counterAttackPower is " + counterAttackPower)

  }
});
//------------------------------------------
$(".cha6").on("click", function(){
  if (characterSwitch === true) {
    $("#jabba").appendTo(".playerArena");
    characterSwitch = false;

    healthPoints = 200;
    attackPower = 15;
    console.log("The player's healthPoints are " + healthPoints);
    console.log("The player's attackPower is " + attackPower);

  } else if (characterSwitch === false) {
    $("#jabba").appendTo(".opponentArena");

    opponentHealthPoints = 200;
    counterAttackPower = 15;
    console.log("the opponent's healthPoints are " + opponentHealthPoints)
    console.log("The opponent's counterAttackPower is " + counterAttackPower)

  }
});
//------------------------------------------


}); //document.ready endtag

// opponent character only has counterAttackPower - never changes. (compared to attachPower in attack click function)
//
//
// player clicks damages defender. opponent loses health points. (displayed at bottom of characters picture)
//
//
// opponent instantly counter attacks causing player character to lose HP shown at the bottom of the character's picture.
//
// repeat the attack sequence
//
// when opponents HP is reduced to zero or below remove that character from the opponent area - player picks a new opponent
//
// player wins if all enemies are defeated - loses if HP falls to zero or below.
//
// Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.
