document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const errorMessage = document.getElementById("error-message");
    const loginLogoutLink = document.getElementById("login-logout-link");

    


    // Function to check if the user is logged in
    function checkLoginStatus(msg) {
        console.log(msg);
        const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";
        console.log(isLoggedIn);
        if (isLoggedIn) {
            // If logged in, show "Logout" and allow access to other pages
            loginLogoutLink.textContent = "Logout";
            loginLogoutLink.href = "#"; // Set the logout link to "#" for demonstration purposes
            loginLogoutLink.addEventListener("click", logout);
            if (window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '/Register' || window.location.pathname === 'Create User.html')
                window.location.href = '/Inventory'
            //            window.location.href = "/Inventory"; 
        } else {
            // If not logged in, show "Login" and restrict access to other pages
            loginLogoutLink.textContent = "Login";
            loginLogoutLink.href = "index.html"; // Set the login link to index.html
        }
    }

    function logout() {
        sessionStorage.removeItem('isLoggedIn');
        fetch(`/api/v1/user/logout`, {
          method: 'delete',
        }).then(() => (window.location.href = '/'));
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
    
    async function createUser(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        let response = await fetch("/api/v1/user/create", {
            method: 'post',
            body: JSON.stringify({ email: username, password: password }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
          if (response.ok) {
            response = await response.json();
            console.log(response)
            sessionStorage.setItem("isLoggedIn", "true");
            sessionStorage.setItem("loggedInUser", username)
            checkLoginStatus();
          } else {
            errorMessage.textContent = "Incorrect username or password. Please try again.";

          }

    }

    signupForm.addEventListener("submit", createUser);


});
