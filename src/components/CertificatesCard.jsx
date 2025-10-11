import React from 'react'

const CertificatesCard = ({ icon, courseName, organization, description, link, tags = [] }) => {
  return (
    <div className='mx-auto max-w-7xl p-4 bg-primary rounded-2xl border border-[#fce8d4] hover:shadow-lg hover:scale-[1.01] transition-transform duration-200'>
      <div className='flex gap-3'>
        {/* Icon */}
        <div className='w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#fdeddd] to-[#ffffff] rounded-[7px]'>
          {icon}
        </div>

        {/* Header */}
        <div className='flex-1'>
          <div className='flex items-center justify-between'>
            <p className='text-[13px] text-white font-medium'>
              {courseName} ({organization})
            </p>

            {/* View Certificate Link */}
            {link && (
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs text-background hover:text-accent'
              >
                View Certificate
              </a>
            )}
          </div>

          <div className='w-full bg-background rounded-md h-[1px] relative mt-2'></div>
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className='text-xs text-accent text-justify leading-5 mt-2'>
          {description}
        </p>
      )}

      {/* Tags Section (Safe Rendering) */}
      {Array.isArray(tags) && tags.length > 0 && (
        <div className='flex flex-wrap gap-2 mt-2'>
          {tags.map((tag, index) => (
            <span
              key={index}
              className='text-xs text-black bg-[#C0CED1] px-3 py-1 rounded'
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default CertificatesCard
