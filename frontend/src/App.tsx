import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Tour from './pages/Tour';
import Contact from './pages/Contact';

const App = () => {
  console.log("✅ Custom App.tsx is active");
  <h1 className="text-4xl text-red-500">Tailwind Test</h1>


  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
};

export default App;
