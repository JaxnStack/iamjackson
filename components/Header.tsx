import DarkModeToggle from './DarkModeToggle'

export default function Header() {
  return (
    <header className="sticky-top bg-body border-bottom shadow-sm py-3 px-4 d-flex justify-content-between align-items-center">
      <h1 className="h5 m-0 fw-bold">Jackson Njihia</h1>
      <nav className="d-flex align-items-center gap-3">
        <a href="#about" className="nav-link p-0 text-decoration-none">About</a>
        <a href="#skills" className="nav-link p-0 text-decoration-none">Skills</a>
        <a href="#projects" className="nav-link p-0 text-decoration-none">Projects</a>
        <a href="#contact" className="nav-link p-0 text-decoration-none">Contact</a>
      </nav>
      <div className="ms-3">
        <DarkModeToggle />
      </div>
    </header>
  )
}
