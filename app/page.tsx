import Image from "next/image"
import { gardens } from "@/data/gardens"

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Gardens by the Bay Logo" width={40} height={40} className="rounded-md" />
            <h1 className="text-xl font-bold m-0">Gardens by the Bay</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="transition-colors hover:text-primary-600">
              About
            </a>
            <a href="#attractions" className="transition-colors hover:text-primary-600">
              Attractions
            </a>
            <a href="#tickets" className="transition-colors hover:text-primary-600">
              Tickets
            </a>
            <a href="#location" className="transition-colors hover:text-primary-600">
              Location
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero bg-cover bg-center" style={{ backgroundImage: "url('/images/floral-fantasy.jpg')" }}>
          <div className="hero-overlay"></div>
          <div className="hero-content container">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Gardens by the Bay</h1>
              <p className="text-lg md:text-xl bg-black/30 p-2 rounded-md max-w-2xl mx-auto">{gardens.tagline}</p>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl">About Gardens by the Bay</h2>
              <p className="text-gray-600 mt-4">{gardens.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold text-primary-700">History</h3>
                <p className="text-gray-600">{gardens.history}</p>
              </div>

              <div className="card">
                <div className="card-header">
                  <div className="card-title">Opening Hours</div>
                  <div className="card-description">Plan your visit</div>
                </div>
                <div className="card-content">
                  <div className="space-y-3">
                    {gardens.openingHours.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="font-medium">{item.area}</span>
                        <span>{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="attractions" className="section section-alt">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl">Main Attractions</h2>
              <p className="text-gray-600 mt-4">Discover the wonders of Gardens by the Bay</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {gardens.attractions.map((attraction, index) => (
                <div key={index} className="attraction-card">
                  <Image
                    src={attraction.image || "/placeholder.svg?height=300&width=400&query=garden"}
                    alt={attraction.name}
                    width={400}
                    height={300}
                    className="attraction-image"
                  />
                  <div className="attraction-content">
                    <div className="attraction-title">{attraction.name}</div>
                    <div className="attraction-description">{attraction.shortDescription}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tickets" className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl">Tickets & Fees</h2>
              <p className="text-gray-600 mt-4">Plan your visit with our ticket options</p>
            </div>

            <div className="table-container max-w-4xl mx-auto">
              <table className="table">
                <caption>Ticket prices are in Singapore Dollars (SGD)</caption>
                <thead>
                  <tr>
                    <th>Ticket Type</th>
                    <th>Local Resident</th>
                    <th>Standard</th>
                    <th>Child (3-12 years)</th>
                  </tr>
                </thead>
                <tbody>
                  {gardens.tickets.map((ticket) => (
                    <tr key={ticket.type}>
                      <td className="font-medium">{ticket.type}</td>
                      <td>${ticket.localResident.toFixed(2)}</td>
                      <td>${ticket.standard.toFixed(2)}</td>
                      <td>${ticket.child.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="location" className="section section-alt">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl">Location & Information</h2>
              <p className="text-gray-600 mt-4">Find us and learn more about our facilities</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Garden Information</div>
                  <div className="card-description">Key details about Gardens by the Bay</div>
                </div>
                <div className="card-content">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-base">Address</h3>
                      <p className="text-sm text-gray-600">{gardens.location.address}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base">Contact</h3>
                      <p className="text-sm text-gray-600">Phone: {gardens.contact.phone}</p>
                      <p className="text-sm text-gray-600">Email: {gardens.contact.email}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base">Features</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {gardens.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base">Accessibility</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {gardens.accessibility.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <div className="card-title">Find Us</div>
                  <div className="card-description">Gardens by the Bay location</div>
                </div>
                <div className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(gardens.location.address)}&zoom=15`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Gardens by the Bay Map"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Gardens by the Bay Logo"
                  width={30}
                  height={30}
                  className="rounded-md"
                />
                <span className="text-lg font-bold">Gardens by the Bay</span>
              </div>
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Gardens by the Bay. All rights reserved.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Visit</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-sm text-gray-500 hover:text-primary-600">
                  About
                </a>
                <a href="#attractions" className="block text-sm text-gray-500 hover:text-primary-600">
                  Attractions
                </a>
                <a href="#tickets" className="block text-sm text-gray-500 hover:text-primary-600">
                  Tickets
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-500 hover:text-primary-600">
                  Facebook
                </a>
                <a href="#" className="block text-sm text-gray-500 hover:text-primary-600">
                  Instagram
                </a>
                <a href="#" className="block text-sm text-gray-500 hover:text-primary-600">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
