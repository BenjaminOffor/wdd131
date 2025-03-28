// Wait for the DOM to load before running JavaScript
document.addEventListener("DOMContentLoaded", function () {

    // 1️⃣ Mobile Menu Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("open");

        // Change the menu icon
        if (navMenu.classList.contains("open")) {
            menuToggle.textContent = "✖"; // X for close
        } else {
            menuToggle.textContent = "☰"; // Hamburger icon
        }
    });

    // 2️⃣ Update Footer with Copyright Year
    document.getElementById("year").textContent = new Date().getFullYear();

    // 3️⃣ Update Last Modified Date in Footer
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});
