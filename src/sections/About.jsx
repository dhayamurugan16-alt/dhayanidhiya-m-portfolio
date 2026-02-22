import React, { useRef } from 'react'
import { motion } from 'framer-motion'

const SKILLS = [
    { name: 'Full Stack Development', pct: 92 },
    { name: 'Python', pct: 87 },
    { name: 'Java', pct: 84 },
    { name: 'Data Analysis', pct: 80 },
]

const STACK = [
    'React', 'Node.js', 'TypeScript', 'Python',
    'Java', 'PowerBI', 'Unreal Engine 5',
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
                    style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12, marginBottom: 12 }}>

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
                                    { l: 'LinkedIn →', h: 'https://linkedin./in/dhayanidhiya-m-99072728b/' },
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




            </div>
        </section>
    )
}
