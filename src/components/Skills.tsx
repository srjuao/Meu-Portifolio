"use client";

import { motion } from "framer-motion";
import { Code2, Atom, Terminal, Layout, Cpu, Smartphone, Palette, Braces } from "lucide-react";
import { SKILLS } from "@/lib/constants";
import { useIsSm, useIsMd } from "@/hooks/useMediaQuery";

const icons: Record<string, React.ReactNode> = {
    javascript: <Braces size={32} />,
    html: <Code2 size={32} />,
    css: <Palette size={32} />,
    react: <Atom size={32} />,
    go: <Cpu size={32} />,
    flutter: <Smartphone size={32} />,
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9, filter: "blur(6px)" },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

export default function Skills() {
    const isSm = useIsSm();
    const isMd = useIsMd();
    const cols = isMd ? 3 : isSm ? 2 : 1;

    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden bg-black" style={{ minHeight: "100vh" }}>
            {/* Background decorative text */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
                <h2
                    className="text-[12vw] font-black text-outline-subtle uppercase text-center leading-none tracking-widest opacity-20"
                    aria-hidden="true"
                >
                    HABILIDADES
                </h2>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Section title */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
                        Habilidades
                    </h3>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-12 h-1 bg-primary mx-auto rounded-full opacity-40 origin-center"
                    />
                </motion.div>

                {/* 3x2 Grid layout */}
                <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 24, maxWidth: 960, margin: "0 auto", paddingBottom: 48 }}>
                    {SKILLS.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial="hidden"
                            whileInView="visible"
                            custom={index}
                            variants={cardVariants}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative"
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/10 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

                            <div className="glass-card relative h-full p-6 flex flex-col items-center text-center gap-5 border-white/5 hover:border-white/10">
                                {/* Icon container */}
                                <div className="text-white group-hover:text-primary transition-colors duration-300">
                                    {icons[skill.icon] || <Code2 size={24} />}
                                </div>

                                {/* Skill Name */}
                                <h4 className="text-lg font-bold text-white tracking-wide">
                                    {skill.name}
                                </h4>

                                {/* Skill Description */}
                                <p className="text-gray-400 text-[13px] leading-relaxed font-medium">
                                    {skill.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
