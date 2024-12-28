
import React from "react";
// import Styles from "./ButtonGroup.module.css";


const ButtonGroup = ({children}) => {

    const myCloneElement= React.Children.map(children, (child) =>{
        
        return React.cloneElement(child,{
            style:{color:"red",backgroundColor:"green"},
            callBack:child.props.callBack,
        },
        child.props.children);} 
    );

    return <div>{myCloneElement}</div>;
};

export default ButtonGroup;