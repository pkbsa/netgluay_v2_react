import React from "react";
import "./homebar.css";

//for errorpage topbar
export default function Homebar() {
  return (
    <div className="topbar">
      <div className="contenthome">
        <a href="/dashboard"><span>Home</span></a>
        <a href="http://202.183.167.111:4206/browse"><span>Service</span></a>
        <a href="http://202.183.167.111:4206/aboutus"><span>About</span></a>
      </div>
    </div>
  );
}
