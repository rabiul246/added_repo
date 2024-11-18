// JavaScript code for form submission handling
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple form validation (for demonstration)
    if (username === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert(`Logged in as ${username}`);
    }
});
