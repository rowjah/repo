import React, { useState } from "react";

import "./style.css"
function Birth (){
    const[data,setData]=useState([
        {
            id:1,
            name: "veronica",
            age:21,
            img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg', 

        },
        {
            id:2,
            name: "veronica",
            age:21,
            img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg', 

        },
        {
            id:3,
            name: "veronica",
            age:21,
            img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg', 

        },
        {
            id:4,
            name: "veronica",
            age:21,
            img:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg', 

        },
        
    ])
    return(
        <div className="rg-color">
            <h1>  {data.length } birthday today</h1>
                 {data.map(x=>
                 <div key={x.id}> 
                    <h1>{x.name}</h1>
                    <img className="roundimg" src={x.img} height='200px' width={200}/>
                    <h2> {x.age} years</h2>
                    
                 </div>
                    )}


        </div>
    )
}


export default Birth