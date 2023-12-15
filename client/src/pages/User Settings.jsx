import React from 'react';
import './User Settings.css'; // Import your CSS file

function UserSettings() {
  return (
    <div>
      <header>
        <h1 className="title">Golden Inventory System</h1>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="Inventory.html">Inventory</a></li>
            <li><a href="User Settings.html">Settings</a></li>
            <li><a href="device_details.html">Device Details</a></li>
          </ul>
        </nav>
      </header>
      <div id="user-info">
        Logged in as: <span id="username">[Username]</span> (<a href="#" id="logout-link">Logout</a>)
      </div>
      {/* User Settings Content */}
      <section id="device-details">
        <h1>User Settings</h1>
        <div id="device-info">
          <h2>User Information</h2>
          {/* JavaScript will populate this section */}
        </div>
      </section>
      <footer>
        Copyright Taylor
      </footer>
    </div>
  );
}

export default UserSettings;
