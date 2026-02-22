import React from 'react'
import { motion } from 'framer-motion'

const PROJECTS = [
    {
        id: 1, title: 'Event Management', year: '2024', cat: 'Web Development', featured: true,
        desc: 'Real-time multi-user collaboration with operational transforms, conflict resolution, and enterprise RBAC.',
        stack: ['HTML', 'CSS', 'JavaScript'],
    },
]



export default function Work() {
    return (
        <section id="work" className="sec">
            <div className="wrap">

                <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    style={{ marginBottom: 44 }}>
                    <p className="eyebrow">Selected Work</p>
                    <div style={{ marginBottom: 22 }}>
                        <h2 className="d-lg" style={{ color: 'var(--text)' }}>Things I've built.</h2>
                    </div>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                    {PROJECTS.map(p => (
                        <motion.div key={p.id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                                <h3 style={{ fontFamily: 'Onest, sans-serif', fontWeight: 700, fontSize: 20, color: 'var(--text)', lineHeight: 1.2 }}>
                                    {p.title}
                                </h3>
                                <span className="tag">{p.cat}</span>
                                <span style={{ color: 'var(--muted)', fontSize: 13 }}>{p.year}</span>
                            </div>
                            <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.75, marginBottom: 14, maxWidth: '80ch' }}>
                                {p.desc}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                {p.stack.map(t => <span key={t} className="tag" style={{ fontSize: 11 }}>{t}</span>)}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
