import React from 'react';
import './index.css'; // Import your CSS file

function Home() {
  return (
    <div>
      <header>
        <h1 className="title">Golden Inventory System</h1>
        <nav>
        <Link to={"/"}>{"Home"}</Link>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="Inventory.html">Inventory</a></li>
            <li><a href="User Settings.html">Settings</a></li>
            <li><a href="device_details.html">Device Details</a></li>
            <li id="login-logout"><a href="#" id="login-logout-link">Login</a></li>
          </ul>
        </nav>
      </header>
      {/* Mimic random quote API route, using Frontend Javascript */}
      <div id="quote1"></div>
      <div id="quote2"></div>

      {/* GitHub Link */}
      <div id="github-link">
        <a href="https://github.com/tjolley3/startup.git" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>

      {/* Login Section */}
      <section id="login">
        <div className="login-container">
          <h2 className="login-title">Login</h2>
          <form id="signup-form">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Login</button>
          </form>
          {/* Error message container */}
          <div id="error-message" className="error-message"></div>
        </div>
      </section>
      <footer>
        Copyright Taylor
      </footer>

      {/* Include the JavaScript file */}
    </div>
  );
}

export default Home;
