/*

const BodyTag = document.getElementsByTagName("body")[0]

BodyTag.innerHTML += "<button>Click me for virus</button>"
console.log("added button")

*/

function addPopUp(title, description, imageURL) {
    const BodyTag = document.getElementsByTagName("body")[0]
    BodyTag.innerHTML += `
    <div class="popup" style="background-image: url('${imageURL}');">
        <h1 class="popup-title">${title}</h1>
        <h3 class="popup-description">${description}</h3>
        <a class="popup-description" href="https://github.com/horseywin/Tetris-Game">Github project here</a>
    </div>
    <div class="popup-exit"></div>
    `
    console.log("ADDED THE POPUP TO INNER HTML")
    document.getElementsByClassName("popup-exit")[0].addEventListener("click", () => {
        document.getElementsByClassName("popup")[0].remove()
        document.getElementsByClassName("popup-exit")[0].remove()
    });
    document.getElementById("tetris-game").addEventListener("click", () => {
        console.log("spawning popup")
        addPopUp("Tetris game", "This project is something I came up with as a challenge. My teacher was speaking of an upcoming assessment on building a Tetris game. He mentioned that it didn't matter how the students did it, as long as it was good. When I mean upcoming, I dont mean 2-5 months ahead. No. This assessment was 2 years into the future when my peers and I would have been more advanced at programming. The only language I could do it with was Python. So here I am. Using Godot or another language like javascript would have been an easier language. Python is not a language of games or UI nevertheless and Tetris game! I used coloured emojis like {🟥 🟦 🟨} to make a decent enough appeal. As of 2025. THIS IS THE HARDEST PROJECT I HAVE EVER DONE", "Tetris-Game-Coding.png")
    }
    )
}
//tetris
document.getElementById("tetris-game").addEventListener("click", () => {
    console.log("spawning popup")
    addPopUp("Tetris game", "This project is something I came up with as a challenge. My teacher was speaking of an upcoming assessment on building a Tetris game. He mentioned that it didn't matter how the students did it, as long as it was good. When I mean upcoming, I dont mean 2-5 months ahead. No. This assessment was 2 years into the future when my peers and I would have been more advanced at programming. The only language I could do it with was Python. So here I am. Using Godot or another language like javascript would have been an easier language. Python is not a language of games or UI nevertheless and Tetris game! I used coloured emojis like {🟥 🟦 🟨} to make a decent enough appeal. As of 2025. THIS IS THE HARDEST PROJECT I HAVE EVER DONE", "Tetris-Game-Coding.png")
}
)

document.getElementById("tetris-game").addEventListener("click", () => console.log("clicked"))