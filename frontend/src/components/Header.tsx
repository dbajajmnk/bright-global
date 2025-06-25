import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/techlambda logo.png';

const Header = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="TechLambda Logo" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6 text-base relative">
          <Link to="/" className={isActive('/') ? 'text-primary font-semibold' : 'hover:text-primary'}>Home</Link>

          {/* About Dropdown */}
          <div
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
            className="relative"
          >
            <span className="cursor-pointer hover:text-primary">About</span>
            {aboutOpen && (
              <div className="absolute top-full mt-2 bg-white shadow rounded p-2 space-y-2 z-10 w-56">
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-100 text-sm text-textPrimary">Overview</Link>
                <Link to="/vision" className="block px-4 py-2 hover:bg-gray-100 text-sm text-textPrimary">Vision & Mission</Link>
                <Link to="/team" className="block px-4 py-2 hover:bg-gray-100 text-sm text-textPrimary">Our Team</Link>
                <Link to="/expert-apply" className="block px-4 py-2 hover:bg-gray-100 text-sm text-textPrimary">Apply as Expert</Link>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            className="relative"
          >
            <span className="cursor-pointer hover:text-primary">Services</span>
            {servicesOpen && (
              <div className="absolute top-full mt-2 bg-white shadow rounded p-2 space-y-2 z-10 w-72">
                {[
                  ['software-development', 'Custom Software Development'],
                  ['web-app-development', 'Web & Mobile App Development'],
                  ['ui-ux', 'UI/UX Design'],
                  ['cloud-devops', 'Cloud & DevOps Solutions'],
                  ['ai-ml', 'AI, ML & Automation'],
                  ['cybersecurity', 'Cybersecurity & Compliance'],
                  ['it-consulting', 'IT Consulting & Support'],
                  ['assignments', 'Academic Projects & Assignments'],
                  ['tutoring', 'Live Tutoring & Doubt Solving'],
                  ['final-year-projects', 'Final Year Project Guidance']
                ].map(([path, name]) => (
                  <Link key={path} to={`/services/${path}`} className="block px-4 py-2 hover:bg-gray-100 text-sm text-textPrimary">{name}</Link>
                ))}
              </div>
            )}
          </div>

          {/* Courses Offered Dropdown */}
          <div
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
            className="relative"
          >
            <span className="cursor-pointer hover:text-primary">Courses Offered</span>
            {coursesOpen && (
              <div className="absolute top-full mt-2 bg-white shadow rounded p-2 space-y-2 z-10 w-72 max-h-96 overflow-y-auto">
                {[
                  ['azure', 'Azure (Beginner to Expert)'],
                  ['test-automation', 'Test Automation Frameworks'],
                  ['angular', 'Angular Development'],
                  ['web-design', 'Web & Graphic Design'],
                  ['front-end', 'HTML, CSS & JavaScript'],
                  ['selenium-java', 'Selenium with Java'],
                  ['powerbi', 'Power BI Dashboards'],
                  ['react', 'React.js Development'],
                  ['csharp-selenium', 'C# with Selenium'],
                  ['springboot-rest', 'Spring Boot & REST APIs'],
                  ['data-science', 'Data Science with Python & Tableau'],
                  ['game-dev', 'Game Development'],
                  ['mern-stack', 'MERN Stack (Node, Express, MongoDB)'],
                  ['aws-devops', 'AWS & DevOps'],
                  ['ml-opencv', 'ML, DL & OpenCV in Python'],
                  ['android', 'Android App Development'],
                  ['dotnet-api', 'ASP.NET Core Web API'],
                  ['flutter', 'Flutter App Development'],
                  ['security', 'Cybersecurity & Cloud Security'],
                  ['java-fullstack', 'Full Stack Java Development']
                ].map(([path, name]) => (
                  <Link
                    key={path}
                    to={`/course/${path}`}
                    className="block px-4 py-2 hover:bg-gray-100 text-sm text-textPrimary"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className={isActive('/contact') ? 'text-primary font-semibold' : 'hover:text-primary'}>Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="sm:hidden text-2xl text-primary">
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`sm:hidden fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-md z-40 transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <img src={logo} alt="TechLambda Logo" className="h-8 w-auto" />
          <button onClick={() => setMobileOpen(false)} className="text-xl text-primary">
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4 text-textPrimary overflow-y-auto h-full pb-20">
          <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)}>Overview</Link>
          <Link to="/vision" onClick={() => setMobileOpen(false)}>Vision & Mission</Link>
          <Link to="/team" onClick={() => setMobileOpen(false)}>Our Team</Link>
          <Link to="/expert-apply" onClick={() => setMobileOpen(false)}>Apply as Expert</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>

          <hr />
          <span className="font-semibold">Services</span>
          {[
            ['software-development', 'Custom Software Development'],
            ['web-app-development', 'Web & Mobile App Development'],
            ['ui-ux', 'UI/UX Design'],
            ['cloud-devops', 'Cloud & DevOps Solutions'],
            ['ai-ml', 'AI, ML & Automation'],
            ['cybersecurity', 'Cybersecurity & Compliance'],
            ['it-consulting', 'IT Consulting & Support'],
            ['assignments', 'Academic Projects & Assignments'],
            ['tutoring', 'Live Tutoring & Doubt Solving'],
            ['final-year-projects', 'Final Year Project Guidance']
          ].map(([path, name]) => (
            <Link key={path} to={`/services/${path}`} onClick={() => setMobileOpen(false)}>{name}</Link>
          ))}

          <hr />
          <span className="font-semibold">Courses</span>
          {[
            ['azure', 'Azure'],
            ['test-automation', 'Test Automation'],
            ['angular', 'Angular'],
            ['web-design', 'Web & Graphic Design'],
            ['front-end', 'HTML, CSS & JS'],
            ['selenium-java', 'Selenium Java'],
            ['powerbi', 'Power BI'],
            ['react', 'React.js'],
            ['csharp-selenium', 'C# Selenium'],
            ['springboot-rest', 'Spring Boot'],
            ['data-science', 'Data Science'],
            ['game-dev', 'Game Development'],
            ['mern-stack', 'MERN Stack'],
            ['aws-devops', 'AWS DevOps'],
            ['ml-opencv', 'ML, DL, OpenCV'],
            ['android', 'Android Dev'],
            ['dotnet-api', 'ASP.NET Core'],
            ['flutter', 'Flutter'],
            ['security', 'Cybersecurity'],
            ['java-fullstack', 'Full Stack Java']
          ].map(([path, name]) => (
            <Link key={path} to={`/course/${path}`} onClick={() => setMobileOpen(false)}>{name}</Link>
          ))}
        </nav>
      </div>

      {mobileOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
