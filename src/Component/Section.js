import React from "react";
import "./Section.css";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";



export default function Section() {
  return (
    <div className="section1">
        <div className="section">
            <div className="section__row1" style={{backgroundColor : "#DDFEEC"}}>
                <PiCurrencyDollarSimpleFill style={{color : "#01A947"}}/>
            </div>
            <div className="section__row2">
                <p>Earning</p>
                <h2>$ 198k</h2>
                <p>
                <span style={{color : "#3CB561"}}>
                    <AiOutlineArrowUp />
                    37.8 %
                </span>
                this month
                </p>
            </div>
        </div>

        <div className="section">
        <div className="section__row1" style={{backgroundColor: "#E7DBFF"}}>
            <PiCurrencyDollarSimpleFill style={{color : "#A301FF"}}/>
        </div>
        <div className="section__row2">
            <p>Orders</p>
            <h2>$ 2.4k</h2>
            <p>
            <span style={{color : "#D62666"}}>
                <AiOutlineArrowDown/>
                2 %
            </span>
            this month
            </p>
        </div>
        </div>

        <div className="section">
        <div className="section__row1" style={{backgroundColor: "#CBF2FF"}}>
            <PiCurrencyDollarSimpleFill style={{color : "#0F5EC2"}}/>
        </div>
        <div className="section__row2">
            <p>Balance</p>
            <h2>$ 2.4k</h2>
            <p>
            <span style={{color : "#D62666"}}>
                <AiOutlineArrowDown/>
                2 %
            </span>
            this month
            </p>
        </div>
        </div>

        <div className="section">
        <div className="section__row1" style={{backgroundColor: "#FEB3DA"}}>
            <PiCurrencyDollarSimpleFill style={{color : "#D80111"}}/>
        </div>
        <div className="section__row2">
            <p>Total Sales</p>
            <h2>$ 89k</h2>
            <p>
            <span style={{color : "#3CB561"}}>
                <AiOutlineArrowUp />
                11 %
            </span>
            this month
            </p>
        </div>
        </div>
     
    </div>
  );
}
