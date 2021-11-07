import React, { useState, useEffect } from "react";

console.log("Pre-render : always is called, needlessly ");

const Lifecycle = () => {
  console.log("Logic-Render");
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);

  useEffect(() => {
    /* Only when the function is loaded for the first time */
    console.log("useEffect [] ");
return () =>{
  console.log('cleanup useEffect [] ');
}
  }, []);

  useEffect(() => {
    console.log("useEffect no dependency");
    /* any  changed state triggers  this effect*/
    return () =>{
      console.log('cleanup useEffect no dependency');
    }
  });

  useEffect(() => {
    console.log("useEffect [counter1]");
    return () =>{
      console.log('cleanup useEffect [counter1]');
    }
  }, [counter1]);

  useEffect(() => {
    console.log("useEffect [counter2]");
    return () =>{
      console.log('cleanup useEffect [counter2]');
    }
  }, [counter2]);

  useEffect(() => {
    console.log("useEffect [counter1, counter2]");
    return () =>{
      console.log('cleanup useEffect [counter1, counter2]');
    }
  }, [counter1, counter2]);

  return (
    <div>
      {console.log("Return-render")}
      <h2>Lifecyle</h2>
      <h2>Counter1 : {counter1}</h2>
      <button onClick={() => setCounter1(counter1 + 1)}>+</button>
      <h2>Counter2 : {counter2}</h2>
      <button onClick={() => setCounter2(++counter2)}>+</button>
    </div>
  );
};

export default Lifecycle;
