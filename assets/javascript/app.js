$(document).ready(function() {
    var timeElapsed;
    var counter = {
        time: 30000,
        start: function() {
            intervalId = setInterval(counter.count, 10);
        },

        count: function() {
            counter.time -= 10;
            if (counter.time <= 0) {
            	timesUp();
            }

            currentTime = counter.timeConverter(counter.time);
            $("#time-remaining").html(currentTime);
        },

        timeConverter: function(t) {
            var seconds = Math.floor(t / 1000);
            var milliseconds = (t - (seconds * 1000)) / 10;

            if (milliseconds < 10) {
                milliseconds = "0" + milliseconds;
            }

            if (seconds === 0) {
                seconds = "00";
            } else if (seconds < 10) {
                seconds = "0" + seconds;
            }

            return seconds + ":" + milliseconds;
        },
    }

    function timesUp() {
        timeElapsed = counter.time;
        clearInterval(intervalId);
        $("#box1").hide();
        $("#box2").hide();
        $("#box3").css("display", "block");
        $("#times-up").html("You ran out of time!");
        document.getElementById('audio').play();
        checkQuiz();
    }

    function checkQuiz() {
    	function displayScore() {
    		$("#number-correct").html(correct);
  			$("#number-incorrect").html(incorrect);
  			$("#number-unanswered").html(answered);
  			$("#time-elapsed").html(timeElapsed);
    	}
    	var myArr = [
    		question1 = $("[name='question1']"),
    		question2 = $("[name='question2']"),
    		question3 = $("[name='question3']"),
    		question4 = $("[name='question4']"),
    		question5 = $("[name='question5']"),
    		question6 = $("[name='question6']"),
    		question7 = $("[name='question7']"),
    		question8 = $("[name='question8']"),
    		question9 = $("[name='question9']"),
    		question10 = $("[name='question10']")],
    		correct = 0,
    		incorrect = 0,
    		answered = 10;
    		timeElapsed = (30000 - counter.time)/1000;
        	clearInterval(intervalId);

		for(var i = 0;i<myArr.length;i++) {
  			for(var j= 0;j<question1.length;j++) {
  				if(myArr[i][j].value == "true" && myArr[i][j].checked) {
  					correct++;	
  					answered--;
  					
  				} else if (myArr[i][j].value == "false" && myArr[i][j].checked) {
  					incorrect++;
  					answered--;
  				} 

  			} displayScore();
  		}	
    }


    $("#start-button").on("click", function() {
        $("#box1").hide();
        $("#box2").css("display", "block");
        counter.start();
    });

    $("#end-button").on("click", function() {
        $("#box1").hide();
        $("#box2").hide();
        $("#box3").css("display", "block");
        checkQuiz();
    });

    $("#restart").on("click", function() {
        $("#box1").hide();
        $("#box2").css("display", "block");
        $("#box3").hide();
        clearInterval(intervalId);
        counter.time = 30000;
        counter.start();
    });






























});
