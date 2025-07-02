import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const testimonials = [
    {
        message: "Highly professional, excellent attitude with integrity and ethics. Highly recommended.",
        date: "February 22, 2024",
    },
    {
        message: "Best teacher I ever had! Very creative and interactive teaching. Totally recommend. Thanks Techlambda!",
        date: "April 8, 2023",
    },
    {
        message: "They helped me gain confidence in Flutter and even helped land an internship. Thank you, Techlambda!",
        date: "February 14, 2023",
    },
    {
        message: "Great explainer, patient and understanding. They did an amazing job.",
        date: "February 13, 2023",
    },
    {
        message: "Very positive, helpful, and always encouraging. Highly recommended for learning!",
        date: "February 8, 2023",
    },
    // Add more as needed
];
const Testimonials = () => {
    return (_jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: testimonials.map((t, index) => (_jsxs("div", { className: "bg-white p-6 rounded-lg shadow border border-gray-100", children: [_jsxs("p", { className: "text-textSecondary italic mb-3", children: ["\"", t.message, "\""] }), _jsxs("p", { className: "text-sm text-gray-500 text-right", children: ["\u2013 ", t.date] })] }, index))) }));
};
export default Testimonials;
