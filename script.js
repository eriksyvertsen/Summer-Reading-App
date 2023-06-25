// Array to store reading logs
let readingLogs = [];

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Get input values
    const bookTitle = document.getElementById('book-title').value;
    const author = document.getElementById('author').value;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;

    // Validate inputs
    if (bookTitle.trim() === '' || author.trim() === '' || startTime === '' || endTime === '') {
        alert('Please fill out all fields');
        return;
    }

    // Create a new reading log object
    const newLog = {
        bookTitle,
        author,
        startTime,
        endTime
    };

    // Add the new reading log to the array
    readingLogs.push(newLog);

    // Clear form inputs
    document.getElementById('book-title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('start-time').value = '';
    document.getElementById('end-time').value = '';

    // Display the updated reading logs
    displayReadingLogs();
}

// Function to display reading logs
function displayReadingLogs() {
    const readingLogsSection = document.getElementById('reading-logs');

    // Clear any existing logs
    readingLogsSection.innerHTML = '';

    // Iterate over readingLogs array and generate HTML for each log
    readingLogs.forEach((log, index) => {
        const logHtml = `
            <div class="log">
                <h3>${log.bookTitle}</h3>
                <p><strong>Author:</strong> ${log.author}</p>
                <p><strong>Start Time:</strong> ${log.startTime}</p>
                <p><strong>End Time:</strong> ${log.endTime}</p>
            </div>
        `;

        // Append each log HTML to the reading logs section
        readingLogsSection.innerHTML += logHtml;
    });
}

// Event listener for form submission
document.getElementById('reading-log-form').addEventListener('submit', handleFormSubmit);
