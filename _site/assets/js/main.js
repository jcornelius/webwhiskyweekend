const carousel1Inner = document.querySelectorAll(".carousel-inner")[0];
const carousel1Text = document.querySelectorAll(".carousel-text")[0];
const carousel2Inner = document.querySelectorAll(".carousel-inner")[2];
const carousel2Text = document.querySelectorAll(".carousel-text")[1];
const setHeight = () => {
    carousel1Inner.style.height = carousel1Text.scrollHeight + "px";
    carousel2Inner.style.height = carousel2Text.scrollHeight + "px";
};

window.addEventListener("load", setHeight);
window.addEventListener("resize", setHeight);
