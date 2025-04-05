import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import { useState } from 'react'

function App() {
  const [dark, setDark] = useState(true)

  return (
    <div className={dark ? 'bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <div className='max-w-7xl mx-auto px-4'>
        <header className='flex justify-between items-center py-4 shadow'>
          <h1 className='text-2xl font-bold'>Suleyman UNVER</h1>
          <nav className='space-x-4 text-sm md:text-base'>
            <Link to='/'>Accueil</Link>
            <Link to='/about'>À propos</Link>
            <Link to='/projects'>Projets</Link>
            <Link to='/certifications'>Certifs</Link>
            <Link to='/contact'>Contact</Link>
            <button onClick={() => setDark(!dark)} className='border px-2 py-1 rounded'>{dark ? 'Light' : 'Dark'}</button>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
