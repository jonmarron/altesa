import { valores } from "@/app/data/compromiso";

export function CompromisoSection() {
  return (
    <section id="compromiso" className="py-24 md:py-32 bg-bg-warm">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
            Nuestro Compromiso
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-text leading-tight">
            Expertos altamente cualificados, siempre a su lado
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            Nuestros expertos altamente cualificados completan cualquier tarea de forma
            rápida y fiable. Nuestro equipo está disponible para nuestros clientes porque
            ellos son nuestra prioridad.
          </p>
        </div>

        {/* Visión + Misión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-2xl border border-border bg-surface shadow-sm p-8">
            <div className="w-10 h-10 rounded-lg bg-anthracite-deep text-gold flex items-center justify-center mb-5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text mb-3">Visión</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              En Grupo Altesa, trabajamos para ayudar a clientes y profesionales del
              sector de la óptica y audiología a llevar sus negocios más avanzados y
              exitosos, impulsados por la tecnología y el talento.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface shadow-sm p-8">
            <div className="w-10 h-10 rounded-lg bg-anthracite-deep text-gold flex items-center justify-center mb-5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-text mb-3">Misión</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Nuestra misión es estar a vuestro lado en todas las tareas de vuestro
              negocio. Ofrecemos soluciones tecnológicas integradas que nos permiten
              acompañar a clientes y profesionales con agilidad, calidad y cercanía,
              disponibles siempre que se nos necesite.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-dark mb-8">
            Valores
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {valores.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-border bg-surface p-6 hover:border-gold/50 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-anthracite-deep text-gold flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h4 className="text-sm font-semibold text-text">{v.title}</h4>
                <p className="mt-2 text-xs text-text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
