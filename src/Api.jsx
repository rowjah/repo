import React, { useEffect, useState } from "react";


function Api (){
    const [todo,setTodo]=useState([])

    const fetchdata=()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").
        then(response=>response.json()).
        then(abc=>setTodo(abc.slice(0,6)))
    }
    useEffect(()=>{
        fetchdata()
    },[])

    const handle=(id)=>{
        let name= todo.filter(ac=>ac.id!==id)
        setTodo(name)
    }
    return(
        <div>
            <h1>TODOS</h1>
            {todo.map(ac=>
                <div key={ac.id}>
                    <h1>{ac.title}</h1>
                    <button onClick={()=>handle(ac.id)} className="btn btn-danger">Delete</button>
                </div>
                )}

                <button onClick={fetchdata} className="btn btn-success">REFRESH</button>

        </div>
    )
}
export default Api