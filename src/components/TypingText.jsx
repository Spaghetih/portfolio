import { useEffect, useState } from 'react'

export default function TypingText({ text, speed = 30, className = '' }) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayedText(prev => prev + text.charAt(index))
      index++
      if (index >= text.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return <p className={className}>{displayedText}</p>
}
