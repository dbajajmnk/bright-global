import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
const App = () => {
    console.log("Custom App.tsx is active");
    return (_jsx(FormspreeProvider, { project: "xdkzproo", children: _jsx(Layout, { children: _jsx("main", { className: "bg-background text-textPrimary min-h-screen font-sans", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), " ", _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/services", element: _jsx(Services, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/expert-apply", element: _jsx(ExpertApplicationPage, {}) }), _jsx(Route, { path: "/mission", element: _jsx(Mission, {}) }), _jsx(Route, { path: "/team", element: _jsx(Team, {}) }), _jsx(Route, { path: "/vision", element: _jsx(Vision, {}) }), _jsx(Route, { path: "/faq", element: _jsx(FaqPage, {}) }), _jsx(Route, { path: "/blog", element: _jsx(BlogPage, {}) }), _jsx(Route, { path: "/share-story", element: _jsx(ShareAStoryPage, {}) }), _jsx(Route, { path: "/blog/cybersecurity", element: _jsx(CybersecurityBlog, {}) })] }) }) }) }));
};
export default App;
