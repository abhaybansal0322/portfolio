"use client";

import { motion } from "framer-motion";
import { Workflow } from "lucide-react";

const highlights = [
    "Contributed to a monorepo-based microservices platform spanning 2 independently deployable Fastify services, separate PostgreSQL schemas, Redis-backed workers, React applications, and shared npm packages.",
    "Engineered a centralized TypeScript integration layer between the product backend and Orion AI service, enabling 20+ AI workflows across 12+ modules including resume processing, job creation, candidate screening, assessments, and interviews.",
    "Built Socket.IO-based workflow communication with JWT auto-refresh, request correlation, connection reuse, timeout handling, and concurrency throttling, supporting up to 50 parallel AI executions per backend instance.",
    "Implemented multi-turn workflow execution using LangGraph checkpoints, Redis, thread identifiers, and persisted execution IDs across 5+ conversational flows such as job intake, resume building, and application screening.",
    "Integrated recruiter-assist workflows that performed sentiment analysis every 30 seconds and live interview analysis every 2 minutes, persisted insights to PostgreSQL, and streamed results to interviewers through Socket.IO.",
];

const Experience = () => {
    return (
        <section id="experience" className="bg-[#07090d] px-6 py-24 text-white">
            <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
                <div>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#58d6c9]">Current experience</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                        AI workflow integrations inside production microservices.
                    </h2>
                    <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
                        Current engineering internship work is centered on TypeScript backend integrations, real-time AI workflow execution, persisted conversational state, and recruiter-assist systems.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55 }}
                    className="border border-white/10 bg-white/[0.03] p-6 md:p-8"
                >
                    <div className="flex flex-col gap-5 border-b border-white/10 pb-8 md:flex-row md:items-start md:justify-between">
                        <div>
                            <div className="flex items-center gap-3">
                                <Workflow className="h-6 w-6 text-[#58d6c9]" />
                                <h3 className="text-2xl font-semibold tracking-tight">Software Engineering Intern</h3>
                            </div>
                            <p className="mt-3 text-lg text-slate-300">Adaptware Solutions Pvt Ltd.</p>
                        </div>
                        <div className="font-mono text-sm text-slate-400 md:text-right">
                            <p>Mar 2026 - Present</p>
                            <p>Chandigarh, India</p>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-4">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.45, delay: index * 0.06 }}
                                className="grid grid-cols-[48px_1fr] gap-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                            >
                                <span className="font-mono text-sm text-[#58d6c9]">0{index + 1}</span>
                                <p className="text-sm leading-7 text-slate-300">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
