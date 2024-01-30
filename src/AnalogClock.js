// AnalogClock.js
import React from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

const AnalogClock = () => {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="analog-clock">
      <Clock value={date} size={50} />
    </div>
  );
};

export default AnalogClock;
