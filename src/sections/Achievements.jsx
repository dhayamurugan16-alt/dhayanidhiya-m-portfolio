import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Star, BookOpen, Code2, Award, Zap } from 'lucide-react'

const STATS = [
    { n: '5+', l: 'Certifications', icon: <BookOpen size={17} /> },
    { n: '3', l: 'Awards Won', icon: <Trophy size={17} /> },
    { n: '15+', l: 'OSS Contributions', icon: <Code2 size={17} /> },
    { n: '8.7', l: 'University CGPA', icon: <Star size={17} /> },
]
const AWARDS = [
    { title: 'HackIndia 2023 — 1st Place', year: '2023', desc: 'Built an AI-powered logistics optimiser among 400+ teams nationwide.' },
    { title: 'Open Source Contributor Award', year: '2022–23', desc: 'Patches merged in React Query, tRPC, and Vite — 15+ accepted pull requests.' },
    { title: "Dean's List · B.E. CS", year: '2021', desc: 'Anna University · CGPA 8.7 / 10 · First Division with Distinction.' },
]
const CERTS = [
    { title: 'AWS Certified Solutions Architect', org: 'Amazon Web Services', year: '2024' },
    { title: 'Google Cloud Professional Data Engineer', org: 'Google Cloud', year: '2023' },
    { title: 'Certified Kubernetes App Developer (CKAD)', org: 'CNCF', year: '2023' },
    { title: 'Meta Front-End Developer Certificate', org: 'Coursera / Meta', year: '2022' },
    { title: 'Node.js Application Developer', org: 'OpenJS Foundation', year: '2022' },
]

function Bento({ children, style = {}, tint = false }) {
    const ref = useRef(null)
    const move = e => {
        const r = ref.current.getBoundingClientRect()
        ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
        ref.current.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    return (
        <div ref={ref} onMouseMove={move}
            className={`bento ${tint ? 'bento-tint' : ''}`}
            style={style}>
            <div className="spot" />
            {children}
        </div>
    )
}

export default function Achievements() {
    return (
        <section id="achievements" className="sec">
            <div className="wrap">
                <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} style={{ marginBottom: 48 }}>
                    <p className="eyebrow">Recognition</p>
                    <h2 className="d-lg" style={{ color: 'var(--text)' }}>Achievements.</h2>
                </motion.div>

                {/* Stats row */}
                <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="stats-4"
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 10 }}>
                    {STATS.map((s, i) => (
                        <Bento key={s.l} tint={i === 0}
                            style={{ padding: '26px 22px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                            <div style={{ color: i === 0 ? 'var(--accent)' : 'var(--muted)' }}>{s.icon}</div>
                            <div>
                                <p style={{
                                    fontFamily: 'Onest, sans-serif', fontWeight: 900,
                                    fontSize: '2.4rem', letterSpacing: '-0.055em',
                                    color: i === 0 ? 'var(--accent)' : 'var(--text)',
                                    lineHeight: 1, marginBottom: 5,
                                }}>{s.n}</p>
                                <p style={{ color: 'var(--muted)', fontSize: 12.5 }}>{s.l}</p>
                            </div>
                        </Bento>
                    ))}
                </motion.div>

                {/* Awards + Certs */}
                <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                    <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.06 }}>
                        <Bento style={{ padding: '28px 26px', height: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                                <Award size={15} style={{ color: 'var(--accent)' }} />
                                <p className="eyebrow" style={{ marginBottom: 0 }}>Awards & Recognition</p>
                            </div>
                            {AWARDS.map((a, i) => (
                                <div key={i} style={{ paddingTop: 18, paddingBottom: 18, borderBottom: i < AWARDS.length - 1 ? '1px solid var(--border)' : 'none' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, marginBottom: 7 }}>
                                        <h3 style={{ fontFamily: 'Onest, sans-serif', fontWeight: 600, fontSize: 14.5, color: 'var(--text)', lineHeight: 1.3 }}>{a.title}</h3>
                                        <span className="tag" style={{ flexShrink: 0, fontSize: 10.5 }}>{a.year}</span>
                                    </div>
                                    <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.7 }}>{a.desc}</p>
                                </div>
                            ))}
                        </Bento>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.1 }}>
                        <Bento style={{ padding: '28px 26px', height: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                                <Zap size={15} style={{ color: 'var(--accent)' }} />
                                <p className="eyebrow" style={{ marginBottom: 0 }}>Certifications</p>
                            </div>
                            {CERTS.map((c, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 14, paddingTop: 14, paddingBottom: 14, borderBottom: i < CERTS.length - 1 ? '1px solid var(--border)' : 'none' }}>
                                    <div>
                                        <p style={{ color: 'var(--text)', fontWeight: 500, fontSize: 13.5, marginBottom: 3, lineHeight: 1.4 }}>{c.title}</p>
                                        <p style={{ color: 'var(--muted)', fontSize: 11.5 }}>{c.org}</p>
                                    </div>
                                    <span className="tag" style={{ flexShrink: 0, fontSize: 10.5 }}>{c.year}</span>
                                </div>
                            ))}
                        </Bento>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
