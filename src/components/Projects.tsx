"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "ELC Connect",
        description: "Educational Learning Center Management System featuring role-based access, smart room booking, resource management, and QR-code attendance tracking.",
        tags: ["Next.js 15", "TypeScript", "MongoDB", "Tailwind"],
        links: {
            demo: "https://elc-connect-y33t.vercel.app/",
            code: "https://github.com/aryansharma19992e/ELC-CONNECT"
        },
        color: "from-blue-600 to-cyan-500"
    },
    {
        title: "Smart Grocery App",
        description: "AI-powered grocery subscription service that learns user preferences, offers weekly customization, and focuses on sustainability with carbon footprint tracking.",
        tags: ["AI", "Sustainability", "Full Stack", "Recommendations"],
        links: {
            demo: "https://smart-grocery-app-five.vercel.app/",
            code: "https://github.com/abhaybansal0322/smart-grocery-app"
        },
        color: "from-emerald-500 to-green-600"
    },
    {
        title: "Meesho Image Enhancer",
        description: "AI-driven tool for enhancing and validating product images. Features background removal, brightness adjustment, and compliance checks using OpenAI Vision.",
        tags: ["AI", "Next.js", "OpenAI", "Image Processing"],
        links: {
            demo: "https://meesho-image-enhancer.vercel.app/",
            code: "https://github.com/abhaybansal0322/meesho-image-enhancer"
        },
        color: "from-fuchsia-600 to-purple-600"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-black text-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-5xl font-black mb-16 text-center tracking-tighter"
                >
                    PROJECTS
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-500 flex flex-col"
                        >
                            {/* Thumbnail Placeholder */}
                            <div className={`h-48 w-full bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500 relative overflow-hidden shrink-0`}>
                                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                                    <span className="text-2xl font-bold text-white/40 uppercase tracking-widest">{project.title}</span>
                                </div>
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                            </div>

                            <div className="p-8 relative z-10 -mt-6 flex flex-col grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold leading-tight group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                    <div className="flex gap-2 shrink-0">
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                                            <ArrowUpRight size={18} />
                                        </a>
                                        <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                                            <Github size={18} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-4 grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-zinc-800 text-gray-300 text-[10px] font-bold rounded-full uppercase tracking-wider border border-zinc-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
