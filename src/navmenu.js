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
        
/* <div className="drop">
    <div className="dropmenu">
        {!el.dropdown ? null : nav.map(e=>(<a>{e}</a>) )   }

    </div>



</div> */





            /* <a href="#">Home</a>
            
            <div className="drop" ><a href="#">Services</a>
                <div className="dropmenu">
                     <a href="#">For entrepreneur</a>
                    <a href="#">For Students</a>
                    <a href="#">For Hobbyists</a>
                </div>
            </div>
            <a href="#">Contact</a> */
            
       

    
    )
}
export default Navmenu










// import React from 'react' ;


// function navmenu() {
//     return (
//         <nav>   
//             <a>Home</a>
            
//             <div className="drop" >Services
//                 <div className="dropmenu">
//                     <a href="#">For entrepreneur</a>
//                     <a href="#">For Students</a>
//                     <a href="#">For Hobbyists</a>
//                 </div>
//             </div>
//             <a>Contact</a>

//         </nav>
// )

// }

// export default navmenu ;