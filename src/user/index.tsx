import React, { useState } from "react";
import style from "./index.module.css";
import clazz from "./user.module.less";
import pic1 from "/img/1.jpg";
import { name } from "../../package.json";
import FormulaInput from "../components/FormulaInput";
console.log(style, clazz);

const options = [
  {
    field: "superman",
    name: "ClarkKent",
  },
  {
    field: "batman",
    name: "BruceWayne",
  },
  {
    field: "theflash",
    name: "BarryAllen",
  },
  {
    field: "wonderwoman",
    name: "DianaPrince",
  },
  {
    field: "aquaman",
    name: "ArthurCurry",
  },
  {
    field: "cyborg",
    name: "VictorStone",
  },
  {
    field: "greenlantern",
    name: "HalJordan",
  },
];

const FormulaInputDemo = (props: any) => {
  const { isMobile } = props;
  const [value, setValue] = useState({
    formula: "1+superman+2-batman+3*aquaman+4/wonderwoman",
    vars: {
      superman: "ClarkKent",
      batman: "BruceWayne",
      aquaman: "ArthurCurry",
      wonderwoman: "DianaPrince",
    },
  });

  return (
    <div className="formula-input-demo-wrapper">
      <h2>使用方法</h2>
      <h3>输入框内只能输入数字及 +-*/.@()，其中键入 @ 可触发下拉筛选变量</h3>
      <div style={{ marginBottom: 20 }}>
        small:
        <FormulaInput
          value={value}
          setValue={setValue}
          options={options}
          placeholder="输入「@」后选择指标"
          size="small"
        />
      </div>
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </div>
  );
};
function User() {
  return (
    <div>
      <img src={pic1} />
      <h1 className={style.h1}> user page1</h1>
      <h2 className={clazz.h2}>这是h2 {name}</h2>
      <FormulaInputDemo />
    </div>
  );
}

export default User;
