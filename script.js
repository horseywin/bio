// This function creates the popup with the given details
function addPopUp(title, description, imageURL, link, popupDivName) {
    const BodyTag = document.getElementsByTagName("body")[0];
    BodyTag.innerHTML += `
        <div id="${popupDivName}" class="popupDiv" style="display: none;">
            <div class="popup" style="background-image: url('${imageURL}');">
                <h1 class="popup-title">${title}</h1>
                <h3 class="popup-description">${description}</h3>
                <a class="popup-description" href="${link}" style="text-decoration: underline;">Github project here</a>
            </div>
            <div class="popup-exit"></div>
        </div>
    `;
}

// Tetris
addPopUp("Tetris game", "This project was a challenge. My teacher was speaking of an grade 10 assessment on building a Tetris game. The only language I could do it with was Python. So here I am. Using Godot or another language like javascript would have been an easier language. Python is not a language of games or UI nevertheless and Tetris game! I used coloured emojis like {🟥 🟦 🟨} to make a decent enough appeal. It took me weeks to make this...So far this is my hardest and most complex project! \nHave a look at the code at the github page below!", "Tetris-Game-Coding.png", "https://github.com/horseywin/Tetris-Game", "tetris-popup");
//Arithmetic Arranger
addPopUp("Arithmetic Arranger", "The Arithmetic Arranger is one of my early coding projects, developed as part of an assessment in FreeCodeCamps Scientific Computing with Python course. This Python script is designed to take a series of simple arithmetic problems—addition and subtraction—and arrange them neatly in a vertical format, similar to how you would solve problems on paper. I created this project to solidify my understanding of string manipulation, loops, and basic Python syntax. It was a fun and rewarding challenge, and completing it helped me gain confidence in solving real-world problems programmatically. The project is hosted on my GitHub for anyone interested in checking out the code!", "Tetris-Game-Coding.png", "https://github.com/horseywin/Simple-yet-complex-arithmetic-arranger-addition-and-subtraction-", "arithmeticArranger-popup");

// Define functions
document.getElementById("tetris-game").addEventListener("click", () => {
    document.getElementById("tetris-popup").style.display = "block";
});

document.getElementById("arithmetic-arranger").addEventListener("click", () => {
    document.getElementById("arithmeticArranger-popup").style.display = "block";
});

// Function to handle popup exit
document.querySelectorAll(".popup-exit").forEach(exit => {
    exit.addEventListener("click", () => {
        console.log("EXIT CLICKED");
        const activePopups = document.querySelectorAll('.popupDiv');
        activePopups.forEach(popup => popup.style.display = "none");
    });
});