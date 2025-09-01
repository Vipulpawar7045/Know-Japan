function createFoodSection() {
    const section = document.createElement('section');
    section.classList.add('food-section');

    const title = document.createElement('h3');
    title.textContent = 'Japanese Food Fun Facts';

    const facts = [
        'Sushi is one of the most famous Japanese dishes, but it originated from a method of preserving fish in fermented rice.',
        'Ramen, a noodle soup dish, was influenced by Chinese cuisine and has become a staple in Japan.',
        'Matcha, a finely ground powder of specially grown green tea, is used in traditional Japanese tea ceremonies.',
        'Tempura, a dish of battered and deep-fried vegetables or seafood, was introduced to Japan by Portuguese missionaries in the 16th century.',
        'Japanese cuisine emphasizes seasonal ingredients and presentation, making it not only delicious but also visually appealing.'
    ];

    const factList = document.createElement('ul');
    facts.forEach(fact => {
        const listItem = document.createElement('li');
        listItem.textContent = fact;
        factList.appendChild(listItem);
    });

    const quizButton = document.createElement('button');
    quizButton.textContent = 'Take a Food Quiz';
    quizButton.addEventListener('click', () => {
        // Logic to trigger the quiz can be added here
        alert('Quiz functionality coming soon!');
    });

    const gotItButton = document.createElement('button');
    gotItButton.textContent = 'Got it!';
    gotItButton.addEventListener('click', () => {
        section.remove();
    });

    section.appendChild(title);
    section.appendChild(factList);
    section.appendChild(quizButton);
    section.appendChild(gotItButton);

    document.body.appendChild(section);
}

export default createFoodSection;