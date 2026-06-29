import React from 'react';

const ProjectCard = ({ imgUrl, title, description, tags, link, deployed_link }) => {
  return (
    /* h-full keeps the outer shell consistent, and flex-col lets us push the footer to the bottom */
    <div className='h-full min-h-[440px] bg-white rounded-xl overflow-hidden shadow-md flex flex-col justify-between border border-gray-100 w-full'>
      <div>
        {/* Project Thumbnail Image */}
        {imgUrl ? (
          <img src={imgUrl} alt={title} className='w-full h-56 object-cover' />
        ) : (
          <div className='w-full h-56 bg-gray-100 flex flex-col items-center justify-center text-gray-400 px-4 text-center border-b border-gray-100'>
            <span className='text-3xl mb-1'>💻</span>
            <p className='text-xs font-medium max-w-[200px]'>Production Application Build Visual Pending</p>
          </div>
        )}
        
        {/* Content Section */}
        <div className='px-5 py-4 flex flex-col justify-between'>
          {/* Locked Title Area: Always occupies 2.5rem even if text fits on 1 line */}
          <div className='min-h-[2.5rem] flex items-center'>
            <h3 className='text-base font-bold text-gray-900 line-clamp-2' title={title}>
              {title}
            </h3>
          </div>

          {/* Locked Description Area: Always occupies 3.5rem so empty or short descriptions don't collapse the card */}
          <div className='min-h-[3.5rem] flex items-start'>
            <p className='text-xs text-gray-500 line-clamp-3 leading-relaxed'>
              {description || "Application architectural overview and dataset tracking analysis configuration features pending production release updates."}
            </p>
          </div>
          
          {/* Locked Tech Stack Tags Area: Always occupies 4.5rem so 1-line and 2-line tags stay uniform */}
          <div className='min-h-[4.5rem] mt-2.5 flex flex-wrap gap-1.5 content-start'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='text-[11px] font-semibold text-gray-700 bg-gray-100 px-2.5 py-1 rounded-md h-fit'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer Anchors: Reliably pushed down together */}
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