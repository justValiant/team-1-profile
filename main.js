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
function handleDoorClick1() {
    const door = document.querySelector('.door1');
    const doorVideo = document.querySelector('.door-video');
    const doorText = document.querySelector('.door-text');
    const afterPage = document.querySelectorAll('.after');

    door.classList.add('open'); // Add class to trigger the animation
    doorVideo.hidden = false;
    doorVideo.muted = false;
    doorVideo.currentTime = 0; 
    doorVideo.play(); 
    door.style.display = 'none'; 
    door.style.visibility = 'hidden'; // Hide the door after the click
    doorText.textContent = 'HAHAHA! WRONG DOOR!'; 
    afterPage.forEach(el => {
        el.classList.add('page'); // Add class to show the after page
        el.classList.remove('after'); // Add class to show the after page
        pageCounter(); // Update the page counter after the door is clicked
    });

};

function handleDoorClick2() {
    window.location.href = 'forest.html'; // Redirect to a new page
};

function handleDoorClick3() {
    window.location.href = 'index.html'; // Redirect to a new page
};

// Add event listener to the door
document.querySelector('.door1').addEventListener('click', handleDoorClick1);
document.querySelector('.door2').addEventListener('click', handleDoorClick2);
document.querySelector('.door3').addEventListener('click', handleDoorClick3);

