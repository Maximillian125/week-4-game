// Crystal variables
var crystal = {
	diamond:
	{
		name: "Diamond",
        value: 0
    },
    emerald:
    {
        name: "Emerald",
        value: 0
    },
    ruby:
    {
    	name: "Ruby",
    	value: 0
    },
    sapphire:
    {
    	name: "Sapphire",
    	value: 0
    },
    
};


var currentScore = 0
var targetScore = 0
var winCount = 0
var lossCount = 0

var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;



}

var startGame = function() {
   // Reset
   currentScore = 0;
   $('.score').text(currentScore)

   
   targetScore = getRandom(19, 120);
   $('#randomNum').text(targetScore);

   // Set different values for each crystal
   crystal.diamond.value = getRandom(1, 12);
   crystal.emerald.value = getRandom(1, 12);
   crystal.ruby.value = getRandom(1, 12);
   crystal.sapphire.value = getRandom(1, 12);


   console.log("------------------------------------");
   console.log("Target Score: " + targetScore);
   console.log("Diamond: " + crystal.diamond.value);
   console.log("Emerald: " + crystal.emerald.value);
   console.log("Ruby: " + crystal.ruby.value);
   console.log("Sapphire: " + crystal.sapphire.value);
   console.log("------------------------------------");
   // change HTML
}

var addValues = function(crystal) {
    // Change Current Score
	currentScore = currentScore + crystal.value;
	$('.score').html(currentScore);
    
    checkWin();

	console.log("Score: " + currentScore)



}

var checkWin = function() {
    if (currentScore > targetScore) {
    	alert("You lost!")
    	lossCount++
    	$("#losses").html(lossCount);
    	startGame();
    }
    else if (currentScore == targetScore) {
    	alert("You won!")
    	winCount++
    	$("#wins").html(winCount)
        startGame();
    }
}


startGame();  



$('#diamond').on("click", function(){
	addValues(crystal.diamond);
	
});

$('#emerald').on("click", function(){
	addValues(crystal.emerald);
	
});

$('#ruby').on("click", function(){
	addValues(crystal.ruby);
	
});

$('#sapphire').on("click", function(){
	addValues(crystal.sapphire);
	
});


 


	
