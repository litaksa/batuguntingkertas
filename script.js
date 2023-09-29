const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: "",
    aiHand: ""
}

const hands = [...document.querySelectorAll('.select img')];

function handSelection() {
    game.playerHand = this.dataset.option
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = '0 0 0 4px yellow'
}


function aiChoice () {

return hands[Math.floor(Math.random() * 3)].dataset.option

}

function checkResult (player, ai) {
    // console.log(player, ai);
if(player === ai) {
    return 'draw'
    // console.log('remis');
}
else if(
    (player === "kertas" && ai === "batu") || 
    (player === "batu" && ai === "gunting") || 
    (player === "gunting" && ai === "kertas")) { 
    console.log('wygrałeś')
    return 'win'
} else { return 'loss'
    console.log("przegrałeś")
}
}

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player; 
    document.querySelector('[data-summary="ai-choice"]').textContent = ai; 
    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    if(result === "win") {
       
        document.querySelector("p.wins span").textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "kamu menang!"
        document.querySelector('[data-summary="who-win"]').style.color = "green" 
        document.querySelector('[data-summary="who-win"]').style.fontSize = 20 + "px" 
    } else if (result === "loss") {
        document.querySelector("p.losses span").textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "yah kalah lawan komputer"
        document.querySelector('[data-summary="who-win"]').style.color = "red" 
        document.querySelector('[data-summary="who-win"]').style.fontSize = 20 + "px" 
    } else {
        document.querySelector("p.draws span").textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "seri!"
        document.querySelector('[data-summary="who-win"]').style.color = "blue" 
        document.querySelector('[data-summary="who-win"]').style.fontSize = 20 + "px" 
    }
}

function endGame () {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';
    game.playerHand = "";
}

function startGame () {
    if(!game.playerHand) {
        return alert("pilih gambarnya dulu coy!")
    // console.log('idę dalej')
    }

    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand)
    console.log(gameResult);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame()
}

hands.forEach(hand => hand.addEventListener('click', handSelection))

document.querySelector('.start').addEventListener('click', startGame)