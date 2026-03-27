"use client";

import { useState } from "react";
import { contactInfo } from "@/app/data/contact";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto web — ${formData.name}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\nMensaje:\n${formData.message}`
    );
    window.location.href = `mailto:grupoaltesa@grupoaltesa.es?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contacto" className="py-24 md:py-32 bg-bg-warm">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
              Contacto
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-text leading-tight">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="mt-4 text-text-muted leading-relaxed">
              Estamos aquí para ayudarle. Contacte con nosotros y le
              responderemos lo antes posible.
            </p>

            <div className="mt-10 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-anthracite-deep text-gold flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-text-muted hover:text-gold-dark transition-colors whitespace-pre-line"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-text-muted whitespace-pre-line">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl bg-surface border border-border shadow-sm p-8 md:p-10">
            <h3 className="text-lg font-semibold text-text mb-6">
              Envíenos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-text-muted mb-1.5 uppercase tracking-wide">
                  Nombre completo
                </label>
                <input
                  type="text" id="name" required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-text-light focus:border-gold/60 focus:ring-1 focus:ring-gold/40 outline-none transition-all"
                  placeholder="Su nombre"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-text-muted mb-1.5 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email" id="email" required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-text-light focus:border-gold/60 focus:ring-1 focus:ring-gold/40 outline-none transition-all"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-text-muted mb-1.5 uppercase tracking-wide">
                    Teléfono
                  </label>
                  <input
                    type="tel" id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-text-light focus:border-gold/60 focus:ring-1 focus:ring-gold/40 outline-none transition-all"
                    placeholder="943 000 000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-text-muted mb-1.5 uppercase tracking-wide">
                  Mensaje
                </label>
                <textarea
                  id="message" required rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text placeholder:text-text-light focus:border-gold/60 focus:ring-1 focus:ring-gold/40 outline-none transition-all resize-none"
                  placeholder="¿En qué podemos ayudarle?"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-anthracite-deep hover:bg-gold-light transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
