"use client";

import { useState } from "react";

const PHONE = "+43 664 123 4567"; // ⚠️ Bitte verifizieren
const ADDRESS = "Bregenz, Vorarlberg"; // ⚠️ Bitte mit echter Adresse ersetzen

const services = [
  {
    title: "Kosmetik Gesicht",
    price: "ab €40",
    description: "Reinigung, Peeling, Maske und entspannende Massage für strahlende Haut.",
    icon: "✨",
  },
  {
    title: "Fusspflege",
    price: "ab €30",
    description: "Professionelle Pflege, Hornhautentfernung und wohltuende Massage.",
    icon: "🦶",
  },
  {
    title: "Nagelstudio",
    price: "ab €25",
    description: "Maniküre, Pediküre und Gel-Nägel für perfekt gepflegte Hände und Füsse.",
    icon: "💅",
  },
  {
    title: "Waxing",
    price: "ab €15",
    description: "Sanfte Haarentfernung für Gesicht und Körper – glatt und langanhaltend.",
    icon: "🌸",
  },
  {
    title: "Wimpern & Augenbrauen",
    price: "ab €12",
    description: "Zupfen, Färben und Wimpernzange für einen perfekten Blick.",
    icon: "👁️",
  },
  {
    title: "Pakete & Geschenke",
    price: "Individuell",
    description: "Geschenkgutscheine und attraktive Behandlungs-Pakete – verwöhnen Sie sich oder verschenken Wohlbefinden.",
    icon: "🎁",
  },
];

const whyItems = [
  {
    title: "Erfahrung",
    description: "Jahrelange Erfahrung und laufende Weiterbildung für beste Ergebnisse.",
  },
  {
    title: "Persönlich",
    description: "Individuelle Beratung und Behandlungen, die genau zu Ihnen passen.",
  },
  {
    title: "Qualität",
    description: "Hochwertige Produkte und saubere Arbeitsweise – Ihr Vertrauen ist unser Antrieb.",
  },
];

const openingHours = [
  { day: "Montag", hours: "09:00 – 18:00" },
  { day: "Dienstag", hours: "09:00 – 18:00" },
  { day: "Mittwoch", hours: "09:00 – 18:00" },
  { day: "Donnerstag", hours: "09:00 – 18:00" },
  { day: "Freitag", hours: "09:00 – 17:00" },
  { day: "Samstag", hours: "Nach Vereinbarung" },
  { day: "Sonntag", hours: "Geschlossen" },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple form simulation
    setFormStatus("sent");
    setTimeout(() => setFormStatus("idle"), 4000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1920&q=80"
            alt="Kosmetiktreff – entspannende Spa-Atmosphäre"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/70" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="font-sans text-cream/80 text-sm tracking-[0.3em] uppercase mb-4">
            Bregenz · Vorarlberg
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-cream mb-6 leading-tight">
            Kosmetiktreff
            <br />
            <span className="italic font-light">Margit Ecker</span>
          </h1>
          <p className="font-serif text-xl md:text-2xl text-cream/90 italic mb-10">
            Kosmetik · Fusspflege · Wohlbefinden
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#kontakt" className="btn-primary">
              Termin vereinbaren
            </a>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="btn-secondary border-cream text-cream hover:bg-cream hover:text-charcoal">
              📞 Anrufen
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-cream/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <div className="info-strip">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm text-charcoal">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-charcoal/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{ADDRESS}</span>
          </div>
          <div className="w-px h-4 bg-charcoal/20 hidden md:block" />
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-charcoal/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:underline">{PHONE}</a>
          </div>
          <div className="w-px h-4 bg-charcoal/20 hidden md:block" />
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-charcoal/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Mo–Fr 09:00–18:00</span>
          </div>
        </div>
      </div>

      {/* ── WILLKOMMEN ── */}
      <section className="section-padding-lg bg-cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
              alt="Entspannende Kosmetikbehandlung"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <p className="font-sans text-sm tracking-[0.2em] uppercase text-charcoal/50 mb-3">
              Willkommen
            </p>
            <h2 className="section-title mb-6">
              Ihr Studio für Kosmetik<br />
              <span className="italic">und Fusspflege</span> in Bregenz
            </h2>
            <p className="font-sans text-base text-charcoal-light leading-relaxed mb-4">
              Schön, dass Sie da sind! Im Kosmetiktreff kümmern wir uns mit Herz und Erfahrung um Ihr Wohlbefinden. 
              Jede Behandlung ist ein kleines Erlebnis – individuell abgestimmt auf Ihre Bedürfnisse.
            </p>
            <p className="font-sans text-base text-charcoal-light leading-relaxed mb-8">
              Ob Gesichtskosmetik, Fusspflege, Nagelstudio oder Waxing – ich nehme mir Zeit für Sie. 
              Denn gute Pflege beginnt mit persönlicher Beratung.
            </p>
            <div className="flex items-center gap-4 p-4 bg-lavender/30 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-rose-soft/50 flex items-center justify-center text-2xl shrink-0">
                💜
              </div>
              <div>
                <p className="font-serif text-lg italic text-charcoal">
                  „Ihre Zufriedenheit ist mein schönstes Kompliment."
                </p>
                <p className="font-sans text-sm text-charcoal/60 mt-1">— Margit Ecker</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEISTUNGEN ── */}
      <section className="section-padding bg-lavender/20" id="leistungen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-sm tracking-[0.2em] uppercase text-charcoal/50 mb-3">
              Unsere Leistungen
            </p>
            <h2 className="section-title">Was wir für Sie tun können</h2>
            <p className="section-subtitle mx-auto text-center">
              Von Kopf bis Fuss – wir bieten ein breites Spektrum an Behandlungen für Ihr Wohlbefinden.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="service-card group">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="font-serif text-xl font-medium text-charcoal mb-1">{service.title}</h3>
                <p className="font-sans text-sm font-medium text-charcoal/60 mb-3">{service.price}</p>
                <p className="font-sans text-sm text-charcoal-light leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHIE ── */}
      <section className="section-padding bg-cream-warm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-lavender/20 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-soft/20 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="text-4xl mb-6">🌿</div>
          <h2 className="section-title mb-8">Meine Philosophie</h2>
          <blockquote className="font-serif text-2xl md:text-3xl italic text-charcoal leading-relaxed mb-6">
            „Jede Kundin ist einzigartig — jede Behandlung wird individuell angepasst."
          </blockquote>
          <p className="font-sans text-base text-charcoal-light leading-relaxed max-w-2xl mx-auto mb-8">
            Mir geht es nicht um Massenabfertigung, sondern um echte Fürsorge. 
            Ich nehme mir Zeit, höre zu und schaffe eine Atmosphäre, in der Sie sich wohlfühlen können. 
            Ihr Vertrauen ist mein wertvollstes Gut.
          </p>
          <div className="inline-flex items-center gap-2 text-charcoal/50 font-sans text-sm">
            <span className="w-8 h-px bg-charcoal/30" />
            <span>Margit Ecker, Inhaberin</span>
            <span className="w-8 h-px bg-charcoal/30" />
          </div>
        </div>
      </section>

      {/* ── WARUM KOSMETIKTREFF ── */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-sm tracking-[0.2em] uppercase text-charcoal/50 mb-3">
              Unsere Stärken
            </p>
            <h2 className="section-title">Warum Kosmetiktreff?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyItems.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-lavender/40 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-charcoal flex items-center justify-center">
                    <svg className="w-4 h-4 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-medium text-charcoal mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-charcoal-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GESCHENKGUTSCHEINE ── */}
      <section className="section-padding bg-gradient-to-br from-lavender/30 to-rose-soft/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-lavender/30 text-center">
            <div className="text-4xl mb-4">🎁</div>
            <h2 className="section-title mb-4">Verschenken Sie Wohlbefinden</h2>
            <p className="section-subtitle mx-auto text-center mb-8">
              Geschenkgutscheine sind das perfekte Geschenk für Geburtstage, Weihnachten 
              oder einfach mal so – weil Wohlbefinden das schönste Geschenk ist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#kontakt" className="btn-primary">
                Gutschein anfragen
              </a>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="btn-secondary">
                Wir beraten Sie gerne
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── KONTAKT & LAGE ── */}
      <section className="section-padding bg-cream" id="kontakt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-sm tracking-[0.2em] uppercase text-charcoal/50 mb-3">
              Kontakt
            </p>
            <h2 className="section-title">Wir freuen uns auf Sie</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-lavender/30">
              <h3 className="font-serif text-2xl font-medium text-charcoal mb-6">
                Nachricht senden
              </h3>

              {formStatus === "sent" ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="text-2xl mb-2">✅</div>
                  <p className="font-sans text-green-700 font-medium">
                    Vielen Dank für Ihre Nachricht!
                  </p>
                  <p className="font-sans text-sm text-green-600 mt-1">
                    Ich melde mich so schnell wie möglich bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-sans text-sm text-charcoal mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal/15 font-sans text-sm text-charcoal bg-cream/50 focus:outline-none focus:border-charcoal/40 transition-colors"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm text-charcoal mb-1">E-Mail</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal/15 font-sans text-sm text-charcoal bg-cream/50 focus:outline-none focus:border-charcoal/40 transition-colors"
                      placeholder="ihre@email.at"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm text-charcoal mb-1">Telefon (optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal/15 font-sans text-sm text-charcoal bg-cream/50 focus:outline-none focus:border-charcoal/40 transition-colors"
                      placeholder="+43 664 ..."
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm text-charcoal mb-1">Nachricht</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-charcoal/15 font-sans text-sm text-charcoal bg-cream/50 focus:outline-none focus:border-charcoal/40 transition-colors resize-none"
                      placeholder="Wie können wir Ihnen helfen?"
                    />
                  </div>
                  <button type="submit" className="w-full btn-primary mt-2">
                    Nachricht senden
                  </button>
                </form>
              )}
            </div>

            {/* Info + Map */}
            <div className="space-y-6">
              {/* Address + Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-lavender/30">
                <h3 className="font-serif text-2xl font-medium text-charcoal mb-6">
                  So finden Sie uns
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-charcoal/50 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-sans text-sm font-medium text-charcoal">{ADDRESS}</p>
                      <p className="font-sans text-xs text-charcoal/50">Vorarlberg, Österreich</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-charcoal/50 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="font-sans text-sm text-charcoal hover:underline">
                      {PHONE}
                    </a>
                  </div>
                </div>

                <h4 className="font-sans text-sm font-medium text-charcoal mb-3">Öffnungszeiten</h4>
                <div className="space-y-2">
                  {openingHours.map((item, index) => (
                    <div key={index} className="flex justify-between font-sans text-sm">
                      <span className="text-charcoal-light">{item.day}</span>
                      <span className={`font-medium ${item.day === "Sonntag" ? "text-charcoal/40" : "text-charcoal"}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-lavender/30 h-52 bg-lavender/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl mb-2">📍</div>
                  <p className="font-sans text-sm text-charcoal/60">Google Maps</p>
                  <p className="font-sans text-xs text-charcoal/40 mt-1">Bregenz, Vorarlberg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-charcoal text-cream py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl font-medium mb-2">Kosmetiktreff</h3>
              <p className="font-serif text-lg italic text-cream/70">Margit Ecker</p>
              <p className="font-sans text-sm text-cream/50 mt-2">
                Ihr Studio für Schönheit und Wohlbefinden
              </p>
            </div>

            <div>
              <h4 className="font-sans text-sm font-medium text-cream/70 mb-3 uppercase tracking-wider">
                Leistungen
              </h4>
              <ul className="space-y-2 font-sans text-sm text-cream/60">
                <li>Kosmetik Gesicht</li>
                <li>Fusspflege</li>
                <li>Nagelstudio</li>
                <li>Waxing</li>
                <li>Wimpern & Augenbrauen</li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-sm font-medium text-cream/70 mb-3 uppercase tracking-wider">
                Kontakt
              </h4>
              <ul className="space-y-2 font-sans text-sm text-cream/60">
                <li>{ADDRESS}</li>
                <li>
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-cream transition-colors">
                    {PHONE}
                  </a>
                </li>
                <li>Mo–Fr: 09:00–18:00</li>
                <li>Sa: Nach Vereinbarung</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-cream/40">
              © {new Date().getFullYear()} Kosmetiktreff Margit Ecker. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6 font-sans text-xs text-cream/40">
              <a href="#" className="hover:text-cream/70 transition-colors">Impressum</a>
              <a href="#" className="hover:text-cream/70 transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
