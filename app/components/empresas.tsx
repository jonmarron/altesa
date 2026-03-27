"use client";

import Image from "next/image";
import { useState } from "react";
import { type Company, companies } from "@/app/data/companies";

function CompanyCard({ company }: { company: Company }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-surface p-8 flex flex-col transition-all duration-300 hover:shadow-xl hover:border-gold/30 hover:shadow-gold/5 group h-full">
      {/* Logo — top of card */}
      <div className="h-14 mb-6 flex items-center shrink-0">
        {company.logo ? (
          <Image
            src={company.logo}
            alt={company.name}
            width={160}
            height={56}
            className="h-14 w-auto object-contain object-left"
          />
        ) : (
          <div className="w-14 h-14 rounded-xl bg-anthracite-deep text-gold flex items-center justify-center font-bold text-sm">
            {company.initials}
          </div>
        )}
      </div>

      {/* Name + tagline */}
      <h3 className="font-semibold text-base text-text">{company.name}</h3>
      <p className="text-xs mt-1 text-gold-dark">
        {company.tagline}
      </p>

      {/* Description — grows to fill available space */}
      <p className="mt-4 text-sm leading-relaxed text-text-muted flex-1">
        {expanded ? company.description : company.preview}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-gold-dark hover:text-gold transition-colors"
        >
          {expanded ? "Leer menos" : "Leer más"}
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {company.url && (
          <a
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 flex items-center justify-center rounded-full border border-border text-text-muted hover:border-gold hover:text-gold transition-colors"
            aria-label={`Visitar ${company.name}`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export function EmpresasSection() {
  return (
    <section id="empresas" className="py-24 md:py-32 bg-bg">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
            Nuestras Empresas
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-text leading-tight">
            Un grupo, cuatro empresas
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            El Grupo Altesa aglutina empresas que ofrecen servicios al cliente final
            y a otros profesionales, cubriendo toda la cadena de valor del sector óptico
            y audiológico.
          </p>
        </div>

        {/* Four cards in a single horizontal row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {companies.map((company) => (
            <CompanyCard key={company.name} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
