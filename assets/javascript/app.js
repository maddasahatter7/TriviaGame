var allQuestions = $('.quizQuestions').size();
var currentQuestion = 0;
var bigQ = {
        {
        question:"How many times is the word F@#k said throughout the film?",
        choices:[105,52,12,"Not once, dude"]
        choice2:52,
        choice3:12,
        choice4:"Not once, dude"
        },
        {
        question:"Which is NOT one of the ex-president masks used in the film?",
        choices:["Bush", "Carter", 
        choice2:"Carter",
        choice3:"",
        choice4:"Reagan"
        },
        {
        question:"How many times did Patrick Swayze have to jump to perfect the skydiving scene?",
        choice1:55,
        choice2:209,
        choice3:36,
        choice4:"He was never allowed to jump"
        },
        {
        question:"The skinny, long haired guy in Bunker’s gang is the lead singer from which band?",
        anwsers: 
        choice1:"The Red Hot Chili Peppers",
        choice2:"Blink 182",
        choice3:"Simple Plan",
        choice4:"Weezer"
        },
        {
        question:"how many ribs did Patrick Swayze crack while filming the surfing scenes?",
        choice1:4,
        choice2:1,
        choice3:7,
        choice4:13
        },
        {
        question:"Which sport is this film based around?",
        choice1:"Surfing",
        choice2:"Skateboarding",
        choice3:"Street hockey",
        choice4:"Football"
         },
        {
        "question":"What event is occuring in the last scene of the film?",
        "choice1":"The 40 year storm",
        "choice2":"Mardi Gras",
        "choice3":"A hurricane",
        "choice4":"A drug bust"
        },
        {
        "question":"What was Johnny Utah before he became an FBI Agent?",
        "choice1":"A football player",
        "choice2":"A surfer",
        "choice3":"An artist",
        "choice4":"A lawyer"
        }   
        ]
    
}

//Store the selector in a variable.
//It is good practice to prefix jQuery selector variables with a $
$quizQuestions = $('.quizQuestions');

//Hide all the questions
$quizQuestions.hide();

//Show the first question
$($quizQuestions.get(currentQuestion)).fadeIn();

//attach a click listener to the HTML element with the id of 'next'
$('#next').click(function () {

     //fade out the current question,
     //putting a function inside of fadeOut calls that function 
     //immediately after fadeOut is completed, 
     //this is for a smoother transition animation
     $($quizQuestions.get(currentQuestion)).fadeOut(function () {
         //increment the current question by one
        currentQuestion = currentQuestion + 1;
        
                //if there are no more questions do stuff
                if (currentQuestion == totalQuestions) {
        
                    var result = sum_values()
        
                    //do stuff with the result
                    alert(result);
        
                } else {
        
                    //otherwise show the next question
                    $($quizQuestions.get(currentQuestion)).fadeIn();
        
                }
            });
        
        });