import React, { useState } from 'react'
import { SKILLS } from '../utils/data'

const TechProficiency = () => {
  const [tabData, setTabData] = useState(SKILLS);
  const [activeTab, setActiveTab] = useState("all");
  const handleTabValue = (value) => {
    if (value == "all") {
      setTabData(SKILLS);
      setActiveTab("all");
      return;
    }
    const updatedList = SKILLS.filter((skill) => skill.type === value);
    setTabData(updatedList);
    setActiveTab(value);
  }
  return (
    <section id='skills' className='bg-primary mt-[-24px] mx-auto max-w-8xl rounded-lg scroll-mt-20'>
      <div className="container mx-auto p-10">
            <h2 className="sec-title mb-2">Technical Skills</h2>
            <p className='text-sm text-center mb-4 leading-6 text-white font-semibold'>Hands-on experience with frontend, backend, databases, and essential tools 
                                                            like React, Node.js, MongoDB, Postman, and Figma. Focused on building 
                                                            efficient, responsive applications and integrating APIs for real-world solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SKILLS.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.title}
                    className="p-4 bg-gradient-to-b from-[#85cbf7] to-[#6298BC] rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className={`${skill.color} text-3xl`} />
                      <h3 className="text-lg font-semibold text-primary cursor-pointer">{skill.title}</h3>
                    </div>
                    <p className="text-gray-200 text-sm">
                      {skill.items.join("  |  ")}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
           <div className='w-[1480px] lg:ml-24 bg-background rounded-md h-[1px] relative mt-[-10px]'></div>
    </section>
  )
}

export default TechProficiency