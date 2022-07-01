import React, { useState } from "react";
import PropTypes from "prop-types";

import "./login.css";

//fetch login information
async function loginUser(credentials) {
  //for alert if cannot login
  fetch("http://202.183.167.111:4206/login_admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.status !== 200 && data.message !== undefined) {
        alert(data.message);
      }
    });
  //return the response
  return fetch("http://202.183.167.111:4206/login_admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  //set token if the form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="homepage">
      <div className="mainboxhome1">
        <div className="loginbox">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setUserName(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              id="password"
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button id="loginBox">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
