"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL } from "@/lib/constants";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/icons";
import { useIsMd } from "@/hooks/useMediaQuery";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projetos", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Sobre", href: "#about" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const isMd = useIsMd();

    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const sections = navLinks.map((l) => document.querySelector(l.href));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target.id) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -50% 0px" }
        );
        sections.forEach((s) => s && observer.observe(s));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isOpen) return;
        document.body.style.overflow = "hidden";
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setIsOpen(false);
        }
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKey);
        };
    }, [isOpen]);

    function handleScrollTo(href: string) {
        setIsOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div>
            {/* ─── Top Bar ─── */}
            <nav
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 32px",
                    transition: "background-color 0.5s, backdrop-filter 0.5s",
                    backgroundColor: scrolled ? "rgba(0,0,0,0.8)" : "transparent",
                    backdropFilter: scrolled ? "blur(24px)" : "none",
                    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
                }}
            >
                {/* Logo */}
                <button
                    onClick={() => handleScrollTo("#home")}
                    style={{
                        fontSize: 14,
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase" as const,
                        color: "white",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    JV
                </button>

                {/* Desktop links */}
                <div style={{ alignItems: "center", gap: 40, display: isMd ? "flex" : "none" }}
                >
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleScrollTo(link.href)}
                            style={{
                                fontSize: 13,
                                fontWeight: 500,
                                letterSpacing: "0.05em",
                                color: activeSection === link.href.slice(1) ? "#fff" : "rgba(255,255,255,0.4)",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                transition: "color 0.3s",
                            }}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Hamburger */}
                <button
                    onClick={() => setIsOpen(true)}
                    style={{
                        display: isMd ? "none" : "flex",
                        flexDirection: "column" as const,
                        alignItems: "flex-end",
                        justifyContent: "center",
                        gap: 5,
                        width: 32,
                        height: 32,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                    }}
                    aria-label="Abrir menu"
                >
                    <span style={{ display: "block", width: 24, height: 1.5, background: "white", borderRadius: 9999 }} />
                    <span style={{ display: "block", width: 16, height: 1.5, background: "white", borderRadius: 9999 }} />
                </button>
            </nav>

            {/* ─── Fullscreen Overlay ─── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="menu-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 100,
                            backgroundColor: "rgba(0, 0, 0, 0.96)",
                            backdropFilter: "blur(40px)",
                            display: "flex",
                            flexDirection: "column" as const,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {/* Close — top right */}
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: "absolute",
                                top: 24,
                                right: 32,
                                color: "rgba(255,255,255,0.6)",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: 8,
                            }}
                            aria-label="Fechar menu"
                        >
                            <X size={28} strokeWidth={1.5} />
                        </button>

                        {/* Nav links — centered */}
                        <div style={{
                            display: "flex",
                            flexDirection: "column" as const,
                            alignItems: "center",
                            gap: 48,
                        }}>
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.name}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
                                    onClick={() => handleScrollTo(link.href)}
                                    style={{
                                        fontSize: 22,
                                        fontWeight: 300,
                                        letterSpacing: "0.15em",
                                        color: activeSection === link.href.slice(1) ? "#ffffff" : "rgba(255,255,255,0.5)",
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        transition: "color 0.3s",
                                    }}
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                        </div>

                        {/* Social icons — bottom center */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            style={{
                                position: "absolute",
                                bottom: 48,
                                display: "flex",
                                alignItems: "center",
                                gap: 28,
                            }}
                        >
                            <a
                                href={PERSONAL.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                style={{ color: "rgba(255,255,255,0.35)" }}
                            >
                                <LinkedInIcon size={20} />
                            </a>
                            <a
                                href={PERSONAL.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                style={{ color: "rgba(255,255,255,0.35)" }}
                            >
                                <GitHubIcon size={20} />
                            </a>
                            <a
                                href={PERSONAL.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                style={{ color: "rgba(255,255,255,0.35)" }}
                            >
                                <InstagramIcon size={20} />
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
