import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { MdHotel } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";

const Home = () => {
    return (
        <div className="w-full h-screen relative flex flex-col p-0">
            <Navbar />

            {/* Background video section */}
            <div>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="https://themewagon.github.io/training-studio/assets/images/gym-video.mp4"
                    className="object-cover w-full h-screen"
                ></video>
                <div className="w-full bg-gray-900/70 h-screen absolute top-0"></div>
            </div>

            {/* Tagline Section */}
            <div className="absolute top-[35%] w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 h-[50%] gap-6">
                {/* Icons Row */}
                <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-8 md:gap-10">
                    <span className="flex justify-center items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold text-white">
                        <MdHotel className="text-red-600 text-xl sm:text-2xl" /> SLEEP
                    </span>
                    <span className="flex justify-center items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold text-white">
                        <GiMeal className="text-red-600 text-xl sm:text-2xl" /> EAT
                    </span>
                    <span className="flex justify-center items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold text-white">
                        <FaDumbbell className="text-red-600 text-xl sm:text-2xl" /> TRAIN
                    </span>
                    <span className="flex justify-center items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold text-white">
                        <AiOutlineReload className="text-red-600 text-xl sm:text-2xl" /> REPEAT
                    </span>
                </div>

                {/* Heading */}
                <h1 className="font-extrabold text-white text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-tight">
                    EASY WITH OUR <span className="text-red-600">GYM</span>
                </h1>

                {/* Button */}
                <Link to="/contact">
                    <button className="bg-red-600 text-white font-semibold rounded-md px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg md:text-xl hover:bg-red-700 transition-all duration-300 cursor-pointer">
                        BECOME A MEMBER
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
