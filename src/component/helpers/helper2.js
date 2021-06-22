import React, { useContext, useState } from "react";
import { LockerContext } from "../appContext";
import Factory from "../eth/lockerFactory";
import Locker from "../eth/Locker";

const useHelper = (e, state) => {
  return console.log("hola", state);
};

export default useHelper;
