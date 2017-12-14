//document ready
$(document).ready(function() {


//declare variables

    var questions = [{
        question: "Baymax's motions are modeled after the movements of what animal?",
        choices: ["Baby Penguins", "Baby Hippos", "Kittens"],
        correct: 0,
        image: "assets/images/baymax-soccer.gif",
        audiosrc: "assets/audio/badalala.wav"
    }, {
        question: "The look and movement of microbots is based on",
        choices: ["Microbacteria", "Swarms of Ants", "Magnets"],
        correct: 1,
        image: "assets/images/microbots.gif",
        audiosrc: "assets/audio/welcomenerdschool.wav"
    }, {
        question: "Big Hero 6 was the first collaboration between",
        choices: ["Marvel and Pixar", "Pixar and DC Comics", "Disney Animation and DC Comics", "Marvel and Disney Animation"],
        correct: 3,
        image: "assets/images/marvelbh6.jpeg",
        audiosrc: "assets/audio/badalala.wav"
    }, {
        question: "Who can be spotted on a Wanted sign at the police station?",
        choices: ["Lord Dingwall from Brave", "Flynn Rider from Tangled", "Prince Hans from Frozen"],
        correct: 2,
        image: "assets/images/hansposter.jpg",
        audiosrc: "assets/audio/nevertakingbus.wav"
    }, {
        question: "Big Hero 6 is the first Walt Disney Animation Studios film with an Asian protagonist since:",
        choices: ["The Jungle Book 2", "Mulan", "Treasure Planet"],
        correct: 0,
        image: "assets/images/bh6-kawaii.jpg",
        audiosrc: "assets/audio/lollipop.wav"
    }, {
        question: "What Pixar character can be spotted as an action figure in Fred's library?",
        choices: ["Buzz Lightyear", "Wall-E", "Elastigirl from The Incredibles"],
        correct: 2,
        image: "assets/images/bh6.gif",
        audiosrc: "assets/audio/welcomenerdschool.wav"
    }, {
        question: "Who from the Marvel universe can be spotted as an action figure in Fred's library?",
        choices: ["Sub-Mariner villain 'Orka'", "voodoo priest villain called 'Black Talon'", "Sleepwalker", "All of these guys and literally way more!"],
        correct: 3,
        image: "assets/images/fistbump.gif",
        audiosrc: "assets/audio/badalala.wav"
    }, {
        question: "Why is Go Go Tomago's super suit yellow?",
        choices: ["To match her name, Tomago, which means 'egg' in Japanese", "It is Jamie Chung (the voice of Go Go)'s favorite color", "In the comic books, Tomago's yellow suit is necessary for her to transmutate"],
        correct: 0,
        image: "assets/images/gogotomago.png",
        audiosrc: "assets/audio/womanup.wav"
    }, {
        question: "Although they have Japanese names, the characters in Big Hero 6 were actually originally envisioned and written as:",
        choices: ["Mongolian", "Taiwanese", "Korean"],
        correct: 2,
        image: "assets/images/bh6-2.gif",
        audiosrc: "assets/audio/washedup14.wav"
    }, {
        question: "When Hiro falls between his desk and bed and Baymax comes to pick him up, what character can be seen on the ceiling?",
        choices: ["Hercules", "Oswald", "Aladdin"],
        correct: 1,
        image: "assets/images/youthink.gif",
        audiosrc: "assets/audio/lollipop.wav"
    }, {
        question: "In what year does Big Hero 6 take place?",
        choices: ["2014", "2032", "2020"],
        correct: 1,
        image: "assets/images/sanfransokyo.gif",
        audiosrc: "assets/audio/wasabi.wav"
    }, {
        question: "Who does Stan Lee cameo as?",
        choices: ["One of the science expo judges", "An inmate when Tadashi and Hiro get arrested", "Fred's dad"],
        correct: 2,
        image: "assets/images/stanlee.gif",
        audiosrc: "assets/audio/cantoffend.wav"
    }, {
        question: "In the comic book, who actually is responsible for the creation of Baymax?",
        choices: ["Hiro", "Wasabi", "Honey Lemon"],
        correct: 0,
        image: "assets/images/microbots2.gif",
        audiosrc: "assets/audio/lollipop.wav"
    }];


    var currentQuestion = 0;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var outOfTimeQuestions = 0;
    var number = 15;
    var intervalId;
    var question;
    var questionClass;
    var choiceList;
    var numChoices;
    var audio = new Audio();

    audio.src = "assets/audio/2botsenter.wav";
    console.log(audio);
    audio.load();
    $(".playAgain").hide();


$("#start").click(function() {
    $("#start").hide();
    $(".question").html("<img src='assets/images/ready.gif'/>");
    audio.play();
    setTimeout (function(){
        reset();
    }, 9000);
});



// if player picks the correct answer, show a screen with a correct answer! message.
    function game() {

            $(".list-group-item").click(function() {
                var value = $(".list-group-item").index(this);
                console.log(value);
                if (value === questions[currentQuestion].correct) {
                    stop();
                    console.log("clicked right answer!");
                    correctAnswers++;
                    breakTimeCorrect();
                }
                else {
                    stop();
                    console.log("clicked wrong answer");
                    incorrectAnswers++;
                    breakTimeIncorrect();
                };



            });
    };  //end game function

    function playClip() {
        audio.src = questions[currentQuestion].audiosrc;
        console.log(audio);
        audio.load();
        audio.play();
    }
    function playWrong() {
        audio.src = "assets/audio/ratepain.wav";
        console.log(audio);
        audio.load();
        audio.play();
    }

    function breakTimeCorrect() {
        playClip();
        $(".timeLeft").html("Correct!");
        $(".question").html("<img src='" + questions[currentQuestion].image + "'/>");
        $(".choiceList").hide();
        setTimeout(function() {
            $(".timeLeft").empty();
            $(".result").hide();
            $(".choiceList").show();
            nextQuestion();
        }, 8000);

    }

    function breakTimeIncorrect() {
        playWrong();
        var j = questions[currentQuestion].correct;
        $(".timeLeft").html("Sorry, the correct answer was " + questions[currentQuestion].choices[j]);
        $(".question").html("<img src='" + questions[currentQuestion].image + "'/>");
        $(".choiceList").hide();
        setTimeout(function() {
            $(".timeLeft").empty();
            $(".result").hide();
            $(".choiceList").show();
            nextQuestion();
        }, 8000);
    }


    //are there any questions left? if yes, display next, if no, display score
    function nextQuestion() {
        $(".result").unbind();
        currentQuestion++;
        //if no questions left, display score
        if (currentQuestion < 10) {
            displayQuestion();
        }
        else {
            displayScore();
        };
    };

    function displayScore() {
        $(".timeLeft").empty();
        $(".question").html("<img src='assets/images/bighero6-2.png'/>");
        $(".choiceList").hide();
        $(".playAgain").show().click(function() {
            reset();
            });
        $(".result").html("Correct answers: " + correctAnswers + "<br> Incorrect answers: " + incorrectAnswers + "<br>Unanswered Questions: " + outOfTimeQuestions);
        $(".result").show();
    };

    function reset() {
        //shuffles questions
        questions.sort(function() { return 0.5 - Math.random() });
        currentQuestion = 0;
        correctAnswers = 0;
        incorrectAnswers = 0;
        outOfTimeQuestions = 0;
        number = 15;
        $(".choiceList").show();
        $(".timeLeft").show();
        $(".result").hide();
        $(".playAgain").hide();
        displayQuestion();
    }


    function displayQuestion() {
        $("#start").hide();
        //starts 30s timer
        timer();
        question = questions[currentQuestion].question;
        console.log("current question: " + question);
        //is .find necessary?
        questionClass = $(".quizContainer").find(".question");
        choiceList = $(".quizContainer").find(".choiceList");
        numChoices = questions[currentQuestion].choices.length;
        console.log("current answer index: " + questions[currentQuestion].correct);

        // Set the questionClass to the current question
        $(questionClass).html(question);

        // Remove all current <li> elements (if any)
        $(choiceList).find(".list-group-item").remove();

        var choice;
        for (i = 0; i < numChoices; i++) {
            choice = questions[currentQuestion].choices[i];
            $("<button type='button' class='list-group-item'>" + choice + "</button>").appendTo(choiceList);
        };
        game();

    }; //end displayQuestion()



// sets interval that runs decrement function 1x per second
    function timer() {
        intervalId = setInterval(decrement, 1000);

    };

    function decrement() {
        $(".timeLeft").html("<h3>" + number + "</h3>");
        number--;
        if (number === 0) {
            stop();
            number = 15;
            outOfTimeQuestions++;
            console.log("out of time");
            breakTimeIncorrect();
        };
    };

    function stop() {
        clearInterval(intervalId);
        number = 15;
    };





});  //end doc ready
