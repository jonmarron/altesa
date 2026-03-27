import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios | Grupo Altesa",
  description: "Distribución óptica, montaje de lentes, audiología, consultoría y logística integral.",
};

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Distribución Óptica",
    description: "Distribuidores oficiales de las principales marcas del sector óptico. Catálogo completo de lentes, monturas y accesorios.",
    features: [
      "Más de 10.000 referencias en catálogo",
      "Marcas líderes del mercado",
      "Stock permanente para entregas inmediatas",
      "Condiciones especiales para profesionales",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Montaje de Lentes",
    description: "Laboratorio propio con tecnología digital de última generación para el tallado y montaje con precisión milimétrica.",
    features: [
      "Laboratorio propio con tecnología digital",
      "Tallado de lentes progresivas de alta gama",
      "Montaje al aire, ranurado y convencional",
      "Control de calidad en cada unidad",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "Audiología",
    description: "Soluciones audiológicas completas: diagnóstico, adaptación de audífonos y seguimiento personalizado.",
    features: [
      "Diagnóstico audiológico profesional",
      "Adaptación de audífonos de primeras marcas",
      "Seguimiento y ajuste continuo",
      "Accesorios y consumibles audiológicos",
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Consultoría",
    description: "Asesoramiento especializado para la gestión y optimización de ópticas y centros audiológicos.",
    features: [
      "Asesoramiento en gestión de negocio",
      "Estrategias comerciales personalizadas",
      "Análisis de mercado y tendencias",
      "Soporte técnico continuo",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-anthracite-deep">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">Servicios</span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-text-on-dark">
            Nuestros servicios
          </h1>
          <p className="mt-4 text-lg text-text-on-dark-muted max-w-2xl">
            Soluciones integrales para profesionales de la óptica y audiología
          </p>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="mx-auto max-w-7xl px-6 space-y-24">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-anthracite-deep text-gold mb-6">
                  {service.icon}
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-text">
                  {service.title}
                </h2>
                <p className="mt-4 text-text-muted leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 shrink-0 rounded-full bg-gold/10 flex items-center justify-center">
                        <svg className="w-3 h-3 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-text-muted">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="aspect-[4/3] rounded-2xl bg-bg-warm border border-border flex items-center justify-center">
                  <div className="text-anthracite/10 scale-[3]">{service.icon}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-anthracite-deep">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">¿Hablamos?</p>
          <h2 className="font-display text-3xl font-bold text-text-on-dark">
            ¿Necesita más información?
          </h2>
          <p className="mt-4 text-text-on-dark-muted">
            Contáctenos y le asesoraremos sin compromiso.
          </p>
          <Link
            href="/#contacto"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-base font-semibold text-anthracite-deep hover:bg-gold-light transition-all duration-300"
          >
            Contactar ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
