import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark'
    if (stored) {
      setTheme(stored)
      document.documentElement.setAttribute('data-bs-theme', stored)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)

    // ✅ Apply to <html> element
    document.documentElement.setAttribute('data-bs-theme', newTheme)
  }

  return (
    <button
      className="btn btn-outline-secondary btn-sm"
      onClick={toggleTheme}
      title="Toggle theme"
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}
