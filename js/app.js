$(document).ready(function() {


  $('.new').click(function() {
    location.reload();
  });

  function checkIfExist (list, value) {
    var index;

    for (index = 0; index < list.length; index++) {
      if (list[index] == value) {
        return true;
      }
    }
    return false;
  }
	
  var randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
  function generateMsg(input) {
  var result = Math.abs(input - randomNumber);

    if (result === 0) {
      alert("correct number");
      return 'correct number';
    } else if (result < 10) {   
      return 'very hot';
    } else if (result < 20) {
      return 'hot';
    } else if (result < 30) {
      return 'warm';
    } else if (result < 50) {
      return 'cold';
    } else if (result > 50) {
      return 'ice cold';
    } 
  }

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    var content = 0;
    var userGuess = $("#userGuess");
    var guessButton = $("#guessButton");
    var listOfNumbers = [];
    var guessList = $("#guessList");
    var count = $("#count");
    

    guessButton.click(function() {

      var takeValue = userGuess.val();
      var input = parseInt(takeValue);
      // Check if it's entered number between 1 and 100
      if (input >= 0 && input <= 100) {
        if (checkIfExist(listOfNumbers, input)) {
          alert ("This number is already entered")
        }
        else {
          listOfNumbers.push(input);
          // Count triggered on click
          count.html(listOfNumbers.length);
          // Create guessed number inside list
          guessList.append("<li>" + input + "</li>");
          var message = generateMsg(input);
          $("#feedback").text(message);
        }
      } else {
        alert("Please enter number between 1 and 100")
      };

      // Reset text input value
      userGuess.val('');
    });



});











