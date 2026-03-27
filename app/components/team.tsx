const team = [
  {
    name: "Eduardo Ladrón de Guevara",
    role: "Fundador y Director General",
    initials: "EL",
  },
  {
    name: "Departamento Comercial",
    role: "Atención al cliente y ventas",
    initials: "DC",
  },
  {
    name: "Laboratorio Óptico",
    role: "Montaje y tallado de lentes",
    initials: "LO",
  },
  {
    name: "Logística",
    role: "Distribución y entregas",
    initials: "LG",
  },
];

export function TeamSection() {
  return (
    <section id="equipo" className="py-24 md:py-32 bg-bg">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
            Nuestro equipo
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-text">
            Profesionales a su servicio
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            Un equipo experimentado y comprometido que trabaja cada día para
            ofrecer el mejor servicio a nuestros clientes y colaboradores.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl border border-border bg-surface p-8 text-center hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
            >
              <div className="mx-auto w-20 h-20 rounded-full bg-anthracite-deep flex items-center justify-center mb-5 group-hover:ring-2 group-hover:ring-gold/40 group-hover:ring-offset-2 transition-all duration-300">
                <span className="text-lg font-bold text-gold">{member.initials}</span>
              </div>
              <h3 className="text-sm font-semibold text-text">{member.name}</h3>
              <p className="mt-1 text-xs text-text-muted">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
