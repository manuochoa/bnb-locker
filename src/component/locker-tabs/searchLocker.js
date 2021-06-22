import React, { useState, useEffect, useContext } from "react";
import { FaSistrix, FaWindows } from "react-icons/fa";
import Factory from "../eth/lockerFactory";
import web3 from "../eth/web3";
import { LockerContext } from "../appContext";
import Buttons from "./buttons";

function SearchLocker() {
  const [state, setState] = useContext(LockerContext);
  const [LockerID, setLockerID] = useState(0);
  const [lockerData, setLockerData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchContractData(LockerID);
  }, []);

  useEffect(() => {
    setLockerID(state.id);
    fetchContractData(state.id);
  }, [state]);

  async function handleSubmit(e) {
    e.preventDefault();
    await fetchContractData(LockerID);
  }

  const fetchContractData = async (index) => {
    setIsLoading(true);
    const accounts = await web3.eth.getAccounts();
    const userAccount = accounts[0];
    const data = await Factory.methods.lockersDetails(index).call();
    const { lockerAddress, sender, receiver, amount, id } = data;

    setLockerData({
      lockerAddress,
      sender,
      receiver,
      amount,
      id,
      userAccount,
    });
    setIsLoading(false);
  };

  const { lockerAddress, sender, receiver, amount, id, userAccount } =
    lockerData;

  return (
    <div className="locker-container search">
      <div className="search-locker">
        <h3>Locker ID</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={LockerID}
            onChange={(e) => {
              setLockerID(e.target.value);
            }}
          />
          <button type="submit">
            <FaSistrix />{" "}
          </button>
        </form>
        <Buttons
          address={lockerAddress}
          userAccount={userAccount}
          sender={sender}
          receiver={receiver}
        />
      </div>
      {isLoading ? (
        <div className="locker-details">loading...</div>
      ) : (
        <div className="locker-details">
          <h3>locker details</h3>
          <p>id: {id}</p>
          <p>Contract address: {lockerAddress}</p>
          <p>Sender: {sender}</p>
          <p>Receiver: {receiver}</p>
          <p>Amount: {amount}</p>
        </div>
      )}
    </div>
  );
}

export default SearchLocker;
