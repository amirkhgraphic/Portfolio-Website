function toggleNavbar () {
    var element = document.getElementById("menu-content");
    element.classList.toggle("show");

    if (element.classList.contains("show")) {
        element.style.top = "64px"
        element.style.zIndex = "4"
    } else {
        element.style.top = "-200px"
    }
}


let s = (ms) => new Promise(resolve => setTimeout(resolve, ms));
async function sleep (ms) {await s(ms)}

const elements = document.getElementsByClassName("link");
const pressed = e => {
const linkTextElement = e.target.closest('.link').querySelector('.link-text');
if (linkTextElement) {
    const text = linkTextElement.textContent;
    navigator.clipboard.writeText(text);
}
}
for (let elem of elements) {
elem.addEventListener('click', pressed);
}


function handleScreenWidthChange() {
const screenWidth = window.innerWidth;
const menuContent = document.getElementById("menu-content")

if (screenWidth > 768) {
    if (menuContent.classList.contains("show")) {
    menuContent.classList.remove("show");
    }
}
}
window.addEventListener("resize", handleScreenWidthChange);

function handleScroll() {
const header = document.getElementById("navbar");
const scrollPosition = window.scrollY;

const stickyThreshold = 100;

if (scrollPosition > stickyThreshold) {
    header.classList.add("sticky-header");
} else {
    
    header.classList.remove("sticky-header");
}
if (menuContent.classList.contains("show")) {
    menuContent.classList.remove("show")
}
}

window.addEventListener("scroll", handleScroll);

function removeSticky() {
const header = document.getElementsByTagName("header")
if (header.classList.contains("sticky-header")) {
    header.classList.remove("sticky-header")
}
}