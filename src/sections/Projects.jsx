import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github } from 'lucide-react'

const PROJECTS = [
    {
        id: 1, title: 'CloudSync', year: '2024', cat: 'Full Stack', featured: true,
        desc: 'Real-time multi-user collaboration with operational transforms, conflict resolution, and enterprise RBAC.',
        stack: ['React', 'Node.js', 'WebSocket', 'Redis', 'PostgreSQL'],
    },
    {
        id: 2, title: 'Nexus CRM', year: '2024', cat: 'SaaS', featured: true,
        desc: 'AI-powered CRM with lead scoring, deal forecasting, automated follow-ups, and real-time analytics.',
        stack: ['Next.js', 'TypeScript', 'Prisma', 'OpenAI', 'PostgreSQL'],
    },
]

const CATS = ['All', ...new Set(PROJECTS.map(p => p.cat))]

function Card({ p }) {
    const ref = useRef(null)
    const move = e => {
        const r = ref.current.getBoundingClientRect()
        ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
        ref.current.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    return (
        <motion.article ref={ref} onMouseMove={move} layout
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.28 }}
            className="bento"
            style={{ display: 'flex', flexDirection: 'column', cursor: 'default' }}>
            <div className="spot" />

            {/* Body */}
            <div style={{ padding: '20px 22px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 9 }}>
                    <span className="tag">{p.cat}</span>
                    <span style={{ color: 'var(--muted)', fontSize: 11 }}>{p.year}</span>
                </div>
                <h3 className="card-title" style={{ fontFamily: 'Onest, sans-serif', fontWeight: 700, fontSize: 17, color: 'var(--text)', marginBottom: 7, lineHeight: 1.2, transition: 'color .18s' }}>
                    {p.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.75, flex: 1, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
                    {p.stack.map(t => <span key={t} className="tag" style={{ fontSize: 10 }}>{t}</span>)}
                </div>
            </div>

            <style>{`.bento:hover .card-title{color:var(--accent)!important}`}</style>
        </motion.article>
    )
}

export default function Work() {
    const [active, setActive] = useState('All')
    const list = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === active)

    return (
        <section id="work" className="sec">
            <div className="wrap">

                <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ marginBottom: 44 }}>
                    <p className="eyebrow">Selected Work</p>
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 22 }}>
                        <h2 className="d-lg" style={{ color: 'var(--text)' }}>Things I've built.</h2>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-outlined" style={{ fontSize: 12.5, padding: '9px 18px' }}>
                            <Github size={13} /> All on GitHub
                        </a>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                        {CATS.map(c => (
                            <button key={c} onClick={() => setActive(c)} className={`tag ${active === c ? 'tag-active' : ''}`} style={{ cursor: 'pointer' }}>
                                {c}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <div className="proj-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
                    <AnimatePresence mode="popLayout">
                        {list.map(p => <Card key={p.id} p={p} />)}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
