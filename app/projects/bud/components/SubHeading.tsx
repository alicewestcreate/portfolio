import React from 'react'

interface props {
    children : string; 
}

const SubHeading = ({children}: props) => {
  return (
    <h3 className="pb-2 font-bold text-2xl text-teal-500">{children} </h3>
  )
}

export default SubHeading