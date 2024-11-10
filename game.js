const state = {
    winner: undefined,
    currentPlayer: "x",
}

const playerChar = {
    "x": "\u274C",
    "o": "\u2B55",
}

document.getElementById("game").addEventListener("click", (e) => {
    if (e.target.classList.contains("clear") {
        e.target.classList.replace("clear", state.currentPlayer)
        state.currentPlayer = state.currentPlayer === "x" ? "o" : "x"
        state.winner = checkWinner()
        if (state.winner) {
            document.getElementById("winner").innerText = `${playerChar[state.winner]} won.`
            document.getElementById("result").classList.remove("hidden")
        } else if (document.getElementsByClassName("clear").length === 0) {
            document.getElementById("winner").innerText = "game drawn"
            document.getElementById("result").classList.remove("hidden")
        }
    }
})

document.getElementById("restart").addEventListener("click", reset)

const reset = () => {
    state.winner = undefined
    state.currentPlayer = "x"
    for (const cell of document.getElementsByTagName("td")) {
        cell.className = "clear"
    }
    document.getElementById("result").classList.add("hidden")
}

function checkWinner() {
    const cells = document.getElementsByTagName("td")
    const squares = cells.map(({className}) => className === "clear" ? "" : className)
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return undefined;
}
