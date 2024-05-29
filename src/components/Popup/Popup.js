import React from 'react'
import './Popup.css'
function Popup({children, onClose, experience}) {
  return ( 
    <div className='popup'>
        <div className='popup-inner'>
          <h2>{experience.s_name}</h2>
          <p className='role'>{experience.s_role}</p>
          <p className='time'>{experience.s_time}</p>
          <p className='desc'>{experience.s_desc}</p>

          <div className='bullet-points'>{experience.s_readmore.map(val => (  
                <li>  {val}</li>

        ))} 
        </div>
            <button className='close-btn' onClick={() => onClose(false)}>CLOSE</button>
            {children}
        </div>

    </div>
  )
}

export default Popup