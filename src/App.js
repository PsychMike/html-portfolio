// App.js
import React, { useEffect, useState } from "react";
import "./styles.css";
import NavBar from "./Navbar.js";
import Weather from "./Weather"; // Import the Weather component
import AnalogClock from "./AnalogClock";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setLoaded(true);
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const updateTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    setCurrentTime(`${hours}:${minutes}:${seconds}`);
  };

  return (
    <div className={`App ${loaded ? "loaded" : ""}`}>
      <NavBar />
      <div className="content">
        <h1>Michael Ryan Hess</h1>
        <h2>Web Developement Portfolio</h2>
        <Weather /> {/* Weather component above the clock */}
        <div className="time">{currentTime}</div>
        <AnalogClock />
        {/* Add the rest of your content here */}
      </div>
    </div>
  );
};

export default App;
