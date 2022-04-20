import { useState } from "react";

import classes from "./Slider.module.css";

const Slider = () => {
  const [calculateRange, setCalculateRange] = useState(0);

  const rangeChangeHandler = (event) => { setCalculateRange(event.target.valueAsNumber); };
  const rangeFirstBtnHandler = () => { setCalculateRange(1); };
  const rangeSecondBtnHandler = () => { setCalculateRange(25); };
  const rangeThirdBtnHandler = () => { setCalculateRange(50); };
  const rangeFourthBtnHandler = () => { setCalculateRange(75); };
  const rangeFifthBtnHandler = () => { setCalculateRange(100); };

  return (
    <div className={classes.range_wrap}>
      <div className={classes.range_value_box}>
        <p>{calculateRange}</p>
        <span>%</span>
      </div>
      <div className={classes.range_input_wrap}>
        <input type="range" min="0" max="100" value={calculateRange} onChange={rangeChangeHandler} />
        <div className={classes.range_bar}/>
        <div className={classes.range_progress} style={{ width: `${calculateRange}%` }}/>
      </div>
      <div className={classes.range_dot_wrap}>
        <div className={calculateRange >= 1 && classes.active_dot}></div>
        <div className={calculateRange >= 25 && classes.active_dot}></div>
        <div className={calculateRange >= 50 && classes.active_dot}></div>
        <div className={calculateRange >= 75 && classes.active_dot}></div>
        <div className={calculateRange === 100 && classes.active_dot}></div>
      </div>
      <div className={classes.range_btn_wrap}>
        <button type="button" onClick={rangeFirstBtnHandler}>1%</button>
        <button type="button" onClick={rangeSecondBtnHandler}>25%</button>
        <button type="button" onClick={rangeThirdBtnHandler}>50%</button>
        <button type="button" onClick={rangeFourthBtnHandler}>75%</button>
        <button type="button" onClick={rangeFifthBtnHandler}>100%</button>
      </div>
    </div>
  );
};

export default Slider;
