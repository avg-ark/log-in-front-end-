const cord = document.getElementById("cord");
const form = document.querySelector("form");

let isDragging = false;
let startY = 0;
let currentY = 0;

cord.addEventListener("mousedown", startDrag);
document.addEventListener("mousemove", dragCord);
document.addEventListener("mouseup", stopDrag);

cord.addEventListener("touchstart", startDrag);
document.addEventListener("touchmove", dragCord);
document.addEventListener("touchend", stopDrag);

function startDrag(event) {
    isDragging = true;
    startY = getY(event);
    cord.style.transition = "none";
}

function dragCord(event) {
    if (!isDragging) return;

    currentY = getY(event) - startY;

    if (currentY < 0) currentY = 0;
    if (currentY > 120) currentY = 120;

    cord.style.transform = `translateX(-50%) translateY(${currentY}px)`;

    if (currentY > 75) {
        document.body.classList.add("light-on");
    }
}

function stopDrag() {
    if (!isDragging) return;

    isDragging = false;
    cord.style.transition = "0.5s ease";
    cord.style.transform = "translateX(-50%) translateY(0)";
}

function getY(event) {
    if (event.touches) {
        return event.touches[0].clientY;
    }

    return event.clientY;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Login clicked");
});