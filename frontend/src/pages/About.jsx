import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="w-full h-auto relative">
            <Navbar />

            {/* Landing/About Section */}
            <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <img
                    className="absolute w-full h-full object-cover"
                    src="../public/bg2.jpg"
                    alt="Background"
                />

                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/70 backdrop-blur-sm"></div>

                {/* About Content */}
                <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-16 space-y-8">
                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl font-bold text-red-600 underline mt-20">
                        About Us
                    </h1>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl">
                        {/* Text */}
                        <div className="md:w-1/2 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-red-500/30 transition duration-500">
                            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed text-justify">
                                Welcome to <span className="text-red-500 font-semibold">Raghav Gym</span>, the heart of fitness and transformation in Mahu, Uttar Pradesh. Situated at Gate, Post, Mahu, Gandhour, Raghav Gym has earned a <span className="text-yellow-400 font-semibold">5-star rating</span> from its proud clientele on Google Maps — a true reflection of our dedication, strong community, and real results.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="md:w-1/2 flex justify-center items-center">
                            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-[40%] md:h-auto rounded-2xl overflow-hidden border-4 border-red-600 shadow-[0_0_25px_rgba(255,0,0,0.6)] hover:scale-105 transition-transform duration-500 rotate-270">
                                <img
                                    src="../public/bg.webp"
                                    alt="Gym"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            {/* Mission & Goals */}
            <div className="w-full px-6 py-10 bg-gray-50 text-center">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-3xl font-bold text-red-600 mb-4">Our Mission</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg md:text-lg text-justify">
                        At <span className="font-semibold text-red-500">Raghav Gym</span>, we believe fitness is more than just lifting weights — it's about building <span className="font-semibold">confidence</span>, <span className="font-semibold">health</span>, and <span className="font-semibold">discipline</span>. Our mission is to empower every member — from beginners to athletes — with the right tools, guidance, and environment to reach their goals.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl md:text-3xl font-bold text-red-600 mb-8">What Makes Us Special</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { title: "Top-notch Equipment", text: "Modern and well-maintained machines for strength, cardio, and functional workouts to meet every fitness need." },
                            { title: "Expert Guidance", text: "Certified trainers give personal attention, safe form correction, and consistent motivation for real results." },
                            { title: "Welcoming Atmosphere", text: "No judgments, just support. A community where everyone feels comfortable working toward their best self." },
                            { title: "Hygiene & Safety", text: "Clean and sanitized facilities with regular equipment checks to ensure a safe workout experience." },
                            { title: "Flexible Access", text: "Convenient location and flexible hours make it easy to stay consistent with your fitness routine." },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white shadow-lg hover:shadow-red-400 transition-all duration-300 p-6 rounded-2xl hover:scale-105">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Trainer Section */}
            <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
                <img
                    className="absolute w-full h-full object-cover"
                    src="../public/bg2.jpg"
                    alt="Background"
                />
                <div className="absolute w-full h-full bg-black/70 backdrop-blur-sm"></div>

                <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-16 space-y-12">
                    <h2 className="text-3xl md:text-3xl font-bold text-red-600 underline mb-6">Meet Your Trainer</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl">
                        <div className="md:w-1/2 bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-[0_0_25px_rgba(255,0,0,0.3)] border border-red-700/30 hover:shadow-red-600/50 transition duration-500">
                            <h3 className="text-2xl font-semibold text-red-500 mb-4">Vikas Kumar</h3>
                            <p className="text-gray-200 text-base sm:text-lg md:text-lg text-justify leading-relaxed">
                                With over <span className="text-red-400 font-semibold">5 years</span> of professional training experience, Raghav Singh is more than a fitness coach — he’s a mentor who believes in pushing limits with purpose. His philosophy revolves around balance, dedication, and discipline — helping every client unlock their best version, both physically and mentally.
                            </p>
                        </div>

                        <div className="md:w-1/2 flex justify-center items-center">
                            <div className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 border-4 border-red-600 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(255,0,0,0.6)] hover:scale-105 transition-transform duration-500">
                                <img
                                    src="../public/trainer.jpg"
                                    alt="Trainer"
                                    className="object-cover object-top w-full h-full"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Equipment Gallery */}
            <div className="w-full bg-white py-16 px-6 md:px-20">
                <h3 className="text-3xl md:text-3xl font-bold text-center text-red-600 mb-12 underline decoration-red-500">
                    Gallery Section
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {[
                        "../public/g1.jpg", "../public/g2.jpg", "../public/g3.jpg", "../public/g4.jpg",
                        "../public/g5.jpg", "../public/g6.jpg", "../public/g7.jpg", "../public/g8.jpg", "../public/g9.jpg"
                    ].map((src, index) => (
                        <div key={index} className="relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-500">
                            <img src={src} alt={`Equipment ${index + 1}`} className="object-cover w-full h-full" />
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;
