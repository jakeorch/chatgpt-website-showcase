const quotes = [
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "Start where you are. Use what you have. Do what you can. -Arthur Ashe",
    "You are never too old to set another goal or to dream a new dream. -C.S. Lewis",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. -Christian D. Larson",
    "You miss 100% of the shots you don't take. -Wayne Gretzky"
];

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");
const twitterButton = document.getElementById("twitter-button");
const facebookButton = document.getElementById("facebook-button");

// Function to generate a random quote from the quotes array
function getRandomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}

// Function to update the quote text on the webpage
function setQuote() {
    const randomQuote = getRandomQuote();
    quoteText.textContent = randomQuote;
}

// Event listener for the "New Quote" button
newQuoteButton.addEventListener("click", setQuote);

// Event listener for the Twitter share button
twitterButton.addEventListener("click", function () {
    const quote = quoteText.textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}`;
    window.open(twitterUrl, "_blank");
});

// Event listener for the Facebook share button
facebookButton.addEventListener("click", function () {
    const quote = quoteText.textContent;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${quote}`;
    window.open(facebookUrl, "_blank");
});

// Initial quote set on page load
setQuote();
