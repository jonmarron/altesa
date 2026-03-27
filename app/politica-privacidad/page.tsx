import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Grupo Altesa",
  description: "Política de privacidad y tratamiento de datos personales de Grupo Altesa.",
};

export default function PoliticaPrivacidadPage() {
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
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text">Política de Privacidad</h1>
        </div>

        <div className="space-y-8">
          {[
            {
              num: "01",
              title: "Controlador de datos",
              content:
                "Altesa Óptica y Audiología, con domicilio social en Colón Ibilbidea 16, 20301 Irún (Gipuzkoa), es el responsable del tratamiento de los datos personales que usted nos facilite a través de este sitio web.",
            },
            {
              num: "02",
              title: "Datos personales recogidos",
              content:
                "Recopilamos únicamente los datos personales que usted nos facilita voluntariamente a través de los formularios de contacto del sitio web: nombre completo, dirección de correo electrónico y número de teléfono. No recopilamos datos sensibles ni información bancaria.",
            },
            {
              num: "03",
              title: "Propósito de la recolección de datos",
              content:
                "Los datos personales recogidos se utilizan exclusivamente para responder a sus consultas y solicitudes de información, gestionar la relación comercial si así lo solicita, y enviarle información sobre nuestros servicios cuando nos haya dado su consentimiento expreso para ello.",
            },
            {
              num: "04",
              title: "Base legal del tratamiento",
              content:
                "El tratamiento de sus datos se basa en su consentimiento expreso al cumplimentar y enviar los formularios de contacto, así como en el interés legítimo de gestionar nuestra relación comercial.",
            },
            {
              num: "05",
              title: "Conservación de datos",
              content:
                "Sus datos serán conservados durante el tiempo necesario para atender su solicitud y, en su caso, durante el período legalmente establecido para el cumplimiento de obligaciones legales.",
            },
            {
              num: "06",
              title: "Sus derechos",
              content:
                "Usted tiene derecho a acceder, rectificar, suprimir, limitar el tratamiento y portabilidad de sus datos personales, así como a oponerse al tratamiento. Para ejercer estos derechos puede contactarnos en administracion@altesaopticos.com.",
            },
            {
              num: "07",
              title: "Contacto",
              content: "",
              isContact: true,
            },
          ].map((section) => (
            <section key={section.num} className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="text-lg font-semibold text-text mb-5 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-anthracite-deep text-gold flex items-center justify-center text-xs font-bold shrink-0">
                  {section.num}
                </span>
                {section.title}
              </h2>
              {section.isContact ? (
                <div className="text-sm text-text-muted space-y-2">
                  <p>Para cualquier consulta relacionada con el tratamiento de sus datos personales:</p>
                  <p>
                    <span className="font-medium text-text">Email: </span>
                    <a href="mailto:administracion@altesaopticos.com" className="text-gold hover:text-gold-light transition-colors">
                      administracion@altesaopticos.com
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-text">Teléfono: </span>
                    <a href="tel:+34943020250" className="text-gold hover:text-gold-light transition-colors">
                      943 020 250
                    </a>
                  </p>
                </div>
              ) : (
                <p className="text-sm text-text-muted leading-relaxed">{section.content}</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
