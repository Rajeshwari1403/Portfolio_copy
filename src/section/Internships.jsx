import React, { useState } from 'react'
import { INTERNSHIPS, INTERNSHIPS_TABS } from '../utils/data'
import Tabs from '../components/Tabs';
import { motion } from 'framer-motion';
import InternshipsCard from '../components/InternshipsCard';

const Internships = () => {
  const [tabData, setTabData] = useState(INTERNSHIPS);
  const [activeTab, setActiveTab] = useState("all");
  const handleTabValue = (value) => {
    if (value == "all") {
      setTabData(INTERNSHIPS);
      setActiveTab("all");
      return;
    }
    const updatedList = INTERNSHIPS.filter((skill) => skill.ex === value);
    setTabData(updatedList);
    setActiveTab(value);
  }
  return (
    <section id='internships' className='bg-primary mt-[-18px] scroll-mt-20'>
      <div className='container mx-auto p-10'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='sec-title mt-[-8px] cursor-pointer'>
            Internships
          </h4>
          <p className='text-sm text-center mt-4 leading-6 text-white cursor-pointer font-semibold'>Acquired practical experience in full-stack development and quality assurance 
                                                         as an intern, engaging with React, Node.js, testing, and automated testing. 
                                                         Eager to construct responsive web applications, execute 
                                                         API integrations, and design AI-driven results.
          </p>

        </div>

        {/*<Tabs 
        tabList={INTERNSHIPS_TABS}
        activeTab={activeTab}
        onChange={handleTabValue}
        />*/}
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 mt-4 mx-auto max-w-3xl cursor-pointer'>
        {tabData.map((skill, index) => (
          <motion.div key={skill.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <InternshipsCard 
               icon={skill.image}
               JobTitle = {skill.title}
               JobRole = {skill.role}
               Project = {skill.Project_Title}
               Description = {skill.description}
               Duration = {skill.duration} 
            />
          </motion.div>
        ))}
        </div>
      </div>
      <div className='w-[1180px] lg:ml-48 bg-background rounded-md h-[1px] relative mt-[-10px]'></div>
    </section>
  )
}

export default Internships