document.addEventListener("DOMContentLoaded", function () {
    const usernameSpan = document.getElementById("username");
    const logoutLink = document.getElementById("logout-link");

    // Check if the user is logged in
    const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

    if (isLoggedIn) {
        // Get the logged-in username from sessionStorage
        const loggedInUser = sessionStorage.getItem("loggedInUser");

        // Display the username in the user info container
        usernameSpan.textContent = loggedInUser;

        // Show the logout link
        logoutLink.style.display = "inline";

        // Add a click event listener to the logout link
        logoutLink.addEventListener("click", logout);
    } else {
        // If not logged in, redirect to the login page
        window.location.href = "index.html";
    }


    function logout(event) {
        event.preventDefault();
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('loggedInUser');
        fetch(`/api/v1/user/logout`, {
          method: 'delete',
        }).then(() => (window.location.href = '/'));
      }

});
