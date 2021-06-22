import web3 from "./web3";
import locker from "./build/contracts/Locker.json";

export default (address) => {
  return new web3.eth.Contract(locker.abi, address);
};
