let links = document.querySelectorAll(".links a")
let bodyId = document.querySelector("body").id

for (let link of links) {
     if (link.dataset.active == bodyId) {
         link.classList.add("active")
     }
}

const hamburger = document.querySelector("#hamburger");
    const mainMenu = document.querySelector("#main-menu ul");
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      mainMenu.classList.toggle("open");
    });