import React from 'react'

const Mybtn = ({title,background,onClick}) => {
  return (
        <button className= 'btn mt-2' style={{backgroundColor: background}} onClick={onClick} >
        {title}
    </button>
  )
}

export default Mybtn