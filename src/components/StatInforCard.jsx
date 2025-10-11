import React from 'react'

const StatInforCard = ({count, label}) => {
  return (
    <div className='flex-1 flex gap-3 md:gap-5 bg-gradient-to-b from-[#144361] to-[#6298BC] rounded-[14px] p-5'>
      <h4 className='text-4xl md:text-5xl font-medium text-black'>{count}</h4>
      <p className='text-sm md:text-[16px] font-normal text-black leading-6 whitespace-pre-line'>{label}</p>
    </div>
  )
}

export default StatInforCard