import { useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';

const ContactInfoCard = ({ icon, label, text, link, isCopyable }) => {
  const [showCopiedMsg, setShowCopiedMsg] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setShowCopiedMsg(true);

    setTimeout(() => {
      setShowCopiedMsg(false);
    }, 2000);
  };

  return (
    <>
      <div className='flex items-center justify-between gap-5 bg-blue-100 rounded border border-blue-500 px-4 py-3 mb-5 group transition-all hover:bg-blue-200'>

        <div className='flex items-center gap-5'>

          <div className='w-10 h-10 text-xl flex items-center justify-center bg-gradient-primary text-white rounded-lg'>
            {icon}
          </div>

          <div className="relative text-secondary text-xs md:text-sm">
            {/* Wrap label+text in <a> if it's linkable (but not phone) */}
            {link && link !== "no-link" ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <span className="block group-hover:hidden">{label}</span>
                <span className="absolute left-0 top-[-8px] opacity-0 group-hover:opacity-100 text-primary truncate max-w-xs">
                  {text}
                </span>
              </a>
            ) : (
              <>
                <span className="block group-hover:hidden">{label}</span>
                <span className="absolute left-0 top-[-8px] opacity-0 group-hover:opacity-100 text-primary truncate max-w-xs">
                  {text}
                </span>
              </>
            )}
          </div>
        </div>

        {isCopyable && (
          <button
            onClick={handleCopy}
            className='text-secondary hover:text-background'
          >
            <IoCopyOutline size={20} />
          </button>
        )}
      </div>

      {showCopiedMsg && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-md z-50">
          {label} copied!
        </div>
      )}
    </>
  );
};

export default ContactInfoCard;
