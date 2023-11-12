document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");
    const loginLogoutLink = document.getElementById("login-logout-link");

    // Function to check if the user is logged in
    function checkLoginStatus() {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

        if (isLoggedIn) {
            // If logged in, show "Logout" and allow access to other pages
            loginLogoutLink.textContent = "Logout";
            loginLogoutLink.href = "#"; // Set the logout link to "#" for demonstration purposes
        } else {
            // If not logged in, show "Login" and restrict access to other pages
            loginLogoutLink.textContent = "Login";
            loginLogoutLink.href = "index.html"; // Set the login link to index.html
        }
    }

    // Check login status when the page loads
    checkLoginStatus();

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Replace this with your actual validation logic
        if (username === "your_username" && password === "your_password") {
            // Set login status in sessionStorage
            sessionStorage.setItem("isLoggedIn", "true");
            checkLoginStatus();
        } else {
            errorMessage.textContent = "Incorrect username or password. Please try again.";
        }
    });
});