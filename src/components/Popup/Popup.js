import React from 'react'
import './Popup.css'
function Popup({children, onClose, experience}) {
  return ( 
    <div className='popup'>
        <div className='popup-inner'>
          <h2>{experience.s_name}</h2>
          <p>{experience.s_role}</p>
          <p>{experience.s_time}</p>
          <p>{experience.s_desc}</p>

          {experience.s_readmore.map(val => (  
                <li>  {val}</li>
        ))} 
            <button className='close-btn' onClick={() => onClose(false)}>CLOSE</button>
            {children}
        </div>

    </div>
  )
}

export default Popup