//Sets the user name
$( "input" ).keyup(function() {
    var userName = $( this ).val();
    $( "b.name" ).text( userName );
  })
  .keyup();

//Sets the number of adventurers for the expedition
var randomNum = (Math.random() * 10)+2;
var randomAdventurer = Math.round(randomNum);
$(".adventurers").text(randomAdventurer + 3);


//Sets the number of adventurers who are traitors
var randomTraitor = Math.round(Math.random() * randomAdventurer);
$(".traitors").text(randomTraitor + 1);

//Sets the number of survivors left at the end
var randomSurvivor = (randomAdventurer + 2) - randomTraitor;
$(".survivors").text(randomSurvivor);

//Set the amount of Gold to be assigned at the end
var randomNum = (Math.random() * 1000) + 150;
var randomGold = Math.round(randomNum);
$(".gold").text(randomGold);

//Sets the amount of gold split by the survivors and the player
var splitGold = Math.round(randomGold / randomSurvivor) + 1;
var remainder = randomGold % randomSurvivor;
$("#sharingIsCaring").text(splitGold);
if (remainder != 0) {
    $(".leftOver").html(', with <b class="name"></b> taking the remaining <span class="remainder"></span> to keep things fair!');
    $(".remainder").text(remainder);
} else {
    $(".leftOver").text("!")
}

document.getElementById("beginButton").onclick = function(event){

    document.getElementById("TH-intro").className = "hidden";
    document.getElementById("TH-story").className = "show";
}

document.getElementById("creditsButton").onclick = function(event){
    document.getElementById("TH-story").className = "hidden";
    document.getElementById("TH-credits").className = "show";
}
