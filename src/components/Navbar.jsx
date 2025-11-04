import React, { useEffect, useState} from 'react';
import { Link }  from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, logo, menu } from '../assets';
//import { logo, menu, close } from '../assets';
//logo menu close

const Navbar = () => {
  const [active, setActive] = useState(``);
  const [toggle, setToggle] = useState(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >

          <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
            
            <Link 
              to="/"
              onClick={() => {
                setActive(``);
                window.scrollTo(0, 0);
              }}
            >

            <div className='flex flex-row items-center'>
              {/* Navbar Logo */}
              <img src={logo} alt="logo" className="w-[20%] min-w-[38px] sm:w-[5%] object-contain rounded-full" />
              &nbsp;
              <p className='text-white text-[18px] font-bold cursor-pointer flex'><span className='sm:block hidden'>React Developer</span></p>
            </div>

            </Link>
            
            <ul className='list-none hidden sm:flex flex-row gap-10'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white-300"
                      : "text-secondary"
                      } transition-all hover:text-white-100 hover:bg-secondary hover:px-[10px] text-[18px] hover:rounded-xl
                      font-medium cursor-pointer`}
                    onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
              <img 
                src={toggle ? close : menu}
                alt="menu"
                className='min-w-[28px] h-[28px] object-contain cursor-pointer'
                onClick={() => setToggle(!toggle)}
              />

              <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-gradient-to-r from-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                <ul className='list-none flex justify-end items-start gap-4 flex-col'>
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      className={`${
                        active === link.title
                          ? "text-secondary"
                          : "text-white"
                          } transition-all font-poppins hover:text-secondary hover:bg-primary hover:rounded-full hover:px-1 text-[16px]
                          font-medium cursor-pointer`}
                        onClick={() => {
                          setToggle(!toggle);
                          setActive(link.title);
                        }}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
              </ul>

              </div>
            </div>
          </div>

    </nav>
  )
}

export default Navbar