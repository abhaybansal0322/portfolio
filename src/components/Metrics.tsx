"use client";

import { motion } from "framer-motion";

const metrics = [
    { value: "20+", label: "AI workflows enabled across recruiting and workflow modules" },
    { value: "50", label: "parallel AI executions supported per backend instance" },
    { value: "1000+", label: "generated expense cases used to validate settlement math" },
    { value: "800+", label: "DSA problems solved across coding platforms" },
];

const Metrics = () => {
    return (
        <section id="proof" className="border-y border-white/10 bg-[#0b0e14] text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-6 md:grid-cols-4 md:divide-x md:divide-y-0">
                {metrics.map((metric, index) => (
                    <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.45, delay: index * 0.05 }}
                        className="py-8 md:px-8"
                    >
                        <p className="font-mono text-3xl font-semibold tracking-tight text-[#58d6c9]">{metric.value}</p>
                        <p className="mt-3 text-sm leading-6 text-slate-300">{metric.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Metrics;
