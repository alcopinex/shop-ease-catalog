import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-wrapper">
      <div className="clock-card">
        <h1 className="clock-header">Dashboard Clock</h1>
        <p className="clock-date">
          {format(currentTime, 'EEEE, MMMM do, yyyy')}
        </p>
        <p className="clock-time">
          {format(currentTime, 'hh:mm:ss a')}
        </p>
      </div>
    </div>
  );
}

export default App;