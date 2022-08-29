import React, { Component,  useEffect, useState, useRef } from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import chooseKeyboard from "../../Components/KeyboardLayouts/layouts.js";
import scripts from '../../Scripts/scripts.js'
import  {useParams, Link} from "react-router-dom";
import {getLanguageNameFromCode} from "../../Utils/utils.js";
import ScriptSelectDropdown from "../../Components/ScriptSelectDropDown/ScriptSelectDropDown.js";




function Home() {
  let script = useParams()
    const [layout, setLayout] = useState("default");
    const [input, setInput] = useState("");
    const [font, setFont] = useState("Noto Sans");
    const keyboard = useRef();

if(script.script==undefined){
  script.script= "Nko";
}
useEffect(() => {
  console.log(script.script)
  if(script.script=="Gʋlse"){
    setFont("Goulsse")
  }
  console.log(font)
 
} ,[script.script]);
let direction = chooseKeyboard(script.script).dir;

    // let script = {name: "N'ko", id: "nko"};
    const onVirtualKeyboardChange = input => {
    //  const input = event.target.value;
    setInput(input);
    }
    const onChangeInput = event => {
      const input = event.target.value;
      setInput(input);
      keyboard.current.setInput(input);
    };

    const onKeyPress = (button) => {
        console.log("Button pressed", button);
        if (button === "{shift}" || button === "{lock}") handleShift();
      };
    
      const handleShift = () => {
        const newLayoutName = layout === "default" ? "shift" : "default";
        setLayout(newLayoutName);
      };
      const chooseCorrectAboutLink = (code) => {
       return "/About/" + code+"/";
      }
      const chooseCorrectConvertLink = (code) => {
        return "/Convert/" + code+"/";
       }
    return (
      <div className="App">
      
        <header className="App-header">
        <span>
        <ScriptSelectDropdown script={script.script} />
        {"  "} Keyboard Input Tool by Mandla</span>
<Link to = {chooseCorrectAboutLink(script.script)} > <button> About  {getLanguageNameFromCode(script.script)}</button> </Link>
<Link to = {chooseCorrectConvertLink(script.script)}> <button> Convert  {getLanguageNameFromCode(script.script)}</button> </Link>
        </header>
        <textarea  rows="15" cols="100"  style={{width:"90vw", unicodeBidi:"bidi-override", fontFamily:font, 
 direction:direction, height:"50vh", fontSize:"30px"}} value={input} onChange={onChangeInput}/>
        <Keyboard
        style={{fontFamily:font}}
           layout= {chooseKeyboard(script.script)}
            keyboardRef={r => (keyboard.current = r)}
            layoutName={layout}
            onChange={onVirtualKeyboardChange}
            onKeyPress={onKeyPress}
        />

      </div>
    );
  }
  
  export default Home;
  