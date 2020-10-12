$(document).ready(function(){

    const buttonColors = ["red", "blue", "green", "yellow"];
    let audio;
    let gamePattern = [];
    let userClickedPattern = [];
    let level = 0;
    let gameStatus = false;

    $(document).on("keydown", function(event){
        console.log(event.key);

        gameStatus = true;

        $("h1").text("Level " + level);

        nextSequence();
    })
    
    // Button listeneres
    $(".btn").on("click", function(event){

        if(gameStatus){
            
            const userChosenColour  = event.target.id;
            userClickedPattern.push(userChosenColour);

            // previous color index
            checkAnswer(userClickedPattern.length - 1);
    
            playSound(userChosenColour);
            animatePressColor(userChosenColour);
        }
    })


    // Check recent entered sequence from user.
    function checkAnswer(currentLevel){

        if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
   
            if (userClickedPattern.length === gamePattern.length){

                setTimeout(function () {
                  nextSequence();
                }, 1000);
        
            }
           
        }else{

            $("body").addClass("game-over");
            audio = new Audio("./sounds/wrong.mp3");
            audio.play();
            setTimeout(function(){
                $("body").removeClass("game-over");
                
            }, 200);

            startOver();
        }
    }


    // Resets game values
    function startOver(){
        gameStatus = false;
        level = 0;
        gamePattern = [];
        $("h1").text("Game Over, Press Any Key to Restart");
    
    }


    // Generate next step of the sequence
    function nextSequence(){

        level++;
        
        userClickedPattern = [];

        const randomNumber = Math.round(Math.random() * 3);
        const randomChosenColour  = buttonColors[randomNumber];
    
        gamePattern.push(randomChosenColour);

        
        $("h1").text("Level " + level);
        $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);
     
    }


    // Plays sound of corresponding button
    function playSound(name){
        audio = new Audio("./sounds/" + name + ".mp3");
        audio.play();
    }


    // Animate pressed animation for corresponding button
    function animatePressColor(currentColor){
        $("#" + currentColor).addClass("pressed");

        setTimeout(function(){
            $("#" + currentColor).removeClass("pressed");
        },100);
    }

})