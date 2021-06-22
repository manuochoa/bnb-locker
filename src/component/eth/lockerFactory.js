import web3 from "./web3";
import lockerFactory from "./build/contracts/lockerFactory.json";

const instance = new web3.eth.Contract(
  lockerFactory.abi,
  "0xea66dfcc46f1035ce559b974fbfe08a95cd17e50"
);

export default instance;
