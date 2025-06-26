import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FormspreeProvider } from '@formspree/react';

import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/OurServices';
import Contact from './pages/Contact';
import Vision from './pages/Vision';
import Team from './pages/Team';
import NursingCourse from './pages/CoursesOffered';
import Placement from './pages/Placement';
import Visa from './pages/Visa';
import ApplyNowForm from './pages/ApplyNowForm';
import ExpertApplicationPage from './pages/ExpertApplicationPage';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  console.log("Custom App.tsx is active");

  return (
    <FormspreeProvider project="xdkzproo">
      <Layout>
        <main className="bg-background text-textPrimary min-h-screen font-sans">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/expert-apply" element={<ExpertApplicationPage />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/team" element={<Team />} />
            <Route path="/nursing-course" element={<NursingCourse />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/apply" element={<ApplyNowForm />} />
          </Routes>
        </main>
      </Layout>
    </FormspreeProvider>
  );
};

export default App;
