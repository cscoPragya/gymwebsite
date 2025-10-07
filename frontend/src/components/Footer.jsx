import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-3 text-center border-t border-red-600">
            <p className="text-sm">
                © {new Date().getFullYear()} Raghav Gym. All Rights Reserved.
            </p>
            <p className="text-sm mt-1">
                Designed & Developed by <span className="text-red-500 font-semibold">Pragya Rajput</span> 💪
            </p>
        </footer>
    );
};

export default Footer;
