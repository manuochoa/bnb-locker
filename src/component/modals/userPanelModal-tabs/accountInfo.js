import React, { useState } from "react";
import { useMoralis } from "react-moralis";

function AccountInfo({ userInfo }) {
  const { username, email, ethAddress } = userInfo.attributes;

  const [isEditing, setIsEditing] = useState(false);
  const [mail, setMail] = useState(email);
  const [userName, setUserName] = useState(username);
  const { setUserData } = useMoralis();

  const saveChanges = () => {
    setUserData({
      username: userName,
      email: mail,
    });

    setIsEditing(false);
  };

  return isEditing ? (
    <div>
      <h3>account info</h3>
      <p>
        User Name :{" "}
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.currentTarget.value)}
        />{" "}
      </p>
      <p>
        Email :{" "}
        <input
          type="email"
          value={mail}
          onChange={(e) => setMail(e.currentTarget.value)}
        />{" "}
      </p>
      <p>ETH Address : {ethAddress} </p>
      <button onClick={saveChanges}>save</button>
    </div>
  ) : (
    <div>
      <h3>account info</h3>
      <p>User Name : {username} </p>
      <p>Email : {email}</p>
      <p>ETH Address : {ethAddress} </p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
}

export default AccountInfo;
