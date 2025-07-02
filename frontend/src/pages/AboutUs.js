import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const teamMembers = [
    {
        name: 'Deepika Bajaj',
        role: 'Managing Director',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Sonika Agarwal',
        role: 'Business Development Manager',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Anamika',
        role: 'Marketing Manager',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Pulkit Khatter',
        role: 'Full-Stack & Mobile Developer | React, React Native, Android, Flutter, Python | Tutor',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Kapil Gupta',
        role: 'Backend Developer | Node.js, MERN Stack',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Shiwani Baghel',
        role: 'Frontend Developer | CSS, HTML, Python, Django, UI/UX | YouTube Content Creator',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Amritpal Singh',
        role: 'Full-Stack Developer | Django, HTML, CSS, JavaScript, Python',
        image: 'https://via.placeholder.com/150',
    },
];
const AboutUsPage = () => {
    return (_jsxs("div", { className: "px-6 md:px-20 py-10 space-y-16 bg-white text-gray-800", children: [_jsxs("section", { children: [_jsx("h1", { className: "text-4xl font-bold text-[#F57C00] mb-6", children: "About Us" }), _jsx("p", { className: "text-lg mb-4", children: "TechLambda \u2013 Your Vision, Our Technology" }), _jsx("p", { className: "text-gray-700 mb-6", children: "At TechLambda, we\u2019re more than just a technology company \u2014 we\u2019re your trusted innovation partner. Whether you're a startup looking to disrupt the market or an established enterprise aiming to scale, we deliver tailored, future-ready solutions that turn bold ideas into measurable results." }), _jsx("h2", { className: "text-2xl font-semibold text-[#F57C00] mt-8 mb-4", children: "Who We Are" }), _jsx("p", { className: "text-gray-700 mb-4", children: "TechLambda Services Pvt. Ltd. is a full-spectrum digital technology firm committed to solving real-world problems with precision, creativity, and heart. Our passionate team of engineers, designers, consultants, and technologists collaborates to deliver solutions across:" }), _jsxs("ul", { className: "list-disc list-inside text-gray-700 space-y-1 mb-6", children: [_jsx("li", { children: "Software Development" }), _jsx("li", { children: "Web & Mobile App Design" }), _jsx("li", { children: "Cloud & DevOps Solutions" }), _jsx("li", { children: "UI/UX Design" }), _jsx("li", { children: "Cybersecurity" }), _jsx("li", { children: "AI, ML & Data Integration" }), _jsx("li", { children: "IT Consulting & Support" }), _jsx("li", { children: "ERP & E-commerce Systems" })] }), _jsx("p", { className: "text-gray-700", children: "We combine strategy, technology, and execution to accelerate growth and digital transformation \u2014 all under one roof." })] }), _jsxs("section", { children: [_jsx("h2", { className: "text-2xl font-semibold text-[#F57C00] mb-4", children: "Our Mission" }), _jsx("p", { className: "text-gray-700", children: "At TechLambda, our mission is to harness the power of technology to unlock potential, inspire innovation, and drive meaningful progress." }), _jsx("p", { className: "text-gray-700 mt-2", children: "We simplify the digital journey by delivering intelligent, impactful solutions that empower businesses and learners alike. From academic support to enterprise software, every service is designed to be transformative, intuitive, and scalable." })] }), _jsxs("section", { children: [_jsx("h2", { className: "text-2xl font-semibold text-[#F57C00] mb-4", children: "Our Vision" }), _jsx("p", { className: "text-gray-700", children: "We envision a world where technology becomes second nature \u2014 empowering individuals and businesses to innovate fearlessly and grow boundlessly." }), _jsx("p", { className: "text-gray-700 mt-2", children: "Our goal is to make complexity disappear and possibilities expand by bridging the gap between human need and digital capability." })] }), _jsxs("section", { children: [_jsx("h2", { className: "text-2xl font-semibold text-[#F57C00] mb-4", children: "Core Values" }), _jsxs("ul", { className: "list-disc list-inside text-gray-700 space-y-1", children: [_jsxs("li", { children: [_jsx("strong", { children: "Clarity:" }), " Simplicity is our strength \u2014 we deliver solutions that are clean and focused."] }), _jsxs("li", { children: [_jsx("strong", { children: "Innovation:" }), " We lead with creative thinking and technical expertise."] }), _jsxs("li", { children: [_jsx("strong", { children: "Integrity:" }), " We value honesty, transparency, and respect in everything we do."] }), _jsxs("li", { children: [_jsx("strong", { children: "Excellence:" }), " We don\u2019t settle. We refine, perfect, and exceed expectations."] }), _jsxs("li", { children: [_jsx("strong", { children: "Empowerment:" }), " We help people succeed by making technology accessible and useful."] }), _jsxs("li", { children: [_jsx("strong", { children: "Collaboration:" }), " Together, we go further \u2014 with clients, communities, and each other."] })] })] }), _jsxs("section", { children: [_jsx("h2", { className: "text-2xl font-semibold text-[#F57C00] mb-4", children: "Why Choose TechLambda?" }), _jsxs("ul", { className: "list-disc list-inside text-gray-700 space-y-1", children: [_jsx("li", { children: "One-Stop Tech Hub \u2013 From design to deployment, we handle it all." }), _jsx("li", { children: "Client-Centric Approach \u2013 Your goals shape our solutions." }), _jsx("li", { children: "Scalable & Agile \u2013 Built to grow and adapt with your needs." }), _jsx("li", { children: "Expert Team \u2013 Certified pros, real-world experience." }), _jsx("li", { children: "Transparent Process \u2013 No surprises, just results." })] })] }), _jsxs("section", { className: "pt-10", children: [_jsx("h2", { className: "text-3xl font-bold text-[#F57C00] mb-8", children: "Meet Our Team" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: teamMembers.map((member, index) => (_jsxs("div", { className: "bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center border border-gray-200", children: [_jsx("img", { src: member.image, alt: member.name, className: "w-24 h-24 mx-auto rounded-full mb-4 object-cover" }), _jsx("h4", { className: "text-xl font-semibold text-[#F57C00] mb-1", children: member.name }), _jsx("p", { className: "text-gray-600 text-sm mb-2", children: member.role })] }, index))) })] }), _jsxs("div", { className: "text-center pt-16", children: [_jsx("h3", { className: "text-2xl font-semibold text-gray-800 mb-4", children: "Let\u2019s Build the Future Together" }), _jsx("p", { className: "text-gray-700 text-lg mb-6", children: "We\u2019re here to simplify, scale, and support your digital ambitions \u2014 with technology that\u2019s powerful, purposeful, and human-first." }), _jsx(Link, { to: "/contact", className: "inline-block bg-[#F57C00] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#E65C00] transition text-lg", children: "\uD83D\uDC49 Get in Touch" })] })] }));
};
export default AboutUsPage;
