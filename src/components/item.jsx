import React, { useState } from 'react'
import IndexForm from './indexform'

const Item = ({
    title,
    description,
    onChange
}) => {
    const [isEdited, setEdited] = useState(false)
  if(isEdited){
    return <IndexForm 
    initalData={{
        title,
        description
    }}
    onSubmit={(updatedData)=>{
        console.log("updated Data", updatedData)
        const argument = {
            oldData: {
                title,
                description
            },
            newData: updatedData
        }
        onChange(argument)
    }}
    onClose={()=>{
        setEdited(false)
    }} />
  }
  return (
    <div
        style={{
            margin: "10px 0",
            border: "2px solid black",
            borderRadius: "5px",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between"
        }}
    >
       <div>
            <h3 style={{
                margin: 0,
                padding: 0,
            }}>{title}</h3>
            <p style={{
                margin: 0,
                padding: 0,
            }}>{description}</p>
       </div>
       <div>
            <button onClick={()=>{
                setEdited(prev=>!prev)
                console.log("ItemforEdit", {
                    title,
                    description

                })
            }}>Edit</button>
            <button onClick={()=>{
                console.log("triggering delete:", title)
                onChange({
                    oldData: {
                        title,
                        description
                    },
                    newData: {}
                }, "delete")
            }}>Delete</button>
       </div>
    </div>
  )
}

export default Item
