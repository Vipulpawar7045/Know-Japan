// This file tracks the user's progress by counting how many sections have been revealed and updating the progress counter displayed on the page.

let progressCount = 0;

function updateProgress() {
    const progressCounter = document.getElementById('progress-counter');
    if (progressCounter) {
        progressCounter.textContent = `Sections Revealed: ${progressCount}`;
    }
}

function incrementProgress() {
    progressCount++;
    updateProgress();
}

function resetProgress() {
    progressCount = 0;
    updateProgress();
}

// Expose functions to be used in other modules
export { incrementProgress, resetProgress };