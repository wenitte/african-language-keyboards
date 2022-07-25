import React, { Component,  useEffect, useState, useRef, } from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import chooseKeyboard from "../../Components/KeyboardLayouts/layouts.js";
import  {useParams, Link} from "react-router-dom";
import {getLanguageNameFromCode,getAboutText} from "../../Utils/utils.js";
import ScriptSelectDropdown from "../../Components/ScriptSelectDropDown/ScriptSelectDropDown.js";
function About () {
//    let { script } = useParams;
   
let script = useParams()
function chooseCorrectWriteLink(code) {
  return "/write/" + code+"/";
}
const chooseCorrectConvertLink = (code) => {
    return "/Convert/" + code+"/";
   }
    return (
      <div className="App">
      
        <header className="App-header">
         <span> 
        About <ScriptSelectDropdown script={script.script} />  Script
        </span>
        <span>
       
        <Link to = {chooseCorrectWriteLink(script.script)} > <button> Write  {getLanguageNameFromCode(script.script)}</button> </Link>
<Link to ={chooseCorrectConvertLink(script.script)} > <button> Convert  {getLanguageNameFromCode(script.script)}</button> </Link>
</span>
        </header>
      
        <p style={{lineHeight:"40px", textAlign:"left", margin:"50px"}}>{getAboutText(script.script)}</p>
<h2> {getLanguageNameFromCode(script.script)} Alphabet</h2>

      </div>
    );
  }
  
  export default About;
  