import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { mobileBackup } from '../assets';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-primary' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-primary' />
        </div>
        <div className='bg-black-200/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/50'>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className={`text-primary`}>Jaron</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a <span className='text-primary text-[32px]'>Full Stack </span>
            <br className='sm:block hidden' />
            web developer using&nbsp;
            <br className='sm:block hidden' />
            <span className={`text-primary text-[32px]`}>React</span> as a framework.
          </p>

          <div>
            <img src={mobileBackup} alt="mobileBackup" className='sm:hidden mt-[5em]' />
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary bg-primary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1"
            >
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero