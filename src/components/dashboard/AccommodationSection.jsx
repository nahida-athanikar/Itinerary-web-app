import React from "react";

const hotels = [
  {
    name: "Shinagawa Prince Hotel",
    checkIn: "26.01.2025, 11:15 pm",
    checkOut: "28.01.2025, 11:15 am",
    statusImage: "/src/assets/confirmed.png",
    ratingImage: "/src/assets/4star.png",
    hotelImage: "/src/assets/hotel2.png",
  },
  {
    name: "Mercure Tokyo Hotel",
    checkIn: "28.01.2025, 6:00 pm",
    checkOut: "30.01.2025, 11:15 am",
    statusImage: "/src/assets/pending.png",
    ratingImage: "/src/assets/41star.png",
    hotelImage: "/src/assets/hotel1.png",
  },
];

const AccomodationSection = () => {
  return (
    <div className="mt-6">
      {/* Title and See All */}
      <div className="flex justify-between items-center mb-2">
        <img src="/src/assets/accomodation.png" alt="Accomodation" className="-mt-10" />
      </div>

      {/* Horizontal Scroll */}
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="bg-[#4D4D4D] rounded-2xl w-[198px] flex-shrink-0"
          >
            {/* Hotel Image */}
            <img
              src={hotel.hotelImage}
              alt={hotel.name}
              className="w-[198px] h-[124px] object-cover rounded-t-2xl"
            />

            {/* Rating Badge */}
            <div className="px-2 mt-2">
              <img src={hotel.ratingImage} alt="Rating" />
            </div>

            {/* Hotel Info */}
            <div className="text-white text-sm font-semiregular px-3 mt-1">
              {hotel.name}
            </div>

            {/* Check-in and Check-out */}
            <div className="px-3 text-#F5F5F5 text-xs">
              <div className="mt-1">
                <span className="font-regular">Check in:</span> {hotel.checkIn}
              </div>
              <div className="mt-1 mb-2">
                <span className="font-regular">Check out:</span> {hotel.checkOut}
              </div>
            </div>

            {/* Nights and Status */}
            <div className="flex justify-center items-center pb-3">
              <img src={hotel.statusImage} alt="Status" className="h-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccomodationSection;
