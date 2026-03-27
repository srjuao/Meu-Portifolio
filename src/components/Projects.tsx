"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PROJECTS } from "@/lib/constants";
import ProjectModal from "./ProjectModal";
import { useIsSm } from "@/hooks/useMediaQuery";

const TechIcon = ({ type }: { type: string }) => {
    const styles: Record<string, { bg: string; text: string; label: string }> = {
        js: { bg: "bg-[#F7DF1E]", text: "text-black", label: "JS" },
        html: { bg: "bg-[#E34F26]", text: "text-white", label: "5" },
        css: { bg: "bg-[#1572B6]", text: "text-white", label: "3" },
    };

    const style = styles[type.toLowerCase()];
    if (!style) return null;

    return (
        <div className={`${style.bg} ${style.text} w-8 h-8 flex items-center justify-center rounded-md text-sm font-black shadow-sm group-hover:shadow-primary/20 transition-all duration-300`}>
            {style.label}
        </div>
    );
};

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[number] | null>(null);
    const isSm = useIsSm();

    return (
        <>
            <section id="projects" className="py-32 px-6 bg-black relative overflow-hidden" style={{ minHeight: "100vh", scrollMarginTop: 0 }}>
                {/* Background decorative glow */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10 w-full px-4">
                    {/* Section title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-xl md:text-2xl font-black tracking-[0.2em] text-white mb-4 uppercase">
                            Trabalhos em destaque
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="w-10 h-1 bg-primary mx-auto rounded-full opacity-40 origin-center"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            viewport={{ once: true }}
                            style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", marginTop: 14, fontWeight: 500, letterSpacing: "0.05em" }}
                        >
                            Clique em um projeto para ver mais detalhes ↗
                        </motion.p>
                    </motion.div>

                    {/* Grid */}
                    <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: isSm ? "repeat(2, 1fr)" : "1fr", gap: "48px 40px", justifyItems: "center" }}>
                        {PROJECTS.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.15 + index * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                                viewport={{ once: true, margin: "-80px" }}
                                className="group flex flex-col items-center text-center w-full max-w-[320px] cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Project Mockup Container */}
                                <div className="relative w-full aspect-[1.4/1] mb-5 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-500 group-hover:border-white/10 group-hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.06)]">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative w-full h-full transform transition-transform duration-700 group-hover:scale-105">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 640px) 50vw, 300px"
                                            priority={index < 2}
                                        />
                                    </div>

                                    {/* Hover overlay — "Ver detalhes" */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[1px]">
                                        <span style={{
                                            padding: "8px 20px",
                                            borderRadius: 9999,
                                            fontSize: 12,
                                            fontWeight: 700,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.1em",
                                            color: "white",
                                            border: "1px solid rgba(255,255,255,0.3)",
                                            background: "rgba(255,255,255,0.08)",
                                        }}>
                                            Ver detalhes
                                        </span>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="space-y-1">
                                    <h3 className="text-base md:text-lg font-black text-white tracking-[0.08em] uppercase group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-[11px] md:text-xs font-medium tracking-wide">
                                        {project.subtitle}
                                    </p>
                                </div>

                                {/* Tech Icons */}
                                <div className="flex items-center justify-center gap-1.5 mt-4">
                                    {project.tech.map((t) => (
                                        <TechIcon key={t} type={t} />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Detail Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </>
    );
}
