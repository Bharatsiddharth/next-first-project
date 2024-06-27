import React from 'react'

const page1 = () => {
  return (
    <>
    
    <section>
    <div class="h-screen bg-[#1D1D1F] w-full flex items-center justify-center">
        <div class="h-3/4 mt-32 w-1/3 max-[620px]:w-full max-[620px]:px-4 max-[620px]:py-20 flex items-center justify-center">
            <div class="content flex flex-col items-center justify-center font-extrabold text-white max-[620px]:w-[20rem] w-[60rem] absolute">
                <h1 class="text-9xl text-center max-[620px]:text-5xl leading-8 font-bold">Conversion</h1>
                
                <div class="flex flex-col items-center py-4 md:flex-row md:items-center md:gap-4">
                    <h1 class="text-5xl md:text-9xl">through</h1>
                    <button class="m-12  hidden md:inline-block text-sm font-bold px-8 py-4 md:mr-20 text-black bg-yellow-200 rounded-full">
                        Discover what we do
                    </button>
                </div>
                
                <h1 class="text-9xl max-[620px]:text-5xl w-[55rem] leading-8 max-[620px]:text-center text-right font-bold">immersion</h1>
                <button class="m-12  px-8 hidden max-[620px]:block max-[620px]:text-xs py-4 mr-20 text-black bg-yellow-200 rounded-full">
                    Discover what we do
                </button> 
            </div>
            <video class="object-cover h-full w-full rounded-3xl" autoplay loop muted src="https://player.vimeo.com/progressive_redirect/playback/725952347/rendition/1080p/file.mp4?loc=external&signature=57a7c3522f4c7c21f8123a490b67c603be4efaa02c9c70cfde99789ab3ea9a29">
            </video>
            
            <div class="main-circle bg-red-500 fixed left-[-20rem] top-[25rem] w-full max-w-[620px]:py-14 md:w-1/2 md:pl-[13rem] flex items-center justify-center max-w-[1000px]:flex max-w-[1000px]:flex-col">
            </div>
        </div>
    </div>
</section>


    </>
  )
}

export default page1
