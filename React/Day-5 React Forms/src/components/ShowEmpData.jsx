import React from "react";

const ShowEmpData = (props)=>{

    return(
        
        props.empData.map((data)=>{

            return(
                <div key={data.id}>{data.name}</div>
            )
            
        })

    )

}

export default ShowEmpData;