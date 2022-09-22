import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [count, setcount] = useState(0);

  const startTime = () => {
    setInterval(() => {
      setcount(count + 1);
    }, 1000);
  };

  useEffect(() => {
    startTime();
  }, [count]);
  
    
  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"
  return (
    <div className="App">
      <h2>Timer Application</h2>

      <h3>{count}</h3>

      <button onClick={startTime}>Start</button>
      <button onClick={""}>End</button>
    </div>
  );
};

export default App;
