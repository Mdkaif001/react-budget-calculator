import React from 'react'

const Alert = ({type,text}) => {
  return (
    <div className={`alert alert_${type}`}>
     {text}
    </div>
  )
}

export default Alert
