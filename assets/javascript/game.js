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

var oppntHealthPoints = 0
var oppntAttackPower = 0
var oppntCounterAttackPower = 0

        //ATTACK BUTTON ATTACKING TWICE! - FIX!
//------------------------------------------
$(".attackButton").on("click", function(){
  healthPoints = healthPoints - oppntCounterAttackPower;
  console.log("Healthpoints decreased by " + healthPoints);
  oppntHealthPoints = oppntHealthPoints - attackPower;
  console.log("opponent's health decreased by " + oppntHealthPoints);
  attackPower += attackPower;
  console.log("attack power increased by " + attackPower);
});

//------------------------------------------

$(".cha1").on("click", function(){

  if (characterSwitch === true) {
    $("#akbar").appendTo(".playerArena");
    characterSwitch = false;

    healthPoints = 50;
    attackPower = 20;

    } else if (characterSwitch === false) {
      $("#akbar").appendTo(".opponentArena");

      opponentHealthPoints = 50;
      CounterAttackPow = 30;
    }
});
//------------------------------------------
$(".cha2").on("click", function(){

  if (characterSwitch === true) {
    $("#bobafett").appendTo(".playerArena");
    characterSwitch = false;

    healthPoints = 80;
    attackPower = 30;
    counterAttackPower = 20;

  } else if (characterSwitch === false) {
      $("#bobafett").appendTo(".opponentArena");

      oppntHealthPoints = 80;
      oppntAttackPower = 30;
      oppntCounterAttackPow = 20;
    }
});
//------------------------------------------
$(".cha3").on("click", function(){
  if (characterSwitch === true) {
    $("#chewbacca").appendTo(".playerArena");
    characterSwitch = false;

    healthPoints = 80;
    attackPower = 30;
    counterAttackPower = 20;

  } else if (characterSwitch === false) {
      $("#chewbacca").appendTo(".opponentArena");

      oppntHealthPoints = 80;
      oppntAttackPower = 30;
      oppntCounterAttackPow = 20;
    }
});
//------------------------------------------
$(".cha4").on("click", function(){
  if (characterSwitch === true) {
    $("#darthmaul").appendTo(".playerArena");
    characterSwitch = false;

    healthPoints = 60;
    attackPower = 40;
    counterAttackPower = 40;

  } else if (characterSwitch === false) {
      $("#darthmaul").appendTo(".opponentArena");

      oppntHealthPoints = 60;
      oppntAttackPower = 40;
      oppntCounterAttackPow = 40;
    }
});
//------------------------------------------
$(".cha5").on("click", function(){
  if (characterSwitch === true) {
    $("#quigonjinn").appendTo(".playerArena");
    characterSwitch = false;

    healthPoints = 60;
    attackPower = 40;
    counterAttackPower = 40;

  } else if (characterSwitch === false) {
    $("#quigonjinn").appendTo(".opponentArena");

    oppntHealthPoints = 60;
    oppntAttackPower = 40;
    oppntCounterAttackPow = 40;
  }
});
//------------------------------------------
$(".cha6").on("click", function(){
  if (characterSwitch === true) {
    $("#jabba").appendTo(".playerArena");
    characterSwitch = false;

    healthPoints = 100;
    attackPower = 20;
    counterAttackPower = 10;

  } else if (characterSwitch === false) {
    $("#jabba").appendTo(".opponentArena");

    oppntHealthPoints = 100;
    oppntAttackPower = 20;
    oppntCounterAttackPow = 10;
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
