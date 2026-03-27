import { HeroSection } from "./components/hero";
import { QuienesSomosSection } from "./components/quienes-somos";
import { EmpresasSection } from "./components/empresas";
import { LibrosSection } from "./components/libros";
import { CompromisoSection } from "./components/compromiso";
import { ContactSection } from "./components/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuienesSomosSection />
      <EmpresasSection />
      <LibrosSection />
      <CompromisoSection />
      <ContactSection />
    </>
  );
}
