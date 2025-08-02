function right() {
document.getElementById('scroll-container').scrollBy({
    top: 100,
    behavior: 'smooth'
});
}

function left() {
document.getElementById('scroll-container').scrollBy({
    top: -100,
    behavior: 'smooth'
});
}

const box = document.getElementById('scroll-container');
let lastScrollLeft = 0;

const scrollDiv = document.getElementById('scroll-container');
let lastScrollTop = 0;
let scrollTimeout;

scrollDiv.addEventListener('scroll', function () {
    const currentScrollTop = scrollDiv.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        document.getElementById('slime').className = "box right";
        console.log('Scroll ke Kanan');
    } else if (currentScrollTop < lastScrollTop) {
        document.getElementById('slime').className = "box left";
        console.log('Scroll ke Kiri');
    }

    lastScrollTop = currentScrollTop;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        console.log('Berhenti scrolling');
        document.getElementById('slime').className = "box idle"; // ganti class untuk efek berhenti
      // aksi lain saat berhenti
    }, 100); // waktu berhenti setelah 150ms
    
});

/* Right Button Mouse*/
const buttonRight = document.getElementById("right");
let interval;

buttonRight.addEventListener("mousedown", () => {
    interval = setInterval(() => {right(); // scroll horizontal ke kanan
    }, 30);
});

buttonRight.addEventListener("mouseup", () => {
    clearInterval(interval);
});

// Untuk layar sentuh (HP)
buttonRight.addEventListener("touchstart", () => {
    interval = setInterval(() => {right();
    }, 30);
});

buttonRight.addEventListener("touchend", () => {
    clearInterval(interval);
});

/*Left Button Mouse*/
const buttonLeft = document.getElementById('left');
buttonLeft.addEventListener("mousedown", () => {
    interval = setInterval(() => {left(); // scroll horizontal ke kanan
    }, 30);
});

buttonLeft.addEventListener("mouseup", () => {
    clearInterval(interval);
});

// Untuk layar sentuh (HP)
buttonLeft.addEventListener("touchstart", () => {
    interval = setInterval(() => {left();
    }, 30);
});

buttonLeft.addEventListener("touchend", () => {
    clearInterval(interval);
});
