var score1 = 0;
var score2 = 0;

answerturn = "player1";
questionturn = "player2";

function sendnum() {

    var no1 = document.getElementById("notobesent").value;
    var no2 = document.getElementById("notobesent2").value;
    question = "<h4>"+"Q."+ no1 + "X" + no2 + "</h4>";
    input = "<input id=inputans type=number placeholder='answer'>";
    button = "<button id=sendans onclick='check()'>SEND</button>";
    document.getElementById("output").innerHTML = question + input + button;
}

function check() {

    answerbyplayer = document.getElementById("inputans").value
    var no1 = document.getElementById("notobesent").value;
    var no2 = document.getElementById("notobesent2").value;
    var answer = no1*no2;
    console.log(answer);

    if(answerbyplayer == answer) {

        if(answerturn == "player1") {
            updateplayerscore1 = score1 + 1;
            document.getElementById("player1score").innerHTML = updateplayerscore1;
        }

        else {
            updateplayerscore2 = score2 + 1;
            document.getElementById("player2score").innerHTML = updateplayerscore2;
        }

    }

}