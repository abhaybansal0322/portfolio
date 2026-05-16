"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
    {
        title: "DevSquad MCP",
        year: "2026",
        summary: "TypeScript MCP server that turns vague coding prompts into safe, role-based execution workflows for AI coding agents.",
        stack: ["TypeScript", "MCP SDK", "Node.js", "Zod", "Vitest", "JSON storage"],
        proof: [
            "Built deterministic prompt classification for implementation, discovery-first, and investigation-only workflows.",
            "Modeled senior-dev roles across Architect, Backend, Frontend, Database, Testing, Reviewer, Investigation, and DevOps tasks.",
            "Implemented local JSON workflow state with recovery from invalid data and atomic writes through temporary files.",
            "Added rule-based review gates, final merge strategy output, verification checklists, and risk summaries without API keys or shell execution.",
        ],
        links: {
            code: "https://github.com/abhaybansal0322/Devsquad",
        },
        diagram: ["Prompt classifier", "Workflow router", "Role tasks", "Review gates", "Final checklist"],
    },
    {
        title: "Smart Expense Splitter",
        year: "2026",
        summary: "Full-stack expense management platform for precise group spending, settlement planning, authentication, and financial workflows.",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Neon", "NextAuth", "Docker"],
        proof: [
            "Engineered Equal, Exact, Percentage, and Itemized split workflows.",
            "Validated penny-accurate settlement behavior across 1000+ generated expense cases.",
            "Implemented a greedy settlement algorithm to minimize transactions in complex groups.",
            "Used service-based backend architecture with API routes, PostgreSQL, auth, and Dockerized deployment.",
        ],
        links: {
            code: "https://github.com/abhaybansal0322/smart-expense-splitter",
        },
        diagram: ["API routes", "Services", "PostgreSQL", "Settlement engine"],
    },
    {
        title: "ELC (I-Qube) Connect",
        year: "2025",
        summary: "Backend-driven room booking and resource workflow system for educational center operations.",
        stack: ["Next.js", "TypeScript", "MongoDB", "Node.js", "Redis", "AWS EC2"],
        proof: [
            "Designed room booking workflows handling 100+ daily requests.",
            "Built role-based access for Super Admin, Admin, and Faculty users with JWT authentication.",
            "Optimized backend performance using Redis caching and efficient MongoDB queries.",
            "Deployed the full-stack application on AWS EC2 with Nginx and PM2.",
        ],
        links: {
            demo: "https://elc-connect-y33t.vercel.app/",
            code: "https://github.com/aryansharma19992e/ELC-CONNECT",
        },
        diagram: ["Faculty", "Booking API", "RBAC", "Redis cache", "MongoDB"],
    },
];

const Projects = () => {
    return (
        <section id="projects" className="bg-[#07090d] px-6 py-24 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-3xl">
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#58d6c9]">Featured projects</p>
                        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                            Three systems with backend depth recruiters can inspect.
                        </h2>
                    </div>
                    <p className="max-w-sm text-sm leading-7 text-slate-400">
                        Focused on inspectable systems with production-style workflows, backend architecture, and clear implementation proof.
                    </p>
                </div>

                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.55, delay: index * 0.08 }}
                            className="grid gap-8 border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#58d6c9]/60 md:grid-cols-[0.95fr_1.05fr] md:p-8"
                        >
                            <div className="flex flex-col">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-500">{project.year}</p>
                                        <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{project.title}</h3>
                                    </div>
                                    <div className="flex gap-2">
                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${project.title} demo`}
                                                className="inline-flex h-10 w-10 items-center justify-center border border-white/10 text-slate-300 transition hover:border-white/30 hover:text-white"
                                            >
                                                <ArrowUpRight size={18} />
                                            </a>
                                        )}
                                        <a
                                            href={project.links.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${project.title} source code`}
                                            className="inline-flex h-10 w-10 items-center justify-center border border-white/10 text-slate-300 transition hover:border-white/30 hover:text-white"
                                        >
                                            <Github size={18} />
                                        </a>
                                    </div>
                                </div>

                                <p className="mt-6 text-sm leading-7 text-slate-300">{project.summary}</p>

                                <div className="mt-7 flex flex-wrap gap-2">
                                    {project.stack.map((item) => (
                                        <span key={item} className="border border-white/10 px-3 py-1.5 font-mono text-xs text-slate-300">
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-8 grid gap-2 border-t border-white/10 pt-6">
                                    {project.diagram.map((item, itemIndex) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <span className="h-px w-8 bg-[#58d6c9]" />
                                            <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                                                {String(itemIndex + 1).padStart(2, "0")} / {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="border-l-0 border-white/10 md:border-l md:pl-8">
                                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#58d6c9]">Implementation proof</p>
                                <ul className="mt-6 space-y-4">
                                    {project.proof.map((item) => (
                                        <li key={item} className="flex gap-4 text-sm leading-7 text-slate-300">
                                            <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-[#58d6c9]" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
