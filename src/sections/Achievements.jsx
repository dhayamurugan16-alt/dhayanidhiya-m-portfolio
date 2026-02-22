import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Award, Zap } from 'lucide-react'

const AWARDS = [
    { title: 'Demonstrated strong teamwork and coordination skills while collaborating with peers during internships and project development.' },
    { title: 'Actively participated in internship programs, showing initiative, adaptability, and commitment to learning in professional environments.' },
]
const CERTS = [
    { title: 'Oracle Certified Generative AI Professional.', org: 'Oracle', year: '2024' },
    { title: 'Internship in Web Development', org: 'CodeBind Technologies', year: '2024' },
    { title: 'Internship Completion Certificate', org: 'AK Designing Studio', year: '2024' },
    { title: 'Acquiring Data Certificate (Bronze Category).', org: 'NASSCOM', year: '2024' },
    { title: 'Certificate in C Programming.', year: '2024' },
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
