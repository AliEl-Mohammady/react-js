import React from "react";
import Styles from "./Form.module.css";

const Form = (props) => {
    return <form onSubmit={props.onSubmit}>{props.children}</form>;
};

const Controller = (prop) => {
    return <div className={Styles.Controller}>{prop.children}</div>;
};

Form.Controller = Controller;

export default Form;