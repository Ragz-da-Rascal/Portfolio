import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../Utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, live_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-black-100 p-5 rounded-2xl sm:w-[360px] w-full border-2 border-secondary/40 hover:border-secondary transition-all duration-300'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='bg-black-200 border-2 border-primary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-primary hover:border-white transition-all duration-300'
            >
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
            {live_link && (
              <div
                onClick={() => window.open(live_link, "_blank")}
                className='bg-secondary border-2 border-primary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-primary transition-all duration-300'
              >
                <span className='text-white font-bold text-xs'>LIVE</span>
              </div>
            )}
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-white-100 text-[16px] leading-[24px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <span
              key={tag.name}
              className='bg-tertiary/30 border border-primary/40 px-3 py-1 rounded-full text-primary text-[13px] font-semibold'
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I've Built</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 bg-black-200/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/50 text-white text-[18px] max-w-3xl leading-[32px]'
        >
          Here's a selection of projects that showcase my technical abilities and problem-solving approaches.
          Each one represents real challenges I've tackled, from integrating Firebase to implementing payment systems and offline functionality. Click the <span className='text-secondary font-bold'>LIVE</span> button to explore demos
          and dive into the code!
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");