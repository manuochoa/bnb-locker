const Web3 = require("web3");

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
    //we are in the browser and metamask is running
    web3 = new Web3 (Web3.givenProvider);
}else {
    //we are on the server or the user don't have metamask
    const provider = new Web3.providers.HttpProvider(
        "https://data-seed-prebsc-1-s1.binance.org:8545"
    );
    web3 = new Web3(provider);
}

export default web3;
