import React from 'react';

const FlightDetailsCard = () => {
  return (
    <div className="relative w-full h-36 bg-[#2D3AE5] rounded-2xl p-4 overflow-hidden">
      
      {/* Inner Frame */}
      <div className="font-mont tracking-wide bg-[#3643FB] rounded-2xl p-4 relative overflow-hidden">

        {/* Plane Image */}
        {/* <img 
          src="/src/assets/plane.png" 
          alt="Plane" 
          className="absolute bottom-0 right-0 w-[150px] h-[100px] object-contain" 
        /> */}

        {/* Top Section (Title and See All) */}
        <div className="flex justify-between items-center">
          <h2 className="text-white font-regular text-regular -mt-3">
            Flight Details
          </h2>
          <div className="absolute top-2 right-4 text-xs text-lime-300 font-bold underline cursor-pointer">
            See all
          </div>
        </div>

        {/* Date Time */}
        <div className="text-white text-xs leading-none">
          26.01.2025, 10:50 am
        </div>

        {/* Flight Info (DEL ➡️ NRT) */}
        <div className="flex items-center mt-5">
          {/* Left (DEL) */}
          <div>
            <div className="font-regular text-[16px] leading-[16px] mb-1">
              DEL
            </div>
            <div className="text-white text-xs leading-none">
              Delhi, India
            </div>
          </div>

          {/* Arrow */}
          <div className="mx-2 flex items-center">
            <img 
              src="/src/assets/Vector.png" 
              alt="Arrow" 
              className="w-[24px] h-[15px]" 
            />
          </div>

          {/* Right (NRT) */}
          <div>
            <div className="font-bold text-[16px] leading-[16px] mb-1">
              NRT
            </div>
            <div className="text-white text-xs leading-none">
              Narita, Tokyo
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlightDetailsCard;
