import React from 'react';

const ProjectCard = ({ imgUrl, title, tags, link, deployed_link, description }) => {
  return (
    <div className='h-full bg-white rounded-xl overflow-hidden shadow-md flex flex-col justify-between border border-gray-100 w-full'>
      <div>
        {/* Project Thumbnail Image / Placeholder */}
        {imgUrl ? (
          <img src={imgUrl} alt={title} className='w-full h-64 object-cover' />
        ) : (
          <div className='w-full h-64 bg-gray-100 flex flex-col items-center justify-center text-gray-400 px-4 text-center border-b border-gray-100'>
            <span className='text-3xl mb-1'>💻</span>
            <p className='text-xs font-medium max-w-[200px]'>Production Application Build Visual Pending</p>
          </div>
        )}
        
        {/* Content Section */}
        <div className='px-5 py-5'>
          <h3 className='text-base font-bold text-gray-900 line-clamp-2 min-h-[3rem]' title={title}>
            {title}
          </h3>

          {/* 1. New Description Block Added Here */}
          <p className='text-xs text-gray-500 mt-2 line-clamp-2 min-h-[2rem] leading-relaxed'>
            {description}
          </p>
          
          {/* Tech Stack Tags Grid */}
          <div className='flex flex-wrap gap-1.5 mt-3 min-h-[4.5rem] content-start'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='text-[11px] font-semibold text-gray-700 bg-gray-100 px-2.5 py-1 rounded-md'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer Anchors (Links) */}
      <div className="px-5 pb-5 pt-3 border-t border-gray-50 flex justify-between items-center bg-gray-50/50">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-600 font-bold tracking-wide uppercase hover:text-blue-800 transition-colors"
        >
          🔗 GitHub
        </a>
        {deployed_link && (
          <a
            href={deployed_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-green-600 font-bold tracking-wide uppercase hover:text-green-800 transition-colors"
          >
            🌐 Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;