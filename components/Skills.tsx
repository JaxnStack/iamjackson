export default function Skills() {
  return (
    <section id="skills" className="py-5 px-3 bg-light text-dark dark:bg-dark dark:text-light">
      <div className="container">
        <h2 className="display-6 fw-bold text-center mb-4">Skills</h2>

        <div className="row g-4">
          {/* Languages */}
          <div className="col-md-4">
            <h5 className="fw-semibold mb-3">Languages</h5>
            <ul className="list-unstyled d-flex flex-wrap gap-3">
              <li><i className="devicon-javascript-plain colored fs-2"></i> JavaScript</li>
              <li><i className="devicon-python-plain colored fs-2"></i> Python</li>
              <li><i className="devicon-html5-plain colored fs-2"></i> HTML5</li>
              <li><i className="devicon-css3-plain colored fs-2"></i> CSS3</li>
            </ul>
          </div>

          {/* Frameworks */}
          <div className="col-md-4">
            <h5 className="fw-semibold mb-3">Frameworks</h5>
            <ul className="list-unstyled d-flex flex-wrap gap-3">
              <li><i className="devicon-react-original colored fs-2"></i> React.js</li>
              <li><i className="devicon-django-plain colored fs-2"></i> Django</li>
              <li><i className="devicon-express-original colored fs-2"></i> Express.js</li>
              <li><i className="devicon-tailwindcss-plain colored fs-2"></i> Tailwind CSS</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="col-md-4">
            <h5 className="fw-semibold mb-3">Tools</h5>
            <ul className="list-unstyled d-flex flex-wrap gap-3">
              <li><i className="devicon-git-plain colored fs-2"></i> Git</li>
              <li><i className="devicon-github-original colored fs-2"></i> GitHub</li>
              <li><i className="devicon-postgresql-plain colored fs-2"></i> PostgreSQL</li>
              <li><i className="devicon-docker-plain colored fs-2"></i> Docker</li>
              <li><i className="devicon-vercel-original colored fs-2"></i> Vercel</li>
              <li><i className="devicon-railway-line colored fs-2"></i> Railway</li>
            </ul>
          </div>
        </div>

        {/* Education & Soft Skills */}
        <div className="mt-5">
          <h5 className="fw-semibold mb-3">Education & Soft Skills</h5>
          <ul className="list-unstyled">
            <li>🎓 Software Engineering – Moringa School (2023–2024)</li>
            <li>🎓 BSc. Electrical & Electronic Eng. – TUM (2011–2016)</li>
            <li>🧠 Strong in problem-solving, leadership & emotional intelligence</li>
            <li>💬 Excellent communicator and team player</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
