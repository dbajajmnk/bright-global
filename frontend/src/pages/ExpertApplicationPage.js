import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const ExpertApplicationPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        specialization: '',
        budget: '',
        profile: '',
        address: '',
        experience: '',
        availability: '',
    });
    const [resume, setResume] = useState(null);
    const [syllabus, setSyllabus] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleFileChange = (e, type) => {
        const file = e.target.files?.[0] || null;
        type === 'resume' ? setResume(file) : setSyllabus(file);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here (e.g., API call or Firebase)
        console.log({ ...formData, resume, syllabus });
        alert('Application submitted successfully!');
    };
    return (_jsxs("div", { className: "max-w-4xl mx-auto p-6 bg-white shadow rounded mt-10 mb-20", children: [_jsx("h1", { className: "text-2xl font-bold mb-6 text-primary", children: "Apply as an Expert" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [_jsx("input", { type: "text", name: "fullName", placeholder: "Full Name", required: true, className: "border p-3 rounded w-full", onChange: handleChange }), _jsx("input", { type: "email", name: "email", placeholder: "Email Address", required: true, className: "border p-3 rounded w-full", onChange: handleChange }), _jsx("input", { type: "tel", name: "phone", placeholder: "Phone Number", required: true, className: "border p-3 rounded w-full", onChange: handleChange }), _jsx("input", { type: "text", name: "specialization", placeholder: "Your Specialization", required: true, className: "border p-3 rounded w-full", onChange: handleChange }), _jsx("input", { type: "text", name: "budget", placeholder: "Expected Budget (per hour/project)", required: true, className: "border p-3 rounded w-full", onChange: handleChange }), _jsx("input", { type: "text", name: "availability", placeholder: "Available Hours (e.g., Weekdays 6-9PM)", required: true, className: "border p-3 rounded w-full", onChange: handleChange })] }), _jsx("textarea", { name: "address", placeholder: "Full Address", rows: 2, required: true, className: "border p-3 rounded w-full", onChange: handleChange }), _jsx("textarea", { name: "experience", placeholder: "Work Experience (years, projects, companies, etc.)", rows: 3, required: true, className: "border p-3 rounded w-full", onChange: handleChange }), _jsx("textarea", { name: "profile", placeholder: "Tell us about yourself (Bio/Profile)", rows: 3, required: true, className: "border p-3 rounded w-full", onChange: handleChange }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block mb-1 font-medium", children: "Upload Resume (PDF/DOC)" }), _jsx("input", { type: "file", accept: ".pdf,.doc,.docx", required: true, onChange: (e) => handleFileChange(e, 'resume'), className: "border p-2 rounded w-full" })] }), _jsxs("div", { children: [_jsx("label", { className: "block mb-1 font-medium", children: "Upload Course Syllabus (PDF/ZIP)" }), _jsx("input", { type: "file", accept: ".pdf,.zip", required: true, onChange: (e) => handleFileChange(e, 'syllabus'), className: "border p-2 rounded w-full" })] })] }), _jsx("button", { type: "submit", className: "bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition", children: "Submit Application" })] })] }));
};
export default ExpertApplicationPage;
