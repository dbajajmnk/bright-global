import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const ShareAStoryPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'client',
        story: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Ideally submit to a backend or 3rd-party form API
        alert('Thank you for sharing your story with TechLambda!');
        setFormData({ name: '', email: '', role: 'client', story: '' });
    };
    return (_jsxs("section", { className: "px-6 md:px-20 py-12 bg-background text-textPrimary min-h-screen", children: [_jsx("h1", { className: "text-4xl font-bold text-secondary mb-8", children: "Share Your Story" }), _jsx("p", { className: "text-lg text-textSecondary mb-10 max-w-2xl", children: "Whether you're a client or expert, we want to hear your experience with TechLambda. Share something memorable, inspiring, or impactful \u2014 your story could motivate others!" }), _jsxs("form", { onSubmit: handleSubmit, className: "bg-white p-8 rounded shadow-lg max-w-3xl w-full", children: [_jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-medium mb-1", htmlFor: "name", children: "Your Name" }), _jsx("input", { type: "text", name: "name", id: "name", required: true, value: formData.name, onChange: handleChange, className: "w-full px-4 py-2 border rounded" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-medium mb-1", htmlFor: "email", children: "Email Address" }), _jsx("input", { type: "email", name: "email", id: "email", required: true, value: formData.email, onChange: handleChange, className: "w-full px-4 py-2 border rounded" })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-medium mb-1", htmlFor: "role", children: "I am a:" }), _jsxs("select", { name: "role", id: "role", value: formData.role, onChange: handleChange, className: "w-full px-4 py-2 border rounded", children: [_jsx("option", { value: "client", children: "Client" }), _jsx("option", { value: "expert", children: "Expert" })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { className: "block text-sm font-medium mb-1", htmlFor: "story", children: "Your Story" }), _jsx("textarea", { name: "story", id: "story", required: true, rows: 6, value: formData.story, onChange: handleChange, className: "w-full px-4 py-2 border rounded" })] }), _jsx("button", { type: "submit", className: "bg-primary text-white font-semibold px-6 py-3 rounded hover:opacity-90", children: "Submit Story" })] })] }));
};
export default ShareAStoryPage;
