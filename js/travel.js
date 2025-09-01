const locations = [
    {
        name: "Tokyo",
        region: "Kanto",
        image: "tokyo.jpg",
        description: "Modern metropolis blending tradition and innovation.",
        mapUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        bookingUrl: "https://www.booking.com/city/jp/tokyo.html",
        reviewUrl: "https://www.tripadvisor.com/Tourism-g298184-Tokyo_Tokyo_Prefecture_Kanto-Vacations.html",
        rating: 4.8,
        bestSeason: "Spring/Fall"
    },
    {
        name: "Kyoto",
        region: "Kansai",
        image: "kyoto.jpg",
        description: "Ancient capital with over 1,600 Buddhist temples.",
        mapUrl: "https://goo.gl/maps/QphZf3qPtdyKz4pH7",
        bookingUrl: "https://www.booking.com/city/jp/kyoto.html",
        reviewUrl: "https://www.tripadvisor.com/Tourism-g298564-Kyoto_Kyoto_Prefecture_Kinki-Vacations.html",
        rating: 4.7,
        bestSeason: "Spring/Fall"
    },
    {
        name: "Osaka",
        region: "Kansai",
        image: "osaka.jpg",
        description: "Vibrant city known for its modern architecture and street food.",
        mapUrl: "https://goo.gl/maps/3Vv5x6t5e5P2",
        bookingUrl: "https://www.booking.com/city/jp/osaka.html",
        reviewUrl: "https://www.tripadvisor.com/Tourism-g298566-Osaka_Osaka_Prefecture_Kinki-Vacations.html",
        rating: 4.6,
        bestSeason: "Spring/Autumn"
    },
    {
        name: "Hiroshima",
        region: "Chugoku",
        image: "hiroshima.jpg",
        description: "Historic city known for its Peace Memorial Park and vibrant culture.",
        mapUrl: "https://goo.gl/maps/1c8f5e5e5e5e",
        bookingUrl: "https://www.booking.com/city/jp/hiroshima.html",
        reviewUrl: "https://www.tripadvisor.com/Tourism-g298561-Hiroshima_Hiroshima_Prefecture_Chugoku-Vacations.html",
        rating: 4.5,
        bestSeason: "Spring/Autumn"
    },
    {
        name: "Nara",
        region: "Kansai",
        image: "nara.jpg",
        description: "Home to ancient temples and friendly deer roaming Nara Park.",
        mapUrl: "https://goo.gl/maps/5e5e5e5e5e5e",
        bookingUrl: "https://www.booking.com/city/jp/nara.html",
        reviewUrl: "https://www.tripadvisor.com/Tourism-g298198-Nara_Nara_Prefecture_Kinki-Vacations.html",
        rating: 4.6,
        bestSeason: "Spring/Autumn"
    },
    {
        name: "Sapporo",
        region: "Hokkaido",
        image: "sapporo.jpg",
        description: "Capital of Hokkaido, famous for its annual snow festival.",
        mapUrl: "https://goo.gl/maps/6e6e6e6e6e6e",
        bookingUrl: "https://www.booking.com/city/jp/sapporo.html",
        reviewUrl: "https://www.tripadvisor.com/Tourism-g298560-Sapporo_Hokkaido-Vacations.html",
        rating: 4.5,
        bestSeason: "Winter"
    },
    {
        name: "Fukuoka",
        region: "Kyushu",
        image: "fukuoka.jpg",
        description: "Bustling city known for its ancient temples and beaches.",
        mapUrl: "https://goo.gl/maps/7e7e7e7e7e7e",
        bookingUrl: "https://www.booking.com/city/jp/fukuoka.html",
        reviewUrl: "https://www.tripadvisor.com/Tourism-g298207-Fukuoka_Fukuoka_Prefecture_Kyushu-Vacations.html",
        rating: 4.4,
        bestSeason: "Spring/Autumn"
    },
    {
        name: "Nagoya",
        region: "Chubu",
        image: "nagoya.jpg",
        description: "Industrial hub with rich history and cultural sites.",
        mapUrl: "https://goo.gl/maps/8e8e8e8e8e8e",
        bookingUrl: "https://www.booking.com/city/jp/nagoya.html",
        reviewUrl: "https://www.tripadvisor.com/Tourism-g298106-Nagoya_Aichi_Prefecture_Tokai_Chubu-Vacations.html",
        rating: 4.3,
        bestSeason: "Spring/Autumn"
    },
    {
        name: "Kobe",
        region: "Kansai",
        image: "kobe.jpg",
        description: "Port city known for its signature marbled beef and scenic harbor.",
        mapUrl: "https://goo.gl/maps/9e9e9e9e9e9e",
        bookingUrl: "https://www.booking.com/city/jp/kobe.html",
        reviewUrl: "https://www.tripadvisor.com/Tourism-g298562-Kobe_Hyogo_Prefecture_Kinki-Vacations.html",
        rating: 4.4,
        bestSeason: "Spring/Autumn"
    },
    {
        name: "Yokohama",
        region: "Kanto",
        image: "yokohama.jpg",
        description: "Major port city with a vibrant waterfront and Chinatown.",
        mapUrl: "https://goo.gl/maps/0e0e0e0e0e0e",
        bookingUrl: "https://www.booking.com/city/jp/yokohama.html",
        reviewUrl: "https://www.tripadvisor.com/Tourism-g298173-Yokohama_Kanagawa_Prefecture_Kanto-Vacations.html",
        rating: 4.3,
        bestSeason: "Spring/Autumn"
    },
    {
        name: "Hakone",
        region: "Kanto",
        image: "hakone.jpg",
        description: "Scenic hot spring town known for views of Mt. Fuji and Lake Ashi.",
        mapUrl: "https://goo.gl/maps/YyG4P48iQzL2",
        bookingUrl: "https://www.booking.com/city/jp/hakone.html",
        reviewUrl: "https://www.tripadvisor.com/Tourism-g298171-Hakone_machi_Ashigarashimo_gun_Kanagawa_Prefecture_Kanto-Vacations.html",
        rating: 4.6,
        bestSeason: "Spring/Autumn"
    },
    {
        name: "Nikko",
        region: "Kanto",
        image: "",
        description: "Historical city home to ornate shrines and scenic national parks.",
        mapUrl: "https://goo.gl/maps/4Goxhx6aJGrjeWpt5",
        bookingUrl: "https://www.booking.com/city/jp/nikko.html",
        reviewUrl: "https://www.tripadvisor.com/Tourism-g298182-Nikko_Tochigi_Prefecture_Kanto-Vacations.html",
        rating: 4.5,
        bestSeason: "Autumn"
    }
];


function createLocationCard(location) {
    const card = document.createElement('div');
    card.className = 'location-card';
    
    card.innerHTML = `
        <div class="location-image">
        </div>
        <div class="location-info">
            <h2 class="location-name">${location.name}</h2>
            <div class="location-region">${location.region}</div>
            <p>${location.description}</p>
            <div class="location-rating">
                ${'⭐'.repeat(Math.floor(location.rating))} ${location.rating}
            </div>
            <div class="button-group">
                <a href="${location.mapUrl}" target="_blank" class="card-btn map-btn">Map</a>
                <a href="${location.bookingUrl}" target="_blank" class="card-btn book-btn">Book</a>
                <a href="${location.reviewUrl}" target="_blank" class="card-btn review-btn">Reviews</a>
                <button class="card-btn info-btn" onclick="showDetails('${location.name}')">More Info</button>
            </div>
        </div>
    `;
    
    return card;
}

function renderLocations(filteredLocations = locations) {
    const grid = document.getElementById('locationsGrid');
    grid.innerHTML = '';
    filteredLocations.forEach(location => {
        grid.appendChild(createLocationCard(location));
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('locationSearch');
    const regionFilter = document.getElementById('regionFilter');

    function filterLocations() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedRegion = regionFilter.value;

        const filtered = locations.filter(location => {
            const matchesSearch = location.name.toLowerCase().includes(searchTerm) ||
                                location.description.toLowerCase().includes(searchTerm);
            const matchesRegion = selectedRegion === 'all' || location.region === selectedRegion;
            return matchesSearch && matchesRegion;
        });

        renderLocations(filtered);
    }

    searchInput.addEventListener('input', filterLocations);
    regionFilter.addEventListener('change', filterLocations);
}

document.addEventListener('DOMContentLoaded', () => {
    renderLocations();
    initializeSearch();
});

function showDetails(locationName) {
    // Implement modal or expandable card functionality
    console.log(`Showing details for ${locationName}`);
}