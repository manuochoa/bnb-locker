import React, { useState, useEffect, useContext } from "react";
import { LockerContext } from "../../appContext";

function Table({ data, onClose }) {
  const [isAscending, setIsAscending] = useState(true);
  const [lockersInfo, setLockersInfo] = useState("");
  const [state, setState] = useContext(LockerContext);
  let newLocker = [];

  useEffect(() => {
    if (data.results !== undefined) {
      data.results.map((locker) => {
        const { address, amount, uid, contractAddress } = locker.attributes;
        newLocker.push({ address, amount, uid, contractAddress });
      });
      setLockersInfo(newLocker);
    }
  }, [data]);

  const sortId = () => {
    if (isAscending) {
      lockersInfo.sort(function (a, b) {
        if (a.uid > b.uid) {
          return -1;
        }
        if (a.uid < b.uid) {
          return 1;
        }

        return 0;
      });
    } else {
      lockersInfo.sort(function (a, b) {
        if (a.uid > b.uid) {
          return 1;
        }
        if (a.uid < b.uid) {
          return -1;
        }

        return 0;
      });
    }
    setIsAscending(!isAscending);
  };

  const handleClick = (uid) => {};

  const Locker = () => {
    return lockersInfo.map(({ amount, address, uid }) => {
      return (
        <tr
          onClick={() => {
            setState((state) => ({ ...state, tab: "2", id: uid }));
            onClose();
          }}
          key={uid}
          className="tr-locker-btn"
        >
          <td>{uid}</td>
          <td>{address}</td>
          <td>{amount}</td>
        </tr>
      );
    });
  };

  return lockersInfo === "" ? (
    <div>loading..</div>
  ) : data.count === 0 ? (
    <div>no lockers created</div>
  ) : (
    <table>
      <thead>
        <tr>
          <th onClick={sortId}>id</th>
          <th>recipient</th>
          <th>amount</th>
        </tr>
      </thead>
      <tbody>
        <Locker />
      </tbody>
    </table>
  );
}

export default Table;
