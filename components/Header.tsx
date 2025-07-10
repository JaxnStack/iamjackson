import { useEffect } from 'react'
import Image from 'next/image'
import DarkModeToggle from './DarkModeToggle'

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
          {/* ✅ Brand with profile picture and name */}
          <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#">
            <Image
              src="/profile.jpeg"
              alt="Jackson's profile picture"
              width={36}
              height={36}
              className="rounded-circle object-fit-cover"
              priority
            />
            Jackson Njihia
          </a>

          {/* ✅ Responsive navbar toggle */}
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

          {/* ✅ Navigation links */}
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

            {/* ✅ Dark mode toggle button */}
            <div className="d-flex align-items-center">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
