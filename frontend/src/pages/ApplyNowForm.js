import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const ApplyNowForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        resume: null,
    });
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleFileChange = (e) => {
        const file = e.target.files?.[0] || null;
        setFormData(prev => ({ ...prev, resume: file }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Normally you'd use FormData to send this to a backend or service
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };
    return (_jsxs("div", { className: "max-w-xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md", children: [_jsx("h2", { className: "text-2xl font-bold text-primary mb-4 text-center", children: "Apply Now" }), submitted ? (_jsx("p", { className: "text-green-600 text-center text-lg", children: "Thank you! Your application has been submitted." })) : (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-textPrimary mb-1", children: "Full Name" }), _jsx("input", { type: "text", name: "name", required: true, onChange: handleChange, className: "w-full border border-gray-300 rounded px-4 py-2 focus:outline-primary" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-textPrimary mb-1", children: "Email" }), _jsx("input", { type: "email", name: "email", required: true, onChange: handleChange, className: "w-full border border-gray-300 rounded px-4 py-2 focus:outline-primary" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-textPrimary mb-1", children: "Phone" }), _jsx("input", { type: "tel", name: "phone", required: true, onChange: handleChange, className: "w-full border border-gray-300 rounded px-4 py-2 focus:outline-primary" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-textPrimary mb-1", children: "Upload Resume (PDF, DOCX)" }), _jsx("input", { type: "file", name: "resume", accept: ".pdf,.doc,.docx", required: true, onChange: handleFileChange, className: "w-full border border-gray-300 rounded px-4 py-2 file:text-primary" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-textPrimary mb-1", children: "Message" }), _jsx("textarea", { name: "message", rows: 4, onChange: handleChange, className: "w-full border border-gray-300 rounded px-4 py-2 focus:outline-primary" })] }), _jsx("button", { type: "submit", className: "w-full bg-primary text-white font-semibold py-2 px-4 rounded hover:opacity-90 transition", children: "Submit Application" })] }))] }));
};
export default ApplyNowForm;
