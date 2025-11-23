"use client";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative w-full overflow-hidden bg-black text-white pt-36 pb-20 md:h-screen md:min-h-[800px] md:flex md:items-center md:justify-center md:pt-0 md:pb-0"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                >
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 block sm:inline">Abhay Bansal</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto px-4"
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

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto text-left"
                >
                    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
                        <h3 className="text-cyan-400 font-bold mb-2 text-lg">The Magic ✨</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            "Software engineering is the closest thing we have to magic. We speak words into a computer, and they build worlds, solve impossible problems, and impact millions of lives. It's the pure joy of creation."
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
                        <h3 className="text-purple-400 font-bold mb-2 text-lg">The Madness 🤯</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            "But let's be real... it's also questioning your sanity when a missing semicolon breaks production, or debugging a race condition at 3 AM that only happens on Tuesdays. It's a love-hate relationship."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
