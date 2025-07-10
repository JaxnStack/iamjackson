export default function Skills() {
  const skills = [
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Next.js', icon: 'devicon-nextjs-original-wordmark' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original' },
  ]

  return (
    <section id="skills" className="py-5 px-3 bg-light text-dark">
      <div className="container">
        <h2 className="display-6 fw-bold text-center mb-5">Skills</h2>
        <div className="row justify-content-center g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-4 col-md-2 text-center">
              <i className={`${skill.icon} fs-1`}></i>
              <p className="mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
