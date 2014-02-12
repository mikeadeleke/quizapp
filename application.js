$(document).ready(function() {
$('h1').hide().delay(500).fadeIn('slow');
$('.status').hide().delay(700).fadeIn('slow');
generateQuestions();
generateAnswers();
submit();
restart();
}); 

var currentQuestion = 0;
var selectedAnswer = "";
var score = 0;
var questions = new Array();

function Question(currentQuestion,answers,correct) {
	this.currentQuestion = currentQuestion;
	this.answers = answers;
	this.correct = correct;
}
	

questions[0] = new Question("Where is Mike from?", ["The Midwest", "The Northeast", "The Southeast", "The 'Best' Coast"], 0);

questions[1] = new Question("What is Mike's favorite programming language?", ["Javascript", "Python", "Ruby", "PHP"], 2);

questions[2] = new Question("Who is his favorite team?", ["Chelsea FC", "Arsenal", "Manchester United", "Barcelona"], 0);

questions[3] = new Question("What does his startup do?", ["Easy finding of college textbooks", "Helps students get apartments", "Location based tutoring service", "Growth hacking for startups"], 1);

questions[4] = new Question("What is his favorite music genre?", ["Anything by Frank Sinatra", "Electronic dance music", "What's on the radio", "He beez in da trap"], 1); 

questions[5] = new Question("Who is his favorite startup writer?", ["Sam Altman", "Nivi & Naval", "Paul Graham", "Ben Horowitz"], 2);

questions[6] = new Question("Who is his favorite CEO?", ["Travis Kalanick (Uber)", "Aaron Levie (Box)", "Mark Zuckerberg (Facebook)", "Elon Musk (Tesla, SpaceX)"], 1);

questions[7] = new Question("What else is he learning now outside of Front-end and Ruby on Rails at Thinkful?", ["Javascript frameworks", "Design", "Growth hacking", "Raising money"], 2);

questions[8] = new Question("Where is he looking to transfer this fall for school?", ["University of Pennslyvania", "University of Maryland", "University of Illinois", "Rutgers University"], 0);

questions[9] = new Question("What does he want to do in 2014?", ["Get into YCombinator", "Get funded by Dorm Room Fund", "Have his startup at 5 schools", "He is just that greedy and wants it all"], 3); 

// questions appear
function generateQuestions() {
var q = questions [currentQuestion].currentQuestion;
$('#heading').append('<h4>' + q + '</h4>').hide().delay(1200).fadeIn('slow');
}


function generateAnswers(){
var write = "";
var a1 = questions [currentQuestion].answers;
for (var i = 0; i < a1.length; i++) {
    write += "<li><input type='radio' name='radio' class='option' value=" +(i)+ ">" + a1[i]+ "</li>";
}
$("#answers").append(write).hide().delay(1200).fadeIn('slow');
}

// Radio button being clicked
function submit(){
$('.option').click(function() {
   if($("input[type='radio'][name='radio']").is(':checked')) { 
   	evaluation();
   	$('.option').attr('disabled',true); 
   }
});
}

// Evaluate answer 
function evaluation() {
var selected = $("input[type='radio'][name='radio']:checked");
	if (selected.length >= 0) {
    	selectedAnswer = selected.val();
	}
	if (selectedAnswer == questions [currentQuestion].correct) {
		$('#correct').append("<p>Correct!</p>").hide().delay(400).fadeIn('400');
		$('#next').append("<p>Next</p>").hide().delay(400).fadeIn('400');
		$('#correct-answer').append("<p>The correct answer is" + " " + questions[currentQuestion].answers[questions [currentQuestion].correct] + "</p>").hide().delay(400).fadeIn('400');
		nextQuestion();
		playerScore();
		currentQuestion++;
	}
	
	else {
		$('#incorrect').append("<p>Incorrect.</p>").hide().delay(400).fadeIn('400');
		$('#next').append("<p>Next</p>").hide().delay(400).fadeIn('400');
		$('#correct-answer').append("<p>The correct answer is" + " " + questions[currentQuestion].answers[questions [currentQuestion].correct] + "</p>").hide().delay(400).fadeIn('400');
		nextQuestion();
		currentQuestion++;
	}
}

function nextQuestion() {
 	$("#next").click(function() {
		$('h4').remove();
		$('#answers li').remove();
		$(".outcome p").remove();

if (currentQuestion >= 10) {
	complete();
	restart();
	return;
	}
else {
	questionNumber();
	generateQuestions();
	generateAnswers();
	submit();
	}
});

}

function playerScore() {
	$('#score p').remove();
	score++;
	$('#score').append(" " + '<p>' + score + '</p>');

}

function questionNumber() {
	$('#question p').remove();
	$('#question').append(" " + '<p>' + (currentQuestion +1) + '/10</p>');
}

function complete() {
	$('.status').hide();
	$('#heading').append("<h4>You scored" + " " + score + " " + "out of 10 <br>" + "<div id='restart'><p>Restart</p></div></h4>").hide().fadeIn('400');
	$('#restart').addClass('quiz-end');
}

function restart() {
	$('#restart').click(function() {
		$('#restart').removeClass('quiz-end');
		currentQuestion = 0;
		score = (score-(score+1));
		questions [0];
		$('#score').hide().delay(400).fadeIn('slow');
		$('#question').hide().delay(400).fadeIn('slow');
		$('h4').remove();
		$('li').remove();
		$(".outcome p").remove();
		questionNumber();
		generateQuestions();
		generateAnswers();
		submit();
		playerScore();
		$('.status').show();
	});

}


