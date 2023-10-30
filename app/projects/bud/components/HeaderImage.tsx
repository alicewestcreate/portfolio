import Image from 'next/image'
import React from 'react'

interface props {
  image: string,
}
const HeaderImage = ({image}: props) => {
  return (
    <div className="h-56">
    <Image
      className="object-cover w-full h-full object-top"
      src={image}
      alt={""}
      width={1000}
      height={1000}
    />
  </div>
  )
}

export default HeaderImage