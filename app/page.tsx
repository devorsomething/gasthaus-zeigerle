"use client";

import { useState } from "react";

const menuItems = {
  vorspeisen: [
    { name: "Brettljause", price: "€9,50", desc: "Hausgemachter Speck, Bergkäse, Wurst & Bauernbrot" },
    { name: "Liptauer Brotzeit", price: "€8,00", desc: "Liptauer Aufstrich, Radi, Gurken & Bauernbrot" },
    { name: "Suppe vom Tag", price: "€5,50", desc: "Täglich frisch zubereitet, von der Karte" },
  ],
  hauptspeisen: [
    { name: "Wiener Schnitzel", price: "€16,90", desc: "Kalbfleisch, goldgelb frittiert, mit Preiselbeeren & Salat" },
    { name: "Kässpätzle", price: "€13,90", desc: "Frische Spätzle, Bergkäse, Röstzwiebeln & Salat" },
    { name: "Rösti mit Spiegelei", price: "€11,90", desc: "Goldbraun geröstet, mit Kräuterbutter & Salat" },
    { name: "Schweinsbraten", price: "€15,50", desc: "Knusprige Kruste, Semmelklos & Sauerkraut" },
    { name: "Pfänder Geschnetzeltes", price: "€14,90", desc: "Nachhause-Art mit Nockerln & Salat" },
    { name: "Ofenküchle", price: "€12,50", desc: "Kartoffelteig, Speck, Zwiebeln & Salat" },
  ],
  dessert: [
    { name: "Apfelstrudel", price: "€6,50", desc: "Mit Vanillesauce & Schlagobers" },
    { name: "Topfenpalatschinken", price: "€6,00", desc: "Mit Preiselbeeren & Schlagobers" },
    { name: "Mohnnudeln", price: "€5,50", desc: "Mit Butter & Zucker" },
  ],
  getraenke: [
    { name: "Hausbier vom Fass", price: "€3,80", desc: "Frisch gezapft, 0,3L" },
    { name: "Almbacher / Lager", price: "€4,20", desc: "0,33L Flasche" },
    { name: "Hauswein rot/weiß", price: "€4,50", desc: "0,25L — vom Vorarlberger Winzer" },
    { name: "Softdrinks", price: "€3,50", desc: "Coca-Cola, Fanta, Sprite, Soda-Zitrone" },
  ],
};

const reviews = [
  {
    name: "Maria K.",
    rating: 5,
    text: "Das beste Schnitzel in ganz Bregenz! Wir kommen seit Jahren her und werden jedes Mal aufs Neue begeistert. Die Atmosphäre ist einfach wunderbar.",
    source: "TripAdvisor",
  },
  {
    name: "Thomas W.",
    rating: 5,
    text: "Ein echtes Traditionswirtshaus mit Herz und Seele. Die Kässpätzle sind ein Traum und der Service ist erstklassig. Absolut empfehlenswert!",
    source: "Google",
  },
  {
    name: "Stefanie B.",
    rating: 4,
    text: "Gemütliche Stuben, freundliches Personal und ausgezeichnetes Essen. Der Schweinsbraten war perfekt — knusprig und zart zugleich. Wir kommen wieder!",
    source: "TripAdvisor",
  },
  {
    name: "Hermann G.",
    rating: 5,
    text: "Wie es ein echtes österreichisches Wirtshaus braucht. Kein Schnickschnack, nur gutes Essen und eine tolle Atmosphäre. Mein Lieblingslokal in Bregenz.",
    source: "Google",
  },
];

const hours = [
  { day: "Montag", hours: "11:30 – 14:00 & 18:00 – 22:00" },
  { day: "Dienstag", hours: "11:30 – 14:00 & 18:00 – 22:00" },
  { day: "Mittwoch", hours: "11:30 – 14:00 & 18:00 – 22:00" },
  { day: "Donnerstag", hours: "11:30 – 14:00 & 18:00 – 22:00" },
  { day: "Freitag", hours: "11:30 – 14:00 & 18:00 – 23:00" },
  { day: "Samstag", hours: "11:30 – 14:00 & 18:00 – 23:00" },
  { day: "Sonntag", hours: "11:30 – 15:00 (Küche bis 14:30)" },
];

export default function HomePage() {
  const [eventForm, setEventForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    guests: "",
    date: "",
    message: "",
  });

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Vielen Dank für Ihre Anfrage! Wir melden uns in Kürze bei Ihnen telefonisch oder per E-Mail."
    );
    setEventForm({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      guests: "",
      date: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        <div className="absolute inset-0 bg-tavern-pattern" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-wheat font-medium tracking-widest uppercase mb-4 text-sm">
            Bregenz · Vorarlberg · Seit Generationen
          </p>
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-cream mb-6 leading-tight">
            Gasthaus Zeigerle
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-cream/90 italic mb-10">
            Tradition seit Generationen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#speisekarte"
              className="btn-primary text-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Speisekarte
            </a>
            <a
              href="#kontakt"
              className="btn-secondary text-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Reservieren
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-cream/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="info-strip py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-wheat"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Belruptstraße 46, 6900 Bregenz</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-wheat"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+43 5574 42XXX</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-wheat"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>Nahe Pfänderbahn</span>
            </div>
            <div className="flex items-center gap-2 bg-charcoal/20 px-4 py-2 rounded-sm">
              <svg
                className="w-5 h-5 text-wheat"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="font-semibold">4.3 ★ — 38 Bewertungen</span>
            </div>
          </div>
        </div>
      </section>

      {/* WILLKOMMEN SECTION */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-wheat font-medium tracking-widest uppercase mb-4 text-sm">
                Willkommen
              </p>
              <h2 className="section-title mb-6">
                Ein Wirtshaus mit Seele
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  Seit Generationen empfängt das Gasthaus Zeigerle Gäste aus
                  Bregenz und der ganzen Welt. Unter der bewährten Führung von
                  <strong className="text-charcoal"> Diethelm Simma</strong>{" "}
                  hat das Haus seine Tradition bewahrt und gleichzeitig
                  modernize Eleganz entwickelt.
                </p>
                <p>
                  Unsere Küche folgt den Rezepten, die über Jahrzehnte
                  verfeinert wurden — ehrliche, herzhafte österreichische
                  Hausmannskost aus besten Zutaten der Region. Jedes Schnitzel
                  wird frisch paniert, jede Portion Kässpätzle mit echter Liebe
                  zubereitet.
                </p>
                <p>
                  Ob in unseren gemütlichen Stuben im Inneren oder im schattigen
                  Gastgarten im Sommer — hier erleben Sie echte{" "}
                  <em className="text-forest-green">Gemütlichkeit</em>{" "}
                  österreichischer Prägung.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-sm shadow-sm">
                  <div className="w-10 h-10 bg-forest-green/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-forest-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-charcoal-light uppercase tracking-wide">
                      Gegründet
                    </p>
                    <p className="font-semibold text-charcoal">
                      Vor über 50 Jahren
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-sm shadow-sm">
                  <div className="w-10 h-10 bg-forest-green/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-forest-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-charcoal-light uppercase tracking-wide">
                      Bewertung
                    </p>
                    <p className="font-semibold text-charcoal">4.3 ★ Google</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80"
                alt="Gemütliche Wirtshaus-Stube"
                className="w-full h-64 object-cover rounded-sm shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80"
                alt="Traditionelles österreichisches Essen"
                className="w-full h-64 object-cover rounded-sm shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SPEISEKARTE SECTION */}
      <section id="speisekarte" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-wheat font-medium tracking-widest uppercase mb-4 text-sm">
              Unsere Küche
            </p>
            <h2 className="section-title">Speisekarte</h2>
            <p className="section-subtitle mx-auto mt-4">
              Traditionelle österreichische Hausmannskost — frisch zubereitet
              mit besten Zutaten aus der Region Vorarlberg
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Featured Dish 1 */}
            <div className="menu-card text-center">
              <div className="relative mb-4">
                <img
                  src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80"
                  alt="Wiener Schnitzel"
                  className="w-full h-48 object-cover rounded-sm"
                />
                <div className="absolute top-3 right-3 bg-wheat text-charcoal font-bold px-3 py-1 rounded-sm text-sm">
                  €16,90
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                Wiener Schnitzel
              </h3>
              <p className="text-charcoal-light text-sm">
                Kalbfleisch, goldgelb frittiert, mit Preiselbeeren & Salat
              </p>
            </div>

            {/* Featured Dish 2 */}
            <div className="menu-card text-center">
              <div className="relative mb-4">
                <img
                  src="https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&q=80"
                  alt="Kässpätzle"
                  className="w-full h-48 object-cover rounded-sm"
                />
                <div className="absolute top-3 right-3 bg-wheat text-charcoal font-bold px-3 py-1 rounded-sm text-sm">
                  €13,90
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                Kässpätzle
              </h3>
              <p className="text-charcoal-light text-sm">
                Frische Spätzle, Bergkäse, Röstzwiebeln & Salat
              </p>
            </div>

            {/* Featured Dish 3 */}
            <div className="menu-card text-center">
              <div className="relative mb-4">
                <img
                  src="https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400&q=80"
                  alt="Rösti"
                  className="w-full h-48 object-cover rounded-sm"
                />
                <div className="absolute top-3 right-3 bg-wheat text-charcoal font-bold px-3 py-1 rounded-sm text-sm">
                  €11,90
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                Rösti mit Spiegelei
              </h3>
              <p className="text-charcoal-light text-sm">
                Goldbraun geröstet, mit Kräuterbutter & Salat
              </p>
            </div>

            {/* Featured Dish 4 */}
            <div className="menu-card text-center">
              <div className="relative mb-4">
                <img
                  src="https://images.unsplash.com/photo-1575900747653-e9b3ba2c5b9a?w=400&q=80"
                  alt="Ofenküchle"
                  className="w-full h-48 object-cover rounded-sm"
                />
                <div className="absolute top-3 right-3 bg-wheat text-charcoal font-bold px-3 py-1 rounded-sm text-sm">
                  €12,50
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                Ofenküchle
              </h3>
              <p className="text-charcoal-light text-sm">
                Kartoffelteig, Speck, Zwiebeln & Salat
              </p>
            </div>
          </div>

          {/* Full Menu */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-cream-dark/30 pt-16">
            {/* Vorspeisen */}
            <div>
              <h3 className="font-serif text-xl font-bold text-forest-green mb-6 pb-2 border-b-2 border-wheat">
                Vorspeisen
              </h3>
              <div className="space-y-4">
                {menuItems.vorspeisen.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-semibold text-charcoal">{item.name}</h4>
                      <span className="text-wheat-dark font-bold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-charcoal-light text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hauptspeisen */}
            <div>
              <h3 className="font-serif text-xl font-bold text-forest-green mb-6 pb-2 border-b-2 border-wheat">
                Hauptspeisen
              </h3>
              <div className="space-y-4">
                {menuItems.hauptspeisen.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-semibold text-charcoal">{item.name}</h4>
                      <span className="text-wheat-dark font-bold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-charcoal-light text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dessert */}
            <div>
              <h3 className="font-serif text-xl font-bold text-forest-green mb-6 pb-2 border-b-2 border-wheat">
                Dessert
              </h3>
              <div className="space-y-4">
                {menuItems.dessert.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-semibold text-charcoal">{item.name}</h4>
                      <span className="text-wheat-dark font-bold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-charcoal-light text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Getränke */}
            <div>
              <h3 className="font-serif text-xl font-bold text-forest-green mb-6 pb-2 border-b-2 border-wheat">
                Getränke
              </h3>
              <div className="space-y-4">
                {menuItems.getraenke.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-semibold text-charcoal">{item.name}</h4>
                      <span className="text-wheat-dark font-bold whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-charcoal-light text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AMBIANCE SECTION */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-wheat font-medium tracking-widest uppercase mb-4 text-sm">
              Atmosphäre
            </p>
            <h2 className="section-title">Unsere Räumlichkeiten</h2>
            <p className="section-subtitle mx-auto mt-4">
              Ob drinnen in unseren gemütlichen Stuben oder draußen im
              Gastgarten — bei uns fühlen Sie sich wie zu Hause
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&q=80"
                alt="Gemütliche Wirtshaus-Stube"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-serif text-2xl font-bold text-cream mb-2">
                  Die Stuben
                </h3>
                <p className="text-cream/80 text-sm">
                  Drei gemütliche Stuben für 20–60 Personen
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&q=80"
                alt="Gastgarten im Sommer"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-serif text-2xl font-bold text-cream mb-2">
                  Gastgarten
                </h3>
                <p className="text-cream/80 text-sm">
                  Im Sommer unter Kastanien sitzen
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&q=80"
                alt="Die Theke"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-serif text-2xl font-bold text-cream mb-2">
                  Die Theke
                </h3>
                <p className="text-cream/80 text-sm">
                  Gemütlich einen trinken
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-wheat font-medium tracking-widest uppercase mb-4 text-sm">
                Feiern & Events
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
                Für Ihre Feiern
              </h2>
              <p className="text-cream/70 text-lg leading-relaxed mb-8">
                Ob Geburtstag, Firmenfeier, Weihnachtsessen oder ein Treffen mit
                Freunden — wir schaffen den perfekten Rahmen für Ihre
                Veranstaltung. Unsere geschlossenen Gesellschaften bieten Platz
                für 20 bis 80 Personen.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-wheat/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-wheat"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-cream">Geburtstage</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-wheat/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-wheat"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-cream">Firmenfeiern</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-wheat/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-wheat"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-cream">Weihnachtsfeiern</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-wheat/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-wheat"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-cream">Taufe & Kommunion</span>
                </div>
              </div>
              <p className="text-cream/60 text-sm">
                Rufen Sie uns an:{" "}
                <strong className="text-wheat">+43 5574 42XXX</strong>
              </p>
            </div>

            {/* Event Form */}
            <div className="bg-forest-green/20 border border-cream/10 rounded-sm p-8">
              <h3 className="font-serif text-2xl font-bold text-cream mb-6">
                Anfrage senden
              </h3>
              <form onSubmit={handleEventSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cream/80 text-sm mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={eventForm.name}
                      onChange={(e) =>
                        setEventForm({ ...eventForm, name: e.target.value })
                      }
                      className="w-full bg-charcoal/50 border border-cream/20 text-cream px-4 py-3 rounded-sm focus:outline-none focus:border-wheat transition-colors"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label className="block text-cream/80 text-sm mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={eventForm.email}
                      onChange={(e) =>
                        setEventForm({ ...eventForm, email: e.target.value })
                      }
                      className="w-full bg-charcoal/50 border border-cream/20 text-cream px-4 py-3 rounded-sm focus:outline-none focus:border-wheat transition-colors"
                      placeholder="ihre@email.at"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cream/80 text-sm mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={eventForm.phone}
                      onChange={(e) =>
                        setEventForm({ ...eventForm, phone: e.target.value })
                      }
                      className="w-full bg-charcoal/50 border border-cream/20 text-cream px-4 py-3 rounded-sm focus:outline-none focus:border-wheat transition-colors"
                      placeholder="+43 6XX..."
                    />
                  </div>
                  <div>
                    <label className="block text-cream/80 text-sm mb-2">
                      Gästeanzahl
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={eventForm.guests}
                      onChange={(e) =>
                        setEventForm({ ...eventForm, guests: e.target.value })
                      }
                      className="w-full bg-charcoal/50 border border-cream/20 text-cream px-4 py-3 rounded-sm focus:outline-none focus:border-wheat transition-colors"
                      placeholder="z.B. 25"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cream/80 text-sm mb-2">
                      Art der Feier
                    </label>
                    <select
                      value={eventForm.eventType}
                      onChange={(e) =>
                        setEventForm({ ...eventForm, eventType: e.target.value })
                      }
                      className="w-full bg-charcoal/50 border border-cream/20 text-cream px-4 py-3 rounded-sm focus:outline-none focus:border-wheat transition-colors"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="geburtstag">Geburtstag</option>
                      <option value="firma">Firmenfeier</option>
                      <option value="weihnachten">Weihnachtsfeier</option>
                      <option value="hochzeit">Hochzeit</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-cream/80 text-sm mb-2">
                      Wunschtermin
                    </label>
                    <input
                      type="text"
                      value={eventForm.date}
                      onChange={(e) =>
                        setEventForm({ ...eventForm, date: e.target.value })
                      }
                      className="w-full bg-charcoal/50 border border-cream/20 text-cream px-4 py-3 rounded-sm focus:outline-none focus:border-wheat transition-colors"
                      placeholder="z.B. 15. Dezember 2026"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-cream/80 text-sm mb-2">
                    Nachricht
                  </label>
                  <textarea
                    rows={3}
                    value={eventForm.message}
                    onChange={(e) =>
                      setEventForm({ ...eventForm, message: e.target.value })
                    }
                    className="w-full bg-charcoal/50 border border-cream/20 text-cream px-4 py-3 rounded-sm focus:outline-none focus:border-wheat transition-colors resize-none"
                    placeholder="Ihre Wünsche oder Fragen..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary justify-center"
                >
                  Anfrage senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-wheat font-medium tracking-widest uppercase mb-4 text-sm">
              Das sagen unsere Gäste
            </p>
            <h2 className="section-title">Bewertungen</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${
                    i < 4 ? "text-wheat" : "text-cream-dark"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <span className="text-charcoal-light ml-2">4.3 von 5</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="review-card">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className={`w-4 h-4 ${
                        j < review.rating ? "text-wheat" : "text-cream-dark"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-charcoal italic mb-4">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-charcoal">{review.name}</p>
                  <span className="text-xs text-charcoal-light bg-cream-dark px-2 py-1 rounded">
                    {review.source}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & KONTAKT SECTION */}
      <section id="kontakt" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-wheat font-medium tracking-widest uppercase mb-4 text-sm">
              Besuchen Sie uns
            </p>
            <h2 className="section-title">Kontakt & Öffnungszeiten</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Opening Hours */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-6 pb-2 border-b-2 border-wheat">
                Öffnungszeiten
              </h3>
              <div className="space-y-3">
                {hours.map((h, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2 border-b border-cream-dark/20"
                  >
                    <span className="font-medium text-charcoal">{h.day}</span>
                    <span className="text-charcoal-light">{h.hours}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-charcoal-light text-sm">
                <strong>Küchenschluss:</strong> 30 Minuten vor Ende der
                Öffnungszeiten
              </p>
              <p className="mt-2 text-charcoal-light text-sm">
                <strong>Ruhetag:</strong> Keiner — wir haben jeden Tag für Sie
                geöffnet!
              </p>
            </div>

            {/* Contact Info & Map */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-6 pb-2 border-b-2 border-wheat">
                Kontakt
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-forest-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-forest-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Adresse</p>
                    <p className="text-charcoal-light">
                      Belruptstraße 46
                      <br />
                      6900 Bregenz, Österreich
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-forest-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-forest-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Telefon</p>
                    <p className="text-charcoal-light">+43 5574 42XXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-forest-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-forest-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">E-Mail</p>
                    <p className="text-charcoal-light">info@zeigerle.at</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-forest-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-forest-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Lage</p>
                    <p className="text-charcoal-light">
                      Nur 5 Minuten von der Pfänderbahn entfernt — ideal für
                      Wanderer und Ausflügler
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-sm overflow-hidden shadow-lg h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.123456789!2d9.747777!3d47.516667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDMxJzAwLjAiTiA5wrA0NSc1MC4wIkU!5e0!3m2!1sde!2sat!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gasthaus Zeigerle auf Google Maps"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-3xl font-bold text-cream mb-2">
                Gasthaus Zeigerle
              </h3>
              <p className="text-cream/60">
                Traditionsgasthaus in Bregenz, Vorarlberg
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-cream/60 text-sm">
              <div>
                <p className="font-semibold text-cream mb-1">Adresse</p>
                <p>Belruptstraße 46</p>
                <p>6900 Bregenz</p>
              </div>
              <div>
                <p className="font-semibold text-cream mb-1">Kontakt</p>
                <p>+43 5574 42XXX</p>
                <p>info@zeigerle.at</p>
              </div>
              <div>
                <p className="font-semibold text-cream mb-1">Geöffnet</p>
                <p>Mo–So 11:30–22:00</p>
                <p>Fr–Sa bis 23:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-cream/10 mt-8 pt-8 text-center text-cream/40 text-sm">
            <p>
              © {new Date().getFullYear()} Gasthaus Zeigerle. Alle Rechte
              vorbehalten.
            </p>
            <p className="mt-2">
              <span className="text-wheat">€€</span> Preisniveau · Tradition
              seit Generationen · Bregenz, Vorarlberg
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
