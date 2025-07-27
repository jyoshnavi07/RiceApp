import React from 'react'

const secondaryBtn = ({title,onClick}) => {
  return (
    <button className= 'btn ' style={{backgroundColor: '#FFD700 '}} onClick={onClick}>
        {title}
    </button>
  )
}

export default secondaryBtn