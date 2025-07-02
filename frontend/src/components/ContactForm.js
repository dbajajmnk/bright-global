import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm, ValidationError } from '@formspree/react';
const ContactForm = () => {
    const [state, handleSubmit] = useForm("xdkzproo");
    if (state.succeeded) {
        return (_jsx("p", { className: "text-green-600 font-semibold", children: "\u2705 Thanks for contacting us!" }));
    }
    return (_jsxs("form", { onSubmit: handleSubmit, method: "POST", className: "space-y-6 max-w-xl", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", children: "Full Name" }), _jsx("input", { type: "text", id: "name", name: "name" // ✅ Required for Formspree
                        , required: true, className: "w-full p-2 border rounded" }), _jsx(ValidationError, { prefix: "Name", field: "name", errors: state.errors })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", children: "Email Address" }), _jsx("input", { type: "email", id: "email", name: "email" // ✅ Required
                        , required: true, className: "w-full p-2 border rounded" }), _jsx(ValidationError, { prefix: "Email", field: "email", errors: state.errors })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "phone", children: "Phone Number" }), _jsx("input", { type: "tel", id: "phone", name: "phone" // ✅ Optional but should be named
                        , className: "w-full p-2 border rounded" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", children: "Your Message" }), _jsx("textarea", { id: "message", name: "message" // ✅ Required
                        , required: true, className: "w-full p-2 border rounded" }), _jsx(ValidationError, { prefix: "Message", field: "message", errors: state.errors })] }), _jsx("button", { type: "submit", disabled: state.submitting, className: "bg-blue-600 text-white px-4 py-2 rounded", children: state.submitting ? 'Submitting...' : 'Submit' })] }));
};
export default ContactForm;
