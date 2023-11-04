 setInterval(function () {
    var glitchText = document.querySelector('.glitch-text');
    glitchText.setAttribute('data-text', glitchText.textContent);
}, 2000);

document.querySelector("html").addEventListener("mousemove", function (e) {
    var xpos = e.pageX;
    var ypos = e.pageY;

    document.querySelector("body").classList.add("go");

    var position = {
        left: xpos,
        top: ypos
    };

    var pulseElements = document.querySelectorAll(".pulse");
    pulseElements.forEach(function (element) {
        for (var prop in position) {
            if (position.hasOwnProperty(prop)) {
                element.style[prop] = position[prop] + "px";
            }
        }
    });
});

// model
const openModalBtn = document.getElementById("openModal");
const modal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close")[0];

openModalBtn.addEventListener("click", function () {
    modal.classList.add("active");
});

closeBtn.addEventListener("click", function () {
    modal.classList.remove("active");
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.classList.remove("active");
    }
});


//smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//// Target date (December 2, 2023)
const targetDate = new Date('December 2, 2023 00:00:00').getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(() => {
    // Get current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const timeRemaining = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById('days').textContent = formatTime(days);
    document.getElementById('hours').textContent = formatTime(hours);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);

    // If the countdown is finished, clear the interval
    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
    }
}, 1000);

// Function to format the time with leading zeros
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
//teme to
// Show/hide the back-to-top button based on scroll position
window.addEventListener('scroll', function () {
    var backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Smooth scroll to top when back-to-top button is clicked
document.querySelector('.back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
