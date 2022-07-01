import { Link, useHistory } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import axios from "axios";

import "./user.css";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function User() {
  //to redirect to other pages
  let history = useHistory();

  const idInput = useRef(null);
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const adminInput = useRef(null);

  const [rows, setResult] = React.useState([]);

  //to get data from node.js
  useEffect(() => {
    var url = "http://202.183.167.111:4206/userslist/";
    const location = window.location.pathname.split("/").pop();
    url += location;
    axios.get(url).then((response) => {
      setResult(response.data.data);
    });
  }, []);

  //for updating data
  const handleUpdate = (e) => {
    e.preventDefault();

    if (
      nameInput.current.value === "" ||
      emailInput.current.value === "" ||
      adminInput.current.value === ""
    ) {
      //if any box is blank ,alert
      alert("Please Enter All The Box");
    } else {
      if(passwordInput.current.value === ""){
        //if password is empty field use old password and update other field
        axios
          .put("http://202.183.167.111:4206/userslist/", {
            users_info: {
              id: parseInt(idInput.current.value),
              name: nameInput.current.value,
              email: emailInput.current.value,
              admin: parseInt(adminInput.current.value),
            },
          })
          .then((response) => {
            //alert out the response
            alert(response.data.message);
          });
      }else{
        //if password is not empty updated all the field
        axios
          .put("http://202.183.167.111:4206/userslist/", {
            users_info: {
              id: parseInt(idInput.current.value),
              name: nameInput.current.value,
              email: emailInput.current.value,
              password: passwordInput.current.value,
              admin: parseInt(adminInput.current.value),
            },
          })
          .then((response) => {
            //alert out the response
            alert(response.data.message);
          });
      }
    }
  };

  //for delete data
  const handleDelete = (id) => {
    //call delete to nodejs
    axios
      .delete("http://202.183.167.111:4206/userslist", {
        data: {
          userID: parseInt(idInput.current.value),
        },
      })
      .then((response) => {
        //redirect back to users page
        history.push("/users");
      });
  };

  return (
    <div className="main">
      <div className="userTitleContainer">
        <h1 className="userTitle">User : {rows.name}</h1>
        <div>
          <Link to="/newUser">
            <button className="userAddButton">Create</button>
          </Link>
          <button className="userAddButton" id="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <div className="userUpdate">
        <div className="title">
          <span className="userUpdateTitle">Information</span>
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
                placeholder={rows.id}
                value={rows.id}
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
                placeholder={rows.name}
                className="userUpdateInput"
                ref={nameInput}
              />
            </div>
            <div className="userUpdateItem">
              <label>Email</label>
              <input
                type="text"
                placeholder={rows.email}
                className="userUpdateInput"
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
            <div className="userUpdateItem radio">
              <label>Admin</label>
              <input
                type="text"
                placeholder={rows.admin}
                className="userUpdateInput"
                ref={adminInput}
              />
            </div>
            <button className="userUpdateButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
