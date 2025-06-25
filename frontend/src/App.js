import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import Submission from './components/submisson/Submission';
import About from './components/about/About';
import Login from './components/login_signup/Login';

function App() {
  return (
    <div className="App" >
      <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;