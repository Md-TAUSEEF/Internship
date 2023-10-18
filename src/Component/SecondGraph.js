import React from "react";
import "./SecondGraph.css";
import first from "./Image/first.jpg";
import second from "./Image/second.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function SecondGraph() {
  return (
    <div className="secondgraph">
      <div className="secondgraph__head">
        <div className="secondgraph__headleft">
          <h3>Product Sell</h3>
          <div className="secondgraph__headright">
            <div className="secondgraph__headrightleft">
              <AiOutlineSearch />
              <input type="text" placeholder="Search" />
            </div>
            <div className="secondgraph__headrightright">
              <p>Last 30 days</p>
              <MdOutlineArrowDropDown />
            </div>
          </div>
        </div>

        <div className="secondgraph__headleft">
          <h4>Product Name</h4>
          <div className="secondgraph__headright">
            <h6>Stock</h6>
            <h6>Price</h6>
            <h6>Total Sales</h6>
          </div>
        </div>

        <hr style={{ border: "2px solid #F5F6F8", width: "170vh", margin: "10px" }} />

        <div className="secondgraph__headleft">
          <div className="left_img">
            <img src={first} alt="first" />
            <div className="left_text">
              <h2>Abstract 3D</h2>
              <p>Lorem isf fksdfi f sijfdfanfndfdsakfk</p>
            </div>
          </div>
          <div className="secondgraph__headright">
            <h5>32 in stock</h5>
            <h4>$ 45.99</h4>
            <h5>20</h5>
          </div>
        </div>

        <div className="secondgraph__headleft">
          <div className="left_img">
            <img src={second} alt="second" />
            <div className="left_text">
              <h2>Abstract 3D</h2>
              <p>Lorem isf fksdfi f sijfdfanfndfdsakfk</p>
            </div>
          </div>
          <div className="secondgraph__headright">
            <h5>32 in stock</h5>
            <h4>$ 45.99</h4>
            <h5>20</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
