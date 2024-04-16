const title = document.getElementById('rainbow-title');
const bookTitle = document.getElementById('rainbow-book');
const flowersTitle = document.getElementById('rainbow-flowers');
const loveLetterTitle = document.getElementById('rainbow-love-letter');
const girlfriendTitle = document.getElementById('rainbow-heart'); // Nuevo título
let hue = 0;

setInterval(() => {
    hue = (hue + 1) % 360;
    title.style.color = `hsl(${hue}, 100%, 50%)`;
    bookTitle.style.color = `hsl(${hue}, 100%, 50%)`;
    flowersTitle.style.color = `hsl(${hue}, 100%, 50%)`;
    loveLetterTitle.style.color = `hsl(${hue}, 100%, 50%)`; 
    girlfriendTitle.style.color = `hsl(${hue}, 100%, 50%)`; // Aplicar el efecto arcoíris al título
}, 100);
