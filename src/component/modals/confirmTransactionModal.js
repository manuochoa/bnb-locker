import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./confirmTransactionModal.css";

function Modal(props) {
  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className={`modal ${props.show ? "show " : ""}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            <button onClick={props.onClose}>close</button>
            {props.onSubmit !== undefined && (
              <button onClick={props.onSubmit}> submit</button>
            )}
          </div>
        </div>
      </div>
    </CSSTransition>,

    document.getElementById("root")
  );
}

export default Modal;
