import React from 'react'

interface props {
    features: string[]
}

const FeatureList = ({features}:props) => {

    const renderFeatureList = () => {
        return features.map((feature, index)=> (
            <li key={index} className="pl-4 border-l-2 border-teal-500 my-8">
                {feature}
            </li>

        ))
    }

  return (
    
    <ul className="text-lg">
        {renderFeatureList()}

  </ul>
  )
}

export default FeatureList