const dropdown = document.querySelector(".dropdown");
const subMenu = document.querySelector(".sub-menu");

dropdown.addEventListener("click", () => {

    subMenu.classList.toggle("show-menu");
    dropdown.classList.toggle("open");

});