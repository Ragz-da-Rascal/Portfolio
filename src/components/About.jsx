import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../Utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }
  }, []);

  const tiltOptions = { max: 25, scale: 1, speed: 400, glare: false };

  const CardContent = (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="w-full green-white-gradient p-[1px] rounded-[20px] shadow-card"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className='bg-black-100 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  );

  return (
    <>
      {isTouch ? (
        <div className="xs:w-[250px] w-full">
          {CardContent}
        </div>
      ) : (
        <Tilt className="xs:w-[250px] w-full" options={tiltOptions}>
          {CardContent}
        </Tilt>
      )}
    </>
  )
}

const About = () => {
  return (
    <>
      <div className='bg-black-200 rounded-[20px] p-1'>
        <div className={`${styles.padding} bg-black-100 rounded-2xl min-h-[300px] border-2 border-secondary`}>
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-primary`}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-white-100 text-[17px] max-w-3xl leading-[30px]'
          >
            As a dedicated <span className='text-primary text-[20px] font-semibold'>React Developer</span> with a strong expertise in
            <span className='text-primary text-[20px] font-semibold'> JavaScript, HTML, CSS,</span> and modern
            <span className='text-primary text-[20px] font-semibold'> ReactJS frameworks</span>, I build responsive, user-focused
            interfaces aligned with clean code principles and performance optimization. Experienced with
            <span className='text-primary text-[20px] font-semibold'> Tailwind CSS</span> and
            <span className='text-primary text-[20px] font-semibold'> Node.js</span>, crafting maintainable applications that merge functionality with thoughtful <span className='text-primary text-[20px] font-semibold'>UI/UX design</span>.
          </motion.p>
        </div>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");