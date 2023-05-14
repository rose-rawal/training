import React from 'react'
import PropTypes from 'prop-types'

const Info = ({type, children}) => {
  return (
    <div className={`${type=== "info" ? "text-green-700": "text-red-500"}`}>
      {children}
    </div>
  )
}

Info.propTypes = {
    type: PropTypes.oneOf(["info", "error"]).isRequired
}

export default Info


// Javascript Script Element jsx
