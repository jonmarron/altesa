export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Grupo Altesa",
    url: "https://jonmarron.github.io/altesa",
    logo: "https://jonmarron.github.io/altesa/logo-on-dark.svg",
    email: "grupoaltesa@grupoaltesa.es",
    foundingDate: "1995",
    description:
      "Grupo empresarial especializado en óptica, optometría y audiología con más de 30 años de experiencia en el País Vasco.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Colón Ibilbidea 16",
      addressLocality: "Irún",
      addressRegion: "Gipuzkoa",
      addressCountry: "ES",
    },
    sameAs: [
      "http://www.federopticosaltesa.com",
      "http://www.begiraoptika.com",
      "http://www.soyatenea.com",
    ],
    subOrganization: [
      { "@type": "Organization", name: "Altesa Óptica y Audiología", url: "http://www.federopticosaltesa.com" },
      { "@type": "Organization", name: "BEGIRA", url: "http://www.begiraoptika.com" },
      { "@type": "Organization", name: "ATENEA", url: "http://www.soyatenea.com" },
      { "@type": "Organization", name: "BBQ Consulting" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
