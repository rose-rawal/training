import React from 'react'

const Button = ({
    text,
    ...otherProps
}) => {
  return (
    <button {...otherProps} className='text-white bg-purple-500 my-2 px-3 py-1 rounded-3xl'>
        {text}
    </button>
  )
}

export default Button
