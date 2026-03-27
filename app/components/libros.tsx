import { books } from "@/app/data/books";

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
              {/* Book spine / cover */}
              <div className="shrink-0">
                <div className="w-20 h-28 rounded-lg bg-anthracite-deep flex flex-col items-center justify-between p-3 relative overflow-hidden">
                  {/* Spine accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
                  <span className="text-xs font-bold text-gold/60 self-end">{book.number}</span>
                  <div className="w-full">
                    <div className="h-px bg-gold/30 mb-1" />
                    <div className="h-px bg-gold/20" />
                  </div>
                </div>
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
      </div>
    </section>
  );
}
