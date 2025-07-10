// components/Header.tsx
import DarkModeToggle from './DarkModeToggle'
import { useEffect } from 'react'

export default function Header() {
  // Optional: Re-initialize Bootstrap JS after hydration (for navbar collapse)
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').catch((err) =>
      console.error('Bootstrap load failed in header:', err)
    )
  }, [])

  return (
    <header className="sticky-top bg-body border-bottom shadow-sm">
      <nav className="navbar navbar-expand-lg bg-body container">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">Jackson Njihia</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="mainNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-3">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
