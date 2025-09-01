function createCultureSection() {
    const section = document.createElement('section');
    section.classList.add('culture-section');

    const title = document.createElement('h3');
    title.textContent = 'Japanese Culture Fun Facts';
    section.appendChild(title);

    const facts = [
        'Japan has a rich cultural heritage that includes traditional arts like tea ceremonies, calligraphy, and flower arranging.',
        'The Japanese language has three writing systems: Hiragana, Katakana, and Kanji.',
        'Sakura (cherry blossoms) are a symbol of spring in Japan and are celebrated with hanami (flower viewing) parties.',
        'Sumo wrestling is a traditional sport in Japan, with a history dating back over a thousand years.',
        'Japanese cuisine emphasizes seasonal ingredients and presentation, with sushi and ramen being popular dishes.'
    ];

    facts.forEach(fact => {
        const p = document.createElement('p');
        p.textContent = fact;
        section.appendChild(p);
    });

    const button = document.createElement('button');
    button.textContent = 'Got it!';
    button.onclick = () => {
        section.style.transition = 'opacity 0.5s';
        section.style.opacity = '0';
        setTimeout(() => section.remove(), 500);
    };
    section.appendChild(button);

    return section;
}

export default createCultureSection;