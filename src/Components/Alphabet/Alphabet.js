import React, { Component,  useEffect, useState, useRef, } from "react";
import {chooseAlphabet} from "../../Components/Alphabet/languageAlphabets.js";

function Alphabet (props) {
  
       
  
    
        return (
          <div>
          <table>
            <thead>
            {props.name.alphabet}
            </thead>

            <tbody>
          </tbody>
          </table>

          </div>
        );
      }
      
      export default Alphabet;