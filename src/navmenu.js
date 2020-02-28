import React from 'react'

const Navmenu=({nav})=> {
    return (
        
        <div className="navbar">
{nav.map(e=>
    <a className="drop">{e.title}
     
    {!e.dropdown ? null :<div className="dropmenu">
    {e.dropdown.map(e=>
        <a> {e}</a>
    )} </div>}
   
    
    </a>
    
)}
 </div>
        
    
    )
}
export default Navmenu