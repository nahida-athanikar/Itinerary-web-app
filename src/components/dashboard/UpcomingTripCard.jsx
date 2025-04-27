function UpcomingTripCard() {
  return (
    <div className="relative w-full rounded-lg overflow-hidden bg-gray-700 shadow-lg p-2 h-40">
      
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1564604761389-86c99d2904a1?auto=format&fit=crop&w=800&q=80" 
        alt="Tokyo"
        className="w-full h-full object-cover p-3" 
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Trip Details */}
      <div className="absolute inset-0 flex flex-col justify-between p-3">

        {/* Top Section */}
        <div className="mt-9">  {/* mt-12 thoda neeche kar diya */}
          <h2 className="text-3xl font-bold text-white">TOKYO</h2>
          <p className="text-gray-300 text-sm mt-1">27.01.2025 - 02.02.2025</p>
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
