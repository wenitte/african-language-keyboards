import React, { Component,  useEffect, useState, useRef } from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import chooseKeyboard from "../../Components/KeyboardLayouts/layouts.js";
import {useParams, Link} from "react-router-dom";
import {getLanguageNameFromCode} from "../../Utils/utils.js";
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
    let [latinValue, setLatinValue] = useState("");
    let [nkoValue, setNkoValue] = useState("");
    const onLatinChangeInput = event => {
        setNkoValue(convertLatinToNko(event.target.value.toLowerCase()));
        console.log(convertLatinToNko(event.target.value));
        console.log(nkoValue);
      };
    
    const onNkoChangeInput = event => {
        setNkoValue(event.target.value);
        console.log(nkoValue);
    }
    
    function chooseCorrectWriteLink(code) {
        return "/write/" + code+"/";
      } 

    function convertLatinToNko(input){
        //first reverse the input
        let reversedInput = input.split("").reverse().join("");
        //then replace all the latin characters with their nko equivalents
        let nkoInput = reversedInput.replace(/[a-z]/gi, function(matched){
            return latinNkoCorrespondence[matched];
        }
        );
        //then reverse the output
        return nkoInput.split("").reverse().join("");
        return nkoInput;
    }
    const chooseCorrectAboutLink = (code) => {
        return "/About/" + code+"/";
       }

    return (
      <div className="App">
      
        <header className="App-header">
        Convert {getLanguageNameFromCode(script.script)} Script by Mandla
                  
<span><a href ={chooseCorrectWriteLink(script.script)}> <button> {script.script} Keyboard</button></a>
<a href ={chooseCorrectAboutLink(script.script)}> <button>About {getLanguageNameFromCode(script.script)}</button> </a> </span>
        </header>
        Latin Script 
        <div>
        <textArea value={latinValue} onChange={onLatinChangeInput}>

            </textArea>
            </div>
            <div>
            N'ko script   Output
            <p style = {{direction:"RTL"}}> {nkoValue}</p>
         <textArea value={nkoValue} onChange={onNkoChangeInput} style={{direction:"RTL", border:"none"}} >
                
            </textArea>
            </div>


      </div>
    );
  }
  
  export default Convert;
  