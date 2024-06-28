// 'use client';

// import React, { useEffect, useState } from 'react';
import Nav from './Components/nav';
import Page1 from './page1';
import Footer from './footer';
import Page3 from './page3';
import Page4 from './page4'
import Page2 from './page2';

const Page = () => {
 
  return (
    <>
      <div className="main">
        <Nav/>
        <Page1/>
        <Page2/>
        <Page3/>
        <Page4/>
        <Footer/>

      </div>
    </>
  )
}

export default Page;