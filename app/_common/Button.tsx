import Link from 'next/link'
import React from 'react'

type VariantType = "primary" | "secondary"
interface props {
    hrefValue?: string
    variant? : VariantType,
    label: string,
    newTab?: boolean
    download? : string

}

const Button = ({hrefValue = '/', variant = "primary", newTab = false,  download,  label }:props) => {



    const buttonCSS = `btn btn-outline bg-inherit text-white`
    const colorCSS = `${variant === "primary" ?  "border-purple-500 hover:bg-purple-500" : 'border-teal-500 hover:bg-teal-500'}`



  

  return (
    <Link href={hrefValue} target={newTab ? "_blank" : "_self"} download={(download) ? download : ""}>
      <button className={`${buttonCSS} ${colorCSS}`}>
     {label}
     </button>
    </Link>
  )
}

export default Button