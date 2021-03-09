import { useState, useEffect } from "react";

function Clock() {
  const [currTime, setCurrTime] = useState(
    new Date().toLocaleString("en-us", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrTime(
        new Date().toLocaleString("en-us", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="clock">
      <h1>{currTime}</h1>
    </div>
  );
}

export default Clock;
