// Updates the main image source and the active thumbnail border.
let currentPos = 0;
const list = ["assets/images/img1.jpg", "assets/images/img1.jpg", "assets/images/img1.jpg", "assets/images/img1.jpg", "assets/images/img1.jpg"];

const viewer = document.getElementById('view-img');
const zoomer = document.getElementById('zoom-box');
const thumbs = document.querySelectorAll('.mini');

function pickImage(url, index) {
    currentPos = index;
    viewer.src = url;
    zoomer.style.backgroundImage = `url('${url}')`;
    
    thumbs.forEach((t, i) => {
        t.classList.toggle('active', i === index);
    });
}

function changeStep(n) {
    currentPos += n;
    if (currentPos >= list.length) currentPos = 0;
    if (currentPos < 0) currentPos = list.length - 1;
    pickImage(list[currentPos], currentPos);
}

document.querySelector('.main-display').addEventListener('mousemove', function(e) {
    let rect = this.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    
    let xPercent = (x / rect.width) * 100;
    let yPercent = (y / rect.height) * 100;
    
    zoomer.style.backgroundPosition = xPercent + '% ' + yPercent + '%';
    zoomer.style.backgroundSize = (rect.width * 2) + 'px';
});

pickImage(list[0], 0);