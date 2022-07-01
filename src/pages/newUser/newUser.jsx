import { Link } from "react-router-dom";
import React, { useRef } from "react";

import axios from "axios";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function NewUser() {
  const idInput = useRef(null);
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const adminInput = useRef(null);

  //insert new user function
  const handleInsert = (e) => {
    e.preventDefault();

    if (
      nameInput.current.value === "" ||
      emailInput.current.value === "" ||
      passwordInput.current.value === "" ||
      adminInput.current.value === ""
    ) {
      //alert any box is empty
      alert("Please Enter All The Box");
    } else {
      //otherwise call post to nodejs
      axios
        .post("http://202.183.167.111:4206/userslist", {
          users_info: {
            id: parseInt(idInput.current.value),
            name: nameInput.current.value,
            email: emailInput.current.value,
            password: passwordInput.current.value,
            admin: parseInt(adminInput.current.value),
          },
        })
        .then((response) => {
          //alert the response
          alert(response.data.message);
        });
    }
  };

  return (
    <div className="main">
      <div className="userTitleContainer">
        <h1 className="userTitle">New User</h1>
      </div>
      <div className="userUpdate">
        <div className="title">
          <span className="userUpdateTitle">Edit</span>
          <Link to="/users">
            <KeyboardBackspaceIcon />
          </Link>
        </div>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>ID</label>
              <input
                type="text"
                className="userUpdateInput"
                id="idInputBox"
                disabled
                ref={idInput}
              />
            </div>
            <div className="userUpdateItem">
              <label>Name</label>
              <input
                type="text"
                className="userUpdateInput"
                placeholder="Gluay"
                ref={nameInput}
              />
            </div>
            <div className="userUpdateItem">
              <label>Email</label>
              <input
                type="text"
                className="userUpdateInput"
                placeholder="Gluay@gmail.com"
                ref={emailInput}
              />
            </div>
            <div className="userUpdateItem">
              <label>Password</label>
              <input
                type="text"
                placeholder="********"
                className="userUpdateInput"
                ref={passwordInput}
              />
            </div>
            <div className="userUpdateItem">
              <label>Admin</label>
              <input
                type="text"
                placeholder="0"
                className="userUpdateInput"
                ref={adminInput}
              />
            </div>
            <Link to="/users">
              <button className="userUpdateButton" onClick={handleInsert}>
                Insert
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
