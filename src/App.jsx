import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
