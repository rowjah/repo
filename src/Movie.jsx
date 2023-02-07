import React, { useState } from "react";



function Movie(props){
    const[film,setFilm]=useState(0)

    const handlee=()=>{
        setFilm(film+1)
    }
    return(
        <div>
             {}
            <h1>KAMALA CINEMA</h1>
            <h2>MOVIElist:{props.funz} </h2>
            <h2>Tickets:{film}</h2>
            <button onClick={handlee}>Add</button>

        </div>
    )
}
export default Movie