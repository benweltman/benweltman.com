import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { ColorProvider } from './hooks/useColor';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProjectGrid from './pages/Portfolio/ProjectGrid';
import AboutPage from './pages/About/AboutPage';
import HomePage from './pages/Home/HomePage';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ColorProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-[#f9f9f9] dark:bg-[#161c1a] text-slate-900 dark:text-white transition-colors duration-300">
            <Header />

            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/portfolio" element={<ProjectGrid />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </Router>
      </ColorProvider>
    </ThemeProvider>
  );
};

export default App;
