let navBar = document.querySelector(".navBar");


document.addEventListener("scroll", () => {

    if (window.scrollY > 0) {
        navBar.classList.add("scrolled");

    }
    else {
        navBar.classList.remove("scrolled");
    }
});


