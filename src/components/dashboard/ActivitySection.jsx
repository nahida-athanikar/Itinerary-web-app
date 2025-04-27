import React from "react";

const activities = [
  {
    image: "/src/assets/day3.png", // Senso-ji Temple image
    title: "Senso-ji Temple & Nakamise Shopping Street",
    timing: "8:15 am Morning",
    duration: "3 hours",
    pickup: "From Hotel",
  },
  {
    image: "/src/assets/day1.png", // Tokyo Sky Tree image
    title: "Tokyo Sky Tree",
    timing: "1:00 pm Afternoon",
    duration: "3 hours",
    pickup: "From Nakamise Street",
  },
  {
    image: "/src/assets/day2.png", // Kimono Wearing image
    title: "Kimono Wearing",
    timing: "Anytime before 8:00pm",
    duration: "1-2 hours",
    pickup: "From Hotel",
  },
];

const ActivitySection = () => {
  return (
    <div className="mt-8">
        {/* Title and See all */}
        <div className="flex justify-between items-center -mt-11 mb-4">
          <img src="/src/assets/activity.png" alt="Activities Title" />
        </div>

          {/* Day Plan & 14 Activities buttons */}
      
          {/* Date Scroll */}
        <div className="p-4 bg-[#4D4D4D]     rounded-2xl">
          {/* Top Buttons */}
            <div className="flex space-x-2 mb-4">
              {/* Day Plan Button */}
              <div className="bg-[#D3F462] text-black px-4 py-1 rounded-xl font-semibold text-sm">
                Day Plan
            </div>

            {/* 14 Activities Button */}
            <div className="border border-[#D3F462] text-[#D3F462] px-4 py-1 rounded-xl font-semibold text-sm">
              14 Activities
            </div>
          </div>

            {/* Date Tabs */}
          <div className="flex gap-2 overflow-x-auto bg-[#4D4D4D] rounded-xl">
            
            {/* Selected Date */}
            <div className="flex flex-col  items-center bg-[#D3F462] text-black rounded-xl w-[83px] h-[44px]">
              <span className="text-semibold font-bold px-6">JAN</span>
              <span className="text-[14px] font-bold -mt-0.5">27</span>
            </div>

            {/* Other Dates */}
            {["28", "29", "30", "31"].map((date) => (
          <div key={date}
            className="flex flex-col items-center justify-center w-16 h-11 bg-[#2C2C2C] rounded-xl text-white font-semibold">
             <span className="text-xs">TUE</span>
            <span className="text-sm">{date}</span>
          </div>
          ))}

           {/* February Date */}
          <div className="flex flex-col items-center justify-center w-16 h-11 bg-[#A5A5A5] rounded-xl text-black font-bold">
            <span className="text-xs">FEB</span>
            <span className="text-lg">1</span>
          </div>
        </div> {/*end data scroll */}
    </div>
      {/* Day Info */}
      <div className="flex items-center space-x-2 mb-6 mt-6 ">
        <div className="bg-[#D3F462] text-black text-sm font-semibold px-2 py-0 rounded-xl">
          Day 1 &nbsp; 27.01.2025
        </div>
        <div className="flex items-center gap-1 text-[#D3F462] text-xs font-semibold">
          <img src="/src/assets/walking_icon.png" alt="Activities Icon" className="h-3 w-4 ml-2 " />
          3 Activities
        </div>
      </div>

      {/* Activity Cards */}
      <div className="flex flex-col space-y-4 mb-6">
        {activities.map((activity, index) => (
          <div key={index} className="flex bg-[#4D4D4D] rounded-xl items-center space-x-2">
            <img src={activity.image} alt={activity.title} className="w-[127px] h-[127px] rounded-md object-cover" />
            <div className="text-white space-y-5">
              <div className="font-bold text-[14px] leading-[15px]">{activity.title}</div>
              <div className="text-xs">
                <p><span className="font-semibold">Timing:</span> {activity.timing}</p>
                <p><span className="font-semibold">Duration:</span> {activity.duration}</p>
                <p><span className="font-semibold">Pick up:</span> {activity.pickup}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitySection;
