import React from "react";
import hogs from "../porkers_data";

function Hogs() {
    const hogCard = hogs.map((hog) => {
        return (
        <>
            <p key={hog.name}>{hog.name}</p>
            <img key={hog.image} src={hog.image}></img>
        </>
        )
    })

    return (
        <div>
            {hogCard}
        </div>
    )
}

export default Hogs;