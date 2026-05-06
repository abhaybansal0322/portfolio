"use client";

import Link from "next/link";
import { useState } from "react";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";

const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#07090d]/85 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link href="#home" className="font-mono text-sm font-semibold uppercase tracking-[0.28em] text-white">
                    Abhay Bansal
                </Link>

                <div className="hidden items-center gap-7 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm text-slate-300 transition hover:text-[#58d6c9]"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-3 border-l border-white/10 pl-6">
                        <a href="https://github.com/abhaybansal0322" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-300 transition hover:text-white">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/abhay-bansal-44474a263/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-300 transition hover:text-white">
                            <Linkedin size={18} />
                        </a>
                        <a href="/Abhay-Bansal-Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white px-3 py-2 text-xs font-semibold text-[#07090d] transition hover:bg-[#58d6c9]">
                            <Download size={15} />
                            Resume
                        </a>
                    </div>
                </div>

                <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center border border-white/10 text-white md:hidden"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {isOpen && (
                <div className="border-t border-white/10 bg-[#07090d] px-6 py-5 md:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base text-slate-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="/Abhay-Bansal-Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex items-center justify-center gap-2 bg-white px-4 py-3 text-sm font-semibold text-[#07090d]"
                        >
                            <Download size={16} />
                            Download Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
