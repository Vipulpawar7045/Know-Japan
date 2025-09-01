// This file serves as the main entry point for the JavaScript code, initializing event listeners for the topic cards and handling the creation of new sections when buttons are clicked.

document.addEventListener('DOMContentLoaded', () => {
    const progressCounter = document.getElementById('progress-counter');
    let sectionsRevealed = 0;

    const topicButtons = document.querySelectorAll('.topic-button');
    topicButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const topic = event.target.dataset.topic;
            createSection(topic);
        });
    });

    function createSection(topic) {
        let sectionContent;

        switch (topic) {
            case 'language':
                sectionContent = language.createSection();
                break;
            case 'culture':
                sectionContent = culture.createSection();
                break;
            case 'food':
                sectionContent = food.createSection();
                break;
            case 'travel':
                sectionContent = travel.createSection();
                break;
            case 'history':
                sectionContent = history.createSection();
                break;
            default:
                return;
        }

        const main = document.querySelector('main');
        const newSection = document.createElement('div');
        newSection.classList.add('dynamic-section');
        newSection.innerHTML = sectionContent;

        const gotItButton = document.createElement('button');
        gotItButton.textContent = 'Got it!';
        gotItButton.classList.add('got-it-button');
        gotItButton.addEventListener('click', () => {
            newSection.classList.add('fade-out');
            setTimeout(() => {
                newSection.remove();
                sectionsRevealed--;
                updateProgressCounter();
            }, 300);
        });

        newSection.appendChild(gotItButton);
        main.appendChild(newSection);
        sectionsRevealed++;
        updateProgressCounter();
    }

    function updateProgressCounter() {
        progressCounter.textContent = `Sections Revealed: ${sectionsRevealed}`;
    }
});