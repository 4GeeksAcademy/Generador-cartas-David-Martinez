//write your code here
// 1. Selección de elementos
const card = document.getElementById('card');
const btnGenerate = document.getElementById('btnGenerate');
const btnAuto = document.getElementById('btnAuto');
const btnStop = document.getElementById('btnStop');

// 2. Datos de las cartas
const suits = [
    { symbol: '♠', color: 'black' },
    { symbol: '♣', color: 'black' },
    { symbol: '♥', color: 'red' },
    { symbol: '♦', color: 'red' }
];

const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// 3. Personajes 
const characterImages = {
    'A': 'https://images5.alphacoders.com/139/thumb-1920-1391452.jpg', // Luffy
    'K': 'https://images.alphacoders.com/130/thumb-1920-1303965.jpeg', // Zoro
    'Q': 'https://images5.alphacoders.com/130/thumb-1920-1304215.png', // Nami
    'J': 'https://artfiles.alphacoders.com/160/thumb-1920-160868.jpeg', // Sanji
    '10': 'https://images8.alphacoders.com/125/thumb-1920-1258439.jpg', // Law
    '9': 'https://images2.alphacoders.com/649/thumb-1920-649995.jpg', // Ace
    '8': 'https://images3.alphacoders.com/788/thumb-1920-788709.jpg', // Sabo
    '7': 'https://avatarfiles.alphacoders.com/286/thumb-1920-286547.jpg', // Franky
    '6': 'https://images6.alphacoders.com/937/thumb-1920-937800.png', // Robin
    '5': 'https://mfiles.alphacoders.com/957/thumb-1920-957829.jpg', // Chopper
    '4': 'https://images3.alphacoders.com/138/thumb-1920-1380225.png', // Usopp
    '3': 'https://avatarfiles.alphacoders.com/376/thumb-1920-376001.jpeg', // Brook
    '2': 'https://images.alphacoders.com/939/thumb-1920-939909.png'  // Jinbe
};

let autoInterval = null;

// 4. Funciones base 
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function generateRandomCard() {
    const randomSuit = suits[getRandomNumber(suits.length)];
    const randomValue = values[getRandomNumber(values.length)];
    const randomImg = characterImages[randomValue];

    renderCard(randomSuit, randomValue, randomImg);
}

function renderCard(suit, value, image) {
    // Actualizar números y palos en todas las esquinas
    const numbers = document.querySelectorAll('.number');
    const suitIcons = document.querySelectorAll('.suit');
    
    numbers.forEach(el => el.textContent = value);
    suitIcons.forEach(el => el.textContent = suit.symbol);
    
    // Aplicar clase de color (red o black)
    card.className = 'card ' + suit.color;
    
    // Cambiar imagen de fondo
    card.style.backgroundImage = `url('${image}')`;
    
    // Animación de impacto
    card.style.transform = 'scale(0.8) translateY(20px)';
    setTimeout(() => {
        card.style.transform = 'scale(1) translateY(0)';
    }, 150);
}

// 5. Eventos
btnGenerate.onclick = generateRandomCard;

btnAuto.onclick = () => {
    if (autoInterval) return;
    autoInterval = setInterval(generateRandomCard, 2000);
    btnAuto.style.background = "#fff";
    btnAuto.textContent = "⏱️ AUTO...";
};

btnStop.onclick = () => {
    clearInterval(autoInterval);
    autoInterval = null;
    btnAuto.style.background = "#f1c40f";
    btnAuto.textContent = "Modo Automático";
};

// Primera carta al cargar
generateRandomCard();