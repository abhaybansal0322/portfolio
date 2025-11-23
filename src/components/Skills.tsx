"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Git", category: "Tools" },
    { name: "SQL", category: "Database" },
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "Figma", category: "Design" },
    { name: "Linux", category: "OS" },
    { name: "MongoDB", category: "Database" },
    { name: "GraphQL", category: "Backend" },
    { name: "Redux", category: "Frontend" },
    { name: "Prisma", category: "Backend" },
    { name: "Vim", category: "Tools" },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-zinc-950 text-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    Technical Skills
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-3">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-6 py-3 bg-zinc-900 rounded-full border border-zinc-800 text-gray-300 font-medium hover:text-white hover:border-zinc-600 transition-colors cursor-default"
                        >
                            {skill.name}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
