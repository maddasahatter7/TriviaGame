$(document).ready(function () { 
    var questionNumber=0;
    var questionBank=new Array();
    var stage="#game1";
    var stage2=new Object;
    var questionLock=false;
    var numberOfQuestions;
    var score=0;
$.getJSON('/Users/Madison/Desktop/Ucf_Bootcamp/My_Work/TriviaGame/assets/game.json', function(data) {
    for(i=0; i<data.quizQuestions.length; i++){
        questionBank[i]=new Array;
        questionBank[i][0] = data.quizQuestions[i].question;
        questionBank[i][1] = data.quizQuestions[i].choice1;
        questionBank[i][2] = data.quizQuestions[i].choice2;
        questionBank[i][3] = data.quizQuestions[i].choice3;
        questionBank[i][4] = data.quizQuestions[i].choice4;
        }
        numberOfQuestions = questionBank.length;
        alert(questionBank);
    })//getJSON


    });