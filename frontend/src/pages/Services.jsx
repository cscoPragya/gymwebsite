import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    Dumbbell,
    UserCheck,
    HeartPulse,
    Salad,
    Lock,
    Wind,
} from "lucide-react";

const services = [
    {
        icon: <Dumbbell size={40} />,
        title: "Modern Equipment",
        desc: "Top-quality machines for strength, cardio, and functional training.",
    },
    {
        icon: <UserCheck size={40} />,
        title: "Personal Training",
        desc: "Certified trainers guiding you every step toward your fitness goals.",
    },
    {
        icon: <Salad size={40} />,
        title: "Diet Plans",
        desc: "Customized meal plans to complement your workouts and lifestyle.",
    },
    {
        icon: <HeartPulse size={40} />,
        title: "Cardio & Strength Area",
        desc: "Dedicated spaces for focused workouts and maximum energy.",
    },
    {
        icon: <Lock size={40} />,
        title: "Locker Room",
        desc: "Clean, safe, and secure lockers for your convenience.",
    },
    {
        icon: <Wind size={40} />,
        title: "Air Conditioned Gym",
        desc: "Workout comfortably with our fully air-conditioned environment.",
    },
];

const Services = () => {
    return (
        <>
            <Navbar />
            <div className="relative w-full min-h-screen bg-gray-950 text-white py-20 px-6 md:px-20 overflow-hidden">
                {/* Subtle Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-950 opacity-90"></div>

                {/* Content */}
                <div className="relative z-10">
                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-center text-red-600 mb-14 underline decoration-red-600">
                        Our Services
                    </h2>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.07, y: -5 }}
                                transition={{ duration: 0.4 }}
                                className="bg-gray-900/50 border border-red-800/40 hover:border-red-500 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_0_25px_rgba(255,0,0,0.2)] hover:shadow-[0_0_40px_rgba(255,0,0,0.4)] backdrop-blur-md transition-all duration-500"
                            >
                                <div className="text-red-500 mb-5">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Services;
