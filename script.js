let currentIndex = 0;
const images = ["carousel-image1", "carousel-image2", "carousel-image3"];

function changeImage(direction) {
    document.querySelector(`.${images[currentIndex]}`).style.visibility = "hidden";

    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;

    document.querySelector(`.${images[currentIndex]}`).style.visibility = "visible";
}
