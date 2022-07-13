import React, { Component,  useEffect, useState, useRef } from "react";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import chooseKeyboard from "../../Components/KeyboardLayouts/layouts.js";
// import logo from './logo.svg';



function Home() {
    const [layout, setLayout] = useState("default");
    const [input, setInput] = useState("");
    const keyboard = useRef();
    let nkoKeyboard = {
        layout: {
          default: [
              "1",
            //   "{tab} ߊ ߛ ߘ ߝ ߜ ߤ ߖ ߞ ߟ ߸ ߴ [ ]",
            //   "{lock} ߢ ߏ ߗ ߍ ߓ ߣ ߡ ߲ ߳ ⸮ {enter}",
            // //   "{shift} \u07E2 \u07CF \u07D7 \u07CD \u07D3 \u07E3 \u07E1 \u07F2 \u07F3 \u2E2E {shift}",
            //   ".com @ {space}",
          ],
        //   shift: [
        //     "ߒ ߥ ߋ ߙ ߕ ߦ ߎ ߌ ߐ ߔ = {bksp}",
        //     "{tab} ߊ ߛ ߘ ߝ ߜ ߤ ߖ ߞ ߟ ߸ ߴ [ ]",
        //     "{lock} ߢ ߏ ߗ ߍ ߓ ߣ ߡ ߲ ߳ ⸮ {enter}",
        //   //   "{shift} \u07E2 \u07CF \u07D7 \u07CD \u07D3 \u07E3 \u07E1 \u07F2 \u07F3 \u2E2E {shift}",
        //     ".com @ {space}",
        //   ],
      },
              }
    let script = {name: "N'ko", id: "nko"};
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
      
        /**
         * If you want to handle the shift and caps lock buttons
         */
        if (button === "{shift}" || button === "{lock}") handleShift();
      };
    
      const handleShift = () => {
        const newLayoutName = layout === "default" ? "shift" : "default";
        setLayout(newLayoutName);
      };
    return (
      <div className="App">
        <header className="App-header">
        N'ko Keyboard Input Tool

        </header>
        <input style={{width:"100vw", height:"50vh", fontSize:"30px"}} value={input} onChange={onChangeInput} />
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
  