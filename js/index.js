/*
* TRAVIS & BRIT
*/
console.log("JS file is linked up!");

var userAnswer;
var userCorrectAnswers = [];
var userWrongAnswers = [];
var wrongAnswers = 6;
var currentQuestion = 0;

var radio1 = $('input[name=radio1]').val();
var radio2 = $("#radio2").val();
var radio3 = $("#radio3").val();
var radio4 = $("#radio4").val();

var allQuestions = [
{
	question: "Question 1", 
	choices: ["Q1 - wrong answer", "Q1 - wrong answer", "Q1 - wrong answer", "Q1 - CORRECT answer"], 
	correctAnswer:3
},

{
	question: "Question 2", 
	choices: ["Q2 - wrong answer", "Q2 - wrong answer", "Q2 - CORRECT answer", "Q2 - wrong answer"], 
	correctAnswer:2
},

{
	question: "Question 3", 
	choices: ["Q3 - wrong answer", "Q3 - wrong answer", "Q3 - CORRECT answer", "Q3 - wrong answer"], 
	correctAnswer:2
},

{
	question: "Question 4", 
	choices: ["Q4 - CORRECT answer", "Q4 - wrong answer", "Q4 - wrong answer", "Q4 - wrong answer"], 
	correctAnswer:0
}
];

$(document).ready(function(){

$("#question").append(allQuestions[0].question);
$("#answer1").append(allQuestions[0].choices[0]);
$("#answer2").append(allQuestions[0].choices[1]);
$("#answer3").append(allQuestions[0].choices[2]);
$("#answer4").append(allQuestions[0].choices[3]);

function recordAnswer(question) {
	if (userAnswer == allQuestions[question].correctAnswer) {
		userCorrectAnswers.push(allQuestions[question].choices[userAnswer]);
	}
	else {
		userWrongAnswers.push('1.  ' + allQuestions[question].choices[userAnswer]);
	}	
}

function newQuestion() {

	if (currentQuestion == 4) {
		console.log('all done!');
		console.log('You got ' + userCorrectAnswers.length + ' out of ' + allQuestions.length + ' correct!');
	}

	else {
		$("#answers").each(function(radio){
			$("input").prop('checked', false);
		});  

		$("#question").text(allQuestions[currentQuestion].question);
		$("#answer1").text(allQuestions[currentQuestion].choices[0]);
		$("#answer2").text(allQuestions[currentQuestion].choices[1]);
		$("#answer3").text(allQuestions[currentQuestion].choices[2]);
		$("#answer4").text(allQuestions[currentQuestion].choices[3]);
	}
		
		// (was trying to dynamically generate the answer box ids here instead of having them all listed like above - not working yet though)

		// for (i = 0; i < allQuestions[currentQuestion].choices.length; i++) {
		// 	var createId = "#answers" + (i + 1);
		// 	console.log('created id:  ' + createId);
		// 	$("createId").text(allQuestions[currentQuestion].choices[i]);
		// 	console.log('new questions: ' + allQuestions[currentQuestion].choices[i]);
		// 	console.log("i right now:  " + i);
		// }
}

$("#submit").click(function() {

		if ($('#radio1').is(':checked')) {
			userAnswer = 0;
		}
		else if ($('#radio2').is(':checked')) {
			userAnswer = 1;
		}
		else if ($('#radio3').is(':checked')) {
			userAnswer = 2;
		}
		else if ($('#radio4').is(':checked')) {
			userAnswer = 3;
		}

		recordAnswer(currentQuestion);
		currentQuestion++;
		newQuestion();
		finishQuiz();
})

function finishQuiz(end){
	if(currentQuestion === 4){
		$("#answerForm").hide();
		$("#submit").hide();
		$("#question").hide();
		$("#endQuiz").show().append("You got " + userCorrectAnswers.length + " out of " + allQuestions.length + "correct!")
	}
}
//doc ready closing tag:
});
