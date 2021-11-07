import React, { useState } from "react";
//import FetchCard from "./FetchCard";
import "./App.css";
//import ResizeApp from "./ResizeApp";
import Lifecycle from "./Lifecycle";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>show</button>
      <h2>App</h2>
      <hr />
      {show && <Lifecycle />}
      <hr />
      {/*       <FetchCard />
       */}
    {/*   { show && <ResizeApp />} */}
      
    </>
  );
}

export default App;
