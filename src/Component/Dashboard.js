import React, { useState }  from "react";
import "./Dashboard.css";
import first from "./Image/first.jpg";
import { TbSquareKey } from "react-icons/tb";
import { FaSquareDribbble } from "react-icons/fa6";
import { TbUserSquare } from "react-icons/tb";
import { HiMiniWallet } from "react-icons/hi2";
import { LuBadgePercent } from "react-icons/lu";
import { MdOutlineLiveHelp } from "react-icons/md";


import { Avatar } from "@mui/material";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dash">
        <div className="dashboard__hd">
          <i className="bi bi-nut"></i>
          <h3>Dashboard</h3>
        </div>
        <div className="dashboard__mid">
          <TbSquareKey />
          <h3>Dashboard</h3>
        </div>

        <div className="dashboard__mid">
          <FaSquareDribbble />
          <h3>Product</h3>
        </div>
        <div className="dashboard__mid">
          <TbUserSquare />
          <h3>Customers</h3>
        </div>
        <div className="dashboard__mid">
          <HiMiniWallet />
          <h3>Income</h3>
        </div>
        <div className="dashboard__mid">
          <LuBadgePercent />
          <h3>Promote</h3>
        </div>
        <div className="dashboard__mid">
          <MdOutlineLiveHelp />
          <h3>Help</h3>
        </div>
      </div>

      <div className="dashboard__footer">
        <Avatar className="icon1" src={first} />
        <div className="dashboard__footermid">
          <h4>Tauseef</h4>
          <p style={{ fontSize: "10px" }}>Project Manager</p>
        </div>
        <i className="bi bi-caret-down-fill"></i>
      </div>
    </div>
  );
}

export default Dashboard;
