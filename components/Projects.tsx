export default function Projects() {
  return (
    <section id="projects" className="py-5 px-3 bg-body text-body">
      <div className="container">
        <h2 className="display-6 fw-bold text-center mb-5">Projects</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="border rounded shadow-sm p-4 h-100 bg-body-secondary">
              <h3 className="h5 fw-semibold mb-2">Sip Loft</h3>
              <p className="mb-0">
                E-commerce platform with M-Pesa, WhatsApp checkout, and Excel product upload.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="border rounded shadow-sm p-4 h-100 bg-body-secondary">
              <h3 className="h5 fw-semibold mb-2">Rent App Kenya</h3>
              <p className="mb-0">
                Real-time rent tracking, M-Pesa STK push, and tenant notifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
