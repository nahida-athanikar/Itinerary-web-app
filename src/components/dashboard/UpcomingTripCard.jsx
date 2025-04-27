function UpcomingTripCard() {
  return (
    
    <div className="relative w-[400px] h-[320px] rounded-xl overflow-hidden">
      
      {/* Background Image */}
      <img 
        src="/src/assets/tokyo.png" 
        alt="Tokyo"
        className="absolute inset-0 w-full h-full object-cover" 
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Trip Details */}
      <div className="absolute inset-0 flex flex-col justify-between p-2 border-radius-16px"> 



        {/* Top Section */}
        <div className="mt-1">  {/* mt-12 thoda neeche kar diya */}
          <h2 className="text-4xl font-extrabold text-white tracking-wide">TOKYO</h2>

          <p className="text- #FFFFFF; text-sm">27.01.2025 - 02.02.2025</p>

          <div className="absolute top-2 right-2 w-10 h-10">
            <img src="/src/assets/arrow.png" alt="Arrow Icon" className="w-full h-full object-contain" />
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center px-4 py-2">
      
          {/* Duration */}
          <img src="/src/assets/Duration.png" alt="Duration" className="h-8" />
          
          {/* Group Size */}
          <img src="/src/assets/group size.png" alt="Group Size" className="h-8" />
          
          {/* Activities */}
          <img src="/src/assets/activities.png" alt="Activities" className="h-8" />
        </div>

      </div>

    </div>
  );
}

export default UpcomingTripCard;
