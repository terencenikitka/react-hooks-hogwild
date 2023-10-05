import React, {useState} from "react";
import hogs from "../porkers_data";

function Hogs() {

    const [bool,state]=useState(false)

    const hogCard = hogs.map((hog) => {
       function handleClick(){
state(!bool)
       }

        return (
        <div onClick={handleClick}>
            <h3 key={hog.name}>{hog.name}</h3>
            <img  key={hog.image} src={hog.image}></img>
            <p >{bool ? 'weight '+hog.weight : ' '} </p>
            <p >{bool ? hog.specialty : ' '} </p>
            <p key = {hog.greased}>{bool ? 'is greased? ' + hog.greased : ' '} </p>
            
             
            <p >{bool ? 'Highest medal achieved '+hog['highest medal achieved'] : ' '} </p>
        </div>
        )
    })

    return (
        <div>
            {hogCard}
        </div>
    )
}

export default Hogs;