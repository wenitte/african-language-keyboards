import React, { Component,  useEffect, useState, useRef } from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import chooseKeyboard from "../../Components/KeyboardLayouts/layouts.js";
import  {useParams, Link} from "react-router-dom";




function Home() {
  let script = useParams()
    const [layout, setLayout] = useState("default");
    const [input, setInput] = useState("");
    const keyboard = useRef();
if(!script){
  script = {name: "N'ko", id: "nko"};
}
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
    return (
      <div className="App">
      
        <header className="App-header">
        N'ko Keyboard Input Tool by Mandla
<Link to = "/About/Nko" > <button> About N'ko</button> </Link>
<Link to = "/Convert/" > <button> Convert N'ko</button> </Link>
        </header>
        <textarea  rows="15" cols="100"  style={{width:"90vw", unicodeBidi:"bidi-override", 
 direction:"RTL", height:"50vh", fontSize:"30px"}} value={input} onChange={onChangeInput}/>
        <Keyboard
           layout= {chooseKeyboard()}
            keyboardRef={r => (keyboard.current = r)}
            layoutName={layout}
            onChange={onVirtualKeyboardChange}
            onKeyPress={onKeyPress}
        />

      </div>
    );
  }
  
  export default Home;
  