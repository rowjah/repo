import React, { useState } from "react";


function Fun (){
    const[name,setName]=useState("RRR")
    const[fun,setFun]=useState(0)

    const handle=()=>{
        setFun(fun+1)
    }
    return(
        <div>
            <h1>{name}</h1>
            <h2>{fun}</h2>

            <button onClick={handle}>ADD</button>
        </div>
    )
}

export default Fun