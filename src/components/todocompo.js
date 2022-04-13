
import { useState } from "react"

import "./todo.css"


export const Todocomp = ({getData}) =>
{

    const [text , setText] = useState("")
    return (
        <div>
            <input className="inputbox"
            onChange={(e) =>
            {
                console.log(e.target.value)
                setText(e.target.value)
            }}
            type="text" placeholder= "enter todo" /> 
            <button 
            onClick={ () =>
            {
                getData(text)
            }}
            >Show me</button>
            
        </div>
    )
}