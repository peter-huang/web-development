document.onreadystatechange = function(){

    const keys = ["w", "a", "s", "d", "j", "k", "l"];

    if(document.readyState === "complete"){


        for(let i = 0; i < document.getElementsByClassName("drum").length; i++){
     
            document.getElementsByClassName("drum")[i].addEventListener("click", function(){
                const buttonName = this.innerHTML;

                if(keys.includes(buttonName)){
                    makeSound(buttonName);
                    buttonAnimation(buttonName);
                }


            });
        }


        document.addEventListener("keydown", function(event){

            if(keys.includes(event.key)){
                makeSound(event.key);
                buttonAnimation(event.key);
            }
        });
    }


    function makeSound(key){

        let audio;

        switch(key){
            case "w":
                audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
            break;
            case "a":
                audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
            break;
            case "s":
                audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
            break;
            case "d":
                audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
            break;
            case "j":
                audio = new Audio("./sounds/snare.mp3");
                audio.play();
            break;
            case "i":
                audio = new Audio("./sounds/crash.mp3");
                audio.play();
            break;
            case "l":
                audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
            break;

            default:
                console.log(key);
        }
    }

    function buttonAnimation(buttonKey){
        let activeButton = document.querySelector("." + buttonKey);

        activeButton.classList.add("pressed");
        
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100);
    }
}