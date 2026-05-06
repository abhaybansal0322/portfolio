"use client";

import { motion } from "framer-motion";
import { Cloud, Code2, Database, Server } from "lucide-react";

const skillGroups = [
    {
        title: "Languages",
        icon: Code2,
        items: ["C++", "TypeScript", "JavaScript", "SQL"],
    },
    {
        title: "Backend & Systems",
        icon: Server,
        items: ["Node.js", "REST APIs", "NextAuth", "Webhooks", "Workato", "Redis"],
    },
    {
        title: "Data",
        icon: Database,
        items: ["PostgreSQL", "Neon", "MongoDB", "SQL design"],
    },
    {
        title: "Cloud & DevOps",
        icon: Cloud,
        items: ["AWS EC2", "AWS S3", "Docker", "Nginx", "Git"],
    },
];

const foundations = ["DSA", "OS", "DBMS", "Computer Networks", "OOP", "Next.js", "Tailwind CSS"];

const Skills = () => {
    return (
        <section id="skills" className="border-y border-white/10 bg-[#0b0e14] px-6 py-24 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 max-w-3xl">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#58d6c9]">Technical stack</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                        Skills grouped by the work recruiters actually evaluate.
                    </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {skillGroups.map(({ title, icon: Icon, items }, index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.45, delay: index * 0.05 }}
                            className="border border-white/10 bg-white/[0.03] p-5"
                        >
                            <Icon className="h-5 w-5 text-[#58d6c9]" />
                            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {items.map((item) => (
                                    <span key={item} className="border border-white/10 px-3 py-1.5 text-xs text-slate-300">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-8">
                    {foundations.map((item) => (
                        <span key={item} className="bg-white px-3 py-1.5 text-xs font-semibold text-[#07090d]">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
