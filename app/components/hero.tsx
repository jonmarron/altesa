import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-anthracite-deep overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      {/* Overlay — darkens the photo so text stays readable */}
      <div className="absolute inset-0 bg-anthracite-deep/80" />
      {/* Subtle gold glow to tie image into brand palette */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gold/6 rounded-full blur-3xl pointer-events-none" />
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 md:pt-40 md:pb-32 w-full">
        <div className="max-w-2xl">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/25 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Desde 1995 · Irún, Gipuzkoa
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-text-on-dark leading-[1.05] tracking-tight">
              Visión y{" "}
              <span className="text-gold">audición</span>
              <br />
              en buenas manos
            </h1>

            <p className="mt-6 text-lg text-text-on-dark-muted leading-relaxed max-w-lg">
              Grupo Altesa es un grupo empresarial que nace en 1995 para dar servicios
              y soluciones profesionales de óptica, optometría y audiología, así como
              servicios profesionales B2B a diferentes sectores, a través de soluciones
              tecnológicas.
            </p>

            <p className="mt-4 text-base text-text-on-dark-muted/70 leading-relaxed max-w-lg">
              Nuestro origen nace en el sector de la óptica, optometría y audiología.
              En la actualidad el Grupo Altesa consta de diez establecimientos de óptica
              y audiología y 4 empresas.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#quienes-somos"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-anthracite-deep hover:bg-gold-light transition-all duration-300"
              >
                Quiénes somos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="mailto:grupoaltesa@grupoaltesa.es"
                className="inline-flex items-center justify-center rounded-full border border-text-on-dark-muted/30 px-8 py-3.5 text-base font-medium text-text-on-dark hover:border-gold/50 hover:text-gold transition-all duration-300"
              >
                Contactar
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
