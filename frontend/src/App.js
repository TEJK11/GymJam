import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Wg from './pages/Wg';
import CalorieCounter from './pages/CalorieCounter';
import ForYouPage from './pages/ForYouPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/workout-generator" element={<Wg />} />
        <Route path="/calorie-counter" element={<CalorieCounter />} />
        <Route path="/for-you" element={<ForYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
