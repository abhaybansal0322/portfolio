"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Phone, MapPin, Code2, Trophy } from "lucide-react";

const contactLinks = [
    { label: "Email", value: "abhaybansal19000@gmail.com", href: "mailto:abhaybansal19000@gmail.com", icon: Mail },
    { label: "Phone", value: "+91 8968916714", href: "tel:+918968916714", icon: Phone },
    { label: "LinkedIn", value: "abhay-bansal", href: "https://www.linkedin.com/in/abhay-bansal-44474a263/", icon: Linkedin },
    { label: "GitHub", value: "abhaybansal0322", href: "https://github.com/abhaybansal0322", icon: Github },
    { label: "LeetCode", value: "abhaybansal_", href: "https://leetcode.com/u/abhaybansal_/", icon: Code2 },
    { label: "CodeChef", value: "bansal03", href: "https://www.codechef.com/users/bansal03", icon: Trophy },
];

const Contact = () => {
    return (
        <section id="contact" className="bg-[#0b0e14] px-6 py-24 text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                className="mx-auto grid max-w-7xl gap-12 border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[0.85fr_1.15fr] md:p-10"
            >
                <div>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#58d6c9]">Recruiter contact</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                        Open to software developer roles and internship-to-full-time conversations.
                    </h2>
                    <p className="mt-6 flex items-center gap-3 text-sm text-slate-400">
                        <MapPin className="h-4 w-4 text-[#58d6c9]" />
                        Patiala, Punjab, India
                    </p>
                    <a
                        href="/Abhay-Bansal-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-[#07090d] transition hover:bg-[#58d6c9]"
                    >
                        <Download size={18} />
                        Download Resume
                    </a>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                    {contactLinks.map(({ label, value, href, icon: Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="group border border-white/10 p-5 transition hover:border-[#58d6c9]/70 hover:bg-[#58d6c9]/5"
                        >
                            <Icon className="h-5 w-5 text-[#58d6c9]" />
                            <p className="mt-5 font-mono text-xs uppercase tracking-[0.24em] text-slate-500">{label}</p>
                            <p className="mt-2 break-words text-sm font-medium text-slate-200 group-hover:text-white">{value}</p>
                        </a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
