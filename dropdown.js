const dropdown = document.querySelector(".dropdown");
const subMenu = document.querySelector(".sub-menu");

dropdown.addEventListener("click", () => {

    subMenu.classList.toggle("show-menu");
    dropdown.classList.toggle("open");

});

document.addEventListener("click", (event) => {

    const targetElement = event.target;

    if (!dropdown.contains(targetElement)  && !subMenu.contains(targetElement)){

        dropdown.classList.remove("open");
        subMenu.classList.remove("show-menu");

    };

});