import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Github, Linkedin, Mail } from 'lucide-react'

const fi = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1], delay },
})

function Spot({ children, style = {}, className = '' }) {
    const ref = useRef(null)
    const move = e => {
        const r = ref.current.getBoundingClientRect()
        ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
        ref.current.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    return (
        <div ref={ref} onMouseMove={move} className={`bento ${className}`} style={style}>
            <div className="spot" />
            {children}
        </div>
    )
}

const STACK = ['React', 'Node.js', 'TypeScript', 'Python', 'Java', 'PowerBI', 'Unreal Engine 5']
const SOCIALS = [
    { Icon: Github, href: 'https://github.com/dhayamurugan16-alt/' },
    { Icon: Linkedin, href: 'https://linkedin./in/dhayanidhiya-m-99072728b/' },
    { Icon: Mail, href: 'mailto:dhayamurugan16@gmail.com' },
]

export default function Hero() {
    return (
        <section id="home" style={{ paddingTop: 108, paddingBottom: 80 }}>
            <div className="wrap">

                {/* ══ MAIN BENTO GRID ══════════════════════════════════
                    Layout: [Photo col] [Name/Intro col] [Stats col]
                    3 columns: 260px | 1fr | 180px
                ═══════════════════════════════════════════════════════ */}
                <motion.div {...fi(0)} className="hero-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '260px 1fr',
                    gap: 10,
                    alignItems: 'stretch',
                    minHeight: 460,
                }}>

                    {/* ── LEFT: Photo + Status ─────────────────── */}
                    <div className="hero-left-col" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

                        {/* Photo card */}
                        <div className="bento hero-photo" style={{ flex: 1, overflow: 'hidden', position: 'relative', minHeight: 310 }}>
                            <img
                                src=""
                                alt="Dhayanidhiya M — Software Engineer"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                            />
                            {/* subtle bottom fade */}
                            <div style={{
                                position: 'absolute', bottom: 0, left: 0, right: 0, height: 90,
                                background: 'linear-gradient(to top, rgba(17,17,22,.95), transparent)',
                                pointerEvents: 'none',
                            }} />
                            {/* name chip on photo */}
                            <div style={{
                                position: 'absolute', bottom: 14, left: 14,
                                display: 'flex', flexDirection: 'column', gap: 1,
                            }}>
                                <p style={{ fontFamily: 'Onest', fontWeight: 700, fontSize: 14.5, color: '#fff', lineHeight: 1.2 }}>
                                    Dhayanidhiya M
                                </p>
                                <p style={{ fontSize: 11.5, color: 'rgba(255,255,255,.5)' }}>Software Engineer</p>
                            </div>
                            {/* online dot */}
                            <div style={{
                                position: 'absolute', top: 14, right: 14,
                                width: 9, height: 9, borderRadius: '50%',
                                background: '#22c55e',
                                boxShadow: '0 0 0 2px #111116, 0 0 10px rgba(34,197,94,.6)',
                            }} />
                        </div>

                        {/* Status / location card */}
                        <Spot style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                            <span className="status">
                                <span className="pulse" /> Available
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--muted)', fontSize: 12.5 }}>
                                <MapPin size={11} /> Chennai, India — IST
                            </div>
                        </Spot>
                    </div>

                    {/* ── MIDDLE: Lime name card + Stack ──────────── */}
                    <div className="hero-mid-col" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

                        {/* LIME name card (like reference "Hello, I'm Rima") */}
                        <div className="bento bento-lime" style={{
                            flex: 1, padding: '36px 32px',
                            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                        }}>
                            {/* top: role label */}
                            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.45)' }}>
                                Software Engineer
                            </p>

                            {/* main heading */}
                            <div>
                                <p style={{ fontSize: 13.5, color: 'rgba(0,0,0,0.5)', marginBottom: 4 }}>Hi, I'm</p>
                                <h1 style={{
                                    fontFamily: 'Onest, sans-serif', fontWeight: 900,
                                    fontSize: 'clamp(2.2rem, 4.5vw, 3rem)',
                                    color: '#0a0a0a', letterSpacing: '-0.045em', lineHeight: 1.0, marginBottom: 14,
                                }}>
                                    Dhayanidhiya M
                                </h1>
                                <p style={{ color: 'rgba(0,0,0,0.55)', fontSize: 14.5, lineHeight: 1.75, maxWidth: 380 }}>
                                    Building <strong style={{ color: 'rgba(0,0,0,0.8)' }}>Impactful Digital</strong> Solutions
                                </p>
                            </div>

                            {/* CTAs */}
                            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                                <a href="#work" style={{
                                    display: 'inline-flex', alignItems: 'center', gap: 7,
                                    padding: '11px 22px', borderRadius: 12,
                                    background: '#0a0a0a', color: 'var(--accent)',
                                    fontWeight: 700, fontSize: 13, textDecoration: 'none',
                                    transition: 'transform .2s',
                                }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                                    View Projects <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>

                        {/* Bottom Row: Stack + Socials */}
                        <div style={{ display: 'flex', gap: 10 }}>
                            {/* Stack card */}
                            <Spot style={{ padding: '20px 22px', flex: 1 }}>
                                <p style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>
                                    Core Stack
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                                    {STACK.map(t => <span key={t} className="tag">{t}</span>)}
                                </div>
                            </Spot>

                            {/* Socials card */}
                            <Spot className="social-card" style={{ padding: '16px 14px', width: (182 - 10), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                                    {SOCIALS.map(({ Icon, href }) => (
                                        <a key={href} href={href} target="_blank" rel="noreferrer"
                                            style={{ width: 34, height: 34, display: 'grid', placeItems: 'center', borderRadius: 10, color: 'var(--muted)', textDecoration: 'none', transition: 'color .18s, background .18s' }}
                                            onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'rgba(255,255,255,.05)' }}
                                            onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.background = 'transparent' }}>
                                            <Icon size={15} />
                                        </a>
                                    ))}
                                </div>
                            </Spot>
                        </div>
                    </div>

                </motion.div>

            </div>
        </section>
    )
}
