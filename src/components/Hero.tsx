"use client";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                >
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Abhay Bansal</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto"
                >
                    Bachelor of Engineering in Computer Science & AI/ML Enthusiast.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a
                        href="#projects"
                        className="inline-block px-8 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-full uppercase tracking-widest text-sm font-semibold"
                    >
                        View My Work
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
