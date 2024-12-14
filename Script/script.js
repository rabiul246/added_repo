// Highlight Active Navbar Link
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});

// Form Alerts
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login Successful!");
});

document.getElementById("registerForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Registration Successful!");
});
