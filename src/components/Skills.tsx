"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = [
    "C/C++", "SQL/NoSQL", "JavaScript", "HTML/CSS", "TypeScript",
    "AWS", "React", "Next.js", "Node.js", "Docker",
    "Jenkins", "RestAPI", "Git", "Linux kernel"
];

const Skills = () => {
    const [activeSkill, setActiveSkill] = useState<string | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Simple interaction: Randomly highlight a skill on any key press
            const randomSkill = skills[Math.floor(Math.random() * skills.length)];
            setActiveSkill(randomSkill);

            // Reset after a short delay
            setTimeout(() => setActiveSkill(null), 500);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <section id="skills" className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    SKILLS <span className="text-sm font-normal text-gray-500 block mt-2">(Press any key to interact)</span>
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill}
                            className={`px-6 py-3 rounded-full border transition-all duration-300 ${activeSkill === skill
                                ? "bg-cyan-400 text-black border-cyan-400 scale-110"
                                : "border-gray-800 text-gray-400 hover:border-gray-600"
                                }`}
                            whileHover={{ scale: 1.05 }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
