import React, { useState, useEffect } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [defaultLabel, setDefaultLabel] = useState("Start");

  useEffect(() => {
    const counter = setInterval(() => {
      if (defaultLabel === "Stop") {
        setCounter((prevCounter) => prevCounter + 1);
      }
      if (defaultLabel === "Start") {
        clearInterval(counter);
      }
    }, 1000);
    return () => clearInterval(counter);
  }, [defaultLabel]);

  function incCounterHandler() {
    setCounter((prevCounter) => prevCounter + 1);
  }
  function decCounterHandler() {
    setCounter((prevCounter) => prevCounter - 1);
  }
  function incIfOddHandler() {
    if (counter % 2 === 1) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  }

  function asyncIncHandler() {
    setTimeout(() => setCounter((prevCounter) => prevCounter + 1), 1000);
  }

  function timerAddHandler() {
    setDefaultLabel("Stop");
    // console.log(defaultLabel);
  }

  function timerStopHanlder() {
    setDefaultLabel("Start");
    // console.log(defaultLabel)
  }

  function ButtonRow1() {
    return (
      <div>
        <button onClick={incCounterHandler}>Increment</button>
        <button onClick={decCounterHandler}>Decrement</button>
      </div>
    );
  }

  function ButtonRow2() {
    return (
      <div>
        <button onClick={incIfOddHandler}>Increment-If-Odd</button>
        <button onClick={asyncIncHandler}>Async-Inc</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{counter}</h1>
      <ButtonRow1 />
      <ButtonRow2 />
      <button
        onClick={defaultLabel === "Start" ? timerAddHandler : timerStopHanlder}
      >
        {defaultLabel}
      </button>
    </div>
  );
};

export default Counter;
