import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="ml-4 px-3 py-1 border rounded text-sm"
    >
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
