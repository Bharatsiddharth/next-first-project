'use client';

import { Blinker } from 'next/font/google';
import Nav from './Components/nav';
import Page1 from './page1';
import PageMain from "./Page1/page"
// import Page3 from './page3';
// import ourTeam from './ourTeam';
// import Page4 from './page4';
import Page3 from "./Page3/page"
// import Page2 from './page2';
import Page2 from "./Page2/page"
import Page4 from "./Page4/page"
import Page5 from "./Page5/page"
import Blob from './blob';
import Footer from './Components/footer'

import { useEffect } from 'react';









const blinker = Blinker({
  subsets: ['latin'],
  weight: '400', 
});

const Page = () => {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    })();
  }, []);
 
  return (
    <>

      {/* <Form/> */}

      <div className="main">
        

        <Blob/>
        <Nav/>
        <Page1 className={blinker.className}/>
        <Page2/>
        <Page3/>

        <Page4/>
        <Page5/>
        
        <Footer/>

      </div>
    </>
  )
}

export default Page;