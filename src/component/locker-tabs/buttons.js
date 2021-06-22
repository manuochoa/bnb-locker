import React, { useState, useEffect } from "react";
import Locker from "../eth/Locker";

function Buttons({ address, userAccount, sender, receiver }) {
  const [isReceived, setIsReceived] = useState({ paymentReceived: false });

  useEffect(() => {
    checkReceipt();
  }, [address]);

  const checkReceipt = async () => {
    if (
      address !== undefined &&
      address !== "0x0000000000000000000000000000000000000000"
    ) {
      try {
        const contract = await Locker(address);
        let paymentReceived = await contract.methods.isReceived().call();
        let contractBalance = await contract.methods.getBalance().call();
        setIsReceived({ paymentReceived, contractBalance });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const confirmReceipt = async () => {
    try {
      const contract = await Locker(address);
      await contract.methods.confirmReceipt().send({
        from: userAccount,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };

  const collectPayment = async () => {
    try {
      const contract = await Locker(address);
      await contract.methods.collectPayment().send({
        from: userAccount,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };

  if (isReceived.contractBalance == "0") {
    return (
      <div>
        {" "}
        <h3>payment collected</h3>
      </div>
    );
  } else {
    return (
      <div>
        {userAccount == sender && (
          <button
            disabled={isReceived.paymentReceived}
            onClick={confirmReceipt}
          >
            Confirm Receipt
          </button>
        )}
        {userAccount == receiver && (
          <button
            title="click here"
            disabled={!isReceived.paymentReceived}
            onClick={collectPayment}
          >
            Collect Payment
          </button>
        )}
      </div>
    );
  }
}

export default Buttons;
