import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATES } from '../utils/data';
import CertificatesCard from '../components/CertificatesCard';

const Certificates = () => {
  const [tabData, setTabData] = useState(CERTIFICATES);
  const [activeTab, setActiveTab] = useState("all");

  const handleTabValue = (value) => {
    if (value === "all") {
      setTabData(CERTIFICATES);
      setActiveTab("all");
      return;
    }
    const updatedList = CERTIFICATES.filter((cert) => cert.category === value);
    setTabData(updatedList);
    setActiveTab(value);
  };

  return (
    <section id='certificates' className='bg-primary mt-[-14px] mx-auto max-w-7xl rounded-lg scroll-mt-20'>
      <div className='container mx-auto p-10'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='sec-title mt-[-8px]'>Certificates</h4>
          <p className='text-sm text-center mt-2 leading-6 text-white font-semibold mb-4'>
            Obtained practical experience in frontend, backend, and automation through courses on React, UI/UX, Python, Postman, and Data Structures.
            Concentrated on creating responsive web apps, integrations with APIs, and automation products using AI.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {tabData.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <CertificatesCard
                  icon={<Icon className={`w-6 h-6 ${cert.color}`} />}
                  courseName={cert.name}
                  organization={cert.organization}
                  description={cert.description}
                  link={cert.link}
                  tags={cert.tags}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className='w-full bg-background rounded-md h-[1px] relative mt-[-14px]'></div>
    </section>
  );
};

export default Certificates;
