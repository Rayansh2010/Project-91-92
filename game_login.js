function nextPage() {
    var player1name = document.getElementById("playernameinput1").value;
    var player2name = document.getElementById("playernameinput2").value;

    localStorage.setItem("player1name", player1name);
    localStorage.setItem("player2name", player2name);

    window.location = "game_page.html";
}