const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    sidebarClose = document.querySelector(".sidebarClose"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    navicon = document.querySelector(".nav-icon");

// Side Bar ##############################

sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
    console.log("tttt");
    console.log();

});

navicon.addEventListener("click", () => {
    nav.classList.add("active");
    console.log("yyy");
    console.log();

});

body.addEventListener("click", e => {
    let clickedElm = e.target;

    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu") && !clickedElm.classList.contains("nav-icon")) {
        nav.classList.remove("active");
        console.log("hey");
    }
});
