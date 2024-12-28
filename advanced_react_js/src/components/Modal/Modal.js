import React,{Fragment} from "react";
import ReactDOM from "react-dom";

import Styles from "./Modal.module.css";



const Backdrop = ({ModalToggle,closeModal}) => {
    return <div className={`${Styles.backdrop} ${ModalToggle ? Styles.show:null}`} onClick={closeModal}>Backdrop</div>
}



const Overlay = ({children,ModalToggle}) => {
    return <div className={`${Styles.overlay} ${ModalToggle ? Styles.show:null}`}>
        {children}
    </div>
}

const Modal = ({children,ModalToggle,closeModal}) => {
    return ModalToggle && <Fragment>
        {ReactDOM.createPortal(<Backdrop ModalToggle={ModalToggle} closeModal={closeModal}/>,document.getElementById("modal"))}
        {ReactDOM.createPortal(<Overlay ModalToggle={ModalToggle} >{children}</Overlay>,document.getElementById("modal"))}
    </Fragment>
    
};  


export default Modal