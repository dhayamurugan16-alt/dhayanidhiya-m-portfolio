import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const SKILLS = [
    { name: 'Full Stack Development', pct: 92 },
    { name: 'Data Analytics', pct: 87 },
]

const STACK = [
    'React',
    'Node.js',
    'Typescript',
    'Python',
    'Java',
    'PowerBI',
]

const FACTS = [
    { k: 'Location', v: 'Chennai, India' },
    { k: 'Status', v: 'Available for hire', accent: true },
    { k: 'Education', v: 'B.E. CSE · Panimalar Engineering College' },
    { k: 'Languages', v: 'English, Tamil' },
]

function Bento({ children, style = {}, accent = false }) {
    const ref = useRef(null)
    const move = e => {
        const r = ref.current.getBoundingClientRect()
        ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
        ref.current.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    return (
        <div ref={ref} onMouseMove={move}
            className={`bento ${accent ? 'bento-accent' : ''}`}
            style={style}>
            <div className="spot" />
            {children}
        </div>
    )
}

export default function About() {
    return (
        <section id="about" className="sec">
            <div className="wrap">

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} style={{ marginBottom: 56 }}>
                    <p className="eyebrow">About Me</p>
                    <h2 className="d-lg" style={{ color: 'var(--text)' }}>Who I am.</h2>
                </motion.div>

                {/* ── Bio bento row ── */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bio-row"
                    style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 12, marginBottom: 12 }}>

                    {/* Bio text bento */}
                    <Bento style={{ padding: '36px 40px' }}>
                        <p className="eyebrow">My Story</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                            <p style={{ color: 'var(--muted)', fontSize: 16.5, lineHeight: 1.88 }}>
                                I'm a <span style={{ color: 'var(--text)', fontWeight: 500 }}>full-stack Software Engineer</span> based
                                in Chennai, India. I build high-performance web apps and robust back-end systems — from
                                clean REST APIs to cloud-native microservice architectures.
                            </p>
                            <p style={{ color: 'var(--muted)', fontSize: 16.5, lineHeight: 1.88 }}>
                                With 3+ years in the industry, I've designed scalable data models, shipped pixel-perfect
                                UIs, and taken systems to production on AWS and GCP. I contribute to open source and
                                mentor engineers in my local tech community.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 4 }}>
                                {[
                                    { l: 'GitHub →', h: 'https://github.com/dhayamurugan16-alt/' },
                                    { l: 'LinkedIn →', h: 'https://linkedin.com/in/dhayanidhiya-m-99072728b/' },
                                    { l: 'Email →', h: 'mailto:dhayamurugan16@gmail.com' },
                                ].map(a => (
                                    <a key={a.l} href={a.h} target="_blank" rel="noreferrer"
                                        style={{ fontSize: 13, fontWeight: 500, color: 'var(--muted)', textDecoration: 'none', transition: 'color .2s' }}
                                        onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                                        onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
                                        {a.l}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Bento>

                    {/* Quick facts bento */}
                    <Bento style={{ padding: '28px 24px' }}>
                        <p className="eyebrow">Quick Facts</p>
                        <div>
                            {FACTS.map((f, i) => (
                                <div key={f.k} style={{
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    padding: '12px 0',
                                    borderBottom: i < FACTS.length - 1 ? '1px solid var(--border)' : 'none',
                                }}>
                                    <span style={{ color: 'var(--muted)', fontSize: 12 }}>{f.k}</span>
                                    <span style={{ fontSize: 12.5, fontWeight: 500, color: f.accent ? 'var(--accent)' : 'var(--text)' }}>
                                        {f.v}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Bento>
                </motion.div>

                {/* ── Skills + Stack bento row ── */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="skills-row"
                    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>

                    {/* Skill bars bento */}
                    <Bento style={{ padding: '32px 32px' }}>
                        <p className="eyebrow">Proficiency</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                            {SKILLS.map(s => (
                                <div key={s.name}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                                        <span style={{ color: 'var(--text)', fontSize: 14, fontWeight: 500 }}>{s.name}</span>
                                        <span style={{ color: 'var(--muted)', fontSize: 12 }}>{s.pct}%</span>
                                    </div>
                                    <div className="skill-track">
                                        <motion.div className="skill-fill"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${s.pct}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1], delay: 0.15 }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Bento>

                    {/* Technologies bento */}
                    <Bento style={{ padding: '32px 32px' }}>
                        <p className="eyebrow">Technologies</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                            {STACK.map(s => <span key={s} className="tag">{s}</span>)}
                        </div>
                    </Bento>
                </motion.div>

                {/* ── Engineering Principles bento ── */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: 12 }}>
                    <Bento style={{ padding: '36px 36px' }}>
                        <p className="eyebrow">Engineering Principles</p>
                        <div className="principles-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
                            {PRINCIPLES.map((p, i) => (
                                <div key={p.label} className="principle-cell" style={{
                                    padding: '24px 28px 24px 0',
                                    borderRight: (i % 3 !== 2) ? '1px solid var(--border)' : 'none',
                                    borderBottom: (i < 3) ? '1px solid var(--border)' : 'none',
                                    paddingLeft: (i % 3 !== 0) ? 28 : 0,
                                }}>
                                    <p style={{ fontFamily: 'Onest, sans-serif', fontWeight: 600, fontSize: 14.5, color: 'var(--text)', marginBottom: 8 }}>
                                        {p.label}
                                    </p>
                                    <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.75 }}>{p.sub}</p>
                                </div>
                            ))}
                        </div>
                    </Bento>
                </motion.div>

                {/* ── Setup bento ── */}
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}>
                    <Bento style={{ padding: '10px 0' }}>
                        <p className="eyebrow">My Setup</p>
                        <div className="setup-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 0 }}>
                            {SETUP.map((s, i) => (
                                <div key={s.label} className="setup-cell" style={{
                                    padding: '20px 24px',
                                    borderRight: i < SETUP.length - 1 ? '1px solid var(--border)' : 'none',
                                    display: 'flex', flexDirection: 'column', gap: 4
                                }}>
                                    <span style={{ color: 'var(--muted)', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</span>
                                    <span style={{ color: 'var(--text)', fontSize: 12.5, fontWeight: 500 }}>{s.val}</span>
                                </div>
                            ))}
                        </div>
                    </Bento>
                </motion.div>

            </div>
        </section>
    )
}
