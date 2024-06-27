'use client';

import React, { useEffect, useState } from 'react';
import Nav from './Components/nav';
import Page1 from './page1';
import Footer from './footer';
import Page3 from './page3';
import Page4 from './page4'

const Page = () => {
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    import("locomotive-scroll").then((locomotiveModule) => {
      setScroll(new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true
      }));
    });

    // `useEffect`'s cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    }
  }, []);

  return (
    <>
      <div className="main" data-scroll-container>
        {/* <Nav/>
        <Page1/> */}
        <Page3/>
        <Page4/>
        <Footer/>

      </div>
    </>
  )
}

export default Page;