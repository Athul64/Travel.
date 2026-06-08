import React, { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  // Ref for scroll sections
  const adventureRef = useRef(null);
  const destinationsRef = useRef(null);
  const reviewsRef = useRef(null);
  const contactRef = useRef(null);

  // Navbar scroll logic
  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll helper
  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const activities = [
    { title: "Surfing", icon: "🏄‍♂️", desc: "Catch the best waves in Bali" },
    { title: "Hiking", icon: "🥾", desc: "Trek through the Ella Rock" },
    { title: "Skiing", icon: "⛷️", desc: "Powder snow in Manali hills" },
    { title: "Cycling", icon: "🚴", desc: "Tour the romantic Paris streets" },
  ];

  // Popular Destinations state
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/destinations")
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full font-sans antialiased text-gray-900 bg-white">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md text-white transition-all duration-500 ease-in-out transform ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
          <h1
            className="text-2xl font-extrabold tracking-wide cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Travel.
          </h1>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            <li
              className="hover:text-emerald-400 transition cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </li>
            <li
              className="hover:text-emerald-400 transition cursor-pointer"
              onClick={() => scrollToSection(adventureRef)}
            >
              Adventure
            </li>
            <li
              className="hover:text-emerald-400 transition cursor-pointer"
              onClick={() => scrollToSection(destinationsRef)}
            >
              Travel Cards
            </li>
            <li
              className="hover:text-emerald-400 transition cursor-pointer"
              onClick={() => scrollToSection(reviewsRef)}
            >
              Reviews
            </li>
            <li
              className="hover:text-emerald-400 transition cursor-pointer"
              onClick={() => scrollToSection(contactRef)}
            >
              Contact US
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center flex items-center relative"
        style={{
          backgroundImage:
            "url(https://athul64.github.io/Landing-page/images/9arch2.jpg)",
        }}
      >
        <div className="bg-black/40 w-full h-full flex items-center justify-start">
          <div className="max-w-7xl mx-auto px-6 text-white w-full flex flex-col items-start">
            <h2 className="text-xl mb-2 text-left tracking-widest uppercase">
              Welcome to
            </h2>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-left">
              PARADISE
            </h1>
            <p className="max-w-xl text-lg leading-relaxed mb-8 text-left text-gray-200">
              The world is a tapestry of cultures, woven together by history,
              diversity, and shared aspirations for a better future.
            </p>
            <button
              onClick={() => scrollToSection(adventureRef)}
              className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:scale-105"
            >
              Explore Now
            </button>
          </div>
        </div>
      </section>

      {/* ADVENTURE ACTIVITIES SECTION */}
      <section ref={adventureRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-3">
              Unleash Thrill
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">
              Adventure Activities
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((act, i) => (
              <div
                key={i}
                className="group p-10 border border-gray-100 rounded-[2rem] bg-gray-50 hover:bg-emerald-500 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-emerald-200"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  {act.icon}
                </div>
                <h4 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">
                  {act.title}
                </h4>
                <p className="text-gray-600 group-hover:text-emerald-50 transition-colors">
                  {act.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS (API) */}
      <section ref={destinationsRef} className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Popular Destinations
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              Our top picked locations for your next big journey.
            </p>
          </div>

          {loading ? (
            <p className="text-center py-20">Loading destinations...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((dest) => (
                <div
                  key={dest._id}
                  className="group bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
                >
                  <div className="h-72 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      loading="lazy"
                      onError={(e) =>
                        (e.currentTarget.src =
                          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop")
                      }
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {dest.title}
                    </h3>
                    <p className="text-gray-500">{dest.country}</p>
                    <p className="mt-2 text-sm text-gray-600">
                      {dest.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* TESTIMONIALS (REVIEWS) */}
      <section ref={reviewsRef} className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-16">What Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {["Ananya, India", "Marco, Italy", "Sarah, UK"].map((name, i) => (
              <div
                key={i}
                className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 italic"
              >
                <p className="text-lg text-gray-700 mb-6">
                  “This blog inspired my first solo trip. Every destination
                  felt alive!”
                </p>
                <h4 className="font-bold text-emerald-600">— {name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-8">
        <section ref={contactRef} className="py-6">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Travel.</h3>
              <p className="text-gray-500">
                Exploring the world, one story at a time.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 uppercase tracking-widest text-sm">
                Contact
              </h4>
              <p className="hover:text-emerald-400 cursor-pointer transition">
                Email: travel@blog.com
              </p>
              <p>Phone: +91 98765 43210</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 uppercase tracking-widest text-sm">
                Follow Us
              </h4>
              <p className="hover:text-emerald-400 cursor-pointer transition">
                Instagram | Twitter | YouTube
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm">
            © 2026 Travel Blog. All rights reserved.
          </div>
        </section>
      </footer>
    </div>
  );
}
