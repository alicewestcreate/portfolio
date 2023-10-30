import React from 'react'
import PageTemplate from '../_components/PageTemplate'
import projects from "../../api/projectdata.json"


const page = () => {
  return (
    <>
    <PageTemplate hideHeader {...projects[0]}></PageTemplate>
    </>
  )
}

export default page