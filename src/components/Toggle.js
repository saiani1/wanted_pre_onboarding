import { useState } from "react";
import classes from "./Toggle.module.css";

const Toggle = () => {
  const [checkedRadio, setCheckedRadio] = useState("left");

  const checkedRadioHandler = (event) => {
    setCheckedRadio(event.target.value);
    console.log(event.target.value)
  };

  return (
    <div className={classes.radio_wrap}>
      <label
        htmlFor="standard"
        className={checkedRadio === "left" && classes.left_active}
      >
        기본
      </label>
      <input
        type="radio"
        id="standard"
        name="choice"
        onChange={checkedRadioHandler}
        value="left"
      />
      <label
        htmlFor="detail"
        className={checkedRadio === "right" && classes.right_active}
      >
        상세
      </label>
      <input
        type="radio"
        id="detail"
        name="choice"
        onChange={checkedRadioHandler}
        value="right"
      />
      <div className={classes.toggle} />
    </div>
  );
};

export default Toggle;
