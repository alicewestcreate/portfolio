import Button from '@/app/_common/Button'
import React from 'react'

interface Props {
  links: {
    deployed: string;
    repo: string;
  }
}

const ButtonWrapper = ({links}: Props) => {

  return (
    <div className="flex gap-3 justify-center my-5">
    <Button newTab hrefValue={links.deployed} label={"View Site"}></Button>
    <Button newTab hrefValue={links.repo} variant="secondary" label={"Git Hub"}></Button>
  </div>
  )
}

export default ButtonWrapper