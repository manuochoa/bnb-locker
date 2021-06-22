import React from "react";
import { useMoralisQuery } from "react-moralis";
import Table from "./LockersCreatedTable";

function LockersCreated({ userInfo, close }) {
  const UserAddress = userInfo.attributes.ethAddress;
  const { data } = useMoralisQuery("EventNewLocker", (query) =>
    query.withCount().equalTo("creator", `${UserAddress}`)
  );

  return (
    <div>
      <h3>lockers created</h3>

      <Table data={data} onClose={close} />
    </div>
  );
}

export default LockersCreated;
