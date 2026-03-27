const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Calidad certificada",
    desc: "Procesos auditados y controlados en cada fase",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Entrega 24–48h",
    desc: "Red propia de distribución en todo el territorio",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Trato personal",
    desc: "Atención directa y cercana, sin intermediarios",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Innovación continua",
    desc: "Tecnología de última generación en nuestro laboratorio",
  },
];

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-bg-warm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: dark card */}
          <div className="relative">
            <div className="rounded-2xl bg-anthracite-deep p-10 md:p-12">
              {/* Gold accent line */}
              <div className="w-12 h-1 bg-gold rounded-full mb-8" />
              <p className="font-display text-2xl md:text-3xl font-bold text-text-on-dark leading-snug">
                "Desde 1990 acompañando a los profesionales de la visión y la
                audición en el País Vasco"
              </p>
              <div className="mt-8 pt-8 border-t border-border-dark">
                <p className="text-sm font-semibold text-gold">
                  Eduardo Ladrón de Guevara Portugal
                </p>
                <p className="text-xs text-text-on-dark-muted mt-1">
                  Fundador y Director General
                </p>
              </div>
            </div>
            {/* Gold corner decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl border-2 border-gold/20 -z-10" />
          </div>

          {/* Right: text + values */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
              Sobre nosotros
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-text leading-tight">
              Tradición e innovación al servicio de su negocio
            </h2>
            <p className="mt-5 text-text-muted leading-relaxed">
              Grupo Altesa nació con la misión de transformar los servicios
              ópticos y audiológicos en el País Vasco. Con sede en Irún, hemos
              construido una red de confianza con centros ópticos y
              audiológicos de toda la región.
            </p>
            <p className="mt-4 text-text-muted leading-relaxed">
              Nuestro modelo combina la cercanía del trato personal con la
              eficiencia de una estructura empresarial sólida, apoyada en
              tecnología de primer nivel.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-anthracite-deep text-gold flex items-center justify-center">
                    {v.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{v.title}</p>
                    <p className="text-xs text-text-muted mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
