import React from 'react'

const InternshipsCard = ({icon, JobTitle, JobRole, Project, Description, Duration}) => {
  return (
    <div className='mx-auto max-w-7xl bg-gradient-to-b from-[#85cbf7] to-[#6298BC] rounded-2xl border border-white p-4'>
      <div className='flex gap-3'>
        <img src={icon} className='w-14 h-14 md:h-14 object-cover' />

        <div className='flex-1'>
          <div className='flex items-center justify-between'>
            <h2 className='text-[13px] text-primary font-semibold'>{JobTitle}</h2>
            <p className='text-[13px] text-grey-900 font-semibold'>{Duration}</p>
          </div>

          <div className='w-full bg-primary rounded-md h-[1px] relative mt-2'></div>
          <p className='text-[13px] text-secondary font-semibold mt-2'>Role: {JobRole}</p>
          <p className="text-xs mt-2 bg-gradient-to-r from-black to-black bg-clip-text text-transparent font-semibold">
            Project Name: <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent font-semibold">{Project}</span>
          </p>

        </div>
      </div>
    
     <p className='text-xs text-justify leading-5 mt-2 text-primary font-normal'>{Description}</p>
    </div>
  )
}

export default InternshipsCard