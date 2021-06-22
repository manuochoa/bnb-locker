import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MoralisProvider } from "react-moralis";

const appID = "zpZQUZpkNhDEHyzrffzCx2RuK1yH16jIufXeUOak";
const serverURL = "https://pcgg2bjpvcpp.moralis.io:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={appID} serverUrl={serverURL}>
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
