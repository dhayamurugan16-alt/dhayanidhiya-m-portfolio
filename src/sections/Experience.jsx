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
            'Gained Hands-On Experience in Front-End Web development.',
            'Reduced API p95 latency from 800 ms to 120 ms via query optimisation and Redis caching.',
            'Architected Kafka event streaming, processing 1M+ events/day across decoupled microservices.',
            'Mentored 5 junior engineers through weekly code reviews and system design sessions.',
        ],
        stack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        role: 'Software Engineer II',
        company: 'Stellar Labs',
        dur: 'Jul 2022 – Dec 2023',
        loc: 'Remote',
        type: 'Full-time',
        points: [
            'Built analytics dashboard (React + D3.js) adopted by 2,000+ users within 3 months.',
            'Designed Python ETL pipeline ingesting 50 GB+ of data daily into ClickHouse.',
            'Integrated Stripe with idempotent webhook handling, cutting payment failures by 40%.',
        ],
        stack: ['Python', 'React', 'D3.js', 'ClickHouse', 'Stripe', 'GCP'],
    },
    {
        role: 'Software Engineer',
        company: 'CodeBridge',
        dur: 'Aug 2021 – Jun 2022',
        loc: 'Chennai, India',
        type: 'Full-time',
        points: [
            'Delivered 10+ REST API modules for a logistics platform handling 50K shipments/month.',
            'Implemented role-based access control, eliminating all unauthorised-access incidents.',
            'Maintained 85%+ test coverage across all back-end services using Jest + Supertest.',
        ],
        stack: ['Node.js', 'Express', 'MongoDB', 'Jest', 'GitHub Actions'],
    },
    {
        role: 'Software Engineering Intern',
        company: 'Nimble Tech',
        dur: 'Feb 2021 – Jul 2021',
        loc: 'Chennai, India',
        type: 'Internship',
        points: [
            'Built React components for a healthcare portal, lifting patient self-service completion by 30%.',
            'Fixed bugs and improved performance across 4 production back-end services.',
        ],
        stack: ['React', 'Node.js', 'MySQL'],
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
