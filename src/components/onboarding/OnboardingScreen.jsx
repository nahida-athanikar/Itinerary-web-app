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
    <div className="min-h-screen bg-[#0B0809] flex flex-col justify-center items-center px-6 py-8 text-white">
      
      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Plan Your Journey, Your Way!</h1>
        <p className="text-gray-400">Let’s create your personalised travel experience</p>
      </div>

      {/* Form */}
      <div className="w-full max-w-md space-y-6">
        
        {/* Destination Input */}
        <div>
          <label className="block mb-1">Where would you like to go?</label>
          <input 
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter Destination"
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-500"
          />
        </div>

        {/* Duration Input */}
        <div>
          <label className="block mb-1">How long will you stay?</label>
          <select 
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
          >
            <option value="">Select Duration</option>
            <option value="1-3 Days">1-3 Days</option>
            <option value="4-7 Days">1-2 Weeks</option>
            <option value="More">More than 2 weeks</option>
          </select>
        </div>

        {/* Group Type */}
        <div>
          <label className="block mb-1">Who are you traveling with?</label>
          <div className="grid grid-cols-2 gap-4">
            {["Solo", "Couple", "Family", "Friends"].map((type) => (
              <button 
                key={type}
                onClick={() => setGroupType(type)}
                className={`py-2 rounded-md ${groupType === type ? 'bg-blue-600' : 'bg-gray-800'}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <button 
          onClick={handleSubmit}
          className="w-full bg-[#3643FB] text-white py-2 rounded-md mt-4"
        >
          Continue
        </button>

      </div>
    </div>
  );
}

export default OnboardingScreen;
