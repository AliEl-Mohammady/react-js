import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.js";

// Jsx : javascript + xml
// ReactDOM.render(
//   <div>Hello world</div>,document.getElementById("root")
// )
// ReactDOM.render(
//   React.createElement("H1",{style:{color:"red"}}, "Hello world"),document.getElementById("root")
// );
ReactDOM.render(
    <App/>,
    document.getElementById("root")
)