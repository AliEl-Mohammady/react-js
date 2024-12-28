
// import React,{Fragment} from "react";
import React,{Fragment} from "react";
import AppStyles from "./App.module.css";
import Button from "../components/Layout/Button.js";
import ButtonGroup from "../components/Layout/ButtonGroup.js";

const App =() => {
    const callBack=()=> {
        console.log("Clicked");
    }

    return (
        <Fragment>
            <div className={AppStyles.AppHeader}>
                <h1>React App</h1>
                <p>Second way to create elements to avoid fragement</p>
                <Button callBack={callBack}>OrginalButton</Button>
                <ButtonGroup>
                    <Button callBack={callBack}>First</Button>
                    <Button callBack={callBack}>Second</Button>
                </ButtonGroup>
            </div>
        </Fragment>

    )  
};


export default App;