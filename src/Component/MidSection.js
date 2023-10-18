import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Graph from './Graph';

import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";
import "./MidSection.css";

const month = [
  { Name: "Jan", Days: 25 },
  { Name: "Feb", Days: 15 },
  { Name: "Mar", Days: 35 },
  { Name: "Apr", Days: 28 },
  { Name: "May", Days: 30 },
  { Name: "Jun", Days: 11 },
  { Name: "Jul", Days: 30 },
  { Name: "Aug", Days: 35,fill:"blue" },
  { Name: "Sep", Days: 32 },
  { Name: "Oct", Days: 30 },
  { Name: "Nov", Days: 27 },
  { Name: "Dec", Days: 30 },
];

export default function MidSection() {
  return (
  <div className="mid_top">
    <div className="mid">
      <div className="mid__head">
        <div className="mid__headleft">
          <h3>Overview</h3>
          <p>Monthly Earning </p>
        </div>
        <div className="mid__headright">
          <p>Quarterly</p>
          <IoMdArrowDropdown />
        </div>
      </div>
      <div className="chart">
      <ResponsiveContainer aspect={3}>
        <BarChart data={month}>
          <XAxis dataKey="Name" />

          <Tooltip wrapperStyle={{ backgroundColor: "black", color: "black" }} />

          <Bar dataKey="Days" fill="rgb(241,239,255)" />
        </BarChart>
      </ResponsiveContainer>
      </div>
      
      

    </div>
    <Graph/>
    </div>
    
  );
}
