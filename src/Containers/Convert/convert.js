import React, { Component,  useEffect, useState, useRef } from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import chooseKeyboard from "../../Components/KeyboardLayouts/layouts.js";
import {useParams, Link} from "react-router-dom";
import {getLanguageNameFromCode} from "../../Utils/utils.js";
import ScriptSelectDropdown from "../../Components/ScriptSelectDropDown/ScriptSelectDropDown.js";
import {chooseCorrespondence, choosePreProcessing} from "../../Utils/convertUtils.js"


// import logo from './logo.svg';

let latinNkoCorrespondence = {
    "a": "ߊ",
    "b": "ߓ",
    "c": "ߗ",
    "d": "ߘ",
    "e": "ߍ",
    "f": "ߝ",
    "g": "ߜ",
    "h": "ߤ",
    "i": "ߌ",
    "j": "ߖ",
    "k": "ߞ",
    "l": "ߟ",
    "m": "ߡ",
    "n": "ߒ",
    "o": "ọ",
    "p": "ߔ",
    "q": "q",
    "r": "ߙ",
    "s": "ߛ",
    "t": "ߕ",
    "u": "u",
    "v": "v",
    "w": "ߥ",
    "x": "ߞߛ",
    "y": "ߌ",
    "z": "ߛ",
    "gb": "ߜ",
    "rr": "ߚ",
    "!": "߹",
    "?": "¿",
    ",": "߸",
    ".": "߷",
}

function Convert() {




    let script = useParams()
    let [direction, setDirection] = useState("LTR");
    let [font, setFont] = useState("Noto Sans");
    let [latinValue, setLatinValue] = useState("");
    let [convertedValue, setConvertedValue] = useState("");
    //useEffect
    useEffect(() => {
      if(script.script=== "Nko" || script.script === "Adlam") {
        setDirection("RTL");
      }
    } , [script.script]);
    useEffect(() => {
      if(script.script=== "Gʋlse") {
        setFont("Goulsse");
      }
      else if (script.script === "Nsibidi") {
        setFont("Akugu");
      }
    } , [script.script]);
    const onLatinChangeInput = event => {
        setConvertedValue(convertScriptAToScriptB(event.target.value.toLowerCase()));
        console.log(convertScriptAToScriptB(event.target.value));
        console.log(convertedValue);
      };
    
    const onNkoChangeInput = event => {
        setConvertedValue(event.target.value);
        console.log(convertedValue);
    }
    
    function chooseCorrectWriteLink(code) {
      //choose the correct direction here
  
        return "/write/" + code+"/";
      } 

    function convertScriptAToScriptB(input){
      if(script.script !="Nsibidi"){
      console.log(input);
        //Preprocess the input
        let preProcessedInput = choosePreProcessing("latin", script.script, input);
        //then replace all the latin characters with their nko equivalents
        let convertedText = preProcessedInput.replace(/[a-z]/gi, function(matched){
            return chooseCorrespondence("latin", script.script)[matched];
        }
        );
        
        return convertedText;
      }
      else{
         //Preprocess the input
         let preProcessedInput = choosePreProcessing("latin", script.script, input);
          //then replace  the latin string with its Nsibidi equivalent
          return chooseCorrespondence("latin", script.script)[preProcessedInput];
        return input;
      }
    }
    const chooseCorrectAboutLink = (code) => {
        return "/About/" + code+"/";
       }

    return (
      <div className="App">
      
        <header className="App-header">
        <span> Convert {" "} <ScriptSelectDropdown script={script.script} />
        {"  "}   Script by Mandla </span>
                  
<span><a href ={chooseCorrectWriteLink(script.script)}> <button> {script.script} Keyboard</button></a>
<a href ={chooseCorrectAboutLink(script.script)}> <button>About {getLanguageNameFromCode(script.script)}</button> </a> </span>
        </header>
        Latin Script 
        <div>
        <textArea value={latinValue} onChange={onLatinChangeInput}>

            </textArea>
            </div>
            <div>
            {script.script} script   Output
            <p style = {{direction:direction, fontFamily:font}} > {convertedValue}</p>
         <textArea value={convertedValue} onChange={onNkoChangeInput} style={{direction:direction, border:"none"}} >
                
            </textArea>
            </div>


      </div>
    );
  }
  
  export default Convert;
  