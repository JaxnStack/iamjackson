export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-white px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
        Hi, I am Jackson Njihia 👋
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
  )
}
