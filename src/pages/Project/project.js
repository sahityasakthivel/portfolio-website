import React from 'react'
import './project.css'
import Projects_Data from '../../assets/projects_data'
import arrow_icon from "../../assets/arrow_icon.svg"
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Popup from '../../components/Popup/Popup';
import { useState } from 'react';
function Project(){
    const[buttonPopup, setButtonPopup] = useState(false);
    const [seletcedData, setSelectedData] = useState();

    return (
        <div className='projects'>
            <div className='projects-title'>
                <h1> My Projects</h1>
                <p> Press view more to learn more about my projects!</p>
            </div>
            <div className='projects-container'>
            {Projects_Data.map((project, index)=>{
                return <div key={index} className='projects-format'>
                    
                    <img src={project.s_img} alt=''/>
                    <h2>{project.s_name}</h2>
                    <p>{project.s_desc}</p>

                    
                    <div>
                    <button  onClick={()=> {setSelectedData(project); setButtonPopup(true)}}> View More </button>
                    {/* {seletcedData.s_name} */}
                    {buttonPopup && <Popup experience={seletcedData} onClose={setButtonPopup}>
                    
                        
                    </Popup>}
                    
        </div>
                    
                    </div>
            })}
            </div>
        </div>
      )

}

export default Project;