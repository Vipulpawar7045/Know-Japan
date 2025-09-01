function createLanguageSection() {
    const section = document.createElement('section');
    section.classList.add('language-section');

    const title = document.createElement('h3');
    title.textContent = 'Learn About the Japanese Language';
    section.appendChild(title);

    const fact = document.createElement('p');
    fact.textContent = 'Did you know that Japanese has three writing systems: Hiragana, Katakana, and Kanji?';
    section.appendChild(fact);

    const quizButton = document.createElement('button');
    quizButton.textContent = 'Take a Quiz!';
    quizButton.onclick = function() {
        // Logic to trigger quiz functionality
        alert('Quiz functionality is not implemented yet.');
    };
    section.appendChild(quizButton);

    const gotItButton = document.createElement('button');
    gotItButton.textContent = 'Got it!';
    gotItButton.onclick = function() {
        section.style.transition = 'opacity 0.5s';
        section.style.opacity = '0';
        setTimeout(() => {
            section.remove();
        }, 500);
    };
    section.appendChild(gotItButton);

    document.body.appendChild(section);
}

export default createLanguageSection;