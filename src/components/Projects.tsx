"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "ELC(I-Qube) Connect",
        description: "Automated faculty room booking and attendance at Thapar University, eliminating manual paperwork for 2000+ students and 50+ faculty.",
        tags: ["Next.js", "Tailwind CSS", "MongoDB", "TypeScript", "Redis"],
        links: { demo: "https://elc-connect-y33t.vercel.app/", code: "https://github.com/aryansharma19992e/ELC-CONNECT" }
    },
    {
        title: "Smart Grocery App",
        description: "Full-stack grocery and meal planning application with AI-powered meal recommendation engine tailored to user preferences.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "AI"],
        links: { demo: "https://smart-grocery-app-five.vercel.app/", code: "https://github.com/abhaybansal0322/smart-grocery-app" }
    },
    {
        title: "Meesho Image Enhancer",
        description: "AI-powered image enhancement tool for e-commerce using OpenAI Vision API and Remove.bg for automated background removal.",
        tags: ["Next.js", "Tailwind CSS", "OpenAI Vision API", "TypeScript"],
        links: { demo: "https://meesho-image-enhancer.vercel.app/", code: "https://github.com/abhaybansal0322/meesho-image-enhancer" }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-zinc-950 text-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Selected Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-black border border-gray-800 p-6 rounded-xl hover:border-cyan-900/50 transition-colors group"
                        >
                            <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 bg-gray-900 text-gray-300 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a href={project.links.demo} className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                                    <ExternalLink size={16} className="mr-2" /> Demo
                                </a>
                                <a href={project.links.code} className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                                    <Github size={16} className="mr-2" /> Code
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
