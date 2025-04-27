import React from "react";

const activities = [
  {
    image: "/src/assets/day1.png", // Senso-ji Temple image
    title: "Senso-ji Temple & Nakamise Shopping Street",
    timing: "8:15 am Morning",
    duration: "3 hours",
    pickup: "From Hotel",
  },
  {
    image: "/src/assets/day2.png", // Tokyo Sky Tree image
    title: "Tokyo Sky Tree",
    timing: "1:00 pm Afternoon",
    duration: "3 hours",
    pickup: "From Nakamise Street",
  },
  {
    image: "/src/assets/day3.png", // Kimono Wearing image
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
      <div className="flex justify-between items-center px-4 mb-4">
        <img src="/src/assets/activitiesTitle.png" alt="Activities Title" />
        {/* (Yeh "Activities" aur "See all" dono ek hi image me diye hai jo tumne bheji hai) */}
      </div>

      {/* Day Plan & 14 Activities buttons */}
      <div className="flex space-x-2 px-4 mb-4">
        <div className="bg-[#D3F462] rounded-md px-4 py-1 text-black font-semibold text-sm">Day Plan</div>
        <div className="border border-[#D3F462] text-[#D3F462] rounded-md px-4 py-1 text-sm font-semibold">14 Activities</div>
      </div>

      {/* Date Scroll */}
      <div className="flex overflow-x-auto space-x-2 px-4 mb-6 scrollbar-hide">
        <div className="bg-[#D3F462] text-black w-[73px] h-[44px] rounded-lg flex flex-col items-center justify-center">
          <span className="text-xs">JAN</span>
          <span className="font-bold">27</span>
        </div>
        {[28, 29, 30, 31].map((date) => (
          <div key={date} className="bg-[#3A3A3A] text-white w-[46px] h-[44px] rounded-lg flex flex-col items-center justify-center">
            <span className="text-sm">{date}</span>
          </div>
        ))}
        <div className="bg-[#A3A3A3] text-black w-[46px] h-[44px] rounded-lg flex flex-col items-center justify-center">
          <span className="text-xs">FEB</span>
          <span className="font-bold">1</span>
        </div>
      </div>

      {/* Day Info */}
      <div className="flex items-center space-x-2 px-4 mb-4">
        <div className="bg-[#D3F462] text-black text-sm font-semibold px-3 py-1 rounded-md">
          Day 1 &nbsp; 27.01.2025
        </div>
        <div className="text-[#D3F462] text-sm font-semibold">
          🚶‍♂️ 3 Activities
        </div>
      </div>

      {/* Activity Cards */}
      <div className="flex flex-col space-y-4 px-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex bg-[#2D2D2D] p-3 rounded-xl items-center space-x-4">
            <img src={activity.image} alt={activity.title} className="w-[127px] h-[127px] rounded-md object-cover" />
            <div className="text-white space-y-2">
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
