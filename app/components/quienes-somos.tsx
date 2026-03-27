"use client";

import Image from "next/image";
import { useState } from "react";
import { eduardoBio, bioPreview, quienesSomosStats as stats } from "@/app/data/quienes-somos";

export function QuienesSomosSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="quienes-somos" className="py-24 md:py-32 bg-bg-warm">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
            Quiénes somos
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-text leading-tight">
            Profesionales altamente cualificados y motivados
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            Nuestro objetivo es ofrecer un cuidado único al cliente para garantizar
            que todos nuestros clientes estén 100% satisfechos.
          </p>
        </div>

        {/* Eduardo bio card */}
        <div className="rounded-2xl bg-surface border border-border shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Bio */}
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <div className="w-12 h-1 bg-gold rounded-full mb-8" />

              <div className="mb-6">
                <p className="font-semibold text-text text-lg">
                  Eduardo Ladrón de Guevara Portugal
                </p>
                <p className="text-xs text-gold-dark mt-0.5">
                  Fundador y Director General · Óptico-Optometrista y Audiólogo
                </p>
              </div>

              <p className="text-text-muted leading-relaxed text-sm">
                {expanded ? eduardoBio : bioPreview}
              </p>

              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark hover:text-gold transition-colors self-start"
              >
                {expanded ? "Leer menos" : "Leer más"}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Photo */}
            <div className="relative min-h-80 lg:min-h-full">
              <Image
                src="/eduardo.png"
                alt="Eduardo Ladrón de Guevara Portugal"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats band */}
      <div className="mt-20 mx-auto max-w-7xl px-6">
        <div className="rounded-2xl bg-surface border border-border px-6 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {stats.map((s, i) => (
              <div key={s.label} className="relative">
                {i > 0 && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-border hidden lg:block" />
                )}
                <p className="font-display text-4xl md:text-5xl font-bold text-gold">{s.value}</p>
                <p className="mt-2 text-sm text-text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
