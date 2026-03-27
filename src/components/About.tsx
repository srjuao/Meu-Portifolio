"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Mail } from "lucide-react";
import Image from "next/image";
import { PERSONAL } from "@/lib/constants";
import { useIsSm, useIsMd } from "@/hooks/useMediaQuery";

const infoItems = [
    { icon: MapPin, label: "Localização", value: PERSONAL.location },
    { icon: GraduationCap, label: "Educação", value: PERSONAL.education },
    { icon: Briefcase, label: "Trabalho", value: PERSONAL.work },
    { icon: Mail, label: "E-mail", value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
];

export default function About() {
    const isSm = useIsSm();
    const isMd = useIsMd();

    return (
        <section
            id="about"
            className="relative overflow-hidden bg-black"
            style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "96px 24px" }}
        >
            {/* Background text */}
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none", userSelect: "none" }}>
                <h2
                    className="font-black text-outline-subtle uppercase leading-none tracking-widest opacity-20"
                    style={{ fontSize: "clamp(4rem, 12vw, 10rem)", textAlign: "center" }}
                    aria-hidden="true"
                >
                    SOBRE
                </h2>
            </div>

            {/* Title */}
            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                style={{ textAlign: "center", marginBottom: 48, position: "relative", zIndex: 1 }}
            >
                <h3 style={{ fontSize: 32, fontWeight: 800, color: "white" }}>Quem sou eu?</h3>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    style={{ width: 48, height: 4, background: "var(--color-primary)", borderRadius: 9999, margin: "16px auto 0", opacity: 0.4, transformOrigin: "center" }}
                />
            </motion.div>

            {/* Content */}
            <div style={{
                display: "flex",
                flexDirection: isMd ? "row" : "column",
                alignItems: "center",
                gap: isMd ? 64 : 40,
                maxWidth: 900,
                width: "100%",
                position: "relative",
                zIndex: 1,
            }}>
                {/* Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, rotate: -3, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="group"
                    style={{ flexShrink: 0 }}
                >
                    <div style={{ position: "relative", width: isMd ? 240 : 200, height: isMd ? 300 : 260, borderRadius: 16, overflow: "hidden" }}
                        className="border border-white/10 ring-1 ring-white/5 shadow-2xl">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-hover rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                        <Image
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                            alt={`Foto de perfil de ${PERSONAL.name}`}
                            fill
                            className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                            sizes="240px"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Text + cards */}
                <motion.div
                    initial={{ opacity: 0, x: 40, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-80px" }}
                    style={{ display: "flex", flexDirection: "column", gap: 28, flex: 1 }}
                >
                    <p style={{ fontSize: 15, lineHeight: 1.9, color: "rgba(255,255,255,0.55)", fontWeight: 400, textAlign: isMd ? "left" : "center" }}>
                        {PERSONAL.bio}
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: isSm ? "repeat(2, 1fr)" : "1fr", gap: 10 }}>
                        {infoItems.map(({ icon: Icon, label, value, href }) => {
                            const Wrapper = href ? "a" : "div";
                            const wrapperProps = href ? { href } : {};
                            return (
                                <Wrapper
                                    key={label}
                                    {...wrapperProps}
                                    className="flex items-center gap-3 glass-card hover:bg-white/5 transition-all"
                                    style={{ padding: "12px 16px", textDecoration: "none" }}
                                >
                                    <div style={{ padding: 7, borderRadius: 8 }} className="bg-primary/10 text-primary">
                                        <Icon size={16} />
                                    </div>
                                    <div style={{ minWidth: 0 }}>
                                        <p style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", fontWeight: 800, letterSpacing: "0.15em", marginBottom: 2 }}>{label}</p>
                                        <p style={{ fontSize: 12, fontWeight: 600, color: "white", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{value}</p>
                                    </div>
                                </Wrapper>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
