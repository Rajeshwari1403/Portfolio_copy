import React from 'react'

const InternshipsCard = ({icon, JobTitle, JobRole, Project, Description, Duration}) => {
  return (
    <div className='mx-auto max-w-7xl bg-primary rounded-2xl border border-[#fce8d4] p-4'>
      <div className='flex gap-3'>
        <img src={icon} className='w-14 h-14 md:h-14 object-cover' />

        <div className='flex-1'>
          <div className='flex items-center justify-between'>
            <h2 className='text-[13px] text-white font-medium'>{JobTitle}</h2>
            <p className='text-[13px] text-white font-medium'>{Duration}</p>
          </div>

          <div className='w-full bg-background rounded-md h-[1px] relative mt-2'></div>
          <p className='text-[13px] text-white font-medium mt-4'>Role: {JobRole}</p>
          <p className="text-xs font-medium mt-2 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
            Project Name: <span className="text-white">{Project}</span>
          </p>

        </div>
      </div>
    
     <p className='text-xs text-accent text-justify leading-5 mt-2'>{Description}</p>
    </div>
  )
}

export default InternshipsCard