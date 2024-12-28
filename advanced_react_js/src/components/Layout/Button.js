import React from "react";
import Styles from "./Button.module.css";

const Button = (props) => {
    return(
    <button style={props.style} className={Styles.btn} onChange={props.onChange}  onClick={() => props.callBack()} type={`${props.type ? props.type : "button"}`}>
        {props.children}
    </button>)
}

export default Button;