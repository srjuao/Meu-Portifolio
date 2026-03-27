"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    images: string[];
    tech: string[];
    link: string;
    github: string;
};

export default function ProjectModal({
    project,
    onClose,
}: {
    project: Project;
    onClose: () => void;
}) {
    const [currentImage, setCurrentImage] = useState(0);
    const imgs = project.images ?? [project.image];

    const prev = () => setCurrentImage((c) => (c - 1 + imgs.length) % imgs.length);
    const next = () => setCurrentImage((c) => (c + 1) % imgs.length);

    return (
        <AnimatePresence>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 9999,
                    background: "rgba(0,0,0,0.85)",
                    backdropFilter: "blur(12px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 24,
                    cursor: "pointer",
                }}
            >
                {/* Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 30 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        background: "rgba(15,15,20,0.98)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 20,
                        maxWidth: 720,
                        width: "100%",
                        maxHeight: "90vh",
                        overflow: "hidden",
                        cursor: "default",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        style={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            zIndex: 10,
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "50%",
                            width: 36,
                            height: 36,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            color: "rgba(255,255,255,0.6)",
                            transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "white"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                    >
                        <X size={18} strokeWidth={2} />
                    </button>

                    {/* Image carousel */}
                    <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "rgba(0,0,0,0.5)", flexShrink: 0, borderRadius: "20px 20px 0 0", overflow: "hidden" }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ position: "absolute", inset: 0 }}
                            >
                                <Image
                                    src={imgs[currentImage]}
                                    alt={`${project.title} - Screenshot ${currentImage + 1}`}
                                    fill
                                    className="object-contain"
                                    sizes="720px"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation arrows */}
                        {imgs.length > 1 && (
                            <>
                                <button
                                    onClick={prev}
                                    style={{
                                        position: "absolute",
                                        left: 12,
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        background: "rgba(0,0,0,0.6)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "50%",
                                        width: 36,
                                        height: 36,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        color: "white",
                                        zIndex: 5,
                                    }}
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <button
                                    onClick={next}
                                    style={{
                                        position: "absolute",
                                        right: 12,
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        background: "rgba(0,0,0,0.6)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "50%",
                                        width: 36,
                                        height: 36,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        color: "white",
                                        zIndex: 5,
                                    }}
                                >
                                    <ChevronRight size={18} />
                                </button>

                                {/* Dots */}
                                <div style={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6, zIndex: 5 }}>
                                    {imgs.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentImage(i)}
                                            style={{
                                                width: i === currentImage ? 20 : 8,
                                                height: 8,
                                                borderRadius: 9999,
                                                background: i === currentImage ? "var(--color-primary)" : "rgba(255,255,255,0.3)",
                                                border: "none",
                                                cursor: "pointer",
                                                transition: "all 0.3s",
                                            }}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* Content */}
                    <div style={{ padding: "28px 32px 32px", overflowY: "auto" }}>
                        <h3 style={{ fontSize: 22, fontWeight: 800, color: "white", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                            {project.title}
                        </h3>
                        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontWeight: 600, marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                            {project.subtitle}
                        </p>
                        <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.55)", marginBottom: 24 }}>
                            {project.description}
                        </p>

                        {/* Tech tags */}
                        <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    style={{
                                        padding: "4px 12px",
                                        borderRadius: 9999,
                                        fontSize: 11,
                                        fontWeight: 700,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em",
                                        background: "rgba(255,255,255,0.06)",
                                        color: "rgba(255,255,255,0.5)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                    }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Action buttons */}
                        <div style={{ display: "flex", gap: 12 }}>
                            {project.link && project.link !== "#" && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                        padding: "10px 20px",
                                        borderRadius: 12,
                                        fontSize: 13,
                                        fontWeight: 700,
                                        color: "white",
                                        background: "var(--color-primary)",
                                        textDecoration: "none",
                                        transition: "all 0.2s",
                                    }}
                                >
                                    <ExternalLink size={16} />
                                    Ver Projeto
                                </a>
                            )}
                            {project.github && project.github !== "#" && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                        padding: "10px 20px",
                                        borderRadius: 12,
                                        fontSize: 13,
                                        fontWeight: 700,
                                        color: "rgba(255,255,255,0.7)",
                                        background: "rgba(255,255,255,0.06)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        textDecoration: "none",
                                        transition: "all 0.2s",
                                    }}
                                >
                                    <Github size={16} />
                                    Ver Código
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
