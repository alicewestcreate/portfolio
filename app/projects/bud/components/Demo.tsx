import Image from 'next/image'
import React from 'react'

interface props {
    srcValue: string
    altValue: string,
}
const Demo = ({srcValue, altValue}: props) => {
  return (
    <div className="flex justify-center">
    <Image
      src={srcValue}
      alt={altValue}
      width={1000}
      height={1000}
      unoptimized={true}
    />
  </div>
  )
}

export default Demo