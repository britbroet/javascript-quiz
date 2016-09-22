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

var progressBox;

var allQuestions = [
{
	question: "Which candy bar was named after a horse?", 
	choices: ["Reese's", "Zero", "Crunch", "Snickers"], 
	correctAnswer:3
},

{
	question: "Which is NOT a candybar", 
	choices: ["Coke Zero", "Snake oil", "Twix", "Your Mother"], 
	correctAnswer:2
},

{
	question: "Which Bar Has no Chocolate", 
	choices: ["Snickers", "Almond Joy", "Payday", "Reese's"], 
	correctAnswer:2
},

{
	question: "Who discovered a way to mix some melted cacao butter back into defatted, to create a paste that could be pressed into a mold.", 
	choices: ["Joseph Fry", "God", "Fergie", "The Dos equis guy"], 
	correctAnswer:0
}
];

$(document).ready(function(){

showFunction();

function showFunction(){
	$("#question").empty().append(allQuestions[0].question);
	$("#answer1").empty().append(allQuestions[0].choices[0]);
	$("#answer2").empty().append(allQuestions[0].choices[1]);
	$("#answer3").empty().append(allQuestions[0].choices[2]);
	$("#answer4").empty().append(allQuestions[0].choices[3]);
}







$("#progressBar :nth-child(1)").addClass("seen");





function newProgress(question) { 
	$("#progressBar .current").next().addClass('seen').addClass('current');
}

function recordAnswer(question) {
	if (userAnswer == allQuestions[question].correctAnswer) {
		userCorrectAnswers.push(allQuestions[question].choices[userAnswer]);
	}
	else {
		userWrongAnswers.push('1.  ' + allQuestions[question].choices[userAnswer]);
	}	
}
////////////////
function newQuestion() {

	if (currentQuestion == 4) {
		//create message on screen that displays how many they
		console.log('all done!');
		console.log('You got ' + userCorrectAnswers.length + ' out of ' + allQuestions.length + ' correct!');
	}

	else {
		$("#answers").each(function(radio){
			$("input").prop('checked', false);
		});  

		newProgress(currentQuestion);

		$("#question").text(allQuestions[currentQuestion].question);
		$("#answer1").text(allQuestions[currentQuestion].choices[0]);
		$("#answer2").text(allQuestions[currentQuestion].choices[1]);
		$("#answer3").text(allQuestions[currentQuestion].choices[2]);
		$("#answer4").text(allQuestions[currentQuestion].choices[3]);
	}
		
		// (was trying to dynamically generate the answer box ids here instead of having them all listed like above - not working yet though)

		// for (i = 0; i < allQuestions[currentQuestion].choices.length; i++) {
		// 	var createId = "#answer" + (i + 1);
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
		//$("#progressBar").text((currentQuestion + 1) + '/' + allQuestions.length);
		newQuestion();
		finishQuiz();
});

retakeQuiz();

function finishQuiz(end){
	if(currentQuestion === 4){
		$("#answerForm").hide();
		$("#submit").hide();
		$("#question").hide();
		$('#progressBar').hide();
		$("#endQuiz").show().empty().append("You got " + userCorrectAnswers.length + " out of " + allQuestions.length + " correct!")
	
		$("#retakeButton").show()
	}
}

function retakeQuiz() {
	$("#retakeButton").on("click", function() {
		console.log('click');
		console.log(currentQuestion);
		if(currentQuestion >= 4){
			currentQuestion = 0;
			showFunction();
			$("#answerForm").show();
	        $("#submit").show();
	        $("#question").show();
	        $("#endQuiz").hide();
	        $("#retakeButton").hide();
			}
		else {
			console.log('error');
		}
		console.log(currentQuestion);
	});
}



//doc ready closing tag:
});