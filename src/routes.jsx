import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import SingleProject from './pages/SingleProject.jsx';
import { AnimatePresence } from 'framer-motion';
import PageWrapper from './components/PageWrapper.jsx';
import Navigation from './layout/Navigation.jsx';
import Footer from './layout/Footer.jsx';
import UpButton from './components/UpButton.jsx';

function RouterContent() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                  <Navigation />
                  <main style={{ flex: '1 0 auto' }}>
                    <Home />
                  </main>
                  <Footer />
                </div>
              </PageWrapper>
            }
          />
          <Route
            path="/projects"
            element={
              <PageWrapper>
                <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                  <Navigation />
                  <main style={{ flex: '1 0 auto' }}>
                    <Projects />
                  </main>
                  <Footer />
                </div>
              </PageWrapper>
            }
          />
          <Route
            path="/project/:projectId"
            element={
              <PageWrapper>
                <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                  <Navigation />
                  <main style={{ flex: '1 0 auto' }}>
                    <SingleProject />
                  </main>
                  <Footer />
                </div>
              </PageWrapper>
            }
          />
          <Route
            path="*"
            element={
              <PageWrapper>
                <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                  <Navigation />
                  <main style={{ flex: '1 0 auto' }}>
                    <App />
                  </main>
                  <Footer />
                </div>
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
      <UpButton />
    </>
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
