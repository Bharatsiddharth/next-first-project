import React from 'react';

const Page3 = () => {
  const cards = [
    {
      title: '3D',
      image: 'https://images.unsplash.com/photo-1719150016704-270c5a0deee4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Unleashing immersive experiences: elevate your brand with custom 3D modelling',
    },
    {
      title: ' Web . 360 PHOTOGRAPHY . 360 Video . 3D',
      image: 'https://images.unsplash.com/photo-1719150016704-270c5a0deee4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Scrollytelling: transforming digital storytelling with engagement and creativity',
    },
    {
      title: '3D',
      image: 'https://example.com/card3.jpg',
      description: 'Photogrammetry and NeRF compared',
    },
    {
      title: 'VIRTUAL REALITY . 360 PHOTOGRAPHY',
      image: 'https://example.com/card3.jpg',
      description: 'Digital discoveries: how VR is reshaping the travel industry',
    },
  ];

  const getColorByIndex = (index) => {
    switch (index) {
      case 0:
        return 'text-[#17f1d1]';
      case 1:
        return 'text-[#A374FF]';
      case 2:
        return 'text-[#FFD074]';
      case 3:
        return 'text-[#17F1D1]';
      default:
        return 'text-default';
    }
  };

  return (
    <section className="page3 text-white px-4 md:px-44 py-10">
      <h5 className="text-center text-xs font-bold py-20">FEATURED INSIGHTS</h5>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-16 gap-y-36 max-[620px]:gap-y-10 ">
        {cards.map((card, index) => (
          <div key={index} className="card1 w-full flex flex-col max-[620px]:py-5">
            <div className="cursor absolute">
              <img className="h-36 w-32 rounded-2xl opacity-0" src={card.image} alt="" />
            </div>
            <div className="flex flex-col justify-center">
              <h5 className={`text-xs font-bold ${getColorByIndex(index)}`}>{card.title}</h5>
              <h1 className="text-2xl sm:text-4xl py-6">{card.description}</h1>
              <div>
                <button className="btn text-start">Continue reading</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='py-24 flex items-center justify-center'>
      <button
                    className='py-4 px-8 text-dark font-semibold bg-transparent text-white border-[#9d6cff] me-2 mb-2 text-sm -none rounded-full border -gray-100 -blue-700 -10 -4 -gray-100 :ring-gray-700 -gray-800 -gray-400 -gray-600 :text-white :bg-gray-700 max-[620px]:py-2 max-[620px]:px-4'
                  >
                    Discover more insights
                  </button>
      </div>
    </section>
  );
};

export default Page3;
