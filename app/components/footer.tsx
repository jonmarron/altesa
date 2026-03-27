import Image from "next/image";
import Link from "next/link";
import { footerNavLinks } from "@/app/data/navigation";
import { companies } from "@/app/data/companies";

export function Footer() {
  return (
    <footer className="bg-anthracite-deep text-text-on-dark">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/logo-on-dark.svg"
              alt="Altesa Óptica y Audiología"
              width={160}
              height={40}
              className="h-9 w-auto mb-5"
            />
            <p className="text-sm text-text-on-dark-muted leading-relaxed">
              Grupo empresarial especializado en óptica, optometría y audiología.
              Más de 30 años al servicio de profesionales y clientes en el País Vasco.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Navegación
            </h3>
            <ul className="space-y-3">
              {footerNavLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-text-on-dark-muted hover:text-gold transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresas */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Nuestras Empresas
            </h3>
            <ul className="space-y-3">
              {companies.map((company) => (
                <li key={company.name}>
                  <span className="text-sm text-text-on-dark-muted">{company.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Contacto
            </h3>
            <ul className="space-y-4 text-sm text-text-on-dark-muted">
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 shrink-0 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:grupoaltesa@grupoaltesa.es" className="hover:text-gold transition-colors">
                  grupoaltesa@grupoaltesa.es
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-dark flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-on-dark-muted">
            &copy; {new Date().getFullYear()} Grupo Altesa. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/politica-privacidad" className="text-xs text-text-on-dark-muted hover:text-gold transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/aviso-legal" className="text-xs text-text-on-dark-muted hover:text-gold transition-colors">
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
