'use client';

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Header from './header';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      const animateLetters = () => {
        const headings = document.querySelectorAll('.menu-elem h2');
        headings.forEach((heading) => {
          const letters = heading.textContent.split('');
          heading.innerHTML = letters.map(letter => `<span className="inline-block">${letter}</span>`).join('');
          
        });
        
        gsap.from('.nav2-left p', {
          y: 200,
          opacity: 0,
          duration: 1,
          stagger: 0.05,
          ease: 'power4.out' // Smoother easing function
        });
        gsap.from('.menu-elem h2', {
          x: 300,
          opacity: 0,
          duration: 1,
          stagger: 0.05,
          ease: 'bounce.out' // Smoother easing function
        });
      };
      
      gsap.to('.nav2', {
        y: 0,
        duration: 0.8,
        ease: 'power4.inOut', // Smoother easing function
        onComplete: animateLetters
      });
    } else {
      gsap.to('.nav2', {
        y: '-100%',
        duration: 0.8,
        ease: 'power4.inOut' // Smoother easing function
      });
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Header />
      <nav className='w-full fixed z-[1000]'>
        <section>
          <div>
            <nav className='nav1 z-20 absolute w-full flex justify-between p-5 px-10 max-[620px]:px-4'>
              <h1 className='font-bold max-[620px]:text-3xl text-4xl text-purple-500'>poppr</h1>
             
              <div>
                {!menuOpen && (
                  <button className='navButton py-4 px-8 text-dark font-semibold bg-transparent text-white border-[#9d6cff] me-2 mb-2 text-xl -none rounded-full border -gray-100 -blue-700 -10 -4 -gray-100 :ring-gray-700 -gray-800 -gray-400 -gray-600 :text-white :bg-gray-700 max-[620px]:py-2 max-[620px]:px-4'>
                    Get in touch
                  </button>
                )}
                <i
                  className={`menu  rounded-full text-white max-[620px]:text-1xl bg-[#9d6cff] p-4 text-2xl cursor-pointer ${menuOpen ? 'ri-close-circle-line' : 'ri-menu-line'}`}
                  onClick={toggleMenu}
                ></i>
              </div>
            </nav>

            <nav className={`nav2 absolute w-full transition-transform duration-500 ease-in-out ${menuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
              <div className='flex max-[620px]:flex-col-reverse max-[620px]:items-center justify-between h-screen px-10 bg-white'>
                <div className='nav2-left mt-96 max-[620px]:mt-10'>
                  <p className='text-s font-bold text-[#9d6cff] mt-32 max-[620px]:mt-0'>Get in Touch</p>
                  <p className='text-4xl mt-4'>hello@poppr.be</p>
                  <p className='text-4xl mb-4'>+32 (0)9 335 33 33</p>
                  <p className='text-xl'>Stapelplein 70/303</p>
                  <p className='text-xl'>9000 Ghent</p>
                </div>
                <div className='menu-elem mr-52 z-30 max-[620px]:mt-80 max-[620px]:mr-0 mt-32 text-8xl font-serif max-[620px]:text-7xl'>
                  <h2 className=''>work</h2>
                  <h2 className=''>solutions</h2>
                  <h2 className=''>about us</h2>
                  <h2 className=''>insights</h2>
                  <h2 className=''>careers</h2>
                  <h2 className=''>contact</h2>
                </div>
              </div>
            </nav>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Nav;
