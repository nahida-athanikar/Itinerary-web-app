import React from 'react';

const FlightDetailsCard = () => {
  return (
    <div className="relative w-[353px] h-[124px] bg-[#3643FB] rounded-2xl p-4 mt-4">
      {/* Inner Frame */}
      <div className="w-full h-full bg-[#3643FB] rounded-2xl p-4 relative overflow-hidden">

        {/* Plane Image */}
        {/* <img 
          src="/src/assets/plane.png" 
          alt="Plane" 
          className="absolute bottom-0 right-0 w-[150px] h-[100px] object-contain" 
        /> */}

        {/* Top Section (Title and See All) */}
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-lg">
            Flight Details
          </div>
          <div className="text-[#DFFF24] text-sm underline cursor-pointer">
            See all
          </div>
        </div>

        {/* Date Time */}
        <div className="text-white text-base mt-1">
          26.01.2025, 10:50 am
        </div>

        {/* Flight Info (DEL ➡️ NRT) */}
        <div className="flex items-center mt-3">
          {/* Left (DEL) */}
          <div>
            <div className="text-white font-bold text-xl leading-none">
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
              className="w-[14px] h-[18px]" 
            />
          </div>

          {/* Right (NRT) */}
          <div>
            <div className="text-white font-bold text-xl leading-none">
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
