import React, { useState } from 'react'
import './style.scss'

const Button = () => {

  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}> Hola! {count} </button>
  )
}

export default Button