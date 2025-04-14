import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import SingleProject from './pages/SingleProject.jsx';
import Navigation from './layout/Navigation.jsx';
import Footer from './layout/Footer.jsx';
import UpButton from './components/UpButton.jsx';
import { AnimatePresence } from 'motion/react';
import PageWrapper from './components/PageWrapper.jsx';
import { motion } from 'motion/react';

function RouterContent() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Navigation />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/project/:projectId" element={<PageWrapper><SingleProject /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><App /></PageWrapper>} />
        </Routes>
        <Footer />
        <UpButton />
      </motion.div>
    </AnimatePresence>
  );
}

function AppRoutes() {
  return (
    <Router>
      <RouterContent />
    </Router>
  );
}

export default AppRoutes;
