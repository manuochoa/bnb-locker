import React, { useState } from "react";
import Factory from "../eth/lockerFactory";
import web3 from "../eth/web3";
import Modal from "../modals/confirmTransactionModal";
import { FaSpinner } from "react-icons/fa";

function NewLocker() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [state, setState] = useState({ amount: "", recipient: "" });
  const [show, setShow] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState({});

  function openModal(e) {
    e.preventDefault();
    setShow(true);
  }

  function handleSubmit() {
    setIsLoading(true);
    setIsError(false);
    const { amount, recipient } = state;
    createLocker(amount, recipient);
    setShow(false);
  }

  const createLocker = async (amount, recipient) => {
    try {
      const accounts = await web3.eth.getAccounts();
      const newLocker = await Factory.methods
        .createNewLocker(recipient)
        .send({ from: accounts[0], value: amount });

      setSuccessMessage(newLocker.events.NewLockerCreated.returnValues);
      setShowSuccess(true);
      console.log(successMessage);
    } catch (error) {
      setIsError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="locker-container newLocker">
      <form onSubmit={openModal} className="newLockerForm">
        <h2>Create a new Locker</h2>
        <p>
          Lock the amount you want to send, the funds will not be release until
          you confirm that you have received the payment.
        </p>
        <br />
        <label htmlFor="amount">Amount to send in BNB:</label>
        <br />
        <input
          type="number"
          name="amount"
          id="amount"
          value={state.amount}
          onChange={(e) => setState({ ...state, amount: e.target.value })}
        />
        <br />
        <label htmlFor="recipient" className="recipient-label">
          Recipient Address:
        </label>
        <br />
        <input
          type="text"
          name="recipient"
          id="recipient"
          value={state.recipient}
          onChange={(e) => setState({ ...state, recipient: e.target.value })}
        />
        <br />
        <button type="submit" className="newLocker-btn">
          {isLoading ? <FaSpinner className="icon-spin" /> : "Create"}
        </button>
        {isLoading && (
          <h3 className="loading-msg">
            Confirm the transaction with your wallet, you're going to receive
            the Locker ID after transaction is approved
          </h3>
        )}
        {isError && <h3 className="error-msg">{isError}</h3>}
      </form>
      <Modal
        title="Creating New Locker"
        onSubmit={handleSubmit}
        onClose={() => setShow(false)}
        show={show}
      >
        <p>
          You're locking {state.amount} BNB to send to the following address:{" "}
          {state.recipient}
        </p>
        <p>
          Please check if the information is correct before sending the
          transaction.
        </p>
      </Modal>
      <Modal
        title="Locker Created Succesfully"
        onClose={() => setShowSuccess(false)}
        show={showSuccess}
      >
        <p>
          {" "}
          you have locked succesfully {successMessage.amount} BNB, your locker
          ID is: {successMessage.id}.{" "}
        </p>
        <p>You can send this id to your counterpart.</p>
      </Modal>
    </div>
  );
}

export default NewLocker;
