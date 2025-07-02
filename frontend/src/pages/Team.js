import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        role: 'React.js, React Native, Android, Flutter, Python Developer & Tutor',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Kapil Gupta',
        role: 'Backend Developer | Node.js, MERN Stack',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Shiwani Baghel',
        role: 'CSS, HTML, Python, Django, UI/UX | YouTube Content Creator',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Amritpal Singh',
        role: 'Full-Stack Developer | Django, HTML, CSS, JavaScript, Python',
        image: 'https://via.placeholder.com/150',
    },
];
const Team = () => {
    return (_jsxs("section", { className: "px-6 md:px-20 py-10", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-4xl font-bold text-primary", children: "Meet Our Team" }), _jsx("p", { className: "text-textSecondary mt-2 max-w-2xl mx-auto", children: "Our team combines technical depth with a passion for learning and building. From full-stack developers to strategic minds in business and marketing, we\u2019re a united force behind TechLambda's success." })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: teamMembers.map((member, index) => (_jsxs("div", { className: "bg-white rounded-xl shadow-md text-center p-6 hover:shadow-lg transition", children: [_jsx("img", { src: member.image, alt: member.name, className: "w-24 h-24 mx-auto rounded-full mb-4 object-cover" }), _jsx("h4", { className: "text-xl font-semibold text-primary", children: member.name }), _jsx("p", { className: "text-textSecondary text-sm", children: member.role })] }, index))) })] }));
};
export default Team;
