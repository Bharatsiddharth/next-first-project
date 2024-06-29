'use client'
import { Roboto, NotoSans } from 'next/font/google';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const roboto = Roboto({ subsets: ['latin'], weight: '400' });


const page2 = () => {
   

    const cards = [
        {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1719216324207-3b9727413913?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Six million Voices',
            description: 'Bringing live-guided immersive virtual tours to a global audience',
            category: 'WEB . 360 PHOTOGRAPHY'
        },

        {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1718114885158-a3157f5fc443?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Bringing live-guided immersive virtual tours to a global audience',
            category: 'WEB . 360 PHOTOGRAPHY'
        },

        {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1719401542237-a36c227d9833?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            description: 'Bringing live-guided immersive virtual tours to a global audience',
            category: 'WEB . 360 PHOTOGRAPHY'
        },

        {
            id: 1,
            imageUrl: 'https://plus.unsplash.com/premium_photo-1664461664321-c9b95d47f0a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Six million Voices',
            description: 'Bringing live-guided immersive virtual tours to a global audience',
            category: 'WEB . 360 PHOTOGRAPHY'
        },

        {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1719216324207-3b9727413913?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Six million Voices',
            description: 'Bringing live-guided immersive virtual tours to a global audience',
            category: 'WEB . 360 PHOTOGRAPHY'
        },
        
    ];
    

    useEffect(() => {
        const matchMedia = window.matchMedia("(max-[620px]:)");
    
        if (matchMedia.matches) {
          gsap.to(".card1-page2", {
            x: -1500,
            scrollTrigger: {
              trigger: ".scroller",
              start: "top bottom",
              end: "bottom end",
              markers:true,
              scrub: 5,
              markers: true
            }
          });
        }
    
        // Clean up
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []);


    useEffect(() => {
        const rightelem = document.querySelectorAll(".scroller");
    
        rightelem.forEach(function(elem) {
          let cursorElem = elem.querySelector(".drag-cursor"); // Select the image inside the cursor div
    
          elem.addEventListener("mouseenter", function() {
            cursorElem.style.opacity = 1;
          });
    
          elem.addEventListener("mouseleave", function() {
            cursorElem.style.opacity = 0;
          });
    
          elem.addEventListener("mousemove", function(dets) {
            const rect = elem.getBoundingClientRect();
            gsap.to(cursorElem, {
              x: dets.clientX - rect.left - cursorElem.clientWidth / 2, 
              y: dets.clientY - rect.top - cursorElem.clientHeight / 2 
              
            });
          });
        });
    
        // Cleanup event listeners on component unmount
        return () => {
          rightelem.forEach(elem => {
            elem.removeEventListener("mouseenter", () => {});
            elem.removeEventListener("mouseleave", () => {});
            elem.removeEventListener("mousemove", () => {});
          });
        };
      }, []);

  return (
    <>
        <div className='overflow-hidden'>
            <div className='text-white flex justify-center gap-24 py-40 max-[620px]:px-4'>
                <h6 className='text-sm max-[620px]:text-xs font-bold text-[#a374ff]' >SELECTED WORK</h6>
                <p className={`text-4xl max-[620px]:text-2xl text-center md:text-left ${roboto.className}`}>
                    Enjoy some of our best work <br />
                    in immersive <span className='text-[#a374ff]'>web</span>, <br />
                    <span className='text-[#17f1d1]'>augmented reality</span> and <span className='text-[#ffd074]'>virtual <br /> reality</span> experiences
                </p>
            </div> 


            <div className=''>
            <div className="scroller   rotate-6  max-[620px]:rotate-0 max-[620px]:gap-20 max-[620px]:flex max-[620px]:flex-col max-[620px]:items-center max-[620px]:justify-center    flex gap-10 overflow-x-auto overflow-y-hidden scrollbar-none">
            
            <div className="drag-cursor bg-[#a374ff] text-white max-[620px]:hidden h-28 w-28 flex items-center justify-center opacity-0  absolute rounded-full z-10 p-4">
            <span className="text-center">Drag <br/> or <br /> Click</span>
            </div>


            {cards.map((card) => (
                <div key={card.id} className="card1-page2 mt-5 max-[620px]:flex max-[620px]:flex-col   max-[620px]:w[20rem] max-[620px]:h-[25rem]   h-[33rem] relative">
                    <div className='card w-[35rem] max-[620px]:w-[20rem] rounded-2xl   overflow-hidden relative'>
                        <div className='h-40 w-40 hidden absolute z-10 rounded-full'>
                            
                        </div>
                        <img className='h-[27rem] w-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out' 
                             src={card.imageUrl}
                             alt={card.title} />
                    </div>

                    <div className="content-page2 flex flex-col mt-10 px-5 text-white md:absolute sm:relative top-80 max-[620px]:w-[20rem] mx-auto">
                    <h3 className="text-xl sm:text-2xl md:text-3xl">{card.description}</h3>
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold py-2">{card.title}</h1>
                    <h5 className="text-xs sm:text-sm md:text-base font-semibold">{card.category}</h5>
                    </div>

                </div>
            ))}
         

        

            </div>

            <div className="py-24 max-[620px]:py-6 max-[620px]:px-0 max-[620px]:items-center max-[620px]:justify-center flex px-40 ">
            <button className="py-4 px-8 text-dark font-semibold bg-transparent text-white border-[#9d6cff] me-2 mb-2 text-lg rounded-full border max-[620px]:py-2 max-[620px]:px-4">
            Discover more insights
            </button>
            </div>

            </div>


            
        
        </div>

        {/* <div>

        <div id="page3" className="relative">
    <div className="swiper mySwiper relative">
        <div className="drag-cursor absolute top-0 left-0 p-4 bg-gray-200">
            <span className="block text-center">Drag <br/> or Click</span>
        </div>
        <div className="swiper-wrapper flex">
            <div className="swiper-slide images flex flex-col items-center p-4">
                <div data-color="#018BCF" className="image bg-[#018BCF] p-4">
                    <img className="zoomed w-full h-auto" src="https://images.unsplash.com/photo-1719401542237-a36c227d9833?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                </div>
                <div className="texts text-center mt-4">
                    <p>The Sourdough Library in an immersive 3D-experience</p>
                    <h3 className="font-bold text-lg">Puratos</h3>
                    <span className="label text-sm text-gray-500">Web • 3D</span>
                </div>
            </div>
            <div className="swiper-slide images flex flex-col items-center p-4">
                <div data-color="#90BFD6" className="image bg-[#90BFD6] p-4">
                    <img className="zoomed w-full h-auto" src="https://images.unsplash.com/photo-1719401542237-a36c227d9833?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                </div>
                <div className="texts text-center mt-4">
                    <p>Highlighting urban redevelopment in virtual reality</p>
                    <h3 className="font-bold text-lg">Stad Sint-Niklaas</h3>
                    <span className="label text-sm text-gray-500">Web • 360° photography • 360° video • 3D</span>
                </div>
            </div>
            <div className="swiper-slide images flex flex-col items-center p-4">
                <div data-color="#A374FF" className="image bg-[#A374FF] p-4">
                    <img className="zoomed w-full h-auto" src="assets/images/cartoon home.webp" alt=""/>
                </div>
                <div className="texts text-center mt-4">
                    <p>A purrfect immersive experience for the felines and friends of Opti Life</p>
                    <h3 className="font-bold text-lg">Versele Laga</h3>
                    <span className="label text-sm text-gray-500">Web • 3D</span>
                </div>
            </div>
            <div className="swiper-slide images flex flex-col items-center p-4">
                <div data-color="#f4d446" className="image bg-[#f4d446] p-4">
                    <img className="zoomed w-full h-auto" src="assets/images/basf.webp" alt=""/>
                </div>
                <div className="texts text-center mt-4">
                    <p>Building chemistry with potential candidates via an interactive web documentary</p>
                    <h3 className="font-bold text-lg">BASF</h3>
                    <span className="label text-sm text-gray-500">Web • 360° photography • 360° video</span>
                </div>
            </div>
            <div className="swiper-slide images flex flex-col items-center p-4">
                <div data-color=" #17F1D1" className="image bg-[#17F1D1] p-4">
                    <img className="zoomed w-full h-auto" src="assets/images/parrot.webp" alt=""/>
                </div>
                <div className="texts text-center mt-4">
                    <p>Spreading its virtual wings</p>
                    <h3 className="font-bold text-lg">Versele Laga</h3>
                    <span className="label text-sm text-gray-500">Web • 3D</span>
                </div>
            </div>
            <div className="swiper-slide images flex flex-col items-center p-4">
                <div data-color="#6c59ea" className="image bg-[#6c59ea] p-4">
                    <img className="zoomed w-full h-auto" src="assets/images/Ford-Mustang-Mach-E.webp" alt=""/>
                </div>
                <div className="texts text-center mt-4">
                    <p>Gearing up: Ford Mustang of the future in virtual reality</p>
                    <h3 className="font-bold text-lg">Ford</h3>
                    <span className="label text-sm text-gray-500">Virtual reality • 360° video</span>
                </div>
            </div>
            <div className="swiper-slide images flex flex-col items-center p-4">
                <div data-color="#f4d446" className="image bg-[#f4d446] p-4">
                    <img className="zoomed w-full h-auto" src="assets/images/iko-design-center.webp" alt=""/>
                </div>
                <div className="texts text-center mt-4">
                    <p>Building brand loyalty through online design tool</p>
                    <h3 className="font-bold text-lg">IKO</h3>
                    <span className="label text-sm text-gray-500">Web • 3D</span>
                </div>
            </div>
            <div className="swiper-slide images flex flex-col items-center p-4">
                <div data-color="#f4d446" className="image bg-[#f4d446] p-4">
                    <img className="zoomed w-full h-auto" src="assets/images/mobile scan.webp" alt=""/>
                </div>
                <div className="texts text-center mt-4">
                    <p>Turning an Open Day into a covid-safe virtual experience</p>
                    <h3 className="font-bold text-lg">Voka Open Bedrijvendag</h3>
                    <span className="label text-sm text-gray-500">Web • 360° photography • 360° video</span>
                </div>
            </div>
            <div className="swiper-slide images flex flex-col items-center p-4">
                <div data-color="#f4d446" className="image bg-[#f4d446] p-4">
                    <img className="zoomed w-full h-auto" src="assets/images/map.webp" alt=""/>
                </div>
                <div className="texts text-center mt-4">
                    <p>Seeing double: transforming Taxistop into Mpact through augmented reality on a bottle</p>
                    <h3 className="font-bold text-lg">Mpact</h3>
                    <span className="label text-sm text-gray-500">Web • Augmented reality • 3D</span>
                </div>
            </div>
        </div>
    </div>
    {/* <a href="#">
        <button id="disc-btn" className="menu nav-cta relative p-4 bg-gray-200 hover:bg-gray-300 transition duration-200">
            <span className="button-inner flex flex-col items-center">
                <span className="button-inner-static initial">
                    <p>Discover more of our work</p>
                </span>
                <span className="button-inner-hover hovered hovered-disc hidden">
                    <p>Discover more of our work</p>
                </span>
            </span>
            <div id="an-cir1" className="anim-circle absolute top-0 left-0 w-4 h-4 bg-gray-400"></div>
            <div id="an-cir2" className="anim-circle absolute top-0 left-0 w-4 h-4 bg-gray-400"></div>
        </button>
    </a> */}
{/* </div> */}


        {/* </div> */} 

    </>
  )
}

export default page2
