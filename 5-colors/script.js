// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate a new color palette
function generatePalette() {
    document.getElementById("color-1").style.backgroundColor = getRandomColor();
    document.getElementById("color-2").style.backgroundColor = getRandomColor();
    document.getElementById("color-3").style.backgroundColor = getRandomColor();
    document.getElementById("color-4").style.backgroundColor = getRandomColor();
    document.getElementById("color-5").style.backgroundColor = getRandomColor();
}

// Function to copy color code to clipboard when color box is clicked
function copyColorCode(event) {
    const colorBox = event.target;
    const colorCode = colorBox.style.backgroundColor;
    navigator.clipboard.writeText(colorCode).then(() => {
        console.log(`Copied ${colorCode} to clipboard!`);
    });
}

// Add event listeners to color boxes
const colorBoxes = document.querySelectorAll(".color-box");
colorBoxes.forEach((box) => {
    box.addEventListener("click", copyColorCode);
});

// Add event listener to generate button
const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", generatePalette);

// Generate initial color palette
generatePalette();
