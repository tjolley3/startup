import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/index'; // Import your Home component
import Inventory from './pages/Inventory'; // Import your Inventory component
import UserSettings from './pages/User Settings'; // Import your UserSettings component
import DeviceDetails from './pages/device_details'; // Import your DeviceDetails component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Inventory" element={<Inventory/>} />
        <Route path="/User-Settings" element={<UserSettings/>} />
        <Route path="/device-details/:deviceId" element={<DeviceDetails/>} />
        {/* Add other routes as needed */}
        {/* For a "Not Found" page */}
        {/* <Route path="*" component={NotFound} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;