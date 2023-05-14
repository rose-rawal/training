import React, { useState } from 'react'
import { ListCotext } from './listcontext'

const ListProvider = ({
    children
}) => {
    const [items, setItems] = useState([
    ])
  return (
    <ListCotext.Provider  value={{
        items,
        setItems
    }}>
        {children}
    </ListCotext.Provider>
  )
}

export default ListProvider
