$(document).ready(function(){
    var correctCount = 0;
    var wrongCount = 0;

    $(window).on( "load", function() {
        $("#start1").append();
        $("#next1").hide();
        $("#next2").hide();
        $("#picture2").hide();
        $("#picture3").hide();
        $("#picture4").hide();
        $("#picture5").hide();
        $(".form-check1").hide();
        $(".form-check2").hide();
        $(".form-check3").hide();
        $(".form-check4").hide();
        $("#next3").hide();
        $("#next4").hide();
        $("#time-left").append("<h2>Time Left:</h2>" + timeLeft);
    });

    
    var timeLeft = 120;
    var elem = document.getElementById("time-left");
    var timerId = setInterval(countdown, 1000);

    function countdown() {
        if (timeLeft == 0) {
        clearTimeout(timerId);
        alert("TIMES UP, YOU LOST!!!");
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
        }
    }
    

    $("#start1").click(function()  {
        countdown.start;
        $("#start1").hide();
        $("#picture1").hide();
        $("#picture3").hide();
        $("#picture4").hide();
        $("#picture5").hide();
        $("#picture2").show();
        $("#next2").hide();
        $("#next3").hide();
        $("#next1").show();
        $(".form-check1").show();
        $("#ask-question1").text("How many kids did Jim and Pam have?"); 
    });

    $("#correctanswerone").click(function()  {
        $("#start1").hide();
        $("#ask-question1").hide();
        $("#picture1").hide();
        $("#picture2").hide();
        $("#picture4").hide();
        $("#picture5").hide();
        $("#picture3").show();
        $(".form-check1").hide();
        $("#next1").hide();
        $("#next3").hide();
        $("#next2").show();
        $(".form-check2").show();
        $("#ask-question2").text("What was Dwight's middle name?");
        correctCount++; 
    });
    $(".wrong1").click(function()  {
        $("#start1").hide();
        $("#ask-question1").hide();
        $(".form-check1").hide();
        $("#picture1").hide();
        $("#picture2").hide();
        $("#picture4").hide();
        $("#picture5").hide();
        $("#picture3").show();
        $("#next1").hide();
        $("#next3").hide();
        $("#next2").show();
        $(".form-check2").show();
        $("#ask-question2").text("What was Dwight's middle name?");
        wrongCount++; 
    });
    $("#correctanswertwo").click(function()  {
        $("#start1").hide();
        $("#picture1").hide();
        $("#picture2").hide();
        $("#picture4").show();
        $("#picture5").hide();
        $("#picture3").hide();
        $("#ask-question1").hide();
        $("#ask-question2").hide()
        $(".form-check2").hide();
        $(".form-check3").show();
        $("#ask-question3").text("What state is Scranton located?"); 
        correctCount++;
    });
    $(".wrong2").click(function()  {
        $("#start1").hide();
        $("#picture1").hide();
        $("#picture2").hide();
        $("#picture4").show();
        $("#picture5").hide();
        $("#picture3").hide();
        $("#ask-question1").hide();
        $("#ask-question2").hide()
        $(".form-check2").hide();
        $(".form-check3").show();
        $("#ask-question3").text("What state is Scranton located?");  
        wrongCount++;
        
    });
    $("#correctanswerthree").click(function()  {
        $("#start1").hide();
        $("#picture1").hide();
        $("#picture2").hide();
        $("#picture4").hide();
        $("#picture5").show();
        $("#picture3").hide();
        $(".form-check3").hide();
        $(".form-check4").show();
        $("#next3").hide();
        $("#next4").show();
        $("#ask-question3").hide();
        $("#ask-question4").text("How many seasons did the office last?");
        correctCount++; 
    });
    $(".wrong3").click(function()  {
        $("#start1").hide();
        $("#picture1").hide();
        $("#picture2").hide();
        $("#picture4").hide();
        $("#picture5").show();
        $("#picture3").hide();
        $(".form-check3").hide();
        $(".form-check4").show();
        $("#next3").hide();
        $("#next4").show();
        $("#ask-question3").hide();
        $("#ask-question4").text("How many seasons did the office last?");
        wrongCount++; 
    });
    $("#correctanswerfour").click(function()  {
        $(".form-check4").hide();
        $("#next4").hide();
        $("#ask-question4").hide();
        $("#time-left").hide();
        correctCount++;
        $("#finishcorrect").append("<h2>Number Correct:</h2>" + "<h2>" + correctCount + "</h2>");
        $("#finishwrong").append("<h2>Number Wrong:</h2>" + "<h2>" + wrongCount + "</h2>");
    });
    $(".wrong4").click(function()  {
        $(".form-check4").hide();
        $("#next4").hide();
        $("#ask-question4").hide();
        $("#time-left").hide();
        wrongCount++;
        $("#finishcorrect").append("<h2>Number Correct:</h2>" + "<h2>" + correctCount + "</h2>");
        $("#finishwrong").append("<h2>Number Wrong:</h2>" + "<h2>" + wrongCount + "</h2>");
    });
});





