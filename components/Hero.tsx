export default function Hero() {
  return (
    <section className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center px-3 bg-body text-body">
      <h1 className="display-4 fw-bold mb-3">Hi, I’m Jackson Njihia 👋</h1>
      <p className="lead mb-4" style={{ maxWidth: '700px' }}>
        Full-stack web developer building clean, performant web apps with Django, React, and Next.js.
      </p>
      <a href="#contact" className="btn btn-dark btn-lg rounded-pill">
        Let’s Talk
      </a>
    </section>
  )
}
