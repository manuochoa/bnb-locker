import React, { useContext } from "react";
import { LockerContext } from "./appContext";

function Tabs() {
  const [state, setState] = useContext(LockerContext);

  return (
    <div className="tabs">
      <button
        className={state.tab === "1" ? "tab-btn-active" : "tab-btn"}
        onClick={() => setState((state) => ({ ...state, tab: "1" }))}
      >
        New Locker
      </button>
      <button
        className={state.tab === "2" ? "tab-btn-active" : "tab-btn"}
        onClick={() => setState((state) => ({ ...state, tab: "2" }))}
      >
        Search Locker
      </button>
      <button
        className={state.tab === "3" ? "tab-btn-active" : "tab-btn"}
        onClick={() => setState((state) => ({ ...state, tab: "3" }))}
      >
        How to use
      </button>
    </div>
  );
}

export default Tabs;
