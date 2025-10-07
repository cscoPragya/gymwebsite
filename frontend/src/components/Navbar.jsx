import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/70 backdrop-blur-md text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <h2 className="text-2xl font-bold cursor-pointer">
                    Raghav<span className="text-red-600">GYM</span>
                </h2>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 font-semibold text-white">
                    <Link to="/" className="hover:text-red-600 transition">Home</Link>
                    <Link to="/about" className="hover:text-red-600 transition">About</Link>
                    <Link to="/services" className="hover:text-red-600 transition">Services</Link>
                    <Link to="/contact" className="hover:text-red-600 transition">Contact</Link>
                </div>

                {/* Hamburger Icon */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl focus:outline-none"
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col bg-gray-800/90 backdrop-blur-md text-white text-center py-4 space-y-4 animate-slideDown">
                    <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Home</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-red-600">About</Link>
                    <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Services</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
