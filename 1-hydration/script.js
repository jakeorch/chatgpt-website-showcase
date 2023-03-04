// Get references to the HTML elements
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const waterIntakeForm = document.getElementById("water-intake-form");
const waterIntakeAmount = document.getElementById("water-intake-amount");
const goalForm = document.getElementById("goal-form");
const weightInput = document.getElementById("weight");
const activityLevelSelect = document.getElementById("activity-level");
const logTableBody = document.querySelector("#log-table tbody");

// Define variables for tracking water intake and goal
let waterIntake = 0;
let dailyGoal = 0;

// Load any previously saved goal from localStorage
if (localStorage.getItem("dailyGoal")) {
    dailyGoal = Number(localStorage.getItem("dailyGoal"));
    updateGoalUI();
}

// Event listener for submitting water intake
waterIntakeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const amount = Number(waterIntakeAmount.value);
    if (amount > 0) {
        waterIntake += amount;
        updateProgressUI();
        updateLogUI(new Date(), amount);
        waterIntakeAmount.value = "";
    }
});

// Event listener for setting goal
goalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const weight = Number(weightInput.value);
    const activityLevel = activityLevelSelect.value;
    dailyGoal = calculateDailyGoal(weight, activityLevel);
    localStorage.setItem("dailyGoal", dailyGoal);
    updateGoalUI();
});

// Function to update the progress bar and progress text
function updateProgressUI() {
    const percentage = Math.round((waterIntake / dailyGoal) * 100);
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${waterIntake} oz / ${dailyGoal} oz`;
}

// Function to update the daily goal UI
function updateGoalUI() {
    const goalText = `Drink ${dailyGoal} oz of water per day based on your weight and activity level`;
    const goalContainer = document.getElementById("goal-container");
    const goalParagraph = goalContainer.querySelector("p");
    if (goalParagraph) {
        goalParagraph.textContent = goalText;
    } else {
        const newGoalParagraph = document.createElement("p");
        newGoalParagraph.textContent = goalText;
        goalContainer.appendChild(newGoalParagraph);
    }
}

// Function to calculate the daily water intake goal based on weight and activity level
function calculateDailyGoal(weight, activityLevel) {
    let goal = 0;
    switch (activityLevel) {
        case "sedentary":
            goal = weight * 0.5;
            break;
        case "moderately-active":
            goal = weight * 0.7;
            break;
        case "very-active":
            goal = weight * 1.0;
            break;
    }
    return goal;
}

// Function to update the water intake log UI
function updateLogUI(date, amount) {
    const dateString = date.toLocaleDateString();
    const newRow = logTableBody.insertRow(0);
    const dateCell = newRow.insertCell(0);
    const amountCell = newRow.insertCell(1);
    dateCell.textContent = dateString;
    amountCell.textContent = amount;
}

// Load any previously saved water intake entries from localStorage
if (localStorage.getItem("waterIntakeEntries")) {
    const waterIntakeEntries = JSON.parse(localStorage.getItem("waterIntakeEntries"));
    waterIntake = waterIntakeEntries.reduce((total, entry) => total + entry.amount, 0);
    updateProgressUI();
    waterIntakeEntries.forEach(entry => updateLogUI(new Date(entry.date), entry.amount));
}

// Save water intake entries
