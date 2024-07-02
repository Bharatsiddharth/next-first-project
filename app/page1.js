'use client';
import { useEffect } from 'react';
import { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { Blinker } from 'next/font/google';
gsap.registerPlugin(ScrollTrigger);
// import Blob from './blob';
import Img from './Components/assets/images/arrow-up.svg';

const blinker = Blinker({
  subsets: ['latin'],
  weight: '800',
  // display: 'swap',
});

const page1 = () => {

  useEffect(() => {
    const typeSplit = new SplitType('.content h1', {
      types: 'lines, words, chars',
      tagName: 'span',
    });

    gsap.from('h1 .char', {
      // letterSpacing:'2rem',
      x: 300,
      opacity: 0,
      duration: 0.65,
      ease: 'bounce.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '',
        start: 'top center',
      },
    });

    gsap.to('h1 .char', {
      letterSpacing:0,
      
      scrollTrigger: {
        trigger: '[animate]',
        start: 'top center',
      },
    });


  }, []);


  const [isHovered, setIsHovered] = useState(false);


  return (
    <>

      <section className='overflow-hidden'>


        <div class={`h-screen bg-[#1D1D1F] w-full flex items-center justify-center ${blinker.className}`}>

          <div
            className="left-arrow relative max-[750px]:hidden"
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="arrow-circle"
              style={{
                transform: isHovered ? 'scale(0.3)' : 'scale(1)',
                backgroundColor: isHovered ? '#A374FF' : 'transparent',
                transition: 'transform 0.3s, background-color 0.3s'
              }}
            >
              <div
                className="arrow"
                style={{
                  transform: isHovered ? 'scale(3)' : 'scale(1)',
                  transition: 'transform 0.5s'
                }}
              >
                <img
                  id="arrow-initial"
                  src={Img.src}
                  alt="scroll down"
                  style={{
                    position: 'relative',
                    top: isHovered ? '15vh' : '3.5vh',
                    transition: 'top 0.5s'
                  }}
                />
                <img
                  className=''
                  id="arrow-after"
                  src={Img.src}
                  alt="scroll down"
                  style={{
                    position: 'relative',
                    top: isHovered ? '0vh' : '-7vh',
                    transition: 'top 0.5s'
                  }}
                />
              </div>
            </div>
          </div>


          <div class="h-3/4 max-[1000px]:hidden mt-32 w-1/3 max-[620px]:w-full max-[620px]:px-4 max-[620px]:py-20 flex items-center justify-center">
            <div class="content top-[40%]  left-[18rem]    flex flex-col z-[500] text-white max-[620px]:w-[20rem] w-[60rem] absolute">
              <h1 class="text-9xl max-[620px]:hidden   text-center max-[620px]:text-5xl leading-8 font-bold">Conversion</h1>

              <div class="flex flex-col items-center py-4 max-[620px]:py-0 md:flex-row md:items-center md:gap-4">
                <h1 class="through text-5xl md:text-9xl">through</h1>
                <button class="m-12  hidden tracking-normal md:inline-block text-sm font-bold px-8 py-4 md:mr-20 text-black bg-yellow-200 rounded-full">
                  Discover what we do
                </button>
              </div>
              <h1 class="text-9xl ml-32 max-[620px]:ml-0 text-center max-[620px]:text-5xl leading-8 font-bold">immersion</h1>
              {/* <h1 class="text-9xl bg-red-200 max-[620px]:text-5xl w-[55rem] leading-8 max-[620px]:text-center text-right font-bold">immersion</h1> */}
              <button class="my-6 mx-12  px-8 hidden max-[620px]:block max-[620px]:text-xs py-4 mr-20 text-black bg-yellow-200 rounded-full">
                Discover what we do
              </button>
            </div>
            <div className=' p-2 px-40'>
              <div class="container   noselect">
                <div class="canvas">
                  <div class="tracker tr-1">
                  </div>
                  <div class="tracker tr-2"></div>
                  <div class="tracker tr-3"></div>
                  <div class="tracker tr-4"></div>
                  <div class="tracker tr-5"></div>
                  <div class="tracker tr-6"></div>
                  <div class="tracker tr-7"></div>
                  <div class="tracker tr-8"></div>
                  <div class="tracker tr-9"></div>
                  <div class="tracker tr-10"></div>
                  <div class="tracker tr-11"></div>
                  <div class="tracker tr-12"></div>
                  <div class="tracker tr-13"></div>
                  <div class="tracker tr-14"></div>
                  <div class="tracker tr-15"></div>
                  <div class="tracker tr-16"></div>
                  <div class="tracker tr-17"></div>
                  <div class="tracker tr-18"></div>
                  <div class="tracker tr-19"></div>
                  <div class="tracker tr-20"></div>
                  <div class="tracker tr-21"></div>
                  <div class="tracker tr-22"></div>
                  <div class="tracker tr-23"></div>
                  <div class="tracker tr-24"></div>
                  <div class="tracker tr-25"></div>
                  <div id="card">
                    <div class="title">
                      <video class="object-  rounded-3xl" autoplay loop muted src="https://player.vimeo.com/progressive_redirect/playback/725952347/rendition/1080p/file.mp4?loc=external&signature=57a7c3522f4c7c21f8123a490b67c603be4efaa02c9c70cfde99789ab3ea9a29">
                      </video>



                    </div>


                  </div>
                </div>
              </div>
            </div>
            <div class="main-circle  fixed left-[-20rem] top-[25rem] w-full max-w-[620px]:py-14 md:w-1/2 md:pl-[13rem] flex items-center justify-center max-w-[1000px]:flex max-w-[1000px]:flex-col">
            </div>
          </div>


          <div class="h-3/4 hidden max-[620px]:block mt-32 max-[620px]:mt-0 w-1/3 max-[620px]:w-full max-[620px]:px-4 max-[620px]:py-0 max-[620px]:pt-20 flex items-center justify-center">
            <div class="  max-[620px]:mt-32 max-[620px]:ml-10 flex flex-col items-center justify-center font-extrabold text-white max-[620px]:w-[20rem] w-[60rem] absolute">
              <h1 class="text-9xl  text-center max-[620px]:text-5xl leading-8 font-bold">Conversion</h1>

              <div class="flex flex-col items-center py-4 max-[620px]:py-0 md:flex-row md:items-center md:gap-4">
                <h1 class="text-5xl md:text-9xl">through</h1>
                <button class="m-12  hidden md:inline-block text-sm font-bold px-8 py-4 md:mr-20 text-black bg-yellow-200 rounded-full">
                  Discover what we do
                </button>
              </div>
              <h1 class="text-9xl ml-32 max-[620px]:ml-0 text-center max-[620px]:text-5xl leading-8 font-bold">immersion</h1>
              {/* <h1 class="text-9xl bg-red-200 max-[620px]:text-5xl w-[55rem] leading-8 max-[620px]:text-center text-right font-bold">immersion</h1> */}
              <button class="my-6 mx-12  px-8 hidden max-[620px]:block max-[620px]:text-xs py-4 mr-20 text-black bg-yellow-200 rounded-full">
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