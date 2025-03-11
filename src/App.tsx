import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-16" // Add padding for fixed navbar
          >
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Featured collections will go here */}
                  </div>
                </>
              } />
              {/* Other routes will be added here */}
            </Routes>
          </motion.main>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;