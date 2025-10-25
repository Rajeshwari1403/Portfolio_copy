import React from 'react'

const SkillCard = ({icon, skillName, description, progress}) => {
  return (
    <div className='mx-auto max-w-7xl bg-primary rounded-2xl border border-white p-4'>
      <div className='flex gap-3'>
        <div className='w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#fdeddd] to-[#ffffff] rounded-[7px]'>{icon}</div>

        <div className='flex-1'>
          <div className='flex items-center justify-between'>
            <p className='text-[13px] text-white font-medium'>{skillName}</p>
            <p className='text-xs text-secondary font-medium'>{progress}</p>
          </div>

          <div className='w-full bg-background rounded-md h-[1px] relative mt-2'></div>
          <div 
             className='bg-primary h-[5px] rounded-md'
             style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    
     <p className='text-xs text-accent text-justify leading-5 mt-2'>{description}</p>
    </div>
  )
}

export default SkillCard