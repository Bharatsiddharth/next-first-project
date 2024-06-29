'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { Blinker } from 'next/font/google';
gsap.registerPlugin(ScrollTrigger);

const blinker = Blinker({
  subsets: ['latin'],
  weight: '800',
});

const Page1 = () => {

//   useEffect(() => {
//     const typeSplit = new SplitType('h1', {
//       types: 'lines, words, chars',
//       tagName: 'span',
//     });

//     gsap.from('h1 .char', {
//       y: '100%',
//       opacity: 0,
//       duration: 0.65,
//       ease: 'power4.out',
//       stagger: 0.1,
//       scrollTrigger: {
//         trigger: '[animate]',
//         start: 'top center',
//       },
//     });

    
    
//   }, []);

  return (
    <>
      <section className="overflow-hidden">
        <div className={`h-screen bg-[#1D1D1F] w-full flex items-center justify-center ${blinker.className}`}>
          <div className="h-3/4 max-[1000px]:hidden mt-32 w-1/3 max-[620px]:w-full max-[620px]:px-4 max-[620px]:py-20 flex items-center justify-center">
            <div className="container noselect">
              <div className="canvas">
                <div className="tracker tr-1"></div>
                {/* Add other trackers if necessary */}
                <div id="card">
                  <div className="title">
                    <video
                      className="object-cover rounded-3xl"
                      autoPlay
                      loop
                      muted
                      src="https://player.vimeo.com/progressive_redirect/playback/725952347/rendition/1080p/file.mp4?loc=external&signature=57a7c3522f4c7c21f8123a490b67c603be4efaa02c9c70cfde99789ab3ea9a29"
                    ></video>
                    <div className="content top-24 left-[-12rem] flex flex-col z-50 text-white max-[620px]:w-[20rem] w-[60rem] absolute" animate>
                      <h1 className="text-9xl text-center max-[620px]:text-5xl leading-8 font-bold">Conversion</h1>
                      <div className="flex flex-col items-center py-4 max-[620px]:py-0 md:flex-row md:items-center md:gap-4">
                        <h1 className="text-5xl md:text-9xl">through</h1>
                        <button className="m-12 hidden md:inline-block text-sm font-bold px-8 py-4 md:mr-20 text-black bg-yellow-200 rounded-full">
                          Discover what we do
                        </button>
                      </div>
                      <h1 className="text-9xl ml-32 max-[620px]:ml-0 text-center max-[620px]:text-5xl leading-8 font-bold">immersion</h1>
                      <button className="my-6 mx-12 px-8 hidden max-[620px]:block max-[620px]:text-xs py-4 mr-20 text-black bg-yellow-200 rounded-full">
                        Discover what we do
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main-circle bg-red-500 fixed left-[-20rem] top-[25rem] w-full max-w-[620px]:py-14 md:w-1/2 md:pl-[13rem] flex items-center justify-center max-w-[1000px]:flex max-w-[1000px]:flex-col"></div>
          </div>
          <div className="h-3/4 hidden max-[620px]:block mt-32 w-1/3 max-[620px]:w-full max-[620px]:px-4 max-[620px]:py-20 flex items-center justify-center">
            <div className="content max-[620px]:mt-32 max-[620px]:ml-10 flex flex-col items-center justify-center font-extrabold text-white max-[620px]:w-[20rem] w-[60rem] absolute">
              <h1 className="text-9xl text-center max-[620px]:text-5xl leading-8 font-bold">Conversion</h1>
              <div className="flex flex-col items-center py-4 max-[620px]:py-0 md:flex-row md:items-center md:gap-4">
                <h1 className="text-5xl md:text-9xl">through</h1>
                <button className="m-12 hidden md:inline-block text-sm font-bold px-8 py-4 md:mr-20 text-black bg-yellow-200 rounded-full">
                  Discover what we do
                </button>
              </div>
              <h1 className="text-9xl ml-32 max-[620px]:ml-0 text-center max-[620px]:text-5xl leading-8 font-bold">immersion</h1>
              <button className="my-6 mx-12 px-8 hidden max-[620px]:block max-[620px]:text-xs py-4 mr-20 text-black bg-yellow-200 rounded-full">
                Discover what we do
              </button>
            </div>
            <video
              className="object-cover h-full w-full rounded-3xl"
              autoPlay
              loop
              muted
              src="https://player.vimeo.com/progressive_redirect/playback/725952347/rendition/1080p/file.mp4?loc=external&signature=57a7c3522f4c7c21f8123a490b67c603be4efaa02c9c70cfde99789ab3ea9a29"
            ></video>
            <div className="main-circle bg-red-500 fixed left-[-20rem] top-[25rem] w-full max-w-[620px]:py-14 md:w-1/2 md:pl-[13rem] flex items-center justify-center max-w-[1000px]:flex max-w-[1000px]:flex-col"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page1;
