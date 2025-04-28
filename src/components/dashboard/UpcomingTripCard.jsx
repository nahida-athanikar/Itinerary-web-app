function UpcomingTripCard() {
  return (
    
    <div className="relative w-[400px] h-[320px] rounded-xl overflow-hidden font-mont">
      
      {/* Background Image */}
      <img 
        src="/src/assets/tokyo.png" 
        alt="Tokyo"
        className="absolute inset-0 w-full h-full object-cover" 
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Trip Details */}
      <div className="absolute inset-0 flex flex-col justify-between p-4"> 

        {/* Top Section */}
        <div className="mt-1 font-mont">  {/* mt-12 thoda neeche kar diya */}
          <h2 className="text-4xl font-extrabold text-white tracking-widest">TOKYO</h2>

          <p className="text- #FFFFFF; ml-1 text-sm">27.01.2025 - 02.02.2025</p>

          <div className="absolute top-5 right-2 w-10 h-10 bg-opacity-20 rounded-full flex cursor-pointer hover:-translate-y-1 transition">
            <img src="/src/assets/arrow.png" alt="Arrow Icon" className="w-full h-full object-contain" />
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center px-4 py-2 inset-0 opacity-1">
      
          {/* Duration */}
          <img src="/src/assets/Duration.png" alt="Duration" className="h-7 transition-transform duration-200 hover:scale-110 ease-in-out" />
          
          {/* Group Size */}
          <img src="/src/assets/group size.png" alt="Group Size" className="h-7 m-4 transition-transform duration-200 hover:scale-110 ease-in-out" />
          
          {/* Activities */}
          <img src="/src/assets/activities.png" alt="Activities" className="h-7 transition-transform duration-200 hover:scale-110 ease-in-out" />
        </div>

      </div>

    </div>
  );
}

export default UpcomingTripCard;
