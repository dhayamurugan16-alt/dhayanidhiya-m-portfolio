import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react'

const SOCIALS = [
    { icon: <Github size={17} />, label: 'GitHub', href: 'https://github.com' },
    { icon: <Linkedin size={17} />, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: <Twitter size={17} />, label: 'Twitter', href: 'https://twitter.com' },
    { icon: <Mail size={17} />, label: 'Email', href: 'mailto:dhaya@example.com' },
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer id="contact" style={{ borderTop: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
            <div className="wrap">

                {/* ── CTA block ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="footer-cta"
                    style={{ padding: '96px 0 72px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>

                    <div>
                        <p className="eyebrow">Get in touch</p>
                        {/* Big headline */}
                        <h2 className="d-lg" style={{ color: 'var(--text)', maxWidth: 600, lineHeight: 1.1 }}>
                            Let's build something<br />
                            <span style={{ color: 'var(--accent)' }}>great together.</span>
                        </h2>
                    </div>

                    {/* Two contact bento cards */}
                    <div className="cta-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, width: '100%', maxWidth: 640 }}>
                        {/* Email card */}
                        <a href="mailto:dhaya@example.com"
                            style={{ textDecoration: 'none' }}>
                            <div className="bento bento-tint" style={{ padding: '28px 28px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 16 }}>
                                <div className="spot" />
                                <Mail size={20} style={{ color: 'var(--accent)' }} />
                                <div>
                                    <p style={{ fontFamily: 'Onest, sans-serif', fontWeight: 600, fontSize: 15, color: 'var(--text)', marginBottom: 4 }}>
                                        Send an email
                                    </p>
                                    <p style={{ color: 'var(--muted)', fontSize: 12.5 }}>dhaya@example.com</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <ArrowUpRight size={16} style={{ color: 'var(--accent)' }} />
                                </div>
                            </div>
                        </a>

                        {/* LinkedIn card */}
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                            style={{ textDecoration: 'none' }}>
                            <div className="bento" style={{ padding: '28px 28px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 16 }} >
                                <div className="spot" />
                                <Linkedin size={20} style={{ color: 'var(--muted)' }} />
                                <div>
                                    <p style={{ fontFamily: 'Onest, sans-serif', fontWeight: 600, fontSize: 15, color: 'var(--text)', marginBottom: 4 }}>
                                        Connect on LinkedIn
                                    </p>
                                    <p style={{ color: 'var(--muted)', fontSize: 12.5 }}>in/dhayananth</p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <ArrowUpRight size={16} style={{ color: 'var(--muted)' }} />
                                </div>
                            </div>
                        </a>
                    </div>
                </motion.div>

                {/* ── Bottom bar ── */}
                <motion.div
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="footer-bar"
                    style={{ padding: '28px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>

                    {/* Logo */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--accent)', display: 'grid', placeItems: 'center' }}>
                            <span style={{ fontFamily: 'Onest, sans-serif', fontWeight: 900, fontSize: 12, color: '#060610' }}>D</span>
                        </div>
                        <span style={{ fontFamily: 'Onest, sans-serif', fontWeight: 700, fontSize: 14, color: 'var(--text)' }}>Dhaya.</span>
                    </div>

                    <p style={{ color: 'var(--muted)', fontSize: 12 }}>© {year} Dhayananth. All rights reserved.</p>

                    {/* Socials */}
                    <div style={{ display: 'flex', gap: 20 }}>
                        {SOCIALS.map(s => (
                            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                                style={{ color: 'var(--muted)', textDecoration: 'none', transition: 'color .2s' }}
                                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}>
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>

            </div>
        </footer>
    )
}
