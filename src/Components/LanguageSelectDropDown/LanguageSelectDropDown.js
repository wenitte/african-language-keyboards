import React, { Component,  useEffect, useState, useRef } from "react";
import  {useParams, Link} from "react-router-dom";
import {getLanguageNameFromCode} from "../../Utils/utils.js";




function LanguageSelectDropdown(props) {
    return (
      <div className="App">
        <button> {getLanguageNameFromCode(props.script)}</button>
      </div>
    );
  }
  
  export default LanguageSelectDropdown;
  