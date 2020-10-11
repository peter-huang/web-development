document.onreadystatechange = function(){

    if(document.readyState === "complete"){
        
        let randomNumber1 = Math.floor(Math.random() * 6 + 1);
        let randomNumber2 = Math.floor(Math.random() * 6 + 1);

        document.getElementsByClassName("img1")[0].src = "./images/dice" + randomNumber1 + ".png";
        document.getElementsByClassName("img2")[0].src = "./images/dice" + randomNumber2 + ".png";

        let gameStatus = document.querySelector("h1");

        if(randomNumber1 > randomNumber2){
            gameStatus.textContent = "🚩 Player 1 Wins!";
        }else if(randomNumber1 < randomNumber2){
            gameStatus.textContent = "Player 2 Wins! 🚩";
        }else{
            gameStatus.textContent = "Draw Game!";
        }flag
    }
}