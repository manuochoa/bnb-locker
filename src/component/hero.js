import React, { useState } from "react";
import Modal from "./modals/userPanelModal";

function Hero(props) {
  const { auth, isAuth, logout, userInfo } = props;
  const [show, setShow] = useState(false);

  if (isAuth) {
    return (
      <div className="hero">
        <h3 className="hero-title">soy el titulo</h3>

        <button className="hero-btn-panel" onClick={() => setShow(true)}>
          User Panel
        </button>
        <button className="hero-btn" onClick={() => logout()}>
          Logout
        </button>
        <Modal
          title="User Panel"
          userInfo={userInfo}
          onClose={() => setShow(false)}
          show={show}
        >
          <p>This is my modal</p>
        </Modal>
      </div>
    );
  } else {
    return (
      <div className="hero">
        <h3 className="hero-title">soy el titulo</h3>
        <button className="hero-btn" onClick={() => auth()}>
          Authenticate
        </button>
      </div>
    );
  }
}

export default Hero;
