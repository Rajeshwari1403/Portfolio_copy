import React, { useState } from 'react'
import Tabs from '../components/Tabs';
import { motion } from 'framer-motion';
import { CERTIFICATES, CERTIFICATES_TABS } from '../utils/data';
import CertificatesCard from '../components/CertificatesCard';

const Certificates = () => {
  const [tabData, setTabData] = useState(CERTIFICATES);
  const [activeTab, setActiveTab] = useState("all");
  const handleTabValue = (value) => {
    if (value == "all") {
      setTabData(CERTIFICATES);
      setActiveTab("all");
      return;
    }
    const updatedList = CERTIFICATES.filter((skill) => skill.category === value);
    setTabData(updatedList);
    setActiveTab(value);
  }
  return (
    <section id='certificates' className='bg-background mt-14 mx-auto max-w-7xl rounded-lg scroll-mt-20'>
      <div className='container mx-auto p-10'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='sec-title mt-[-8px]'>
            Certificates
          </h4>
          <p className='text-sm text-center mt-4 leading-6'>Obtained practical experience in frontend, backend, and automation 
                                                         through courses on React, UI/UX, Python, Postman, and Data Structures. 
                                                         Concentrated on creating responsive web apps, integrations with 
                                                         APIs, and automation products using AI.
          </p>

        </div>

        <Tabs 
        tabList={CERTIFICATES_TABS}
        activeTab={activeTab}
        onChange={handleTabValue}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 min-h-[430px]'>
        {tabData.map((skill, index) => (
          <motion.div key={skill.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <CertificatesCard
               icon={<skill.icon className='w-6 h-6 text-primary' />}
               courseName = {skill.name}
               organization = {skill.organization}
               description = {skill.description}
               link = {skill.link}
               tags = {skill.tags}
            />
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates