// /* Trivial Trivia Game */

// 	$(document).ready(function() {
// 		var slides = {
// 			trivia: [{
// 					question: "In any programming language, what is the most common way to iterate through an array?",
// 					answer: "For Loops",
// 					choices: ["For Loops", "If Statement", "Repeat Algorithm", "None"]
// 				},

// 				{
// 					question: "What is NOT the color of rainbow?",
// 					answer: "Turquoise",
// 					choices: ["Blue", "Purple", "Yellow", "Turquoise"]
// 				},

// 				{
// 					question: "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
// 					answer: "Apple",
// 					choices: ["Apple", "Microsoft", "Atari", "Commodore"]
// 				},

// 				{
// 					question: "What does DOM stand for?",
// 					answer: "Document Object Model",
// 					choices: ["Dirty Old Man", "Document Object Model", "Decorative Oriented Model", "None"]
// 				}],

// 		};


// 	var	number = 30;
// 	var $question = $('#question');
// 	var $multipleChoice = $('#multipleChoice');
// 	var	index = 0;
// 	var	questionSlide = slides.trivia[index];
// 	var	correctAnswers = 0;
// 	var	incorrectAnswers = 0;


// 	$('#startButton').on('click', function() {
// 		$('#startButton').hide();

// 		startGame();
// 	});

// 	function startGame() {
// 		timer = setInterval(decrement, 1000);

// 		$question.html("<p>" + questionSlide.question + "</p>");

// 		for(var i = 0; i < questionSlide.choices.length; i++){

// 			$multipleChoice.append("<button class='answerOptions' id='answerButton' data_name='" + questionSlide.choices[i] + "'>" + questionSlide.choices[i] + "</button>");
// 		}

// 		answerCheck(event);

// 		console.log("Question: " + questionSlide.question);
// 		console.log("Correct Answer: " + questionSlide.answer);
// 	};

// 	function decrement() {
// 		number--;

// 		$('#timer').html("<p>Time Remaining: " + number + 
// 		" seconds</p>");

// 		if(number === 0) {
// 			stopGame();
// 			alert("Times Up!");
// 		}

// 		// else if (slides.slideOne.answer == userGuess) {
// 		// 	$('#question').html("<p>" + slides.trivia[i][key].question + "</p>");
// 		// }
// 	};



// 	function answerCheck(event) {

// 		if($(event.target).attr('data_name') === questionSlide.answer) {	
// 			correctAnswers++;
			
// 			console.log("Correct: " + correctAnswers);
// 		}

// 		else {
// 			incorrectAnswers++;

// 			console.log("Incorrect: " + incorrectAnswers);
// 		}

// 		console.log("Chosen Answer by User: " + $(event.target).attr('data_name'));
// 	};

// 	function nextQuestion() {
// 		index = index + 1;
// 		console.log(slides.trivia[index]);
// 		console.log(questionSlide.question);
// 		// var	questionSlide = slides.trivia[index];
// 		$question.html("<p>" + slides.trivia[index].question + "</p>");
// 		$multipleChoice.empty();

// 		// for(var i = 0; i < questionSlide.choices.length; i++){
// 		for(var i = 0; i < slides.trivia[index].choices.length; i++){

// 			$multipleChoice.append("<button class='answerOptions' id='answerButton' data_name='" + slides.trivia[index].choices[i] + "'>" + slides.trivia[index].choices[i] + "</button>");
// 		}
// 		// for(var index = 1; index < slides.trivia[index].length; index++) {
// 		// startGame();

// 		// console.log("Array Index: " + index);
// 		// }

// 	};


// 	function stopGame() {
// 		$question.html("<p>Game Over</p>");
// 		$question.append("<p>Correct Answers: " + correctAnswers + "</p>");
// 		$question.append("<p>Incorrect Answers: " + incorrectAnswers + "</p>");
// 		$questionSlide.append("<p><button id='restartButton'>Try Again</button></p>")
// 	};


// 	function reset() {
// 		number = 0;
// 		index = 0;
// 		correctAnswers = 0;
// 		incorrectAnswers = 0;
// 		startGame();
// 	};

// 	$(document).on("click", "restartButton", function() {
// 		reset();
// 	});

// 	$(document).on("click", "#answerButton", function(event) {
// 		answerCheck(event);
// 		nextQuestion();
// 	});



// 	/* or 
// 	var timeLimit = Math.floor(distance % (1000 * 60) / 2000); */

// 	// function runTimer () {
// 	// 	$('#timer').html('<h3>Time Remaining: ' + timer + ' seconds</h3>');

// 	// 	if ()
// 	// };

// });


/* Trivial Trivia Game */

	$(document).ready(function() {
		var slides = {
			trivia: [{
					question: "In any programming language, what is the most common way to iterate through an array?",
					answer: "For Loops",
					choices: ["For Loops", "If Statement", "Repeat Algorithm", "None"]
				},

				{
					question: "What is NOT the color of rainbow?",
					answer: "Turquoise",
					choices: ["Blue", "Purple", "Yellow", "Turquoise"]
				},

				{
					question: "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
					answer: "Apple",
					choices: ["Apple", "Microsoft", "Atari", "Commodore"]
				},

				{
					question: "What does DOM stand for?",
					answer: "Document Object Model",
					choices: ["Dirty Old Man", "Document Object Model", "Decorative Oriented Model", "None"]
				}],

		};


	var	number = 30;
	var $question = $('#question');
	var $multipleChoice = $('#multipleChoice');
	var	index = 0;
	var	questionSlide = slides.trivia[index];
	var	correctAnswers = 0;
	var	incorrectAnswers = 0;


	$('#startButton').on('click', function() {
		$('#startButton').hide();

		startGame();
	});

	function startGame() {
		timer = setInterval(decrement, 1000);

		$question.html("<p>" + questionSlide.question + "</p>");

		for(var i = 0; i < questionSlide.choices.length; i++){

			$multipleChoice.append("<button class='answerOptions' id='answerButton' data_name='" + questionSlide.choices[i] + "'>" + questionSlide.choices[i] + "</button>");
		}

		answerCheck(event);

		console.log("Question: " + questionSlide.question);
		console.log("Correct Answer: " + questionSlide.answer);
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



	function answerCheck(event) {

		if($(event.target).attr('data_name') === questionSlide.answer) {	
			correctAnswers++;
			
			console.log("Correct: " + correctAnswers);
		}

		else {
			incorrectAnswers++;

			console.log("Incorrect: " + incorrectAnswers);
		}

		console.log("Chosen Answer by User: " + $(event.target).attr('data_name'));
	};

	function nextQuestion() {
		console.log(index)
		index = index + 1;
		questionSlide = slides.trivia[index]; //<-- SY this is what you needed (I think!), which I see in line 104
		// console.log(slides.trivia[index]);
		// console.log(questionSlide.question);
		// var	questionSlide = slides.trivia[index];
		$question.html("<p>" + slides.trivia[index].question + "</p>");
		$multipleChoice.empty();

		// for(var i = 0; i < questionSlide.choices.length; i++){
		for(var i = 0; i < slides.trivia[index].choices.length; i++){

			$multipleChoice.append("<button class='answerOptions' id='answerButton' data_name='" + slides.trivia[index].choices[i] + "'>" + slides.trivia[index].choices[i] + "</button>");
		}
		// for(var index = 1; index < slides.trivia[index].length; index++) {
		// startGame();

		// console.log("Array Index: " + index);
		// }

	};


	function stopGame() {
		clearInterval(timer); //<-- SY When you start an interval you need to clear it somewhere otherwise it will keep going.
		$question.html("<p>Game Over</p>");
		$question.append("<p>Correct Answers: " + correctAnswers + "</p>");
		$question.append("<p>Incorrect Answers: " + incorrectAnswers + "</p>");
		//SY You're getting an error in console. Remember that questionSlide is in reference to the questions in the array. So, you can't append to that. You can append only to something that's tied in the html/DOM. 
		// questionSlide.append("<p><button id='restartButton'>Try Again</button></p>")
	};


	function reset() {
		number = 0;
		index = 0;
		correctAnswers = 0;
		incorrectAnswers = 0;
		startGame();
	};

	$(document).on("click", "restartButton", function() {
		reset();
	});

	$(document).on("click", "#answerButton", function(event) {
		answerCheck(event);
		//SY You'll want to add some logic here that indicates,
		//if (index is NOT equal to slides.trivia.length - 1) (because remember array length is always 1 more than the index since index starts at 0), then
		//run the nextQuestion function, else run the stopGame function. Something like that. 
		nextQuestion();
	});



	/* or 
	var timeLimit = Math.floor(distance % (1000 * 60) / 2000); */

	// function runTimer () {
	// 	$('#timer').html('<h3>Time Remaining: ' + timer + ' seconds</h3>');

	// 	if ()
	// };

});
