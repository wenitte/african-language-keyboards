import React, { Component,  useEffect, useState, useRef, } from "react";
import  {useParams, Link} from "react-router-dom";
import {getLanguageNameFromCode} from "../../Utils/utils.js";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {Button, Row, Col} from 'react-bootstrap';
import scripts from "../../Scripts/scripts.js"
import Select from 'react-select';




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

    {/* //  <Button style= {{backgroundColor:"transparent", color:"white", borderColor:"white",borderRadius:"20px", width:"150px", height:"40px", fontWeight:"bold", fontSize:"25px"}}>
    //     <Col style={{marginTop:"5px", }}>
    //     {/* <Select value={selectedOption} options={scripts} onChange={()=>handleSelect()} style= {{backgroundColor:"transparent", color:"white", borderColor:"white",borderRadius:"20px", width:"10px", height:"40px", fontWeight:"bold", fontSize:"25px"}}> {getLanguageNameFromCode(props.script)} </Select> */}
    //     {getLanguageNameFromCode(props.script)} 
    //       </Col>
    //     <Col style= {{marginTop:"-30px"}}>
    //     <ExpandMoreIcon style={{color:"white", fontSize:"30px" ,marginLeft:"90px"}}/>
    //     </Col>
    //     </Button> */}
  const [selectedOption, setSelectedOption] = useState({Name:"N'ko", code:"Nko"});
  const [isLanguagesOpen, setIsLanguagesOpen] = useState(false);
  const dropdownMenu = {
    menu:
    <div
								style={{
                  backgroundColor:"white",
									maxHeight: '300px',
                  width:"150px",
                  minHeight:"100px",

									overflowY: 'scroll',
									overflowX: 'hidden',
									textOverflow: 'ellipsis',
								}}
							
							>
              <ul>
								{ 
                scripts.map(script => (
                  <li>
										<Link to={"/write" +`/${script.value}`+'/'}>
											{script.label}
										</Link>
                    </li>
									))}
                  </ul>
							</div>
  }
    return (
     <div>
						<span
							className='lgbo position-relative'
							id='language-selector'
							onClick={() =>
								setIsLanguagesOpen(prevState => !prevState)
							}
						>
							{getLanguageNameFromCode(props.script)}{' '}
							{isLanguagesOpen ? (
								<i><ExpandMoreIcon/></i>
							) : (
								<i><ExpandLessIcon/></i>
							)}
              {isLanguagesOpen? (<div>
              {dropdownMenu.menu}

              </div>):(<div>

              </div>)}
							
						</span>{' '}
</div>
  
  
    );
  }
  
  export default ScriptSelectDropdown;
  