// 'use client';

// import React, { useEffect, useState } from 'react';
import { Blinker } from 'next/font/google';
import Nav from './Components/nav';
import Page1 from './page1';
import Footer from './footer';
import Page3 from './page3';
import Page4 from './page4'
import Page2 from './page2';
import Blob from './blob';


const blinker = Blinker({
  subsets: ['latin'],
  weight: '400', 
  // display: 'swap',
});

const Page = () => {
 
  return (
    <>
      <div className="main">


        <Blob/>
        <Nav/>
        <Page1 className={blinker.className}/>
        <Page2/>
        <Page3/>
        <Page4/>
        <Footer/>

      </div>
    </>
  )
}

export default Page;