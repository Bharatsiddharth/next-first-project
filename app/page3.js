'use client';
import React, { useEffect } from 'react';
import { Roboto, NotoSans } from 'next/font/google';
import gsap from 'gsap'; 

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

const Page3 = () => {

  useEffect(() => {
    const rightelem = document.querySelectorAll(".card1");

    rightelem.forEach(function(elem) {
      let cursorElem = elem.querySelector(".cursor img"); // Select the image inside the cursor div

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
    <section className={`page3 relative text-white px-4 md:px-44 py-10 max-[620px]:py-0 ${roboto.className}`}>
      <h5 className="text-center text-xs font-bold py-20">FEATURED INSIGHTS</h5>

      <div className="grid grid-cols-1 max-[620px]:flex max-[620px]:flex-col max-[620px]:justify-center  md:grid-cols-2 gap-4 gap-x-16 gap-y-36 max-[620px]:gap-y-10">
        <div className="card1 w-full flex flex-col max-[620px]:py-5">
          <div className="cursor rotate-12 absolute">
            <img
              className="h-36 w-32 rounded-2xl opacity-0"
              src="https://images.unsplash.com/photo-1719150016704-270c5a0deee4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex flex-col z-10 justify-center">
            <h5 className="text-xs font-bold text-[#17f1d1]">3D</h5>
            <h1 className="text-3xl sm:text-4xl py-6">
              Unleashing immersive experiences: elevate your brand with custom 3D modelling
            </h1>
            <div className="main-button">
              <button className="btn btn-1 text-start">Continue reading</button>
            </div>
          </div>
        </div>

        <div className="card1  w-full flex flex-col max-[620px]:py-5">
          <div className="cursor  rotate-12 absolute">
            <img
              className="h-36 w-32 rounded-2xl opacity-0"
              src="https://images.unsplash.com/photo-1719150016704-270c5a0deee4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex flex-col z-10 justify-center">
            <h5 className="text-xs font-bold text-[#A374FF]">
              Web . 360 PHOTOGRAPHY . 360 Video . 3D
            </h5>
            <h1 className="text-3xl sm:text-4xl py-6">
              Scrollytelling: transforming digital storytelling with engagement and creativity
            </h1>
            <div className="main-button z-10">
              <button className="btn btn-2 text-start">Continue reading</button>
            </div>
          </div>
        </div>

        <div className="card1 w-full flex flex-col max-[620px]:py-5">
          <div className="cursor rotate-12 absolute">
            <img
              className="h-36 w-32 rounded-2xl opacity-0"
              src="https://example.com/card3.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col z-10 justify-center">
            <h5 className="text-xs font-bold text-[#FFD074]">3D</h5>
            <h1 className="text-3xl sm:text-4xl py-6">
              Photogrammetry and NeRF compared
            </h1>
            <div className="main-button">
              <button className="btn btn-3 text-start">Continue reading</button>
            </div>
          </div>
        </div>

        <div className="card1 w-full flex flex-col max-[620px]:py-5">
          <div className="cursor rotate-12 absolute">
            <img
              className="h-36 w-32 rounded-2xl opacity-0"
              src="https://images.unsplash.com/photo-1719386217659-6bde4641915c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex flex-col z-10 justify-center">
            <h5 className="text-xs font-bold text-[#17F1D1]">
              VIRTUAL REALITY . 360 PHOTOGRAPHY
            </h5>
            <h1 className="text-3xl sm:text-4xl py-6">
              Digital discoveries: how VR is reshaping the travel industry
            </h1>
            <div className="main-button">
              <button className="btn btn-4 text-start">Continue reading</button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 flex items-center justify-center">
        <button className="py-4 px-8 text-dark font-semibold bg-transparent text-white border-[#9d6cff] me-2 mb-2 text-lg rounded-full border max-[620px]:py-2 max-[620px]:px-4">
          Discover more insights
        </button>
      </div>
     
    </section>
  );
};

export default Page3;
