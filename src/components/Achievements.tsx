"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const achievements = [
    "INR 3 Lakh Merit Scholarship at Thapar University",
    "Global Rank 25 in CodeChef Starters 216",
    "Global Rank 181 in LeetCode Biweekly Contest 173",
    "CodeChef 4-Star, peak rating 1919; Codeforces rating 1511",
];

const Achievements = () => {
    return (
        <section id="achievements" className="bg-[#07090d] px-6 py-24 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex items-end justify-between gap-6">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#58d6c9]">Competitive proof</p>
                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                            Consistent problem-solving signal.
                        </h2>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.45, delay: index * 0.05 }}
                            className="flex items-start gap-4 border border-white/10 bg-white/[0.03] p-5"
                        >
                            <Trophy className="mt-1 h-5 w-5 shrink-0 text-[#f4c95d]" />
                            <p className="text-sm leading-6 text-slate-200">{achievement}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
