import React, { useEffect, useState } from 'react';
import logo from '../img/logo-or.png';
import pack1 from '../img/pack-1.png';

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showLastSale = () => {
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 30000);
    };

    showLastSale();
    const interval = setInterval(showLastSale, 9000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        className={`z-50 w-fit my-4 pl-4 fixed flex items-center bg-white border rounded-lg bottom-0 left-0 right-0 transition-transform duration-500 ${
          isVisible ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
        style={{ animationDelay: '1s' }}
      >
        <div className="bg-white">
          <img className="w-14" src={pack1} alt="" />
        </div>
        <div className="bg-green-500 px-4 py-2 text-white rounded-lg text-sm">
          <p>Michel V. From New York, US</p>
          <p>just purchased: 2X Bug Bulb</p>
          <p className="text-right pt-2">JUST NOW</p>
        </div>
      </div>

      <div>
        <div className="bg-green-600">
          <h2 className="p-2.5 md:py-3 md:px-2.5 w-4/5 mx-auto md:mx-0 md:w-full text-center text-white md:text-lg font-medium lg:font-semibold">
            Your 50% OFF Discount Has Been Applied!
          </h2>
        </div>
        <div className="bg-hero-mobil lg:bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <div className="pt-5 pb-6 md:pt-12 md:pb-20 lg:py-2.5 xl:pt-10 xl:pb-7">
            <img className="mx-auto w-32 md:w-36 lg:w-44 md:mb-4" src={logo} alt="" />
            <p className="hidden md:block text-center text-white lg:text-2xl">
              Powerful Zapper Attracts and Kills Flying Mosquitos
            </p>
          </div>
        </div>
        <p className="p-1 md:hidden text-center font-bold te text-xs">
          Powerful Zapper Attracts and Kills Flying Mosquitos
        </p>
      </div>
    </>
  );
}

export default Navbar;
