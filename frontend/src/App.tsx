import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FormspreeProvider } from '@formspree/react';

import Layout from './layouts/Layout';
import Home from './pages/Home'; // Updated homepage
import About from './pages/AboutUs';
import Services from './pages/OurServices';
import Contact from './pages/Contact';
import Mission from './pages/Mission';
import Team from './pages/Team';
import Vision from './pages/Vision';
import ExpertApplicationPage from './pages/ExpertApplicationPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FaqPage from './components/FaqPage';
import BlogPage from './pages/BlogPage';
import CybersecurityBlog from './blogs/CyberSecurityBlogPage';
import ShareAStoryPage from './pages/ShareaStoryPage';

const App: React.FC = () => {
  console.log("Custom App.tsx is active");

  return (
    <FormspreeProvider project="xdkzproo">
      <Layout>
        <main className="bg-background text-textPrimary min-h-screen font-sans">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Homepage set to Techlambda */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/expert-apply" element={<ExpertApplicationPage />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/team" element={<Team />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/share-story" element={<ShareAStoryPage />} />
<Route path="/blog/cybersecurity" element={<CybersecurityBlog />} />

          </Routes>
        </main>
      </Layout>
    </FormspreeProvider>
  );
};

export default App;
