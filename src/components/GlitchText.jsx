import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function GlitchText({ text, speed = 20, className }) {
  const [displayed, setDisplayed] = useState('')
  const [glitchPhase, setGlitchPhase] = useState(false)
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()'

  useEffect(() => {
    let currentIndex = 0
    let glitchInterval
    let revealTimeout

    const glitch = () => {
      let output = text
        .split('')
        .map((char, idx) => {
          if (idx <= currentIndex) return char
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join('')
      setDisplayed(output)
    }

    const interval = setInterval(() => {
      glitch()
      if (currentIndex < text.length) {
        currentIndex++
      } else {
        clearInterval(interval)
        revealTimeout = setTimeout(() => setGlitchPhase(false), 300)
      }
    }, speed)

    glitchInterval = setTimeout(() => setGlitchPhase(true), 0)

    return () => {
      clearInterval(interval)
      clearTimeout(glitchInterval)
      clearTimeout(revealTimeout)
    }
  }, [text, speed])

  return (
    <p
      className={clsx(
        'relative font-mono whitespace-pre-wrap',
        glitchPhase ? 'text-pink-400' : 'text-white',
        className
      )}
    >
      {displayed}
    </p>
  )
}
