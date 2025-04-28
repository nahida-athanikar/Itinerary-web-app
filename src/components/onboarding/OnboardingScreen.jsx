import { useState } from "react";
import { useNavigate } from "react-router-dom";  // 🛣️ Step 1: Import useNavigate


function OnboardingScreen() {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [groupType, setGroupType] = useState('');

  const navigate = useNavigate();  // Step 2: Initialize Navigate

  const handleSubmit = () => {
    if (destination && duration && groupType) {
      console.log(destination, duration, groupType);
      navigate('/dashboard');  // 🛣️ Step 3: Navigate to Dashboard
    } else {
      alert("Please fill all fields!");  // Validation
    }
  };

  return (
    <div className="bg-[#0B0809] flex flex-col justify-start mt-10 items-center p-4 text-white">
       
        {/* Status Bar */}
      {/* <img src="/src/assets/statusbar.png" alt="Status Bar" className="w-full -mt-20 " /> */}

      
      {/* Heading */}
      <div className="text-center w-full tracking-wider"> 
        <h1 className="font-mont font-bold text-2xl mb-10">Plan Your Journey, Your Way!</h1>
        <p className="font-mont text-sm text-gray-400 mb-8 -mt-10">Let’s create your personalised travel experience</p>
      </div>

      {/* Form */}
      <div className="font-mont text-sm tracking-wider w-full space-y-10">
        
        {/* Destination Input */}
        <div className="relative">
        
          <label className="block mb-2 text-white">Where would you like to go?</label>
          <input 
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter Destination"
            className="w-full pl-10 px-4 py-2 rounded-md bg-gray-800 text-white placeholder-white focus:outline-none focus:ring-1 focus:ring-[white]"
          />
           <img
            src="/src/assets/location.png"
            alt="Location Icon"
            className="absolute -mt-5 left-3 transform -translate-y-1/2 w-5 h-5"
          />
        </div>

        {/* Duration Input */}
        <div className="relative">
          <label className="block mb-2 -mt-4 text-white">How long will you stay?</label>
          <select 
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full pl-10 px-4 py-2 rounded-md bg-gray-800 text-white"
          >
            <option value="">Select Duration</option>
            <option value="1-3 Days">1-3 Days</option>
            <option value="4-7 Days">1-2 Weeks</option>
            <option value="More">More than 2 weeks</option>
          </select>
          <img
            src="/src/assets/calender.png"
            alt="Calendar Icon"
            className="absolute -mt-5 ml-3 transform -translate-y-1/2 w-5 h-5"
          />
        </div>

        {/* Group Type */}
        <div>
          <label className="block mb-2 -mt-4 text-white">Who are you traveling with?</label>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Solo", icon: "/src/assets/solo.png" },
              { label: "Couple", icon: "/src/assets/couple.png" },
              { label: "Family", icon: "/src/assets/family.png" },
              { label: "Friends", icon: "/src/assets/frnds.png" },
            ].map((type) => (
              <button
                key={type.label}
                onClick={() => setGroupType(type.label)}
                className={`flex flex-col items-center justify-center rounded-md ${
                  groupType === type.label 
                    ? "border-2 border-white bg-gray-800" 
                    : "bg-gray-800"
                } hover:bg-gray-700 transition`}
              >
                <img src={type.icon} alt={type.label} className="w-4 h-4 mb- mt-2 " />
                <span className="text-white text-sm">{type.label}</span>
              </button>
            ))}
          </div>
        </div>
    
        {/* Continue Button */}
        <div className="relative text-center">
        <button className="absolute inset-x-0 top-40  bg-[#3643FB] text-white py-2 rounded-md tracking-wider hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-[white]"
          onClick={handleSubmit} >
          Continue
        </button>

        </div>
        
      </div>
    </div>
  );
}

export default OnboardingScreen;
