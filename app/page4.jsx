import React from 'react'
import { Blinker } from 'next/font/google';

const blinker = Blinker({
  subsets: ['latin'],
  weight: '700',
  // display: 'swap',
});

const page4 = () => {
  return (
    <>
      <section>
        <div className={`page4 text-white text-9xl pb-40 max-[620px]:pb-10 md:px-40 px-4 flex flex-col items-center justify-center`}>
          <h1 className='text-center text-5xl md:text-9xl'>let's make</h1>
          <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8'>
            <h1 className='text-5xl md:text-9xl'>great work</h1>
            <button className="m-6 hidden md:inline-block text-sm font-bold px-8 py-4 md:mr-10 text-black bg-yellow-200 rounded-full">
              Get in touch
            </button>
          </div>
          <h1 className='text-center text-5xl md:text-9xl'>together</h1>
          <button className="m-6 inline-block md:hidden text-xs md:text-sm font-bold px-8 py-4 mr-10 text-black bg-yellow-200 rounded-full">
            Get in touch
          </button>
        </div>
      </section>


    </>
  )
}

export default page4
