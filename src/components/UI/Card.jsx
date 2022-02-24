import React from 'react'

const Card = (props) => {
    let classes = 'card '+props.className
  return (
    <div className={classes}>
        {props.children}
    </div>
  )
}

export default Card