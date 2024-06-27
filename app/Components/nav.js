"use client";

import React, { useState } from 'react';
import Header from './header';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Header />
      <nav className='w-full absolute'>
        <section>
          <div>
            <nav className='nav1 z-20 absolute w-full flex justify-between p-5 px-10 max-[620px]:px-4'>
              <h1 className='font-bold max-[620px]:text-3xl text-4xl text-purple-500'>poppr</h1>
              <div>
                { !menuOpen && (
                  <button
                    className='py-4 px-8 text-dark font-semibold bg-transparent text-white border-[#9d6cff] me-2 mb-2 text-xl -none rounded-full border -gray-100 -blue-700 -10 -4 -gray-100 :ring-gray-700 -gray-800 -gray-400 -gray-600 :text-white :bg-gray-700 max-[620px]:py-2 max-[620px]:px-4'
                  >
                    Get in touch
                  </button>
                  
                )}
                <i
                  className='menu ri-menu-line rounded-full text-white max-[620px]:text-1xl bg-[#9d6cff] p-4 text-2xl cursor-pointer'
                  onClick={toggleMenu}
                ></i>
              </div>
            </nav>

            {menuOpen && (
              <nav className='nav2 absolute w-full transition-all'>
                <div className='flex max-[620px]:flex-col-reverse max-[620px]: items-center justify-between h-screen px-10 bg-white'>
                  <div className='mt-96  max-[620px]:mt-20 '>
                    <p className='text-s font-bold text-[#9d6cff]'>Get in Touch</p>
                    <p className='text-3xl mt-4'>hello@poppr.be</p>
                    <p className='text-3xl mb-4'>+32 (0)9 335 33 33</p>
                    <p className='text-xl'>Stapelplein 70/303</p>
                    <p className='text-xl'>9000 Ghent</p>
                  </div>
                  <div className=' mr-52 z-30 max-[620px]:mr-0  mt-32 text-8xl font-serif max-[620px]:text-7xl'>
                    <h2 className=''>work</h2>
                    <h2 className=''>solutions</h2>
                    <h2 className=''>about us</h2>
                    <h2 className=''>insights</h2>
                    <h2 className=''>careers</h2>
                    <h2 className=''>contact</h2>
                  </div>
                </div>
              </nav>
            )}
          </div>
        </section>
      </nav>
    </>
  );
};

export default Nav;
