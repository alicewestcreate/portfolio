import React from 'react'

type VariantType = "primary" | "secondary"
interface props {
    variant? : VariantType,
    label: string,

}

const Button = ({variant = "primary", label }:props) => {



    const buttonCSS = `btn btn-outline bg-inherit text-white`
    const colorCSS = `${variant === "primary" ?  "border-purple-500 hover:bg-purple-500" : 'border-teal-500 hover:bg-teal-500'}`



  

  return (
    <button className={`${buttonCSS} ${colorCSS}`}>
     {label}
    </button>
  )
}

export default Button