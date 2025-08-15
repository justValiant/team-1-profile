// let songPlaying = false;

function right() {
document.getElementById('scroll-container').scrollBy({
    top: 100,
    behavior: 'smooth',
});
    // // Play the song when scrolling to the right
    // if (!songPlaying) {
    //     console.log('Song started playing');
    //     const song = document.querySelector('.song');
    //     song.play();
    //     songPlaying = true;
    // }
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

// Untuk Keyboard Laptop
document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowRight") {
        right(); // scroll horizontal to the right
    }
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

// Untuk Keyboard Laptop
document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowLeft") {
        left(); // scroll horizontal to the left
    }
});

// Function to update the page number
function pageCounter() {
    let count = document.querySelectorAll('.page').length;
    document.documentElement.style.setProperty('--page-number', count*100 + 'vw');
    console.log(`Total pages: ${count*100}`);
}

pageCounter();


// Function to handle the door click
function handleDoorClick3() {
    window.location.href = 'home.html'; // Redirect to a new page
};

function handleDoorClick4() {
    window.location.href = 'class.html'; // Redirect to a new page
};

// Add event listener to the door
document.querySelector('.door3').addEventListener('click', handleDoorClick3);
document.querySelector('.door4').addEventListener('click', handleDoorClick4);


