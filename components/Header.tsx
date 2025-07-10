import DarkModeToggle from './DarkModeToggle'

export default function Header() {
  return (
    <header className="w-full p-4 flex justify-between items-center shadow-md bg-white dark:bg-black sticky top-0 z-50">
      <h1 className="text-xl font-bold">Jackson Njihia</h1>
      <nav className="space-x-4">
        <a href="#about" className="hover:underline">About</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <DarkModeToggle />
    </header>
  )
}
