import React, { useState } from "react";

import "./App.css"

function Filter() {
    const[date,setDate]=useState([
        {
            id:1,
            item:"dosa",
            category:"breakfast",
        },
        {
            id:2,
            item:"dosa rava",
            category:"breakfast",
        },
        
        {
            id:3,
            item:"rice",
            category:"lunch",
        },
        
        {
            id:4,
            item:"briyani",
            category:"lunch",
        },
        
        {
            id:5,
            item:"dargon fruit",
            category:"juice",
        },
        
        {
            id:1,
            item:"druken monkey",
            category:"juice",
        },
        

    ])

    const[ render,setRender]= useState(date)

    const depart= date.map(data=>data.category)

    console.log(depart);

    const uni= [...new Set(depart)]

    uni.unshift("All")

    console.log(uni);

    const handle= (d)=> {
        console.log(d);

        if(d==="All"){
            setRender(date)
            return
        }

        const filterdata= date.filter(data=>data.category===d)
        setRender(filterdata)
    }

    


    return(
        <div>
            <h1>OUR MENU</h1>
            {uni.map(d=>
                <span onClick={()=>handle(d)}  className="heading">{d}</span>
                )}
            
             { render.map(data=>
                <div key={data.id}>
                    <h2>{data.item}</h2>

                </div>
                
                )}
        

        </div>
    )
}

export default Filter