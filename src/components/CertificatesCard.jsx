import React from 'react'

const CertificatesCard = ({ icon, courseName, organization, link, tags = [] }) => {
  return (
    <div className='mx-auto max-w-7xl p-3 bg-gradient-to-b from-[#85cbf7] to-[#6298BC] rounded-2xl border border-[#fce8d4] hover:shadow-lg hover:scale-[1.01] transition-transform duration-200'>
      {/* Top section */}
      <div className='flex gap-3'>
        {/* Icon */}
        <div className='w-10 h-10 flex items-center justify-center bg-primary rounded-[7px]'>
          {icon}
        </div>

        {/* Content */}
        <div className='flex-1'>
          <div className='flex items-start justify-between'>
            <div>
              <p className='text-[16px] text-primary font-semibold'>
                {courseName}
              </p>
              <p className='text-[13px] text-primary font-medium mt-1'>
                {organization}
              </p>
            </div>

            {/* View Certificate Link (Right Corner) */}
            {link && (
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs text-blue-950 font-semibold hover:text-blue-950 whitespace-nowrap ml-4'
              >
                View Certificate
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Skills Learned Section */}
      {Array.isArray(tags) && tags.length > 0 && (
        <div className='mt-2 text-sm text-white font-semibold'>
          <p className='font-medium'>
            <span className='ml-1 text-[13px] font-normal'>
              {tags.join(' • ')}
            </span>
          </p>
        </div>
      )}
    </div>
  )
}

export default CertificatesCard
