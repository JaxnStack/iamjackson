export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          Hi, I'm Jackson Njihia 👋
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl mb-6">
          A passionate full-stack developer building clean, modern web apps with React, Next.js, Django, and more.
        </p>
        <a
          href="#contact"
          className="mt-4 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          Contact Me
        </a>
      </div>

      {/* About Me Section */}
      <section id="about" className="w-full py-16 bg-gray-50 dark:bg-gray-900 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            I'm <span className="font-semibold">Jackson Njihia</span>, a passionate full-stack web developer based in Nairobi, Kenya 🇰🇪.
            I build scalable and engaging websites using technologies like <span className="font-semibold">React, Django, Node.js</span>, and more.
          </p>

          <div className="grid gap-6 md:grid-cols-2 text-left">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Tech Stack</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Languages: JavaScript (ES6+), Python, HTML5, CSS3</li>
                <li>Frameworks: React.js, Django, Express.js, Tailwind CSS</li>
                <li>Tools: Git, GitHub, PostgreSQL, Docker, Railway, Vercel</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Education & Soft Skills</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>Software Engineering – Moringa School (2023–2024)</li>
                <li>BSc. Electrical & Electronic Eng. – TUM (2011–2016)</li>
                <li>Strong in problem-solving, leadership & emotional intelligence</li>
                <li>Excellent communicator and team player</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-gray-700 dark:text-gray-300">
            <p>
              Outside of coding, I love clean UI, good design, and building systems that solve real-world problems.
              I'm currently available for freelance and contract opportunities.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:njihiajack7son@gmail.com" className="text-blue-600 hover:underline">📧 Email</a>
            <a href="https://www.linkedin.com/in/jackson-njihia-b17a4425b" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">🔗 LinkedIn</a>
            <a href="https://iamjacksonnjihia.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">🌐 Portfolio</a>
            <a href="tel:+254113803471" className="text-blue-600 hover:underline">📞 +254 113 803 471</a>
          </div>
        </div>
      </section>
    </main>
  )
}
