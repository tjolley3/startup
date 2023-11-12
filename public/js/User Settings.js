document.addEventListener("DOMContentLoaded", function () {
    // Replace the following lines with JavaScript to populate user information
    const userFirstName = "John";
    const userLastName = "Doe";
    const userEmail = "john.doe@example.com";

    // Display user information
    const userInfo = document.getElementById("device-info");
    userInfo.innerHTML = `
        <h3>User: ${userFirstName} ${userLastName}</h3>
        <p>Email: ${userEmail}</p>
    `;
});
