function MikeAdeleke() {

  var q1 = {
    question: "Where is Mike Adeleke from?",
    answers: ["The Midwest", "The Northeast", "The Southeast", "The 'Best' Coast"],
    correctAnswer: 0,
    userAnswer: 0
  };

  var q2 = {
    question: "What is Mike's favorite programming language?",
    answers: ["Javascript", "Python", "Ruby", "PHP"],
    correctAnswer: 2,
    userAnswer: 0
  };

  var q3 = {
    question: "Who is his favorite team?",
    answers: ["Chelsea FC", "Arsenal", "Manchster United", "Barcelona"],
    correctAnswer: 0,
    userAnswer: 0
  };

  var q4 = {
    question: "What does his startup do?",
    answers: ["Easy finding of college textbooks", "Helps students get apartments", "Location based tutoring service", "Growth hacking for startups"],
    correctAnswer: 1,
    userAnswer: 0
  };

  var q5 = {
    question: "What is his favorite music genre?",
    answers: ["Anything by Frank Sinatra", "Electronic dance music", "What's on the radio", "He beez in da trap"],
    correctAnswer: 1,
    userAnswer: 0
  };

  var q6 = {
    question: "Who is his favorite startup writer?",
    answers: ["Sam Altman", "Nivi & Naval", "Paul Graham", "Ben Horowitz"],
    correctAnswer: 2,
    userAnswer: 0
  };

  var q7 = {
    question: "Who is his favorite CEO?",
    answers: ["Travis Kalanick (Uber)", "Aaron Levie (Box)", "Mark Zuckerberg (Facebook)", "Elon Musk (Tesla, SpaceX)"],
    correctAnswer: 1,
    userAnswer: 0
  };

  var q8 = {
    question: "What else is he learning now outside of Front-end and Ruby on Rails at Thinkful?",
    answers: ["Javascript frameworks", "Design", "Growth hacking", "Raising money"],
    correctAnswer: 2,
    userAnswer: 0
  };

  var q9 = {
    question: "Where is he looking to transfer this fall for school?",
    answers: ["University of Pennslyvania", "University of Maryland", "University of Illinois", "Rutgers University"],
    correctAnswer: 0,
    userAnswer: 0
  };

  var q10 = {
    question: "What does he want to do in 2014?",
    answers: ["Get into YCombinator", "Get funded by Dorm Room Fund", "Have his startup at 5 schools", "He is just that greedy and wants it all"],
    correctAnswer: 3,
    userAnswer: 0
  };

  var quizQuestions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    

  this.getQuizQuestion = function() {
		return quiz.question;
	};
	
	this.getQuizAnswers = function() {
		return quiz.answers;
	};


};


$(document).ready(function() {
    var game = new MikeAdeleke(); 
    var hidden = $(".hidden");
    hidden.hide(); 
    
//		add first question to the screen
		$("#button").on("click", function(e) {
        e.preventDefault;
        hidden.html("<h2>q1.getQuizQuesion</h2>");
        hidden.html("<li>q1.getQuizAnswers</li>");
//		insert the question counter
//		insert corrent answer counter
//			insert next or previous
      });
	

	
		
})

    
    
//For next steps think about what features you need to offer.
//-Question # of # indicator
//-# of # correct indicator
//-Add first question to screen...


//- Click handler to insert a question into the hidden box
//- format the click handler to render as html
//- insert html for "question number", "number correct", "next or previous"
    
//Iterate over each question and do the same thing to each question
//    That method will insert the question into the element and the prompt the user
