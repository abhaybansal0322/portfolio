"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Download, Github, Linkedin, Mail } from "lucide-react";

const profileLinks = [
    { label: "GitHub", href: "https://github.com/abhaybansal0322", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abhay-bansal-44474a263/", icon: Linkedin },
    { label: "CodeChef", href: "https://www.codechef.com/users/bansal03", icon: Code2 },
    { label: "Email", href: "mailto:abhaybansal19000@gmail.com", icon: Mail },
];

const stack = ["Next.js", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "AWS EC2", "Docker", "Workato"];

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-[calc(100svh-72px)] overflow-hidden bg-[#07090d] px-6 pt-36 text-white md:pt-40"
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
            <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_50%_0%,rgba(88,214,201,0.18),transparent_55%)]" />

            <div className="relative z-10 mx-auto grid max-w-7xl gap-16 pb-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-28">
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        className="font-mono text-xs uppercase tracking-[0.32em] text-[#58d6c9]"
                    >
                        Final-year CSE student at Thapar University
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.08 }}
                        className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl"
                    >
                        Abhay Bansal builds backend-driven software that ships with measurable reliability.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.16 }}
                        className="mt-7 max-w-2xl text-lg leading-8 text-slate-300"
                    >
                        Software developer focused on full-stack systems, API integrations, workflow automation, and precise backend logic using Next.js, TypeScript, PostgreSQL, MongoDB, Redis, AWS, and Docker.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.24 }}
                        className="mt-10 flex flex-col gap-3 sm:flex-row"
                    >
                        <a
                            href="/Abhay-Bansal-Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-[#07090d] transition hover:bg-[#58d6c9]"
                        >
                            <Download size={18} />
                            Download Resume
                        </a>
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2 border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#58d6c9] hover:text-[#58d6c9]"
                        >
                            View Projects
                            <ArrowUpRight size={18} />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.32 }}
                        className="mt-10 flex flex-wrap gap-3"
                    >
                        {profileLinks.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target={href.startsWith("mailto:") ? undefined : "_blank"}
                                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition hover:border-white/30 hover:text-white"
                            >
                                <Icon size={16} />
                                {label}
                            </a>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.28 }}
                    className="relative"
                >
                    <div className="border border-white/10 bg-[#0b0e14]/90 p-6 shadow-2xl shadow-black/30">
                        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
                            <div>
                                <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-500">Engineering signal</p>
                                <p className="mt-2 text-lg font-semibold text-white">Recruiter scan</p>
                            </div>
                            <span className="h-3 w-3 bg-[#58d6c9]" />
                        </div>

                        <div className="space-y-5">
                            {[
                                ["automation", "50+ Workato CRM workflows with Twilio, email, webhooks, and CRM APIs"],
                                ["systems", "Expense platform with penny-accurate settlements and service-based backend"],
                                ["scale", "ELC booking workflows supporting 100+ daily room requests"],
                                ["problem solving", "LeetCode Knight 2145, CodeChef 4-Star, 500+ DSA problems"],
                            ].map(([title, detail], index) => (
                                <div key={title} className="grid grid-cols-[112px_1fr] gap-4 border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
                                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#58d6c9]">0{index + 1} {title}</p>
                                    <p className="text-sm leading-6 text-slate-300">{detail}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                            {stack.map((item) => (
                                <span key={item} className="border border-white/10 px-3 py-1.5 font-mono text-xs text-slate-300">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
