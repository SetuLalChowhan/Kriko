import React from 'react'

const CommonHeader = ({title}) => {
  return (
    <h1 className=" xl:text-[72px] lg:text-[40px] text-[24px] font-fredoka font-[600]">
    {title}
  </h1>
  )
}

export default CommonHeader