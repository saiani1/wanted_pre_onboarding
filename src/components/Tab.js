import { useState } from "react";
import classes from "./Tab.module.css";

const Tab = () => {
  const [checkedLi, setCheckedLi] = useState("first");
  const navClickHandler = (event) => {
    event.preventDefault();

    setCheckedLi(event.target.text);
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <a href="/" onClick={navClickHandler}>감자</a>
          </li>
          <li className={checkedLi === "고구마" && classes.secend_active}>
            <a href="/" onClick={navClickHandler}>고구마</a>
          </li>
          <li className={checkedLi === "카레라이스" && classes.third_active}>
            <a href="/" onClick={navClickHandler}>카레라이스</a>
          </li>
          <hr />
        </ul>
      </nav>
    </header>
  );
};

export default Tab;
