// Add scroll event listener to change navbar background color on scroll
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    
    if (window.scrollY > 100) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
});
