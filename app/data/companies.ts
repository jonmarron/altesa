export type Company = {
  initials: string;
  name: string;
  tagline: string;
  description: string;
  preview: string;
  /** Path to logo file in /public, e.g. "/empresas/altesa.svg" */
  logo?: string;
};

export const companies: Company[] = [
  {
    initials: "AO",
    name: "Altesa Óptica y Audiología",
    logo: "/empresas/altesa.svg",
    tagline: "Óptica y audiología al servicio del cliente",
    preview:
      "La empresa insignia del grupo. Con 10 establecimientos en el País Vasco, Altesa Óptica y Audiología ofrece servicios de óptica y audiología de máxima calidad al cliente final.",
    description:
      "Es la marca de la empresa de la que surge el GRUPO ALTESA. Cadena de establecimientos de óptica y audiología con amplia presencia en el País Vasco y Navarra. Cada centro cuenta con un equipo altamente cualificado de ópticos-optometristas y audiólogos que garantizan una atención personalizada y de la más alta calidad. Trabajamos con las mejores marcas del mercado en lentes oftálmicas, monturas y audífonos, y disponemos de laboratorio propio para el tallado de lentes.",
  },
  {
    initials: "BG",
    name: "BEGIRA",
    logo: "/empresas/begira.png",
    tagline: "Soluciones B2B para profesionales de la óptica",
    preview:
      "BEGIRA ofrece servicios especializados para otros profesionales del sector óptico, incluyendo distribución, formación y consultoría adaptada a las necesidades de cada negocio.",
    description:
      "BEGIRA es la empresa del grupo orientada al mercado profesional B2B. Proporciona soluciones integrales a ópticas independientes y grupos ópticos: distribución de producto, laboratorio de montaje, consultoría de gestión y programas de formación continua. Su misión es ser el socio estratégico que ayuda a otros profesionales de la óptica a crecer, mejorar su rentabilidad y adaptarse a los cambios del mercado con agilidad y confianza.",
  },
  {
    initials: "AT",
    name: "ATENEA",
    logo: "/empresas/atenea.png",
    tagline: "Optometría avanzada y soluciones clínicas",
    preview:
      "ATENEA se especializa en servicios de optometría avanzada y en el desarrollo de soluciones clínicas innovadoras para profesionales y centros de salud visual.",
    description:
      "ATENEA es el brazo clínico y de innovación del grupo. Ofrece servicios de optometría comportamental, terapia visual, adaptación de lentes de contacto especiales y asesoramiento clínico avanzado. Trabaja tanto con pacientes directamente como con otros profesionales que buscan apoyo especializado en casos complejos. Su equipo de optometristas está a la vanguardia de las últimas técnicas y tecnologías en salud visual.",
  },
  {
    initials: "BBQ",
    name: "BBQ Consulting",
    logo: "/empresas/bbq.png",
    tagline: "Consultoría para la transmisión y transformación de negocios",
    preview:
      "BBQ Consulting acompaña a empresarios en la compraventa, transformación y apertura de negocios ópticos y del sector salud, desde el primer análisis hasta la puesta en marcha.",
    description:
      "BBQ Consulting es la empresa de consultoría estratégica del grupo, especializada en la transmisión empresarial del sector óptico y de la salud. Ayudamos a empresarios a vender o comprar negocios en marcha, acompañamos en procesos de transformación empresarial y guiamos la apertura de nuevos proyectos desde el plan de negocio hasta la inauguración. Con un enfoque práctico y orientado a resultados, BBQ Consulting convierte proyectos complejos en procesos claros y exitosos.",
  },
];
