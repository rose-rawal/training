import React, { useEffect, useState } from 'react'
import Info from './info'

const IndexForm = ({
  initalData = {},
  label= "Form",
  onSubmit,
  onClose
}) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState("")

  useEffect(()=>{
    if(initalData.title) setTitle(initalData.title)
    if(initalData.description) setDescription(initalData.description)
  }, [initalData])

  const handleSubmit = (event)=>{
    event.preventDefault() // prevents reloading of site
    console.log("onFormSubmit: ", title, description)
    if(title === ""){
      setError("Title is required")
      return
    }
    if(description === "") {
      setError("Description is required")
      return
    }
    // we have valid data
    setError("")
    onSubmit({
      title,
      description
    }) // data got posted

    setTitle("")
    setDescription("")
  
  }

  return (
    <div>
      {label}
      <form onSubmit={handleSubmit}> 

        <label>
          <div>
            Title:
          </div>
        <input 
          type="text" 
          name="title" 
          value={title}
          onChange={
            (event )=> {
              /**
                Event Specifies Input event
               * 
               * Event contains target which specifies Input Element (event.target)
               * 
               * Input DOM (value)
               */
              console.log(event.target.value)
              setTitle(event.target.value)
            }
          } 
          />
        </label>
        <br/>
        <label>
          <div>
            Description
          </div>
          <textarea
            name="description"
            value={description}
            onChange={e=>setDescription(e.target.value)}
          ></textarea>
        </label>
        <br/>
        <Info type={error !== ""? "error" : "info"}>
          {error !== "" ? error:  "Please fill up all the fields"}
          </Info>
    

        <button type="submit">
          {!!initalData.title ? "Update": "Submit"}
        </button>
        {onClose && <button type='button' onClick={onClose}>
           Cancel
          </button>}
      </form>
    </div>
  )
}

export default IndexForm
