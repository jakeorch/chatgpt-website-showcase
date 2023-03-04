// get current date and time for local timezone
function getCurrentTime() {
    return new Date().toLocaleString();
}

// update the local time display
function updateLocalTime() {
    const localTimeElement = document.getElementById("local-time");
    localTimeElement.textContent = getCurrentTime();
}

// update the selected timezone display
function updateSelectedTimezone() {
    const selectedTimezoneElement = document.getElementById("selected-time");
    const selectedTimezone = document.getElementById("timezone-select").value;
    const timezoneDate = new Date().toLocaleString("en-US", { timeZone: selectedTimezone });
    selectedTimezoneElement.textContent = timezoneDate;
}

// add event listener for copy to clipboard button
function addCopyToClipboardListener() {
    const copyToClipboardButton = document.getElementById("copy-to-clipboard");
    copyToClipboardButton.addEventListener("click", function () {
        const selectedTimezone = document.getElementById("timezone-select").value;
        const timezoneDate = new Date().toLocaleString("en-US", { timeZone: selectedTimezone });
        navigator.clipboard.writeText(timezoneDate);
    });
}

// add event listener for timezone select dropdown
function addTimezoneSelectListener() {
    const timezoneSelect = document.getElementById("timezone-select");
    timezoneSelect.addEventListener("change", updateSelectedTimezone);
}

// update the time displays every second
setInterval(updateLocalTime, 1000);
setInterval(updateSelectedTimezone, 1000);

// call functions to initialize the website
updateLocalTime();
updateSelectedTimezone();
addCopyToClipboardListener();
addTimezoneSelectListener();
