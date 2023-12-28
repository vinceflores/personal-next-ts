import React from 'react'

type ButtonProps = {
    text: string,
    handleClick: () => void
}

const Button = ({text, handleClick } : {text: string, handleClick: () => void}) => {

  return (
    <div onClick={handleClick} className=' cursor-pointer hover:bg-gray-800 hover:text-white'>
        {text}
    </div>
  )
}

export default Button