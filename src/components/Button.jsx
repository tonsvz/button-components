import React from "react";
import "../styles/Button.scss";

const Button = (props) => {
  return (
    <div className="button-container">
      <div className="button-description">
        <p className={props.textColor}>{props.name}</p>
        <button onClick={props.clickHandler} className={props.classes}>
          {props.iconStart}
          {props.title}
          {props.iconEnd}
        </button>
      </div>
    </div>
  );
};

export default Button;
