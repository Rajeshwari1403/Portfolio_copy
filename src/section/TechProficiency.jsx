import React, { useState } from 'react'
import { SKILLS, SKILLS_TABS } from '../utils/data'
import Tabs from '../components/Tabs';
import SkillCard from '../components/SkillCard';
import { motion } from 'framer-motion';

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
    <section id='skills' className='bg-background mt-20 scroll-mt-20'>
      <div className='container mx-auto p-10'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='sec-title'>
            Technical Proficiency
          </h4>
          <p className='text-sm text-center mt-4 leading-6'>Hands-on experience with frontend, backend, databases, and essential tools 
                                                            like React, Node.js, MongoDB, Postman, and Figma. Focused on building 
                                                            efficient, responsive applications and integrating APIs for real-world solutions.
          </p>

        </div>

        <Tabs 
        tabList={SKILLS_TABS}
        activeTab={activeTab}
        onChange={handleTabValue}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]'>
        {tabData.map((skill, index) => (
          <motion.div key={skill.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <SkillCard 
               icon={<skill.icon className='w-6 h-6 text-primary' />}
               skillName = {skill.skill}
               description = {skill.description}
               progress = {skill.progress} 
            />
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default TechProficiency