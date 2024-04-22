import React from 'react'

const Button = (props) => {
    
    const handleClick = props.onClickFunc();

  return (
    <div>
        <button onClick = {handleClick}>Generate Cat Facts</button>
        
    </div>
  )
}

export default Button
