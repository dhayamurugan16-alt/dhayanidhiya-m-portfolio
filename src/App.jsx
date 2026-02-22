import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Work from './sections/Projects'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'
import About from './sections/About'
import Footer from './sections/Footer'

function Divider() {
  return <div className="section-divider" />
}

export default function App() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Work />
        <Divider />
        <Experience />
        <Divider />
        <Achievements />
        <Divider />
        <About />
      </main>
      <Footer />
      <Analytics />
    </div>
  )
}
