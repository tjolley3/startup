document.addEventListener("DOMContentLoaded", function () {
    // Parse the query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDevice = urlParams.get("device");
    const make = urlParams.get("make");
    const model = urlParams.get("model");
    const serial = urlParams.get("serial");

    // Display the selected device information
    const deviceInfo = document.getElementById("device-info");
    deviceInfo.innerHTML = `
        <h3>Selected Device: ${selectedDevice}</h3>
        <p>Make: ${make}</p>
        <p>Model: ${model}</p>
        <p>Serial: ${serial}</p>
    `;
});
