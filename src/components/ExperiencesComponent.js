// import React from 'react';
import { useParams } from "react-router-dom";
import Experiences_Data from '../assets/experiences_data'

const ExperiencesComponent = () =>{

    const { id } = useParams()
    const obj = Experiences_Data[id];
    return(
        <div className="experiences-details">
            <h2> {obj.s_name}</h2>
           
            <h2> {obj.s_role}</h2>
            <h3> {obj.s_time}</h3>
            
            {obj.s_readmore.map(val => (  
                <li>  {val}</li>
        ))} 
            
        </div>
    );
}

export default ExperiencesComponent;