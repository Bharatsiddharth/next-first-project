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
      x: 150,
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
      letterSpacing: 0,

      scrollTrigger: {
        trigger: '[animate]',
        start: 'top center',
      },
    });


  }, []);


  const [isHovered, setIsHovered] = useState(false);


  return (
    <>

      <section className='overflow-x-hidden'>


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
                transition: 'transform 0.6s, background-color 0.6s'
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
                    top: isHovered ? '-1vh' : '-7vh',
                    transition: 'top 0.5s'
                  }}
                />
              </div>
            </div>
          </div>


          <div class="h-3/4 max-[1000px]:hidden mt-32 w-1/3 max-[620px]:w-full max-[620px]:px-4 max-[620px]:py-20 flex items-center justify-center overflow-hidden p-20">
            <div class="content top-[40%] max-[1000px]:hidden left-[18vw] leading-10 flex flex-col z-[500] text-white max-[620px]:w-[20rem] w-[60rem] max-[1200px]:w-[48rem] max-[1100px]:right-[25rem] absolute">
              <h1 class="text-[10vw] max-[1100px]:text-8xl text-center max-[620px]:text-5xl font-bold">Conversion</h1>
              <div class="flex flex-col h-54 max-[1100px]:h-14 items-center xl:py-2 max-[620px]:py-0 md:flex-row md:items-center md:gap-10">
                <h1 class="through max-[1100px]:text-8xl text-[10vw]">through</h1>
                <button class="m-12 hidden tracking-normal md:inline-block text-sm font-bold px-8 py-4 md:mr-20 text-black bg-yellow-200 rounded-full max-[620px]:text-xs max-[620px]:px-4 max-[620px]:py-2">
                  Discover what we do
                </button>
              </div>
              <h1 class="text-[10vw] ml-32 pt-3 max-[620px]:ml-0 text-center max-[1100px]:text-8xl max-[620px]:text-5xl leading-8 font-bold">immersion</h1>
              <button class="my-6 mx-12 px-8 hidden max-[620px]:block max-[620px]:text-xs py-4 text-black bg-yellow-200 rounded-full">
                Discover what we do
              </button>
            </div>
            <div class="p-2 px-40">
              <div class="container noselect overflow-hidden">
                <div class="canvas">
                  <div class="tracker tr-1"></div>
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
                      <video class="object-cover rounded-3xl" autoplay loop muted src="https://player.vimeo.com/progressive_redirect/playback/725952347/rendition/1080p/file.mp4?loc=external&signature=57a7c3522f4c7c21f8123a490b67c603be4efaa02c9c70cfde99789ab3ea9a29"></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="main-circle fixed left-[-20rem] top-[25rem] w-full max-[620px]:py-14 md:w-1/2 md:pl-[13rem] flex items-center justify-center max-[1000px]:flex max-[1000px]:flex-col"></div>
          </div>


          <div class="h-3/4 hidden overflow-y-hidden max-[1000px]:block  mt-32 max-[620px]:mt-0 w-1/2 max-[620px]:w-full max-[620px]:px-4 max-[620px]:py-0 max-[620px]:pt-20  items-center justify-center">
            <div class="  max-[620px]:mt-32 max-[620px]:ml-10  max-[1000px]:mr-[10rem]    bg-red-300 md:left-16 flex flex-col items-center justify-center font-extrabold text-white max-[770px]:w-[18rem]  w-[40rem] max-[1000px]:mt-[8rem] absolute">
              <h1 class="text-[9vw]    text-center max-[620px]:text-5xl leading-3 font-bold">Conversion</h1>

              <div class="flex flex-col items-center pt-4 max-[620px]:py-0 md:flex-row md:items-center md:gap-4">
                <h1 class="text-5xl md:text-[10vw] md:ml-20">through</h1>
                <button class="m-12 max-[1020px]:w-[15rem] hidden md:inline-block text-sm font-bold px-8 py-4 md:mr-20 text-black bg-yellow-200 rounded-full max-[620px]:text-xs max-[620px]:px-4 max-[620px]:py-2">
                  Discover what we do
                </button>
              </div>

              <h1 class="text-[9vw]  ml-32 max-[620px]:ml-0 max-[770px]:mr-32 max-[620px]:mr-1 max-[620px]:text-5xl leading-10 font-bold">immersion</h1>
              {/* <h1 class="text-9xl bg-red-200 max-[620px]:text-5xl w-[55rem] leading-8 max-[620px]:text-center text-right font-bold">immersion</h1> */}
              <button class="my-6 mx-12 px-8 py-4 mr-20 text-black bg-yellow-200 rounded-full hidden max-[770px]:block max-[770px]:mx-4 max-[620px]:mx-2 max-[620px]:text-xs max-[620px]:px-4 max-[620px]:py-2">
                Discover what we do
              </button>

            </div>
            <video class="object-cover h-full w-full  rounded-3xl" autoplay loop muted src="https://player.vimeo.com/progressive_redirect/playback/725952347/rendition/1080p/file.mp4?loc=external&signature=57a7c3522f4c7c21f8123a490b67c603be4efaa02c9c70cfde99789ab3ea9a29">
            </video>


          </div>
        </div>
      </section>


    </>
  )
}

export default page1