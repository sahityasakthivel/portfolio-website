import React from 'react'
import './education.css'
import Educations_Data from '../../assets/educations_data'
import arrow_icon from "../../assets/arrow_icon.svg"
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Popup from '../../components/Popup/Popup';
import { useState } from 'react';
function Education(){
    const[buttonPopup, setButtonPopup] = useState(false);
    const [seletcedData, setSelectedData] = useState();

    return (
        <div className='educations'>
            <div className='educations-title'>
                <h1> My Education</h1>
                <p> Press view more to learn more about my educations!</p>
            </div>
            <div className='educations-container'>
            {Educations_Data.map((education, index)=>{
                return <div key={index} className='educations-format'>
                    
                    <img src={education.s_img} alt=''/>
                    <h2>{education.s_role}</h2>
                    <h4>{education.s_time}</h4>
                    <p>{education.s_desc}</p>
                    {education.s_id}
                    
                    <div>
                        {/* <Link to={`/education/${education.s_no}`}>
                        <div className='educations-readmore'>
                        <img src={arrow_icon} alt=''/> 
                    </div></Link> */}
                    <button  onClick={()=> {setSelectedData(education); setButtonPopup(true)}}> View More </button>
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

export default Education;