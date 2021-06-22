import React, { useState } from "react";

const LockerContext = React.createContext([{}, () => {}]);

const LockerProvider = (props) => {
  const [state, setState] = useState({ tab: "1", id: 0 });
  const [LockerID, setLockerID] = useState(0);

  return (
    <LockerContext.Provider value={[state, setState]}>
      {props.children}
    </LockerContext.Provider>
  );
};

export { LockerContext, LockerProvider };
