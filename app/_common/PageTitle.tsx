import React from 'react'

interface props {
    children : string
}

const PageTitle = ({children} :props) => {
  return (
    <h1 className="text-3xl	text-white pl-6 "> {children}</h1>
  )
}

export default PageTitle