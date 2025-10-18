import React from 'react'

const StatInforCard = ({count, label}) => {
  return (
    <div className='flex-1 flex gap-3 md:gap-5 bg-gradient-to-b from-[#85cbf7] to-[#6298BC] rounded-[14px] p-5'>
      <h4 className='text-4xl md:text-5xl font-medium text-primary'>{count}</h4>
      <p className='text-sm md:text-[16px] font-semibold text-primary leading-6 whitespace-pre-line'>{label}</p>
    </div>
  )
}

export default StatInforCard