import React from "react";
import { PiHandWavingDuotone } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";
import "./Header.css";
import Section from "./Section";
import MidSection from "./MidSection";
import SecondGraph from "./SecondGraph";

export default function Header() {

  return (
    


    <div className="head">

      <div className="header">
        <div className="header__left">
          <h3>Hello Tauseef</h3>
          <PiHandWavingDuotone />
        </div>
        <div className="header__right">
          <div className="header__rightlh">
            <AiOutlineSearch/>
            <input type="search" placeholder="Search"></input>
          </div>
        </div>
      </div>
      
      <Section/>
      <MidSection/>
      
      <SecondGraph/>
      
      
      
    </div>
  );
}
