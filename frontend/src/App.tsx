import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Tour from './pages/Tour';
import Contact from './pages/Contact';
import Vision from './pages/Vision';
import Team from './pages/Team';
import NursingCourse from './pages/NursingCourse';
import Placement from './pages/Placement';
import Visa from './pages/Visa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ApplyNowForm from './pages/ApplyNowForm'



const App = () => {
  console.log(" Custom App.tsx is active");

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/team" element={<Team />} />
        <Route path="/nursing-course" element={<NursingCourse />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/apply" element={<ApplyNowForm />} />

      </Routes>
    </Layout>
  );
};

export default App;
