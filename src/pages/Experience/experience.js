import React from 'react'
import './experience.css'
import Experiences_Data from '../../assets/experiences_data'
import arrow_icon from "../../assets/arrow_icon.svg"
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Popup from '../../components/Popup/Popup';
import { useState } from 'react';
function Experience(){
    const[buttonPopup, setButtonPopup] = useState(false);
    const [seletcedData, setSelectedData] = useState();

    return (
        <div className='experiences'>
            <div className='experiences-title'>
                <h1> My Experiences</h1>
                <p> Press view more to learn more about my experiences!</p>
            </div>
            <div className='experiences-container'>
            {Experiences_Data.map((experience, index)=>{
                return <div key={index} className='experiences-format'>
                    
                    <img src={experience.s_img} alt=''/>
                    <h2>{experience.s_role}</h2>
                    <h4>{experience.s_time}</h4>
                    <p>{experience.s_desc}</p>
                    {experience.s_id}
                    
                    <div>
                        {/* <Link to={`/experience/${experience.s_no}`}>
                        <div className='experiences-readmore'>
                        <img src={arrow_icon} alt=''/> 
                    </div></Link> */}
                    <button  onClick={()=> {setSelectedData(experience); setButtonPopup(true)}}> View More </button>
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

export default Experience;