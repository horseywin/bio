/*

const BodyTag = document.getElementsByTagName("body")[0]

BodyTag.innerHTML += "<button>Click me for virus</button>"
console.log("added button")

*/


//tetris
function tetrisPopup() {
document.getElementById("tetris-game").addEventListener("click", () => {
    console.log("spawning popup")
    addPopUp("Tetris game", "This project is something I came up with as a challenge. My teacher was speaking of an grade 10 assessment on building a Tetris game. The only language I could do it with was Python. So here I am. Using Godot or another language like javascript would have been an easier language. Python is not a language of games or UI nevertheless and Tetris game! I used coloured emojis like {🟥 🟦 🟨} to make a decent enough appeal. Have a look at the code at the github page below!", "Tetris-Game-Coding.png", "https://github.com/horseywin/Tetris-Game")
}
)}

tetrisPopup()

function addPopUp(title, description, imageURL, link) {
    const BodyTag = document.getElementsByTagName("body")[0]
    BodyTag.innerHTML += `
    <div class="popup" style="background-image: url('${imageURL}');">
        <h1 class="popup-title">${title}</h1>
        <h3 class="popup-description">${description}</h3>
        <a class="popup-description" href="${link}" style="text-decoration: underline;">Github project here</a>
    </div>
    <div class="popup-exit"></div>
    `
    document.getElementsByClassName("popup-exit")[0].addEventListener("click", () => {
        document.getElementsByClassName("popup")[0].remove()
        document.getElementsByClassName("popup-exit")[0].remove()
    });
    tetrisPopup()
}