  'use client';

  import React, { useState, useEffect } from 'react';
  import { gsap } from 'gsap';
  import Header from './header';
  // import { Blinker } from 'next/font/google';

  const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
      if (menuOpen) {
        const animateLetters = () => {

          gsap.from('.nav2-left p', {
            delay:0.5,
            y: 200,
            opacity: 0,
            duration: 1,
            stagger: 0.05,
            ease: 'power4.out'
          });
          gsap.fromTo('.menu-elem h2',
            {
              delay: 0.5,
              x: 300,
              opacity: 0,
              letterSpacing: 10,
            },
            {
              x: 0,
              opacity: 1,
              letterSpacing: 0,
              duration: 1,
              stagger: 0.05,
              ease: 'bounce.out'
            }
          );

        };

        gsap.to('.nav2', {
          y: 0,
          duration: 0.8,
          ease: 'power4.inOut',
          onComplete: animateLetters
        });
      } else {
        gsap.to('.nav2', {
          y: '-100%',
          duration: 0.8,
          ease: 'power4.inOut' 
        });
      }
    }, [menuOpen]);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
      <>
        <Header />
        <nav className='w-full fixed  z-[900]'>
          <section>
            <div>
              <nav className={`nav1 z-[901]    ${menuOpen ? 'bg-white transition-colors delay-1000' : 'bg-[#1D1D1F] transition-colors delay-1000'}   max-[620px]:border-none border-transparent  z-20  absolute w-full flex justify-between p-3  px-10 max-[620px]:px-4`}>
                <h1 className='z-[1000] font-bold max-[620px]:text-3xl text-4xl text-purple-500'>poppr</h1>

                <div className=''>

                <button className={`  ${menuOpen ? 'opacity-0 transition delay-1000 duration-500' : 'opacity-1 transition delay-1000 duration-500'}  main-btn    md:inline-block text-sm font-bold px-8 py-4 md:mr-5  bg-transparent text-white border-2 border-[#9d6cff] rounded-full group`}>
                <span className="transition  inline-block opacity-100 group-hover:opacity-0 duration-700 ease-in-out transform group-hover:-translate-y-4">Get in touch</span>
                <br />
                <span className="absolute -ml-10 transition opacity-0 group-hover:opacity-100 duration-700 ease-in-out transform group-hover:-translate-y-5">Get in touch</span>
              </button>

                  <i
                    className={`menu  rounded-full text-white max-[620px]:text-xl bg-[#9d6cff] p-4 text-2xl cursor-pointer ${menuOpen ? 'ri-close-circle-line' : 'ri-menu-line'}`}
                    onClick={toggleMenu}

                    
                  >
                  
                  </i>
                </div>
              </nav>

              <nav className={`nav2 absolute z-[99]    w-full transition-transform duration-1000 ease-in-out ${menuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <div className='flex flex-col-reverse lg:flex-row items-start h-screen lg:justify-between  px-10 bg-white'>
                  <div className='nav2-left mt-5 lg:mt-96'>
                    <p className='text-s font-bold text-[#9d6cff] mt-0 lg:mt-20'>Get in Touch</p>
                    <p className='text-4xl mt-4'>hello@poppr.be</p>
                    <p className='text-4xl mb-4'>+32 (0)9 335 33 33</p>
                    <p className='text-xl'>Stapelplein 70/303</p>
                    <p className='text-xl'>9000 Ghent</p>
                  </div>
                  <div id='offering' className='menu-elem  z-30 mt- lg:mt-20 mr-0 lg:mr-36 text-6xl lg:text-8xl tracking-[10px] font-serif'>
                    <h2 className=''>work</h2>
                    <h2 className=''>solutions</h2>
                    <h2 className=''>about us</h2>
                    <h2 className=''>insights</h2>
                    <h2 className=''>careers</h2>
                    <h2 className=''>contact</h2>
                  </div>
                </div>
                <div className={`w-full z-[1000] ${menuOpen ? ' h-[70vh]' : ' h-[0] duration-1000'} transition-all duration-1000 rounded-b-full bg-white`}></div>

              </nav>
             
            </div>
            
          </section>
        </nav>
      </>
    );
  };

  export default Nav;