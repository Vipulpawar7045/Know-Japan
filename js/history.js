const historicalEras = [
    {
        name: "Jomon Period",
        years: "14,500 BCE - 300 BCE",
        description: "Known for pottery and hunter-gatherer lifestyle",
        image: "jomon.jpg",
        achievements: ["Pottery making", "Settlement creation", "Early art"]
    },
    {
        name: "Yayoi Period",
        years: "300 BCE - 300 CE",
        description: "Introduction of rice cultivation and metallurgy",
        image: "yayoi.webp",
        achievements: ["Rice farming", "Bronze tools", "Iron weapons"]
    },
    {
        name: "Heian Period",
        years: "794 - 1185",
        description: "Golden age of Japanese culture and arts",
        image: "heian.jpeg",
        achievements: ["Literature", "Buddhism", "Court culture"]
    },
    {
        name: "Kamakura Period",
        years: "1185 - 1333",
        description: "Feudal system established with samurai rule",
        image: "kamakura.webp",
        achievements: ["Feudal government", "Zen Buddhism", "Mongol invasions"]
    },
    {
        name: "Muromachi Period",
        years: "1336 - 1573",
        description: "Era of the Ashikaga shogunate and flourishing arts",
        image: "muromachi.jpg",
        achievements: ["Noh theatre", "Zen gardens", "Mural painting"]
    },
    {
        name: "Edo Period",
        years: "1603 - 1868",
        description: "Era of isolation, flourishing of the arts, and economic growth",
        image: "edo.jpg",
        achievements: ["Urban development", "Kabuki theatre", "Woodblock printing"]
    },
    {
        name: "Meiji Period",
        years: "1868 - 1912",
        description: "Era of rapid modernization and westernization",
        image: "meiji.avif",
        achievements: ["Industrial revolution", "Constitutional monarchy", "Expansion of education"]
    },
    {
        name: "Taisho Period",
        years: "1912 - 1926",
        description: "A period of political liberalization and artistic innovation",
        image: "taisho.jpg",
        achievements: ["Democratic reforms", "Cultural explosion", "Flourishing of cinema"]
    },
    {
        name: "Showa Period",
        years: "1926 - 1989",
        description: "Era marked by WWII, recovery, and economic growth",
        image: "showa.jpg",
        achievements: ["Post-WWII recovery", "Technological advances", "Cultural exports"]
    },
    {
        name: "Heisei Period",
        years: "1989 - 2019",
        description: "Period of technological innovation and economic challenges",
        image: "heisei.png",
        achievements: ["Internet boom", "Economic stagnation", "Pop culture global influence"]
    },
    {
        name: "Reiwa Period",
        years: "2019 - present",
        description: "The current era, characterized by stability and technological progress",
        image: "reiwa.jpg",
        achievements: ["AI development", "Aging society management", "Global leadership in technology"]
    },
    {
        name: "Modern Period",
        years: "1912 - present",
        description: "Post-WWII economic miracle and global influence",
        image: "modern.jpg",
        achievements: ["Technological advancements", "Economic power", "Cultural export (anime, manga)"]
    }
];


const historyNews = [
    {
        title: "New Archaeological Discovery in Ancient Temple",
        date: "2024-04-20",
        image: "discovery.jpg",
        summary: "Archaeologists uncover hidden chambers in Kyoto temple",
        category: "Archaeology",
        link: "https://www.yahoo.com/news/archaeologists-excavated-ancient-temple-found-133000266.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAAESpQ7rlEKmenCWX_Q-Nt7hC8dpMCV1UjiqS74OJyLA3DDkxriu80Xrae2129HUb-0vblLyQJLSTb7mPif6Rb_aaFF8bHOrWC_K6xU3GU3GO9AZSLdursH3YJ9YaGtljvbaFB5jhckWKbKAxzGwkyPypge2IgDgxBEzW_fY8jEv"
    },
    {
        title: "Digital Recreation of Edo Period Tokyo",
        date: "2024-04-18",
        image: "edo-digital.jpg",
        summary: "Virtual reality project brings historical Tokyo to life",
        category: "Technology",
        link: "https://www.tokyoupdates.metro.tokyo.lg.jp/en/post-735/"
    },
    {
        title: "Tsuzuri Project donates high‑res facsimile of 17th century Nanban screens",
        date: "2025-03-07",
        image: "tsuzuri-facsimile.jpg",
        summary: "Canon and the Kyoto Culture Association have donated a high-resolution replica of the 17th century 'Arrival of the Southern Barbarians' folding screens to the Nagasaki Museum of History and Culture." , // :contentReference[oaicite:0]{index=0}
        category: "Cultural Heritage",
        link: "https://global.canon/en/news/2025/20250307.html"
    },
    {
        title: "Trehalose featured on NHK WORLD’s “CATCH JAPAN” for cultural conservation",
        date: "2025-04-03",
        image: "trehalose-feature.jpg",
        summary: "NHK WORLD’s 'CATCH JAPAN' highlighted the use of trehalose in preserving buried cultural properties through innovative biotech methods." , // :contentReference[oaicite:1]{index=1}
        category: "Media",
        link: "https://group.nagase.com/viita/en/newsroom/news/article/20250403/"
    },
    {
        title: "Samurai armour restored in Japan ahead of Malta’s Expo 2025",
        date: "2025-04-21",
        image: "samurai-armour.jpg",
        summary: "Three 19th‑century samurai suits of armour, gifted to Malta, have been meticulously restored by Kyoto conservators for display at Expo 2025." , // :contentReference[oaicite:2]{index=2}
        category: "Restoration",
        link: "https://tvmnews.mt/en/news/samurai-armour-restored-in-japan-ahead-of-maltas-expo-2025/"
    },
    {
        title: "Condemned manor house gets reprieve as important cultural property",
        date: "2025-04-07",
        image: "soma-residence.jpg",
        summary: "The former Soma family residence in Hakodate, built in 1908, was saved from demolition and designated a national important cultural property, now open as a museum." , // :contentReference[oaicite:3]{index=3}
        category: "Architecture",
        link: "https://english.kyodonews.net/news/2025/04/c98b647a06e9-feature-condemned-manor-house-gets-reprieve-as-important-cultural-property.html"
    },
    {
        title: "Renowned art museum in central Japan to temporarily close for repairs",
        date: "2025-02-25",
        image: "kanazawa-museum.jpg",
        summary: "The 21st Century Museum of Contemporary Art in Kanazawa will shut from May 2027 for seismic and facility upgrades following the 2024 earthquake." , // :contentReference[oaicite:4]{index=4}
        category: "Arts",
        link: "https://english.kyodonews.net/news/2025/02/a6497dc60ae4-renowned-art-museum-in-central-japan-to-temporarily-close-for-repairs.html"
    },
    {
        title: "Japan manga sales top 700 billion yen for first time on digital growth",
        date: "2025-02-25",
        image: "manga-sales.jpg",
        summary: "In 2024, manga sales in Japan reached ¥704.3 billion, driven by a 6% rise in digital formats, marking a fifth consecutive record year." , // :contentReference[oaicite:5]{index=5}
        category: "Economy",
        link: "https://english.kyodonews.net/news/2025/02/8382b018906e-japan-manga-sales-top-700-bil-yen-for-1st-time-on-digital-growth.html"
    },
    {
        title: "Sakai knives a cut above for foreign visitors",
        date: "2025-02-09",
        image: "sakai-knives.jpg",
        summary: "Sales of traditional Sakai blades surpassed ¥100 million in 2023, with tourists drawn by their historical Kofun‑period craftsmanship." , // :contentReference[oaicite:6]{index=6}
        category: "Culture",
        link: "https://english.kyodonews.net/news/2025/02/72618180120f-sakai-knives-a-cut-above-for-foreign-visitors-to-japan.html"
    },
    {
        title: "Treasures of Daikakuji exhibition opens at Tokyo National Museum",
        date: "2025-02-18",
        image: "daikakuji-exhibition.jpg",
        summary: "A special exhibition celebrating the 1150th anniversary of Kyoto’s Daikakuji temple showcases monzeki temple treasures at the Tokyo National Museum." , // :contentReference[oaicite:7]{index=7}
        category: "Exhibition",
        link: "https://japan-forward.com/exhibition-discovering-daikakuji-kyotos-hidden-cultural-gem/"
    }
];


function createEraCard(era) {
    return `
        <div class="era-card">
            <div class="era-image">
                <img src="assets/history/${era.image}" alt="${era.name}">
            </div>
            <div class="era-content">
                <div class="era-years">${era.years}</div>
                <h3>${era.name}</h3>
                <p>${era.description}</p>
                <ul>
                    ${era.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

function createNewsCard(news) {
    return `
        <div class="news-card">
            <div class="news-image">
                <img src="assets/history/${news.image}" alt="${news.title}">
            </div>
            <div class="news-content">
                <div class="news-date">${new Date(news.date).toLocaleDateString()}</div>
                <h3>${news.title}</h3>
                <p>${news.summary}</p>
                <span class="category-tag">${news.category}</span>
                <a href="${news.link}" class="read-more">Read More →</a>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    // Populate era cards
    const eraContainer = document.getElementById('era-container');
    eraContainer.innerHTML = historicalEras.map(createEraCard).join('');

    // Populate news cards
    const newsGrid = document.getElementById('news-grid');
    newsGrid.innerHTML = historyNews.map(createNewsCard).join('');

    // Horizontal scroll buttons
    const scrollBtns = document.querySelectorAll('.scroll-btn');
    scrollBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const direction = btn.classList.contains('left') ? -1 : 1;
            eraContainer.scrollBy({ left: 300 * direction, behavior: 'smooth' });
        });
    });
});