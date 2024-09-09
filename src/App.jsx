import { useState } from "react";
import "./App.css";
import React from "react";
import Clock from "./components/clock.jsx";
import Calendar from "./components/Calendar.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="background-container flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="clock text-center text-white relative -translate-y-60">
          <Clock />
        </h1>
        <p className="text-center text-white text-xl -translate-y-60">
          Today is <Calendar />
        </p>
      </div>
    </div>
  );
}

export default App;
