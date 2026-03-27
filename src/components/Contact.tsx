"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/constants";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/icons";

const socials = [
    { name: "LinkedIn", icon: LinkedInIcon, href: PERSONAL.socials.linkedin },
    { name: "GitHub", icon: GitHubIcon, href: PERSONAL.socials.github },
    { name: "Instagram", icon: InstagramIcon, href: PERSONAL.socials.instagram },
];

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-white/[0.02] border-t border-white/10" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ maxWidth: 600, width: "100%", textAlign: "center" }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    style={{ marginBottom: 12 }}
                >
                    <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, textTransform: "uppercase", color: "white" }}>
                        Vamos Conversar?
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, marginBottom: 40 }}
                >
                    Estou sempre aberto a novos projetos e parcerias.
                </motion.p>

                {/* Accent bar */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    style={{ width: 48, height: 4, background: "var(--color-primary)", borderRadius: 9999, margin: "0 auto 40px", opacity: 0.4, transformOrigin: "center" }}
                />

                {/* Social links — staggered entrance */}
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
                    {socials.map(({ name, icon: Icon, href }, i) => (
                        <motion.a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={name}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 px-5 py-2.5 glass-card hover:bg-white/10 hover:border-primary/30 transition-colors text-sm font-medium"
                        >
                            <Icon size={16} aria-hidden="true" />
                            {name}
                        </motion.a>
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{ paddingTop: 48, borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: 48, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.35)" }}
                >
                    <p>&copy; {new Date().getFullYear()} {PERSONAL.name}. Todos os direitos reservados.</p>
                    <p>Desenvolvido com Next.js &amp; Tailwind</p>
                </motion.div>
            </div>
        </section>
    );
}
