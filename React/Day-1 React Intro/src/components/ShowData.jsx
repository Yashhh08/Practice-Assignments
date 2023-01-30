import React from "react";

const ShowData = (data)=>{

    return(
        <ul>
            {data.map((item)=>(
                <li>{item}</li>
            ))}
        </ul>
    )

}

export default ShowData;