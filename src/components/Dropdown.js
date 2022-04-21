import { useState } from "react";

import classes from "./Dropdown.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const sympbols = [
  { id: 1, value: "BTCUSD.PERP" },
  { id: 2, value: "ETHUSD.PERP" },
  { id: 3, value: "BCHUSD.PERP" },
  { id: 4, value: "LTCUSD.PERP" },
  { id: 5, value: "XRPUSD.PERP" },
  { id: 6, value: "SOLUSD.PERP" },
  { id: 7, value: "ADAUSD.PERP" },
  { id: 8, value: "AVAXUSD.PERP" },
  { id: 9, value: "DOTUSD.PERP" },
  { id: 10, value: "BUSDUSD.PERP" },
  { id: 11, value: "SHIBUSD.PERP" },
];

const Dropdown = () => {
  const [enteredSymbol, setEnteredSymbol] = useState("");
  
  const [selectList, setSelectList] = useState("All Symbols");
  const [clickedBtn, setClickedBtn] = useState(false);

  const symbolChangeHandler = (event) => { setEnteredSymbol(event.target.value); };

  const listClickHandler = (event) => {
    setSelectList(event.target.text);
    setClickedBtn(false);
  };

  const btnClickHanlder = () => {
    if (!clickedBtn) {
      setClickedBtn(true);
    } else {
      setClickedBtn(false);
    }
  };

  return (
    <div className={classes.wrap}>
      <div className={classes.btn_wrap}>
        <button type="button" onClick={btnClickHanlder}>
          {selectList}
        </button>
        <div className={classes.down_icon}>
          <FontAwesomeIcon icon={faSortDown} />
        </div>
      </div>
      <div
        className={classes.dropdown_wrap}
        style={clickedBtn ? { display: "block" } : { display: "none" }}
      >
        <input
          type="text"
          onChange={symbolChangeHandler}
          placeholder="Search Symbol"
        />
        <div className={classes.search_icon}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <ul className={classes.list_wrap}>
          <li>
            <a onClick={listClickHandler}>All Symbols</a>
          </li>
          {sympbols
            .filter((item) => {
              return item.value
                .toUpperCase()
                .includes(enteredSymbol.toUpperCase());
            })
            .map((item) => (
              <li key={item.id}>
                <a onClick={listClickHandler}>{item.value}</a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
