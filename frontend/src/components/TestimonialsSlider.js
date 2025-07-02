import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Slider from 'react-slick';
const testimonials = [
    {
        name: 'Ivan',
        feedback: 'Highly professional, Excellent attitude with Integrity and Ethics. Highly recommended 👍🏻',
    },
    {
        name: 'Rachi',
        feedback: 'He is always well prepared and explains in a very creative and interactive way. Totally recommend.',
    },
    {
        name: 'Priyanshu M Sharma',
        feedback: 'Helped me become proficient in Flutter and get an internship as well.',
    },
    {
        name: 'Zari',
        feedback: 'Very patient and understanding, did an amazing job.',
    },
    {
        name: 'Anyssa',
        feedback: 'Communication was great. He made sure I was set up for success.',
    },
    {
        name: 'Aiten Babirova',
        feedback: 'Good service, great content and good teacher. Will continue learning!',
    },
    {
        name: 'Pankaj Singhal',
        feedback: 'Techlambda is the best. Great content, punctuality, fairness — unmatched!',
    },
    // Add more testimonials as needed
];
const TestimonialsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };
    return (_jsx(Slider, { ...settings, className: "space-x-4", children: testimonials.map((item, index) => (_jsxs("div", { className: "p-6 bg-white rounded-lg shadow-md mx-2", children: [_jsxs("p", { className: "text-textSecondary text-base mb-4", children: ["\"", item.feedback, "\""] }), _jsxs("h4", { className: "text-primary font-semibold text-right", children: ["\u2014 ", item.name] })] }, index))) }));
};
export default TestimonialsSlider;
