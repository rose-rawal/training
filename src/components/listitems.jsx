import React from 'react'
import Item from './item'

const ListItems = ({
  list,
  onListChange
} // props
) => {
  // console.log("Props: ", props)
  // console.log("Props.List", props.list)
  if(list.length ===0){
    return (<div>
      No items, Please add
    </div>)
  }

  return (
    <div>
        {
          list.map((arg, index)=>{
            return ( /** 
              concatination:   `${var}string ${var} string ${var}`
            */
              <Item onChange={onListChange} key={`${arg.title}-${index}`} title={arg.title} description={arg.description} />
            );
          })
        }

    </div>
  )
}

export default ListItems
