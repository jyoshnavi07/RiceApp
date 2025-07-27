import React from 'react'

const PrimaryBtn = ({title,onClick}) => {
  return (
    <button className= 'btn mt-2' style={{backgroundColor: '#6BA539 '}}
     onClick={onClick}>
        {title}
    </button>
  )
}

export default PrimaryBtn