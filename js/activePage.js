/* const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('ul a').forEach(link => {
    link.classList.remove('active');
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active');
        console.log(link);
    }
}) */


let links = document.querySelectorAll(".links a")
let bodyId = document.querySelector("body").id

for (let link of links) {
    if (link.dataset.active == bodyId) {
        link.classList.add("active")
    }
}