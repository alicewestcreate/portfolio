import React from 'react'

const PrevNext = () => {

    const wrapperCSS = "flex w-full justify-center gap-5"
  return (
    <div className={wrapperCSS}>
        <span>
        <i className="fa-solid fa-arrow-left fa-2xl"></i>
        </span>
        <span>
        <i className="fa-solid fa-arrow-right fa-2xl"></i>
        </span>
    </div>
  )
}

export default PrevNext