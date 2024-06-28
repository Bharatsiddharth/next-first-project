import React from 'react'

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
        // Add more cards as needed
    ];

  return (
    <>
        <div className='overflow-hidden'>
            <div className='text-white flex justify-center gap-24 py-40 max-[620px]:px-4'>
                <h6 className='text-sm max-[620px]:text-xs font-bold text-[#a374ff]' >SELECTED WORK</h6>
                <p className='text-3xl max-[620px]:text-2xl text-center md:text-left'>
                    Enjoy some of our best work <br />
                    in immersive <span className='text-[#a374ff]'>web</span>, <br />
                    <span className='text-[#17f1d1]'>augmented reality</span> and <span className='text-[#ffd074]'>virtual <br /> reality</span> experiences
                </p>
            </div>


            <div className="scroller rotate-3  max-[620px]:rotate-0 max-[620px]:gap-20 max-[620px]:flex max-[620px]:flex-col    flex gap-10 overflow-x-auto overflow-auto scrollbar-none space-x-4 p-4">
            {cards.map((card) => (
                <div key={card.id} className="card1-page2 max-[620px]:flex max-[620px]:flex-col   max-[620px]:w[20rem] max-[620px]:h-[25rem] w-[35rem] h-[33rem] relative">
                    <div className='card w-[35rem] max-[620px]:w-[25rem] rounded-2xl bg-red-400  overflow-hidden relative'>
                        <div className='h-40 w-40 hidden absolute z-10 rounded-full'>
                            
                        </div>
                        <img className='h-[27rem] w-full rou object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out' 
                             src={card.imageUrl}
                             alt={card.title} />
                    </div>

                <div className='content-page2 mt-10 px-5 text-white md:absolute sm:relative top-80'>
                    <h3 className='text-3xl'>{card.description}</h3>
                    <h1 className='text-2xl font-bold py-2'>{card.title}</h1>
                    <h5 className='text-xs font-semibold'>{card.category}</h5>
                </div>
                </div>
            ))}
        </div>
        <div className='flex max-[620px]:flex max-[620px]:items-center max-[620px]:justify-center'>
                <button
                    className='navButton py-4 px-8 text-dark font-semibold bg-transparent text-white border-[#9d6cff] me-2 mb-2 max-[620px]:text-base text-xl -none rounded-full border -gray-100 -blue-700 -10 -4 -gray-100 :ring-gray-700 -gray-800 -gray-400 -gray-600 :text-white :bg-gray-700 max-[620px]:py-2 max-[620px]:px-4'
                  >
                    Discover more of our work
                  </button>
        </div>

        </div>
    </>
  )
}

export default page2
