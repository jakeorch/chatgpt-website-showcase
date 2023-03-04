// Define an array of cat facts
const catFacts = [
    "Cats can make over 100 different sounds.",
    "Cats have a flexible spine that allows them to twist their bodies in midair and always land on their feet.",
    "Cats sleep for an average of 16 hours a day.",
    "Cats have powerful night vision and can see in low light 6 times better than humans.",
    "Cats are natural predators and can easily catch mice and other small animals.",
    "Cats have a keen sense of smell and can detect odors up to 14 times better than humans.",
    "Cats are the most popular pet in the United States, with over 95 million cats owned as pets."
];

// Get the button and paragraph elements from the HTML
const button = document.getElementById("generate-fact");
const factParagraph = document.getElementById("cat-fact");

// Attach an event listener to the button that generates a random fact
button.addEventListener("click", function () {
    // Generate a random index to select a fact from the array
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    // Update the paragraph element with the selected fact
    factParagraph.textContent = catFacts[randomIndex];
});
