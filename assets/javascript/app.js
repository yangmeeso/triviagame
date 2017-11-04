/* Trivial Trivia Game */

	$(document).ready(function() {
		var slides = {
			trivia: [{
					0 : {
						question: "In any programming language, what is the most common way to iterate through an array?",
						answer: "For Loops",
						choices: ["For Loops", "If Statement", "Repeat Algorithm", "None"]
						}
				},

				{
					1: {
						question: "What is NOT the color of rainbow?",
						answer: "Turquoise",
						choices: ["Blue", "Purple", "Yellow", "Turquoise"]
					}
				},

				{
					2: {
						question: "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
						answer: "Apple",
						choices: ["Apple", "Microsoft", "Atari", "Commodore"]
					}
				},

				{
					3: {
						question: "What does DOM stand for?",
						answer: "Document Object Model",
						choices: ["Dirty Old Man", "Document Object Model", "Decorative Oriented Model", "None"]
					}
				}],

		};

		//$("#question").html("<p>Hello World</p>");

	//for(var i = 0; i < slides.trivia.length; i++) {
		//key = i;
		//var questions = $('#question');
		//console.log(question)
		//console.log(slides.trivia[i][key].question)

		//var triviaQuestion = $("p").text(slides.trivia[i][key].question);
		//console.log(triviaQuestion);

		//questions.append(triviaQuestion);
		//console.log(question);
	//}

	var timer;
	var number = 30;
	var userGuess;
	var questions = $("#question");
	var optionOne = $("#optionOne");
	var optionTwo = $("#optionTwo");
	var optionThree = $("#optionThree");
	var optionFour = $("#optionFour");	


	$('#startButton').on('click', function() {
		$('#startButton').hide();

		startGame();
	});

	function startGame() {

		timer = setInterval(decrement, 1000);

		
		for(var i = 0; i < slides.trivia.length; i++){
			questions.html("<p>" + slides.trivia[i][i].question + "</p>");

			console.log(slides.trivia[i][i].question);
		
			}

		for(var j = 0; j < slides.trivia[j][j].choices.length; j++) {
			optionOne.html("<p>" + slides.trivia[j][j].choices[j] + "</p>");
			optionTwo.html("<p>" + slides.trivia[j][j].choices[j] + "</p>");
			optionThree.html("<p>" + slides.trivia[j][j].choices[j] + "</p>");
			optionFour.html("<p>" + slides.trivia[j][j].choices[j] + "</p>");

			console.log(slides.trivia[j][j].choices[j]);
		}


	


	};

	function decrement() {
		number--;

		$('#timer').html("<p>Time Remaining: " + number + 
		" seconds</p>");

		if(number === 0) {
			stopGame();
			alert("Times Up!");
		}

		// else if (slides.slideOne.answer == userGuess) {
		// 	$('#question').html("<p>" + slides.trivia[i][key].question + "</p>");
		// }
	};

	function stopGame () {
		clearInterval(timer);
	}
	// startGame();




	/* or 
	var timeLimit = Math.floor(distance % (1000 * 60) / 2000); */

	// function runTimer () {
	// 	$('#timer').html('<h3>Time Remaining: ' + timer + ' seconds</h3>');

	// 	if ()
	// };

});



