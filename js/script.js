const cord = document.getElementById("cord");

let lampOn = false;
let dragging = false;
let startY = 0;
let pull = 0;

const clickSound = new Audio("assets/audio/click.mp3");
clickSound.volume = 0.6;

cord.addEventListener("mousedown", startDrag);
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", stopDrag);

cord.addEventListener("touchstart", startDrag, { passive: false });
document.addEventListener("touchmove", drag, { passive: false });
document.addEventListener("touchend", stopDrag);

function startDrag(e) {
    dragging = true;
    startY = getY(e);
    cord.style.transition = "none";
}

function drag(e) {
    if (!dragging) return;

    e.preventDefault();

    pull = getY(e) - startY;
    pull = Math.max(0, Math.min(110, pull));

    cord.style.height = 180 + pull + "px";
}

function stopDrag() {
    if (!dragging) return;

    dragging = false;

    if (pull > 70) {
        lampOn = !lampOn;

        clickSound.currentTime = 0;
        clickSound.play().catch(() => { });

        setTimeout(() => {
            document.body.classList.toggle("light-on", lampOn);
        }, 120);
    }

    cord.style.transition = "0.45s ease";
    cord.style.height = "180px";
    pull = 0;
}

function getY(e) {
    return e.touches ? e.touches[0].clientY : e.clientY;
}