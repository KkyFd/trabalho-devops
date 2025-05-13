let currentIndex = 0;
const images = ["carousel-image1", "carousel-image2", "carousel-image3", "carousel-image4"];

function changeImage(direction) {
    document.querySelector(`.${images[currentIndex]}`).style.display = "none";

    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;

    document.querySelector(`.${images[currentIndex]}`).style.display = "block";
}

setInterval(() => changeImage(1), 3000);