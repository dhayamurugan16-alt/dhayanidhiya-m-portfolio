import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
    { href: '#work', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#about', label: 'About' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', fn, { passive: true })
        return () => window.removeEventListener('scroll', fn)
    }, [])

    return (
        <>
            <style>{`
                @media (max-width: 768px) {
                    .nav-logo-text { font-size: 15px !important; }
                    .nav-header { height: 60px !important; background: #0a0a0a !important; border-bottom: 2px solid var(--border) !important; }
                }
            `}</style>

            <header
                className="nav-header"
                style={{
                    position: 'fixed', inset: '0 0 auto 0', zIndex: 9999,
                    transition: 'background 0.3s',
                    background: '#0a0a0a',
                    borderBottom: '1px solid var(--border)',
                    paddingTop: 'env(safe-area-inset-top, 0px)',
                }}>
                <div className="wrap" style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    {/* Logo Section */}
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', zIndex: 10001 }}>
                        <div style={{
                            width: 32, height: 32, borderRadius: 8,
                            background: 'var(--accent)', display: 'grid', placeItems: 'center',
                            boxShadow: '0 0 15px rgba(200, 255, 69, 0.3)',
                        }}>
                            <span style={{ fontFamily: 'Onest, sans-serif', fontWeight: 900, fontSize: 13, color: '#000' }}>D</span>
                        </div>
                        <span className="nav-logo-text" style={{ fontFamily: 'Onest, sans-serif', fontWeight: 800, fontSize: 17, color: '#fff', letterSpacing: '-0.02em' }}>
                            Dhaya<span style={{ color: 'var(--accent)' }}>.</span>
                        </span>
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex" style={{ alignItems: 'center', gap: 6 }}>
                        {LINKS.map(l => (
                            <a key={l.href} href={l.href}
                                style={{ fontSize: 13, fontWeight: 500, color: 'var(--muted)', padding: '8px 16px', borderRadius: 10, textDecoration: 'none', transition: 'all 0.2s' }}
                                onMouseEnter={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                                onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.background = 'transparent' }}>
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    {/* Actions Group */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, zIndex: 10001 }}>
                        <a href="#contact" className="btn-solid hidden md:inline-flex"
                            style={{ fontSize: 13, padding: '10px 22px' }}>
                            Hire me ↗
                        </a>

                        {/* Hamburger Button - FORCED VISIBLE ON MOBILE */}
                        <button
                            onClick={() => {
                                const next = !open
                                setOpen(next)
                                document.body.style.overflow = next ? 'hidden' : 'auto'
                            }}
                            className="md:hidden"
                            style={{
                                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)',
                                cursor: 'pointer', display: 'flex', flexDirection: 'column',
                                gap: 5, padding: '10px', borderRadius: '10px',
                                width: 42, height: 42, alignItems: 'center', justifyContent: 'center'
                            }}>
                            <div style={{ width: 22, height: 2, background: '#fff', borderRadius: 2, transition: '0.3s', transform: open ? 'translateY(3.5px) rotate(45deg)' : 'none' }} />
                            <div style={{ width: 22, height: 2, background: '#fff', borderRadius: 2, transition: '0.3s', transform: open ? 'translateY(-3.5px) rotate(-45deg)' : 'none' }} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed', inset: 0, zIndex: 10000,
                            background: '#0a0a0a',
                            display: 'flex', flexDirection: 'column',
                            height: '100dvh', overflowY: 'auto',
                            padding: '100px 24px 40px'
                        }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {LINKS.map((l, i) => (
                                <motion.a
                                    key={l.href} href={l.href}
                                    onClick={() => { setOpen(false); document.body.style.overflow = 'auto' }}
                                    initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    style={{
                                        fontSize: '2.4rem', fontFamily: 'Onest, sans-serif', fontWeight: 900,
                                        color: '#fff', textDecoration: 'none', letterSpacing: '-0.04em',
                                        padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.05)'
                                    }}>
                                    {l.label}
                                </motion.a>
                            ))}
                        </div>
                        <a href="#contact" onClick={() => { setOpen(false); document.body.style.overflow = 'auto' }}
                            className="btn-solid" style={{ marginTop: 40, height: 60, justifyContent: 'center', fontSize: 16 }}>
                            Start a Project ↗
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
