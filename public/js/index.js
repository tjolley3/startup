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

    function frontendServiceCall(){
        fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
        console.log("callFromFrontend", data)
        const quote1div = document.getElementById("quote1");
        const para = document.createElement("p");
        const node = document.createTextNode(data.content);
        para.appendChild(node);
        quote1div.appendChild(para);

        });


    }

    function backendServiceCall(){
        fetch('/api/v1/random-quote')
        .then((response) => response.json())
        .then((data) => {
        console.log("callFromBackend", data)
        const quote2div = document.getElementById("quote2");
        const para = document.createElement("p");
        const node = document.createTextNode(data.content);
        para.appendChild(node);
        quote2div.appendChild(para);
      
        });


    }

    // Check login status when the page loads
    checkLoginStatus();
    frontendServiceCall();
    backendServiceCall();

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
