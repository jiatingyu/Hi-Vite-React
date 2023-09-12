import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import User from "./user";
import style from "./App.module.css";
function App() {
  return (
    <>
      <div>
        <User></User>
        <h2 className={style.h1}>App page</h2>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
    </>
  );
}

export default App;
