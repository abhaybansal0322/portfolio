"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "ELC Summer Intern",
        company: "Thapar University",
        location: "Patiala, Punjab",
        duration: "Jun 2025 – Jul 2025",
        description: [
            "Developed an AI-based system for Circuit Component Identification and Layout Generation, reduced manual design time by 40% and improved accuracy by 25%.",
            "Engineered a YOLO model for PCB component detection with 95% accuracy on complex images.",
            "Applied OCR to extract component labels, automating data extraction for 90% of layouts."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-zinc-950 text-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Experience
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border-l-2 border-cyan-400 pl-8 relative"
                        >
                            <span className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-400 rounded-full" />

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                <span className="text-gray-400 text-sm font-mono">{exp.duration}</span>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <h4 className="text-xl text-cyan-400">{exp.company}</h4>
                                <span className="text-gray-500 text-sm">{exp.location}</span>
                            </div>

                            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-300">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
