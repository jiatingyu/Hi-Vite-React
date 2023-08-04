import React from "react";
import style from "./index.module.css";
import clazz from "./user.module.less";
import pic1 from "/img/1.jpg";
import { name } from "../../package.json";
console.log(style, clazz);
function User() {
  return (
    <div>
      <img src={pic1} />
      <input />
      <h1 className={style.h1}> user page1</h1>
      <h2 className={clazz.h2}>这是h2 {name}</h2>
    </div>
  );
}

export default User;
