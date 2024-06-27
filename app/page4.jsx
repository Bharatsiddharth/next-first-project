import React from 'react'

const page4 = () => {
  return (
    <>
       <div className='text-white text-9xl pb-80 max-[620px]:pb-20 md:px-60 px-4 flex flex-col items-center justify-center'>
    <h1 className='text-center text-5xl md:text-9xl'>let's make</h1>
    <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-14'>
        <h1 className='text-5xl md:text-9xl'>great work</h1>
        <button class="m-12 hidden md:inline-block text-sm font-bold px-8 py-4 md:mr-20 text-black bg-yellow-200 rounded-full">
            Get in touch
        </button>
    </div>
    <h1 className='text-center text-5xl md:text-9xl'>together</h1>
    <button class="m-12 inline-block md:hidden text-xs md:text-sm font-bold px-8 py-4 mr-20 text-black bg-yellow-200 rounded-full">
        Get in touch
    </button>
</div>

    </>
  )
}

export default page4
