const hiragana = [
    { char: 'あ', romanji: 'a' },
    { char: 'い', romanji: 'i' },
    { char: 'う', romanji: 'u' },
    { char: 'え', romanji: 'e' },
    { char: 'お', romanji: 'o' },
    
    { char: 'か', romanji: 'ka' },
    { char: 'き', romanji: 'ki' },
    { char: 'く', romanji: 'ku' },
    { char: 'け', romanji: 'ke' },
    { char: 'こ', romanji: 'ko' },
    
    { char: 'さ', romanji: 'sa' },
    { char: 'し', romanji: 'shi' },
    { char: 'す', romanji: 'su' },
    { char: 'せ', romanji: 'se' },
    { char: 'そ', romanji: 'so' },
    
    { char: 'た', romanji: 'ta' },
    { char: 'ち', romanji: 'chi' },
    { char: 'つ', romanji: 'tsu' },
    { char: 'て', romanji: 'te' },
    { char: 'と', romanji: 'to' },
    
    { char: 'な', romanji: 'na' },
    { char: 'に', romanji: 'ni' },
    { char: 'ぬ', romanji: 'nu' },
    { char: 'ね', romanji: 'ne' },
    { char: 'の', romanji: 'no' },
    
    { char: 'は', romanji: 'ha' },
    { char: 'ひ', romanji: 'hi' },
    { char: 'ふ', romanji: 'fu' },
    { char: 'へ', romanji: 'he' },
    { char: 'ほ', romanji: 'ho' },
    
    { char: 'ま', romanji: 'ma' },
    { char: 'み', romanji: 'mi' },
    { char: 'む', romanji: 'mu' },
    { char: 'め', romanji: 'me' },
    { char: 'も', romanji: 'mo' },
    
    { char: 'や', romanji: 'ya' },
    { char: 'ゆ', romanji: 'yu' },
    { char: 'よ', romanji: 'yo' },
    
    { char: 'ら', romanji: 'ra' },
    { char: 'り', romanji: 'ri' },
    { char: 'る', romanji: 'ru' },
    { char: 'れ', romanji: 're' },
    { char: 'ろ', romanji: 'ro' },
    
    { char: 'わ', romanji: 'wa' },
    { char: 'を', romanji: 'wo' },
    { char: 'ん', romanji: 'n' },
];


const katakana = [
    { char: 'ア', romanji: 'a' },
    { char: 'イ', romanji: 'i' },
    { char: 'ウ', romanji: 'u' },
    { char: 'エ', romanji: 'e' },
    { char: 'オ', romanji: 'o' },
    
    { char: 'カ', romanji: 'ka' },
    { char: 'キ', romanji: 'ki' },
    { char: 'ク', romanji: 'ku' },
    { char: 'ケ', romanji: 'ke' },
    { char: 'コ', romanji: 'ko' },
    
    { char: 'サ', romanji: 'sa' },
    { char: 'シ', romanji: 'shi' },
    { char: 'ス', romanji: 'su' },
    { char: 'セ', romanji: 'se' },
    { char: 'ソ', romanji: 'so' },
    
    { char: 'タ', romanji: 'ta' },
    { char: 'チ', romanji: 'chi' },
    { char: 'ツ', romanji: 'tsu' },
    { char: 'テ', romanji: 'te' },
    { char: 'ト', romanji: 'to' },
    
    { char: 'ナ', romanji: 'na' },
    { char: 'ニ', romanji: 'ni' },
    { char: 'ヌ', romanji: 'nu' },
    { char: 'ネ', romanji: 'ne' },
    { char: 'ノ', romanji: 'no' },
    
    { char: 'ハ', romanji: 'ha' },
    { char: 'ヒ', romanji: 'hi' },
    { char: 'フ', romanji: 'fu' },
    { char: 'ヘ', romanji: 'he' },
    { char: 'ホ', romanji: 'ho' },
    
    { char: 'マ', romanji: 'ma' },
    { char: 'ミ', romanji: 'mi' },
    { char: 'ム', romanji: 'mu' },
    { char: 'メ', romanji: 'me' },
    { char: 'モ', romanji: 'mo' },
    
    { char: 'ヤ', romanji: 'ya' },
    { char: 'ユ', romanji: 'yu' },
    { char: 'ヨ', romanji: 'yo' },
    
    { char: 'ラ', romanji: 'ra' },
    { char: 'リ', romanji: 'ri' },
    { char: 'ル', romanji: 'ru' },
    { char: 'レ', romanji: 're' },
    { char: 'ロ', romanji: 'ro' },
    
    { char: 'ワ', romanji: 'wa' },
    { char: 'ヲ', romanji: 'wo' },
    { char: 'ン', romanji: 'n' },
];


const kanji = [
    { char: '日', romanji: 'hi/nichi', meaning: 'sun, day' },
    { char: '本', romanji: 'hon/moto', meaning: 'book, origin' },
    { char: '人', romanji: 'hito/jin/nin', meaning: 'person' },
    { char: '大', romanji: 'dai/oo', meaning: 'big, large' },
    { char: '年', romanji: 'toshi/nen', meaning: 'year' },
    { char: '中', romanji: 'naka/chuu', meaning: 'inside, middle' },
    { char: '長', romanji: 'naga/chou', meaning: 'long, leader' },
    { char: '出', romanji: 'de/shutsu', meaning: 'exit, go out' },
    { char: '三', romanji: 'san/mi', meaning: 'three' },
    { char: '時', romanji: 'toki/ji', meaning: 'time, hour' },
    { char: '行', romanji: 'i/ko/gyou', meaning: 'go, act' },
    { char: '見', romanji: 'mi/ken', meaning: 'see, look' },
    { char: '月', romanji: 'tsuki/getsu/gatsu', meaning: 'moon, month' },
    { char: '後', romanji: 'ato/go', meaning: 'after, later' },
    { char: '前', romanji: 'mae/zen', meaning: 'before, in front' },
    { char: '生', romanji: 'i/u/shou', meaning: 'life, birth' },
    { char: '五', romanji: 'go/itsu', meaning: 'five' },
    { char: '間', romanji: 'aida/kan', meaning: 'interval, between' },
    { char: '上', romanji: 'ue/jou', meaning: 'up, above' },
    { char: '東', romanji: 'higashi/tou', meaning: 'east' },
    { char: '四', romanji: 'shi/yon', meaning: 'four' },
    { char: '今', romanji: 'ima/kon', meaning: 'now' },
    { char: '金', romanji: 'kane/kin', meaning: 'gold, money' },
    { char: '九', romanji: 'kyuu/ku', meaning: 'nine' },
    { char: '入', romanji: 'hai/nyuu', meaning: 'enter, insert' },
    { char: '学', romanji: 'mana/gaku', meaning: 'study, learning' },
    { char: '高', romanji: 'taka/kou', meaning: 'high, tall' },
    { char: '円', romanji: 'en', meaning: 'yen, circle' },
    { char: '子', romanji: 'ko/shi', meaning: 'child' },
    { char: '外', romanji: 'soto/gai', meaning: 'outside' },
];


function createCard(character, type) {
    const card = document.createElement('div');
    card.className = 'character-card';
    
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <div class="character">${character.char}</div>
            </div>
            <div class="card-back">
                <div class="romanji">${character.romanji}</div>
                ${type === 'kanji' ? `<div class="meaning">${character.meaning}</div>` : ''}
            </div>
        </div>
    `;

    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    return card;
}

function initializeWritingSystems() {
    const tabs = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.character-grid');

    // Populate grids
    const hiraganaGrid = document.querySelector('#hiragana .grid-container');
    const katakanaGrid = document.querySelector('#katakana .grid-container');
    const kanjiGrid = document.querySelector('#kanji .grid-container');

    hiragana.forEach(char => hiraganaGrid.appendChild(createCard(char, 'hiragana')));
    katakana.forEach(char => katakanaGrid.appendChild(createCard(char, 'katakana')));
    kanji.forEach(char => kanjiGrid.appendChild(createCard(char, 'kanji')));

    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeWritingSystems);