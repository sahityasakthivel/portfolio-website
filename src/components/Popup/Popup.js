// import React from 'react'
// import './Popup.css'
// function Popup({children, onClose, experience}) {
//   return ( 
//     <div className='popup'>
//         <div className='popup-inner'>
//           <h2>{experience.s_name}</h2>
//           <p className='role'>{experience.s_role}</p>
//           <p className='time'>{experience.s_time}</p>
//           <p className='desc'>{experience.s_desc}</p>

//           <div className='bullet-points'>{experience.s_readmore.map(val => (  
//                 <li>  {val}</li>

//         ))} 
//         </div>
//         <p className='desc'>{experience.s_awards}</p>
//         <div className='awards'>{experience.s_awards.map(([name, desc]) => (  
//                 <div> {name} xxx {desc}</div>

//         ))} 
//         </div>
//             <button className='close-btn' onClick={() => onClose(false)}>CLOSE</button>
//             {children}
//         </div>

//     </div>
//   )
// }

// export default Popup

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

          <div >{experience.s_awards ? <div className='awards'> <div className='awards-title'>Awards</div> {experience.s_awards.map(([name, desc]) => (  
                <div> <div className='awards-name'>{name} :</div> <div className='awards-desc'>{desc}</div></div>

        ))}</div> :<p></p>} 
        </div>
     
        <div >{experience.s_year ? <div className='education'> <div className='education-title'>Results</div> {experience.s_year.map(([year, grade, modules]) => (  
                <div> <div className='education-name'>{year} : {grade}</div>
                  <div className='education-modules'> {modules.map(([item, z]) => (  
                <div> {item}:  {z} </div>

        ))}</div>
                </div>

        ))}</div> :<p></p>} 
        </div>

          <div >{ experience.s_readmore? <div className='bullet-points'> {experience.s_readmore.map(val => (  
                <li>  {val}</li>

        )) }</div> : <p></p>}
        </div>

        
            <button className='close-btn' onClick={() => onClose(false)}>CLOSE</button>
            {children}
        </div>

    </div>
  )
}

export default Popup