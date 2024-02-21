const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

btn.addEventListener('click', () => {
    const random = randomColor();
    document.body.style.background = colors[random];
    color.textContent = colors[random];
});

const randomColor = () => Math.floor(Math.random() * colors.length);