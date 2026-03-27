"use client";

import Image from "next/image";
import { useState } from "react";
import { books, authors } from "@/app/data/books";

function AuthorCard({ author }: { author: (typeof authors)[number] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-full bg-anthracite-deep text-gold flex items-center justify-center font-bold text-xs shrink-0">
          {author.initials}
        </div>
        <p className="font-semibold text-text">{author.name}</p>
      </div>

      <p className="text-sm text-text-muted leading-relaxed flex-1">
        {expanded ? author.bio : author.preview}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-gold-dark hover:text-gold transition-colors self-start"
      >
        {expanded ? "Leer menos" : "Leer más"}
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}

export function LibrosSection() {
  return (
    <section id="libros" className="py-24 md:py-32 bg-bg-warm">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
            Libros
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-text leading-tight">
            Conocimiento al servicio del sector
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            Grupo Altesa promueve la formación y el conocimiento en el sector óptico.
            Dos libros escritos por Eduardo Ladrón de Guevara que son ya referencia
            para profesionales en toda España.
          </p>
        </div>

        {/* Books */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {books.map((book) => (
            <div
              key={book.title}
              className="group flex gap-6 rounded-2xl border border-border bg-surface p-8 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-300"
            >
              {/* Book cover */}
              <div className="shrink-0">
                <Image
                  src={book.cover}
                  alt={book.title}
                  width={80}
                  height={112}
                  className="w-20 h-28 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h3 className="font-display text-lg font-bold text-text leading-snug group-hover:text-anthracite transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-gold-dark font-medium mt-1">{book.author}</p>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">
                  {book.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Authors */}
        <div className="mt-16">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-dark mb-8">
            Los Autores
          </h3>
          <div className="rounded-2xl border border-border bg-surface p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              {authors.map((author) => (
                <AuthorCard key={author.name} author={author} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
