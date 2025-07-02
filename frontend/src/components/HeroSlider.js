import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [
    {
        src: '/assets/1.jpg',
        caption: 'Join Us Online',
        link: '/nursing-course',
    },
    {
        src: '/assets/2.jpg',
        caption: 'Work Together',
        link: '/team',
    },
    {
        src: '/assets/3.jpg',
        caption: 'Learn Online',
        link: '/visa',
    },
    {
        src: '/assets/4.jpg',
        caption: 'Mobile Development',
        link: '/placement',
    },
    {
        src: '/assets/5.jpg',
        caption: 'WebsiteDevelopment',
        link: '/contact',
    },
];
const HeroSlider = () => {
    const navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
    };
    return (_jsx("div", { className: "w-full max-w-7xl mx-auto mb-8 rounded-lg overflow-hidden", children: _jsx(Slider, { ...settings, children: images.map((item, idx) => (_jsxs("div", { className: "relative cursor-pointer group", onClick: () => navigate(item.link), children: [_jsx("img", { src: item.src, alt: `Slide ${idx + 1}`, className: "w-full h-[400px] object-cover" }), _jsxs("div", { className: "absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:bg-opacity-60", children: [_jsx("h3", { className: "text-xl md:text-2xl font-bold text-white mb-2", children: item.caption }), _jsx("button", { onClick: (e) => {
                                    e.stopPropagation(); // Prevent parent click
                                    navigate('/apply'); // Navigate only to Apply
                                }, className: "self-start bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark", children: "Apply Now \u2192" })] })] }, idx))) }) }));
};
export default HeroSlider;
