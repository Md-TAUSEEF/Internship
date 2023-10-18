import { ClassNames } from "@emotion/react";
import React, { PureComponent } from "react";
import { PieChart, Pie, Sector } from "recharts";
import "./MidSection.css";

const data = [
  { name: "Group A", value: 200, fill: "rgb(246,47,147)", outerRadius: 80 },
  { name: "Group B", value: 400, fill: "rgb(241,239,252)", outerRadius: 100 },
  { name: "Group C", value: 400, fill: "rgb(93,54,234)", outerRadius: 80 },
];

const renderActiveShape = (props) => {
  // ... (unchanged code)
};

export default class Example extends PureComponent {
  state = {
    activeIndex: -1,
  };

  onPieEnter = (_, index) => {
    const newData = [...data];

    // Set the activeIndex to the clicked index
    this.setState({
      activeIndex: index,
    });

    // Increase the outerRadius only for 'Group A'
    if (index === 0) {
      newData[index].outerRadius = 90;

      // Update the width of the 'Group A' name
      const label = document.getElementById("groupALabel");
      if (label) {
        label.style.fontWeight = "bold";
      }
    } else {
      // Reset the width of the 'Group A' name
      const label = document.getElementById("groupALabel");
      if (label) {
        label.style.fontWeight = "normal";
      }
    }

    // Update the data with the new outerRadius
    this.setState({
      data: newData,
    });
  };

  render() {

    return (
      <div className="graph">
      <div className="g_title">
          <h3>Customers</h3>
          <p>Customers that buy products </p>
        </div>
      
      <PieChart width={100} height={350}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          dataKey="value"
        >
        </Pie>

        <text x="50%" y="45%" textAnchor="middle" dominantBaseline="middle" style={{fontWeight: "bold", fontSize: "25px"}}>
          65%
        </text>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" style={{fontSize: "15px"}}>
          Total New
        </text>
        <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" style={{fontSize: "15px"}}>
          Customers
        </text>
      </PieChart>
      </div>
    );
  }
}
