import React from 'react'

const ProjectCard = ({ imgUrl, title, tags, link, deployed_link }) => {
  return (
    <div className='h-full bg-white rounded-xl overflow-hidden shadow-md mx-2'>
      <img src={imgUrl} alt={title} className='w-full h-72 md:h-80 object-cover' />
      <div className='px-4 py-5'>
        <h3 className='text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis'>
          {title}
        </h3>
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

        {/* Links Section */}
        <div className="mt-4 flex justify-between items-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 font-semibold hover:font-semibold hover:text-primary"
          >
            🔗 GitHub
          </a>
          {deployed_link && (
            <a
              href={deployed_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary font-semibold hover:font-semibold hover:text-[#033874ff]"
            >
              🌐 Live Demo
            </a>
          )}
        </div>

      </div>
    </div>
  )
}

export default ProjectCard
