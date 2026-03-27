"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/constants";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/icons";

export default function Hero() {
    const [init, setInit] = useState(false);
    const [displayedRole, setDisplayedRole] = useState("");

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    useEffect(() => {
        const fullText = PERSONAL.role;
        let index = 0;
        setDisplayedRole("");
        const interval = setInterval(() => {
            index++;
            setDisplayedRole(fullText.slice(0, index));
            if (index >= fullText.length) {
                clearInterval(interval);
            }
        }, 80);
        return () => clearInterval(interval);
    }, []);

    const options = useMemo(
        () => ({
            background: {
                color: { value: "transparent" },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: { enable: true, mode: "push" },
                    onHover: { enable: true, mode: "repulse" },
                },
                modes: {
                    push: { quantity: 3 },
                    repulse: { distance: 150, duration: 0.4 },
                },
            },
            particles: {
                color: { value: "#ffffff" },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    direction: "none" as const,
                    enable: true,
                    outModes: { default: "bounce" as const },
                    random: false,
                    speed: 0.8,
                    straight: false,
                },
                number: {
                    density: { enable: true, area: 1000 },
                    value: 50,
                },
                opacity: { value: 0.4 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 2 } },
            },
            detectRetina: true,
        }),
        []
    );

    return (
        <section
            id="home"
            aria-label="Apresentação"
            className="relative h-screen flex flex-col items-center justify-center px-6"
        >
            {/* Particles — background layer */}
            {init && (
                <Particles
                    id="tsparticles"
                    options={options}
                    className="absolute inset-0 z-0"
                    aria-hidden="true"
                />
            )}

            {/* Content — above particles */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center space-y-6"
            >
                {/* Name — large & dominant, comes first */}
                <h1 style={{ fontSize: "clamp(4rem, 10vw, 11rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 0.85, letterSpacing: "-0.04em" }}>
                    <span className="text-outline block hover:text-white transition-all duration-700">
                        {PERSONAL.name.split(" ")[0]}
                    </span>
                    <span className="text-gradient-primary block">
                        {PERSONAL.name.split(" ")[1]}
                    </span>
                </h1>

                {/* Typewriter role — below name */}
                <div className="flex flex-col items-center gap-4">
                    <p className="text-gray-400 font-medium tracking-[0.3em] uppercase text-xs sm:text-sm min-h-[1.5em] bg-white/5 px-4 py-1 rounded-full border border-white/5">
                        {displayedRole}
                        <span className="typewriter-cursor">|</span>
                    </p>
                </div>

                {/* Social icons */}
                <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 32, paddingTop: 32 }}
                >
                    <motion.a
                        whileHover={{ scale: 1.15, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        href={PERSONAL.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", padding: 8 }}
                    >
                        <LinkedInIcon size={26} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.15, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        href={PERSONAL.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", padding: 8 }}
                    >
                        <GitHubIcon size={26} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.15, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        href={PERSONAL.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", padding: 8 }}
                    >
                        <InstagramIcon size={26} />
                    </motion.a>
                </motion.div>

                {/* Scroll arrow — inside flow, below social icons */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    style={{
                        margin: "48px auto 0",
                        width: 48,
                        height: 48,
                        borderRadius: "50%",
                        border: "1.5px solid rgba(255,255,255,0.25)",
                        background: "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                    }}
                    className="animate-bounce"
                    onClick={() => {
                        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
                    }}
                    aria-label="Rolar para projetos"
                >
                    <ArrowDown size={20} strokeWidth={1.5} style={{ color: "rgba(255,255,255,0.4)" }} />
                </motion.button>
            </motion.div>
        </section>
    );
}
