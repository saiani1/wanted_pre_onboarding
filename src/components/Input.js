import { useState } from "react";

import classes from "./Input.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Input = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [clickedPasswordBtn, setclickedPasswordBtn] = useState(false);

  let valid =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const emailIsValid = valid.test(enteredEmail);

  const emailChangeHandler = event => { setEnteredEmail(event.target.value); };
  const passwordBtnHandler = () => { setclickedPasswordBtn(!clickedPasswordBtn); };

  return (
    <form className={classes.form}>
      <div className={classes.first_input_wrap}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
          placeholder="E-mail"
        />
        {!emailIsValid && (
          <p className={classes.error_text}>Invalid e-mail address.</p>
        )}
        <p className={emailIsValid ? classes.valid : classes.invalid}>
          <FontAwesomeIcon icon={faCircleCheck} />
        </p>
      </div>
      <div className={classes.second_input_wrap}>
        <label htmlFor="password">Password</label>
        <input
          type={clickedPasswordBtn ? "text" : "password"}
          id="password"
          placeholder="Password"
        />
        {!clickedPasswordBtn ? (
          <a className={classes.password_hide_btn} onClick={passwordBtnHandler}>
            <FontAwesomeIcon icon={faEyeSlash} />
          </a>
        ) : (
          <a className={classes.password_show_btn} onClick={passwordBtnHandler}>
            <FontAwesomeIcon icon={faEye} />
          </a>
        )}
      </div>
    </form>
  );
};

export default Input;
