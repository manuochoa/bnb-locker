import React, { useContext } from "react";
import { LockerContext } from "./appContext";
import NewLocker from "./locker-tabs/newLocker";
import SearchLocker from "./locker-tabs/searchLocker";
import HowToUse from "./locker-tabs/howToUse";

function Locker() {
  const [state, setState] = useContext(LockerContext);

  if (state.tab === "1") {
    return <NewLocker />;
  }
  if (state.tab === "2") {
    return <SearchLocker />;
  }
  if (state.tab === "3") {
    return <HowToUse />;
  }
}

export default Locker;
