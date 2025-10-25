import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaRegCopy,
} from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const Contact = () => {
  const [copied, setCopied] = useState("");

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000); // reset after 2 sec
  };

  return (
    <section
      id="contact"
      className="bg-primary mt-[-20px] mx-auto max-w-8xl rounded-lg scroll-mt-20 mb-4"
    >
      <div className="container mx-auto px-8 md:px-10 py-10">
        {/* Mobile heading */}
        <h4 className="block lg:hidden w-[200px] sec-title text-left mb-2 cursor-pointer">
          Contact Me
        </h4>

        <div className="flex flex-col lg:flex-row lg:items-start items-center justify-between gap-6 lg:gap-20">
          {/* Left icon */}
          <div className="flex justify-center lg:justify-start items-start w-[200px] md:w-[260px] mt-4 lg:mt-10 lg:ml-24">
            <FaPhoneAlt className="w-24 h-24 md:w-32 md:h-32 text-accent" />
          </div>

          {/* Right content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="hidden lg:block w-[200px] sec-title text-left cursor-pointer">
              Contact Me
            </h2>

            <p className="text-sm font-semibold text-justify leading-6 whitespace-pre-line mt-0 text-white cursor-pointer">
              Open to tech collaborations and new opportunities — let's connect!
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3 text-white text-lg font-medium">
              {/* Phone */}
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <FaPhoneAlt className="text-accent" /> +91 9080915451
                <FaRegCopy
                  onClick={() =>
                    handleCopy("+91 9080915451", "Phone number copied!")
                  }
                  className="cursor-pointer text-accent hover:text-white transition-transform duration-200 hover:scale-110"
                />
              </div>

              {/* Email */}
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <FaEnvelope className="text-accent" /> rajeshwari.cmc@gmail.com
                <FaRegCopy
                  onClick={() =>
                    handleCopy("rajeshwari.cmc@gmail.com", "Email copied!")
                  }
                  className="cursor-pointer text-accent hover:text-white transition-transform duration-200 hover:scale-110"
                />
              </div>
            </div>

            {/* Copy message */}
            {copied && (
              <div className="mt-2 text-sm text-accent font-medium animate-fade">
                {copied}
              </div>
            )}

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-5 mt-6 flex-wrap">
              <a
                href="https://www.linkedin.com/in/rajeshwari-r-cmc"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer group"
              >
                <FaLinkedin className="text-2xl text-background transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[2px] group-hover:text-accent" />
              </a>
              <a
                href="https://github.com/Rajeshwari1403"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer group"
              >
                <FaGithub className="text-2xl text-background transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[2px] group-hover:text-accent" />
              </a>
              <a
                href="https://www.instagram.com/it_z_rathi05/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer group"
              >
                <FaInstagram className="text-2xl text-background transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[2px] group-hover:text-accent" />
              </a>
              <a
                href="https://leetcode.com/u/rajeshwariravi2005/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer group"
              >
                <SiLeetcode className="text-2xl text-background transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[2px] group-hover:text-accent" />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/rajeshwb6d9/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer group"
              >
                <SiGeeksforgeeks className="text-2xl text-background transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[2px] group-hover:text-accent" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
