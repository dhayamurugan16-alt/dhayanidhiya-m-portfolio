import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'

function Bento({ children, style = {} }) {
    const ref = useRef(null)
    const move = e => {
        const r = ref.current.getBoundingClientRect()
        ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
        ref.current.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    return (
        <div ref={ref} onMouseMove={move} className="bento" style={style}>
            <div className="spot" />
            {children}
        </div>
    )
}

const EXP = [
    {
        role: 'Web Development',
        company: 'Intern, CODEBIND TECHNOLOGIES',
        dur: 'December 2024',
        loc: 'Chennai, India',
        points: [
            'Gained Hands-On Experience in Front-End Web Wevelopment.',
            'Developed a Event Management website using HTML, CSS, Java Script.',
        ],
    },
    {
        role: 'Game Development - GDD',
        company: 'Monolith Research and Training Labs Pvt. Ltd.',
        dur: 'June 2025 - September 2025',
        loc: 'Chennai, India',
        points: [
            'Gained Hands-On Experience working in a professional IT environment with guidance from senior mentors.',
            'Improved Technical Skills, Problem-Solving Ability, and Teamwork through assigned tasks and projects.',
        ],
    },
]

export default function Experience() {
    return (
        <section id="experience" className="sec">
            <div className="wrap">

                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} style={{ marginBottom: 48 }}>
                    <p className="eyebrow">Work History</p>
                    <h2 className="d-lg" style={{ color: 'var(--text)' }}>Experience.</h2>
                </motion.div>

                <Bento style={{ padding: '8px 0' }}>
                    {EXP.map((e, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07, duration: 0.48 }}
                            className="exp-entry"
                            style={{
                                display: 'flex', gap: 56, flexWrap: 'wrap',
                                padding: '40px 32px',
                                borderBottom: i < EXP.length - 1 ? '1px solid var(--border)' : 'none',
                            }}>

                            {/* Meta */}
                            <div className="exp-meta" style={{ minWidth: 190, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--muted)', fontSize: 12.5 }}>
                                    <Calendar size={11} /> {e.dur}
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--muted)', fontSize: 12.5 }}>
                                    <MapPin size={11} /> {e.loc}
                                </span>
                                <div style={{ display: 'flex', gap: 6, marginTop: 4, flexWrap: 'wrap' }}>
                                    <span className="tag" style={{ alignSelf: 'flex-start', fontSize: 11 }}>{e.type}</span>
                                    {i === 0 && (
                                        <span style={{
                                            display: 'inline-flex', alignItems: 'center', gap: 5,
                                            fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                                            padding: '4px 10px', borderRadius: 6,
                                            background: 'var(--accent-bg)', border: '1px solid var(--accent-br)', color: 'var(--accent)',
                                        }}>
                                            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)' }} />
                                            Current
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div style={{ flex: 1, minWidth: 260 }}>
                                <div style={{ marginBottom: 20 }}>
                                    <h3 style={{ fontFamily: 'Onest, sans-serif', fontWeight: 700, fontSize: 18, color: 'var(--text)', marginBottom: 4 }}>
                                        {e.role}
                                    </h3>
                                    <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 14 }}>{e.company}</p>
                                </div>

                                <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
                                    {e.points.map((pt, j) => (
                                        <li key={j} style={{ display: 'flex', gap: 12, color: 'var(--muted)', fontSize: 14, lineHeight: 1.75 }}>
                                            <span style={{ marginTop: 10, width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                                    {e.stack.map(t => <span key={t} className="tag" style={{ fontSize: 11 }}>{t}</span>)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </Bento>

            </div>
        </section>
    )
}
