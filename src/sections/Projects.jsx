import React from 'react'
import { motion } from 'framer-motion'

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
    {
        id: 3, title: 'PayFlow', year: '2023', cat: 'Backend',
        desc: 'PCI-compliant payment gateway supporting Stripe, Razorpay & UPI with idempotent retry logic.',
        stack: ['Node.js', 'Stripe', 'MongoDB', 'Docker', 'Redis'],
    },
    {
        id: 4, title: 'DataVault', year: '2023', cat: 'Data & BI',
        desc: 'Self-hosted BI platform with drag-and-drop report builder and D3-powered charts.',
        stack: ['React', 'D3.js', 'Python', 'FastAPI', 'ClickHouse'],
    },
    {
        id: 5, title: 'DevOps Hub', year: '2022', cat: 'DevOps',
        desc: 'Internal developer platform with CI/CD pipelines, K8s monitoring, and deploy genealogy.',
        stack: ['Go', 'React', 'Kubernetes', 'Helm', 'Prometheus'],
    },
    {
        id: 6, title: 'ThreadAI', year: '2022', cat: 'AI Tooling',
        desc: 'GPT-4 Slack bot that summarises threads, schedules meetings, and drafts context-aware replies.',
        stack: ['Node.js', 'Slack API', 'OpenAI', 'Redis', 'Vercel'],
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
