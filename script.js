// This function creates the popup with the given details

if (localStorage.getItem('dontShowAgain') === 'true') {
    document.getElementById('disclaimer').style.display = 'none';  // Hide notification
} else {
    document.getElementById('disclaimer').style.display = 'block';  // Show notification
}

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
addPopUp("Arithmetic Arranger", "The Arithmetic Arranger is one of my early coding projects, developed as part of an assessment in FreeCodeCamps Scientific Computing with Python course. This Python script is designed to take a series of simple arithmetic problems—addition and subtraction—and arrange them neatly in a vertical format, similar to how you would solve problems on paper. I created this project to solidify my understanding of string manipulation, loops, and basic Python syntax. It was a fun and rewarding challenge, and completing it helped me gain confidence in solving real-world problems programmatically. The project is hosted on my GitHub for anyone interested in checking out the code!", "Arithmetic-Arranger.png", "https://github.com/horseywin/Simple-yet-complex-arithmetic-arranger-addition-and-subtraction-", "arithmeticArranger-popup");
//online bio
addPopUp("Online Bio", "This project is a request from my freind Liam, He wanted a website functionally similar to this one (horseywin.github.io/bio). So customised it and tweaked it to his preference. Of course this was done for free but despite my confidence it was hard. In the websites I prefer a more mimialistic apporach meaning I only added the essentials: Javascript, HTML and CSS. The actual website link is below <br><br>ⓘThe website itself may not have been updated yet", "Tetris-Game-Coding.png", "https://horseywin.github.io/Liams-website/index.html", "onlineBio-popup");

// Define functions
document.getElementById("tetris-game").addEventListener("click", () => {
    document.getElementById("tetris-popup").style.display = "block";
});

document.getElementById("arithmetic-arranger").addEventListener("click", () => {
    document.getElementById("arithmeticArranger-popup").style.display = "block";
});

document.getElementById("online-bio").addEventListener("click", () => {
    document.getElementById("onlineBio-popup").style.display = "block";
});


// Function to handle popup exit
document.querySelectorAll(".popup-exit").forEach(exit => {
    exit.addEventListener("click", () => {
        console.log("EXIT CLICKED");
        const activePopups = document.querySelectorAll('.popupDiv');
        activePopups.forEach(popup => popup.style.display = "none");
    });
});

function hideDisclaimer() {
    console.log("Hiding disclaimer");
    document.getElementById("disclaimer").style.display = "none";
    localStorage.setItem('dontShowAgain', 'true');

}

document.querySelectorAll("#navbar ul li a").forEach(function(anchor) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");  // Get the target element ID (hash)
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Get the top position of the target element
            const targetPosition = targetElement.offsetTop;

            // Adjusted scroll offset to ensure visibility
            const navbarHeight = 300;  // Adjust this value based on your navbar height
            const scrollPosition = targetPosition - navbarHeight;

            // Smooth scroll to the target position
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });

            console.log("Scrolling to", targetId);
        }
    });
});