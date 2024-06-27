import React from 'react'
import Header from './Components/header'

const footer = () => {
  return (
    <footer className="bg-[#9d6cff] rounded-t-">
    <Header />
    <div className="top flex flex-col md:flex-row justify-between p-8 md:p-28 px-4 md:px-40">
      <div className="left mb-10 md:mb-0">
        <h4 className="font-bold text-xs">STAY UP TO DATE</h4>
        <h1 className="text-4xl md:text-6xl font-bold pb-10">
          get our <br /> newsletter
        </h1>
        <div className="">
          <div className="p-5">
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <div className="group ">
                <input
                  required=""
                  type="text"
                  className="input w-full md:w-auto"
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Your Email</label>
              </div>
              <button className="Btn">
                <i className="svgIcon ri-arrow-left-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <div className="right">
        <div className="">
          <p className="text-s font-bold text-white">Get in Touch</p>
          <p className="text-2xl md:text-4xl mt-4">hello@poppr.be</p>
          <p className="text-2xl md:text-4xl mb-4">+32 (0)9 335 33 33</p>
          <p className="text-xl">Stapelplein 70/303</p>
          <p className="text-xl">9000 Ghent</p>
        </div>
      </div>
    </div>

    <div className="bottomfooter flex flex-col max-[620px]:flex-col-reverse md:flex-row items-center px-4 md:px-10  py-8 border-t-2 border-gray-300 mx-4 md:mx-10 gap-5">
            <div className="left w-full md:w-1/2  mb-4 md:mb-0">
                        <div className="flex flex-col sm:flex-row text-xs font-bold justify-between items-center px-2 md:px-0 gap-2 sm:gap-0">
                        <h4>PRIVACY POLICY</h4>
                        <h4>DISCLAIMER</h4>
                        <h4>TERMS AND CONDITIONS</h4>
                        <h4>BE081 0005 745</h4>
                        </div>

            </div>

        <div className="right w-full md:w-1/2 ">
                        <div className="flex flex-col md:flex-row text-sm font-bold justify-between items-center font-mono px-2 md:px-0">
                        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 mb-4 md:mb-0 px-4 md:px-20">
                    <h4 className="mb-2 md:mb-0">SEE WHAT WE'RE UP TO</h4>
                    <div className="icons text-xl flex gap-4 md:gap-5 text-white">
                        <i class="ri-facebook-circle-fill"></i>
                        <i class="ri-linkedin-box-fill"></i>
                        <i class="ri-instagram-line"></i>
                        <i class="ri-youtube-fill"></i>
                    </div>
                    </div>


            <div className="flex gap-4 md:gap-5">
                <h4 className='text-black hover:text-white transition-all'>NEDERLANDS</h4>
                <h4>ENGLISH</h4>
            </div>
    </div>
  </div>
    </div>


    </footer>
  
  )
}

export default footer
