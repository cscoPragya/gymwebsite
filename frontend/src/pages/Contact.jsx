import React from "react";
import { MapPin, Phone, Mail, Axis3D } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm } from 'react-hook-form'
import { toast } from "react-toastify";
import axios from 'axios'
import { useState } from "react";

const Contact = () => {
    const [roll, setRoll] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm()

    const onSubmit = async (data) => {
        setRoll(true)
        if (!data) {
            toast.error("Please fill in all required fields!")
        } else {



            try {
                const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/contact`, {
                    "username": data.username,
                    "email": data.email,
                    "message": data.message || "Hey, I want to join the gym."
                })
                if (response.status == 200) {
                    //yha ham backend par req bhejneg and after that we will show this popup to the user
                    reset()
                    setRoll(false)
                    toast.success(`${response.data.message}`);
                    console.log(data)
                }
            } catch (err) {
                toast.error("We are facing some technical issues, please try after some time.");
            }


        }
    }

    return (
        <>
            <Navbar />
            <div className="bg-gray-950 text-white min-h-screen flex flex-col items-center justify-center py-20 px-6 md:px-20">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-red-600 mb-12 underline decoration-red-600">
                    Contact Us
                </h2>

                {/* Main Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
                    {/* Left: Form Section */}
                    <div className="bg-gray-900/50 border border-red-800/40 rounded-2xl p-8 shadow-[0_0_25px_rgba(255,0,0,0.2)] backdrop-blur-md">
                        <h3 className="text-2xl font-semibold text-red-500 mb-6">
                            Get in Touch
                        </h3>

                        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="p-3 rounded-lg bg-gray-800/70 text-white border border-red-700 focus:outline-none focus:border-red-500"
                                required
                                {...register("username")}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="p-3 rounded-lg bg-gray-800/70 text-white border border-red-700 focus:outline-none focus:border-red-500"
                                required
                                {...register("email")}
                            />
                            <textarea
                                placeholder="Message (optional)"
                                rows="4"
                                className="p-3 rounded-lg bg-gray-800/70 text-white border border-red-700 focus:outline-none focus:border-red-500"

                                {...register("message")}
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition duration-300"
                            >
                                {roll ? "Submitting..." : "Join now"}
                            </button>
                        </form>
                    </div>

                    {/* Right: Map + Info Section */}
                    <div className="flex flex-col gap-6 justify-center">
                        {/* Map */}
                        <div className="w-full h-72 rounded-xl overflow-hidden shadow-[0_0_25px_rgba(255,0,0,0.3)]">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.554735464756!2d78.1954954!3d29.148320999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b91c6130bba01%3A0x267ec42fe871290c!2sRaghav%20GYM!5e0!3m2!1sen!2sin!4v1759821285082!5m2!1sen!2sin" width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-gray-900/50 border border-red-800/40 rounded-2xl p-6 backdrop-blur-md">
                            <h3 className="text-2xl font-semibold text-red-500 mb-4">
                                Contact Information
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-center gap-3">
                                    <MapPin className="text-red-500" />
                                    <span>Raghav Gym, Gate, Post, Mahu, Gandhour, Uttar Pradesh 246725</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="text-red-500" />
                                    <span>+91 7300808375</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="text-red-500" />
                                    <span>contact@xyzfitness.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer /></>
    );
};

export default Contact;
