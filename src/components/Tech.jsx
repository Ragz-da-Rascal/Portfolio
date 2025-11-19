import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          className='w-28 h-28 rounded-2xl flex items-center justify-center shadow-card hover:scale-105 transition-transform duration-200'
          key={technology.name}
        >
          {/* Desktop: 3D Balls */}
          <div className='hidden sm:block w-full h-full cursor-grab'>
            <BallCanvas icon={technology.icon} />
          </div>

          {/* Mobile: Static Images */}
          <div className='sm:hidden flex items-center justify-center h-full w-full p-4'>
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-full h-full object-contain'
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");