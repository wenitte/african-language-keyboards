import React, { Component,  useEffect, useState, useRef, } from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import chooseKeyboard from "../../Components/KeyboardLayouts/layouts.js";
import  {useParams} from "react-router-dom";

import {getLanguageNameFromCode,getAboutText} from "../../Utils/utils.js";
import Alphabet from "../../Components/Alphabet/Alphabet.js";
function About () {
//    let { script } = useParams;
   
let script = useParams()

    return (
      <div className="App">
      
        <header className="App-header">
        About {getLanguageNameFromCode(script.script)} Script
        </header>
       
        <p style={{lineHeight:"40px", textAlign:"left", margin:"50px"}}>{getAboutText("nko")}</p>
<h2> {getLanguageNameFromCode(script.script)} Alphabet</h2>

      </div>
    );
  }
  
  export default About;
  