import React, { Component,  useEffect, useState, useRef, } from "react";
import  {useParams, Link} from "react-router-dom";
import {getLanguageNameFromCode} from "../../Utils/utils.js";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Button, Row, Col} from 'react-bootstrap';
import Select from 'react-select';


let scripts = [{label:"N'ko", value:"Nko"}, {label:"Adlam", value:"Adlam"} ]


function ScriptSelectDropdown(props) {
  const handleSelect = (e) => {
    //Change the script in the url
    let selectedOption = e.target.value;
    setSelectedOption(selectedOption);
    if(window.location.pathname.toLowerCase().includes("/about/")){
      window.location.href = "/about/" + selectedOption.value + "/";
    }
    else if(window.location.pathname.toLowerCase().includes("/convert/")){
      window.location.href = "/convert/" + selectedOption.value + "/";
    }
    else if(window.location.pathname.toLowerCase().includes("/write/")){
      window.location.href = "/write/" + selectedOption.value + "/";
    }
    else{
      window.location.href = "/write/" + selectedOption.value + "/";
    }
  }
  const [selectedOption, setSelectedOption] = useState({Name:"N'ko", code:"Nko"});
    return (
   
     <Button style= {{backgroundColor:"transparent", color:"white", borderColor:"white",borderRadius:"20px", width:"150px", height:"40px", fontWeight:"bold", fontSize:"25px"}}>
        <Col style={{marginTop:"5px", }}>
        <Select value={selectedOption} options={scripts} onChange={()=>handleSelect()} style= {{backgroundColor:"transparent", color:"white", borderColor:"white",borderRadius:"20px", width:"10px", height:"40px", fontWeight:"bold", fontSize:"25px"}}> {getLanguageNameFromCode(props.script)} </Select>
        </Col>
        <Col style= {{marginTop:"-30px"}}>
        <ExpandMoreIcon style={{color:"white", fontSize:"30px" ,marginLeft:"90px"}}/>
        </Col>
        </Button>
  
      
    );
  }
  
  export default ScriptSelectDropdown;
  