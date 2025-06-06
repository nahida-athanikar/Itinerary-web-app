import StatusBar from '../../components/common/StatusBar';

import UpcomingTripCard from '../../components/dashboard/UpcomingTripCard'; 

import FlightDetailsCard from './FlightDetailsCard'; 

import AccomodationSection from "../../components/dashboard/AccommodationSection";

import ActivitySection from "./ActivitySection";

function DashboardScreen() {
  return (
    <div className="min-h-screen bg-[#0B0809] text-white flex flex-col item-center">

      <div className="w-full max-w-[393px] mx-auto flex flex-col space-x-1">

       

        {/* Header */}
        <div className="flex justify-between items-center px-4 pt-3 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-white">Hello Chhavi!</h1>
              <p className="text-gray-400 text-sm mt-1">Ready for the trip?</p>
            </div>

          {/* Profile Circle */}
          <div className="w-10 h-10 bg-[#FF7339]  rounded-full flex items-center justify-center text-white font-bold text-lg transform transition-transform duration-400 hover:-translate-y-1">
            C
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto space-y-6 px-4 pb-28">

          <h2 className="text-xl font-semibold">Your Upcoming Trip</h2>

          {/* Upcoming Trip */}
          <div className="bg-gray-800 rounded-lg">
            
            <div className="bg-gray-700 h-80 rounded-lg flex items-center justify-center">
                <UpcomingTripCard />
            </div>
          </div>

          {/* Flight Details */}
          <div className="rounded-lg -mt-4">
            <FlightDetailsCard />
          </div>

          {/* Accommodation */}
          <div className="bg-#0B0809 p-2 rounded-lg">
              <AccomodationSection />
          </div>

          {/* Activities */}
          <div className="bg-#0B0809-800 p-1 rounded-lg">
            <ActivitySection />
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#121827] p-1 flex justify-around">

        <button>
          <img src="/src/assets/menu.png" alt="Home" className="h-15 w-15 transform transition-transform duration-800 hover:-translate-y-1" />
        </button>

        <button>
          <img src="/src/assets/search.png" alt="Search" className="h-15 w-15 transform transition-transform duration-800 hover:-translate-y-1" />
        </button>

        <button>
          <img src="/src/assets/plus.png" alt="Add" className="h-15 w-15 transform transition-transform duration-800 hover:-translate-y-1" />
        </button>

        <button>
          <img src="/src/assets/heart.png" alt="Favorites" className="h-15 w-15 transform transition-transform duration-800 hover:-translate-y-1" />
        </button>

        <button>
          <img src="/src/assets/profile.png" alt="Profile" className="h-15 w-15 transform transition-transform duration-1 hover:-translate-y-1" />
        </button>

      </div>

    </div>
  );
}

export default DashboardScreen;
