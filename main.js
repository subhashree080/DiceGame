var player1 = "Player 1";
var player2 = "Player 2";
var player3 = "Player 3";

function enterNames(){
    player1 = prompt("Player 1 name");
    player2 = prompt("Player 2 name");
    player3 = prompt("Player 3 name");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
    document.querySelector("p.Player3").innerHTML = player3;
}

function rollDice(){
    setTimeout(function(){

        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomDiceImg = "dice" + randomNumber1 + ".png";
        var randomImageSrc = "images/" + randomDiceImg;
        var img1 = document.querySelectorAll("img")[0];
        img1.setAttribute("src", randomImageSrc);

        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";
        document.querySelectorAll("img")[1].setAttribute("src",randomImageSrc2);

        var randomNumber3 = Math.floor(Math.random() * 6) + 1;
        var randomImageSrc3 = "images/dice" + randomNumber3 + ".png";
        document.querySelectorAll("img")[2].setAttribute("src",randomImageSrc3);


        if(randomNumber1 == randomNumber2 && randomNumber1 == randomNumber3 && randomNumber2 == randomNumber3){

            document.querySelector("h1").innerHTML = "Draw!";
        }
        else if(randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3){
            document.querySelector("h1").innerHTML = (player1 + " " + "Wins!!🥳");
        }
        else if(randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3){
            document.querySelector("h1").innerHTML = (player2 + " " + "Wins!!🎉");
        }
        else if(randomNumber3 > randomNumber1 && randomNumber3 > randomNumber2){
            document.querySelector("h1").innerHTML = (player3 + " " + "Wins!!🎊");
        }
        else{
            document.querySelector("h1").innerHTML = "Roll Dice again";
        }



    },250);
}












    
