import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import SingleProject from './pages/SingleProject.jsx';
import Navigation from './layout/Navigation.jsx';
import Footer from './layout/Footer.jsx';
import UpButton from './components/UpButton.jsx';

function AppRoutes() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:projectId" element={<SingleProject />} /> {/* Add this route */}
        <Route path="*" element={<App />} />
      </Routes>
      <Footer />
      <UpButton />
    </Router>
  );
}

export default AppRoutes;
