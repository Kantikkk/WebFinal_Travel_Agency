document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute('data-src')
        document.querySelector('.about .video-container .video').src = src;
    }
})

const musicToggle1 = document.getElementById('music-toggle1');
const musicToggle2 = document.getElementById('music-toggle2');
const audio = new Audio('homepage/music/6a85193cd5495ab.mp3');
let isPlaying = false;

musicToggle1.addEventListener('click', function (event) {
    event.preventDefault();
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
});

musicToggle2.addEventListener('click', function (event) {
    event.preventDefault();
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
});


const bookNowLink = document.getElementById('book-now-link');

function addPulseAnimation() {
    bookNowLink.classList.add('pulse');
}

function removePulseAnimation() {
    bookNowLink.classList.remove('pulse');
}

function handleScroll() {
    addPulseAnimation();

    clearTimeout(scrollTimeout);
    const scrollTimeout = setTimeout(() => {
        removePulseAnimation();
    }, 5000);
}

window.addEventListener('load', addPulseAnimation);

window.addEventListener('scroll', handleScroll);


function myFunction() {
    var x = document.getElementById("myDIV");
    var computedStyle = window.getComputedStyle(x);
    var button = document.querySelector(".btn");

    if (computedStyle.display === "none") {
        x.style.display = "block";
        var height = x.scrollHeight;
        x.style.height = "0";
        setTimeout(function () {
            x.style.height = height + "px";
        }, 10);
        button.innerHTML = "Hide";
    } else {
        x.style.height = "0";
        setTimeout(function () {
            x.style.display = "none";
        }, 500);
        button.innerHTML = "Click to see the gallery";
    }
}