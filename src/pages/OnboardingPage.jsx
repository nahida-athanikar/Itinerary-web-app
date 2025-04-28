import OnboardingScreen from '../components/onboarding/OnboardingScreen';

import { useNavigate } from "react-router-dom";

function OnboardingPage() {
  return (
    <div className="flex justify-center items-center">
      <OnboardingScreen />
    </div>
  );
}

export default OnboardingPage;
