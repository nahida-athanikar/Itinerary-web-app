import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';
import ThemeProvider from "./context/ThemeContext";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Onboarding Page */}
        <Route path="/" element={<OnboardingPage />} />

        {/* Main Dashboard Page */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}
export default App;
