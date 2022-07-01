import React from "react";
import "./topbar.css";

export default function Topbar() {

  //if function is used delete token from the session storage
  function logout() {
    sessionStorage.removeItem("token");
    window.location.reload()
  }


  return (
    <div className="topbar">
      <div className="content">
        <span id="welcome">WELCOME</span>
        <span id="name">ADMIN</span>
        <a id="logout" href="/dashboard" onClick={logout} >(LOG OUT)</a>
      </div>
    </div>
  );
}
