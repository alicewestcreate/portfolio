import React from 'react'

const CenterColumnLayout = ({children}:any) => {

    const wrapperCSS = "grid";
    const projectColumnCSS = "flex flex-col gap-12 sm:p-24 justify-self-center";
    const projectColumnReponsive = "md:max-w-4xl lg:max-w-6xl";
  
    return (
      <div className={`${wrapperCSS}`}>
        <div className={`${projectColumnCSS} ${projectColumnReponsive}`}>
       {children}
        </div>
      </div>
    );
  };

export default CenterColumnLayout