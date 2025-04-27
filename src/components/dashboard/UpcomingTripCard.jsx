function UpcomingTripCard() {
  return (
    <div className="relative w-full rounded-xl overflow-hidden h-40">
      
      {/* Background Image */}
      <img 
        src="/src/assets/tokyo.png" 
        alt="Tokyo"
        className="w-full h-full object-cover" 
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Trip Details */}
      <div className="absolute inset-0 flex flex-col justify-between p-3 h-330 w-353 border-radius-16px"> 



        {/* Top Section */}
        <div className="mt-1">  {/* mt-12 thoda neeche kar diya */}
          <h2 className="text-3xl font-bold text-white text-MODERNIZ">TOKYO</h2>

          <p className="text- #FFFFFF; text-sm mt-1">27.01.2025 - 02.02.2025</p>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between text-xs text-white">
          <div className="flex items-center gap-1">
            🕓 <span>8 Days</span>
          </div>
          <div className="flex items-center gap-1">
            👨‍👩‍👧‍👦 <span>4 (2M, 2F)</span>
          </div>
          <div className="flex items-center gap-1">
            🎯 <span>14 Activities</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default UpcomingTripCard;
