import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import AccountInfo from "./userPanelModal-tabs/accountInfo";
import LockersCreated from "./userPanelModal-tabs/lockersCreated";
import "./userPanelModal.css";

function Modal(props) {
  const [currentTab, setCurrentTab] = useState("1");

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
            <div className="modal-tabs">
              <button
                className="modal-tab-btn"
                onClick={() => setCurrentTab("1")}
              >
                Account Info
              </button>
              <button
                className="modal-tab-btn"
                onClick={() => setCurrentTab("2")}
              >
                Lockers Created
              </button>
            </div>
          </div>
          <div className="modal-body">
            {currentTab === "1" ? (
              <AccountInfo userInfo={props.userInfo} />
            ) : currentTab === "2" ? (
              <LockersCreated userInfo={props.userInfo} close={props.onClose} />
            ) : (
              ""
            )}{" "}
          </div>
          <div className="modal-footer">
            <button
              onClick={() => {
                props.onClose();
                setCurrentTab("1");
              }}
            >
              close
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,

    document.getElementById("root")
  );
}

export default Modal;
