import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal | Grupo Altesa",
  description: "Aviso legal y condiciones de uso del sitio web de Grupo Altesa.",
};

export default function AvisoLegalPage() {
  return (
    <div className="pt-28 pb-24 bg-bg min-h-screen">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-gold transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark block mb-2">
            Legal
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text">Aviso Legal</h1>
        </div>

        <div className="prose prose-sm max-w-none space-y-10">
          {/* Titularidad */}
          <section className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-lg font-semibold text-text mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-anthracite-deep text-gold flex items-center justify-center text-xs font-bold shrink-0">01</span>
              Titularidad
            </h2>
            <dl className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                <dt className="font-medium text-text">Empresa</dt>
                <dd className="sm:col-span-2 text-text-muted">Altesa Óptica y Audiología, N.I.F.</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                <dt className="font-medium text-text">Nombre y apellidos</dt>
                <dd className="sm:col-span-2 text-text-muted">Eduardo Ladrón de Guevara Portugal</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                <dt className="font-medium text-text">Domicilio Social</dt>
                <dd className="sm:col-span-2 text-text-muted">Colón Ibilbidea Colón, 16 · 20301 IRÚN, Gipuzkoa</dd>
              </div>
            </dl>
          </section>

          {/* Contacto */}
          <section className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-lg font-semibold text-text mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-anthracite-deep text-gold flex items-center justify-center text-xs font-bold shrink-0">02</span>
              Contacto
            </h2>
            <dl className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                <dt className="font-medium text-text">Teléfono</dt>
                <dd className="sm:col-span-2">
                  <a href="tel:+34943020250" className="text-gold hover:text-gold-light transition-colors">
                    943 020 250
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                <dt className="font-medium text-text">E-mail</dt>
                <dd className="sm:col-span-2">
                  <a href="mailto:administracion@altesaopticos.com" className="text-gold hover:text-gold-light transition-colors">
                    administracion@altesaopticos.com
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          {/* Identificación fiscal */}
          <section className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-lg font-semibold text-text mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-anthracite-deep text-gold flex items-center justify-center text-xs font-bold shrink-0">03</span>
              Número de Identificación Fiscal
            </h2>
            <p className="text-sm text-text-muted">
              Los datos de identificación fiscal se encuentran disponibles a petición del usuario.
            </p>
          </section>

          {/* Inspección */}
          <section className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-lg font-semibold text-text mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-anthracite-deep text-gold flex items-center justify-center text-xs font-bold shrink-0">04</span>
              Inspección
            </h2>
            <p className="text-sm text-text-muted">Tribunal Vasco</p>
          </section>

          {/* Condiciones de uso */}
          <section className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="text-lg font-semibold text-text mb-5 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-anthracite-deep text-gold flex items-center justify-center text-xs font-bold shrink-0">05</span>
              Condiciones de uso
            </h2>
            <div className="text-sm text-text-muted space-y-3 leading-relaxed">
              <p>
                El acceso y uso de este sitio web implica la aceptación plena y sin reservas de las presentes
                condiciones de uso. El titular se reserva el derecho de modificar, en cualquier momento, la
                presentación y configuración del sitio web, así como las presentes condiciones.
              </p>
              <p>
                El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que se ofrecen
                a través del portal y con carácter enunciativo, pero no limitativo, a no emplearlos para
                incurrir en actividades ilícitas o contrarias a la buena fe y al ordenamiento legal.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
