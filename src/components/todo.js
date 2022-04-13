import { useState } from "react"
import { Todocomp } from "./todocompo"
import "./todo.css"

function Todo () 
{
    const [list,setList] = useState([])

    const getData = (todo) =>
    {
        setList([...list , todo])
    }
    return ( 
        <div className="container">
            <Todocomp getData={getData}></Todocomp>
            {list.map( (e) => 
            (
                <div className="lists">{e}</div>
            ))}
        </div>    
    )

}

export {Todo}