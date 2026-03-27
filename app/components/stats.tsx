const stats = [
  { value: "30+", label: "Años de experiencia" },
  { value: "500+", label: "Clientes profesionales" },
  { value: "24h", label: "Tiempo de entrega" },
  { value: "100%", label: "Compromiso de calidad" },
];

export function StatsSection() {
  return (
    <section className="relative py-20 bg-anthracite overflow-hidden">
      {/* Gold line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      {/* Gold line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center relative">
              {/* Divider between items */}
              {i > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-border-dark hidden lg:block" />
              )}
              <p className="font-display text-4xl md:text-5xl font-bold text-gold">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-text-on-dark-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
