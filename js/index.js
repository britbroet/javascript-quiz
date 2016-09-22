/*
* TRAVIS & BRIT
*/

$(document).ready(function(){


console.log("JS file is linked up!");

$('#myForm input').on('change', function() {
   alert($('input[name=radioName]:checked', '#myForm').val()); 
});

var radio1 = $('input[name=radio1]').val();
var radio2 = $("#radio2").val();
var radio3 = $("#radio3").val();
var radio4 = $("#radio4").val();

var allQuestions = [
{
	question: "Who is Prime Minister of the United Kingdom?", 
	choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
	correctAnswer:3
},

{
	question: "Who is Prime Minister of the United Kingdom?", 
	choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
	correctAnswer:2
},

{
	question: "Who is Prime Minister of the United Kingdom?", 
	choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], 
	correctAnswer:0
}

]; 

var userCorrectAnswers = [];
var userWrongAnswers = [];

$("#question").append(allQuestions[0].question);

$("#answer1").append(allQuestions[0].choices[0]);
$("#answer2").append(allQuestions[0].choices[1]);
$("#answer3").append(allQuestions[0].choices[2]);
$("#answer4").append(allQuestions[0].choices[3]);


$("#submit").click(function() {


	if(allQuestions[0].correctAnswer == )



   if ($('#radio1').is(':checked')) { 
   		console.log("it's checked"); 

   	}
   	else {
   		console.log('nope');
   	}


// console.log($("#radio1").val())
// console.log($("#radio2").val())
// console.log($("#radio3").val())
// console.log($("#radio4").val())
//  // this is validating that there is an answer selected
// 	if(radio1 || radio2 || radio3 || radio4){
// 		console.log('next question');
// 	}
// 	else {
// 		console.log('pick an answer');
// 	}





	console.log(radio1 + radio2 + radio3 + radio4)

});



















});
