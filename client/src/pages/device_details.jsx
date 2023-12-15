import React from 'react';
import './device_details.css'; // Import your CSS file

function DeviceDetails() {
  return (
    <div>
      {/* Navigation Links */}
      <nav>
      <Link to={"/"}>device_details</Link>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="Inventory.html">Inventory</a></li>
          <li><a href="User Settings.html">Settings</a></li>
          <li><a href="device_details.html">Device Details</a></li>
        </ul>
      </nav>
      <div id="user-info">
        Logged in as: <span id="username">[Username]</span> (<a href="#" id="logout-link">Logout</a>)
      </div>
      {/* Device Details Content */}
      <section id="device-details">
        <h1>Device Details</h1>
        <div id="device-info">
          <h2>Device Information</h2>
        </div>
      </section>
      <footer>
        Copyright Taylor
      </footer>

      {/* Include the JavaScript file */}
    </div>
  );
}

export default DeviceDetails;
