export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-zinc-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border p-4 rounded shadow dark:bg-zinc-700">
            <h3 className="text-xl font-semibold mb-2">Sip Loft</h3>
            <p>E-commerce platform with M-Pesa, WhatsApp checkout, and Excel product upload.</p>
          </div>
          <div className="border p-4 rounded shadow dark:bg-zinc-700">
            <h3 className="text-xl font-semibold mb-2">Rent App Kenya</h3>
            <p>Real-time rent tracking, M-Pesa STK push, and tenant notifications.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
