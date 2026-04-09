import type { ReactNode } from "react";

import type { Locale } from "../../i18n/locale.ts";

interface PrivacySectionContent {
  number: string;
  title: string;
  body: ReactNode;
}

interface PrivacyContentData {
  currentDate: string;
  lastUpdatedLabel: string;
  lastUpdatedPrefix: string;
  bannerSummary: string;
  responsiblePartyTitle: string;
  responsiblePartyBody: ReactNode;
  sections: PrivacySectionContent[];
  contactTitle: string;
  contactDescription: string;
}

const contactEmail = "legal@hackcr.org";

export const privacyContent: Record<Locale, PrivacyContentData> = {
  en: {
    currentDate: "April 8th, 2026",
    lastUpdatedLabel: "Last Updated",
    lastUpdatedPrefix: "Last updated:",
    bannerSummary:
      "This Privacy Policy explains how we collect, use, store, share, and protect your personal data when you visit our website.",
    responsiblePartyTitle: "Responsible Party",
    responsiblePartyBody: (
      <>
        <p>
          For purposes of this Privacy Policy, the person responsible for the processing of personal
          data collected through the Website is:
        </p>
        <p>
          <strong className="text-cream">Rafael Soley, acting as Lead Organizer of HackCR</strong>
        </p>
        <p>
          Email:{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center gap-1.5 rounded border border-cyber/30 bg-cyber/10 px-2 py-0.5 font-mono text-xs text-cyber transition-all duration-300 hover:border-cyber/50 hover:bg-cyber/20"
          >
            {contactEmail}
          </a>
        </p>
        <p>
          By submitting your information through the Website, you acknowledge that you have read
          this Privacy Policy and, where required, you provide your express consent to the
          processing described here.
        </p>
      </>
    ),
    sections: [
      {
        number: "01",
        title: "Information We Collect",
        body: (
          <>
            <p>We may collect the following personal data:</p>

            <div className="space-y-4">
              <div>
                <p className="mb-2 font-medium text-cyber">Information you provide directly:</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number (optional)</li>
                  <li>School name (optional)</li>
                  <li>Any information you include in messages or form submissions</li>
                </ul>
              </div>

              <div>
                <p className="mb-2 font-medium text-cyber">Information collected automatically:</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>IP address</li>
                  <li>Browser and device information</li>
                  <li>Approximate geolocation derived from technical data</li>
                  <li>
                    Website interaction data, such as page visits, clicks, session statistics, and
                    actions taken on the Website
                  </li>
                  <li>
                    Cookie and analytics data, including data collected through Google Analytics
                    where enabled
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-4">
              We do not request sensitive personal data through the Website. Please do not submit
              sensitive personal data unless we specifically request it through a lawful and clearly
              identified process.
            </p>
          </>
        ),
      },
      {
        number: "02",
        title: "Whether Data Is Required or Optional",
        body: (
          <>
            <p>The Website will indicate when a field is required or optional.</p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong className="text-cream">Required data:</strong> typically your name and email
                address, when needed to send notifications or respond to your request.
              </li>
              <li>
                <strong className="text-cream">Optional data:</strong> such as phone number or
                school name, which you may choose to provide voluntarily.
              </li>
            </ul>
            <p>You are not required to provide optional information.</p>
          </>
        ),
      },
      {
        number: "03",
        title: "Purposes of Processing",
        body: (
          <>
            <p>We process personal data for the following specific and legitimate purposes:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>to notify you when event registration opens;</li>
              <li>
                to send you relevant updates about HackCR events, programs, deadlines, or related
                announcements you requested;
              </li>
              <li>to respond to messages, requests, or inquiries you send to us;</li>
              <li>to operate, maintain, protect, and improve the Website;</li>
              <li>
                to detect, prevent, investigate, and address abuse, misuse, fraud, suspicious
                activity, or security incidents;
              </li>
              <li>
                to maintain logs and basic records necessary for the integrity and proper
                functioning of the Website; and
              </li>
              <li>
                where you have consented, to measure and analyze Website usage through analytics
                tools.
              </li>
            </ul>
            <p className="mt-4">
              We do not use your personal data for unrelated marketing purposes.
            </p>
          </>
        ),
      },
      {
        number: "04",
        title: "Consequences of Refusing to Provide Data",
        body: (
          <>
            <p>If you choose not to provide required personal data, we may be unable to:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>add you to notification lists,</li>
              <li>send you event-related updates you requested,</li>
              <li>respond properly to your request, or</li>
              <li>provide certain Website features or services.</li>
            </ul>
            <p>
              Refusing to provide optional data will not prevent basic browsing of the public
              Website, but it may limit certain optional interactions.
            </p>
          </>
        ),
      },
      {
        number: "05",
        title: "Legal Basis and Consent",
        body: (
          <>
            <p>
              We process your personal data primarily on the basis of your{" "}
              <strong className="text-cream">express informed consent</strong>, which you provide
              when you voluntarily submit your information through our forms or other collection
              tools.
            </p>
            <p>
              Where applicable, we may also process certain technical data as necessary to protect
              the security, availability, and integrity of the Website and to comply with legal
              obligations.
            </p>
            <p>
              Your consent may be revoked at any time, without retroactive effect, by contacting us
              at:{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="ml-2 inline-flex items-center gap-1.5 rounded border border-cyber/30 bg-cyber/10 px-2 py-0.5 font-mono text-xs text-cyber transition-all duration-300 hover:border-cyber/50 hover:bg-cyber/20"
              >
                {contactEmail}
              </a>
            </p>
          </>
        ),
      },
      {
        number: "06",
        title: "Recipients and Data Sharing",
        body: (
          <>
            <p>
              We do <strong className="text-cream">not</strong> sell or rent your personal data.
            </p>
            <p>We may share personal data only with the following categories of recipients:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>website hosting and infrastructure providers;</li>
              <li>form, database, and email delivery providers;</li>
              <li>analytics providers, such as Google Analytics, where enabled;</li>
              <li>
                technical service providers who assist us with security, maintenance, or
                administration of the Website; and
              </li>
              <li>
                competent authorities, when required by applicable law, legal process, or a lawful
                request.
              </li>
            </ul>
            <p>
              We require service providers acting on our behalf to process personal data only as
              necessary for the relevant service and to apply appropriate confidentiality and
              security measures.
            </p>
          </>
        ),
      },
      {
        number: "07",
        title: "International Transfers",
        body: (
          <>
            <p>
              Some of our service providers may process or store personal data outside Costa Rica.
            </p>
            <p>
              By submitting your personal data through the Website and accepting this Privacy
              Policy, you authorize, where applicable, the transfer of your personal data to service
              providers located in other countries, solely for the purposes described in this
              Privacy Policy and subject to appropriate contractual or operational safeguards.
            </p>
          </>
        ),
      },
      {
        number: "08",
        title: "Google Analytics and Cookies",
        body: (
          <>
            <p>
              Where enabled, the Website uses{" "}
              <strong className="text-cream">Google Analytics</strong>, a web analytics service
              provided by Google, to help us understand how visitors use the Website and to improve
              its performance and usability.
            </p>
            <p>
              Google states that Analytics collects first-party cookies, device/browser-related
              data, on-site activity data, and IP-address-related information during collection,
              while also stating that Google Analytics does not log or store IP addresses in
              Analytics.
            </p>
            <p>
              You can learn more about how Google processes data through{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="link-styled"
              >
                Google&apos;s privacy materials
              </a>
              .
            </p>
          </>
        ),
      },
      {
        number: "09",
        title: "Security",
        body: (
          <>
            <p>
              We adopt reasonable technical, organizational, and administrative measures designed to
              protect personal data against unauthorized access, alteration, disclosure, loss,
              destruction, or misuse.
            </p>
            <p>
              However, no website, transmission method, or storage system can be guaranteed to be
              completely secure. For that reason, although we take reasonable measures to protect
              personal data, we cannot guarantee absolute security.
            </p>
          </>
        ),
      },
      {
        number: "10",
        title: "Data Retention",
        body: (
          <>
            <p>
              We retain personal data only for as long as reasonably necessary for the purposes
              described in this Privacy Policy, unless a longer period is required or permitted by
              law.
            </p>
            <p>In general:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                notification-list data is retained until the relevant event cycle ends, the data is
                no longer needed, or you request deletion;
              </li>
              <li>
                contact or inquiry data is retained as needed to respond and keep reasonable
                administrative records;
              </li>
              <li>
                technical logs and security records are retained for a limited period reasonably
                necessary to protect the Website and investigate abuse; and
              </li>
              <li>
                analytics data is retained according to the configuration of the analytics tools we
                use, where applicable.
              </li>
            </ul>
            <p>
              Personal data that is no longer necessary for the stated purposes should be deleted,
              blocked, or anonymized, as appropriate.
            </p>
          </>
        ),
      },
      {
        number: "11",
        title: "Your Rights",
        body: (
          <>
            <p>Under Costa Rican law, you have the right to:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>obtain confirmation of whether we process your personal data;</li>
              <li>
                access your personal data and receive information about the purpose and use of that
                data;
              </li>
              <li>
                request rectification, updating, correction, or completion of inaccurate or
                incomplete data;
              </li>
              <li>
                request deletion, cancellation, or suppression of data processed unlawfully or no
                longer needed;
              </li>
              <li>revoke your consent, without retroactive effect; and</li>
              <li>be informed about transfers or disclosures where applicable.</li>
            </ul>
            <p>
              To exercise these rights, contact us at:{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="ml-2 inline-flex items-center gap-1.5 rounded border border-cyber/30 bg-cyber/10 px-2 py-0.5 font-mono text-xs text-cyber transition-all duration-300 hover:border-cyber/50 hover:bg-cyber/20"
              >
                {contactEmail}
              </a>
            </p>
            <p className="mt-4">
              If you believe your rights have been violated, you may also seek protection before the{" "}
              <strong className="text-cream">
                Agencia de Protección de Datos de los Habitantes (PRODHAB)
              </strong>
              .
            </p>
          </>
        ),
      },
      {
        number: "12",
        title: "Access Restrictions and Abuse Prevention",
        body: (
          <>
            <p>
              To protect the Website, our organizers, and our users, we may log technical events and
              take reasonable measures to investigate abuse, spam, scraping, suspicious activity,
              fraud, security incidents, or violations of our Terms of Service or Code of Conduct.
            </p>
            <p>
              Where reasonably necessary for security or integrity, we may restrict or block access
              to the Website, including through IP-based or other technical measures.
            </p>
          </>
        ),
      },
      {
        number: "13",
        title: "Changes to This Privacy Policy",
        body: (
          <>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will post the
              updated version on this page and revise the &quot;Last Updated&quot; date above.
            </p>
            <p>
              To the extent required by applicable law, we will seek renewed consent before applying
              material changes to processing activities that require fresh consent.
            </p>
          </>
        ),
      },
      {
        number: "14",
        title: "Contact",
        body: (
          <>
            <p>
              If you have any questions about this Privacy Policy, your personal data, or how to
              exercise your rights, contact:
            </p>
            <p>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-1.5 rounded border border-cyber/30 bg-cyber/10 px-2 py-0.5 font-mono text-xs text-cyber transition-all duration-300 hover:border-cyber/50 hover:bg-cyber/20"
              >
                {contactEmail}
              </a>
            </p>
            <p className="mt-4">
              Responsible party:{" "}
              <strong className="text-cream">
                Rafael Soley, acting as Lead Organizer of HackCR
              </strong>
            </p>
          </>
        ),
      },
    ],
    contactTitle: "Questions About Your Privacy?",
    contactDescription:
      "If you have any questions about this Privacy Policy or how your data is handled, please do not hesitate to reach out to our team.",
  },
  es: {
    currentDate: "8 de abril de 2026",
    lastUpdatedLabel: "Última actualización",
    lastUpdatedPrefix: "Última actualización:",
    bannerSummary:
      "Esta Política de Privacidad explica cómo recopilamos, usamos, almacenamos, compartimos y protegemos tus datos personales cuando visitas nuestro sitio web.",
    responsiblePartyTitle: "Responsable del tratamiento",
    responsiblePartyBody: (
      <>
        <p>
          Para efectos de esta Política de Privacidad, la persona responsable del tratamiento de los
          datos personales recopilados a través del Sitio Web es:
        </p>
        <p>
          <strong className="text-cream">
            Rafael Soley, actuando como organizador principal de HackCR
          </strong>
        </p>
        <p>
          Correo:{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center gap-1.5 rounded border border-cyber/30 bg-cyber/10 px-2 py-0.5 font-mono text-xs text-cyber transition-all duration-300 hover:border-cyber/50 hover:bg-cyber/20"
          >
            {contactEmail}
          </a>
        </p>
        <p>
          Al enviar tu información a través del Sitio Web, reconoces que has leído esta Política de
          Privacidad y, cuando corresponda, otorgas tu consentimiento expreso al tratamiento aquí
          descrito.
        </p>
      </>
    ),
    sections: [
      {
        number: "01",
        title: "Información que recopilamos",
        body: (
          <>
            <p>Podemos recopilar los siguientes datos personales:</p>

            <div className="space-y-4">
              <div>
                <p className="mb-2 font-medium text-cyber">
                  Información que proporcionas directamente:
                </p>
                <ul className="list-inside list-disc space-y-1">
                  <li>Nombre completo</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono (opcional)</li>
                  <li>Nombre del colegio (opcional)</li>
                  <li>Cualquier información incluida en mensajes o formularios enviados</li>
                </ul>
              </div>

              <div>
                <p className="mb-2 font-medium text-cyber">
                  Información recopilada automáticamente:
                </p>
                <ul className="list-inside list-disc space-y-1">
                  <li>Dirección IP</li>
                  <li>Información del navegador y del dispositivo</li>
                  <li>Geolocalización aproximada derivada de datos técnicos</li>
                  <li>
                    Datos de interacción con el Sitio Web, como visitas a páginas, clics,
                    estadísticas de sesión y acciones realizadas en el Sitio Web
                  </li>
                  <li>
                    Datos de cookies y analítica, incluidos los recopilados mediante Google
                    Analytics cuando esté habilitado
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-4">
              No solicitamos datos personales sensibles a través del Sitio Web. Por favor, no envíes
              datos personales sensibles salvo que los solicitemos específicamente mediante un
              proceso legal y claramente identificado.
            </p>
          </>
        ),
      },
      {
        number: "02",
        title: "Si los datos son obligatorios u opcionales",
        body: (
          <>
            <p>El Sitio Web indicará cuándo un campo es obligatorio u opcional.</p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong className="text-cream">Datos obligatorios:</strong> normalmente tu nombre y
                correo electrónico, cuando sean necesarios para enviarte avisos o responder a tu
                solicitud.
              </li>
              <li>
                <strong className="text-cream">Datos opcionales:</strong> como número de teléfono o
                nombre del colegio, que puedes proporcionar voluntariamente.
              </li>
            </ul>
            <p>No estás obligado a proporcionar información opcional.</p>
          </>
        ),
      },
      {
        number: "03",
        title: "Finalidades del tratamiento",
        body: (
          <>
            <p>
              Tratamos datos personales para las siguientes finalidades específicas y legítimas:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>avisarte cuando abra la inscripción del evento;</li>
              <li>
                enviarte actualizaciones relevantes sobre eventos, programas, fechas límite o
                anuncios relacionados de HackCR que hayas solicitado;
              </li>
              <li>responder a mensajes, solicitudes o consultas que nos envíes;</li>
              <li>operar, mantener, proteger y mejorar el Sitio Web;</li>
              <li>
                detectar, prevenir, investigar y atender abusos, usos indebidos, fraude, actividad
                sospechosa o incidentes de seguridad;
              </li>
              <li>
                mantener registros y bitácoras básicas necesarias para la integridad y el correcto
                funcionamiento del Sitio Web; y
              </li>
              <li>
                cuando hayas dado tu consentimiento, medir y analizar el uso del Sitio Web mediante
                herramientas de analítica.
              </li>
            </ul>
            <p className="mt-4">
              No utilizamos tus datos personales para fines de mercadeo no relacionados.
            </p>
          </>
        ),
      },
      {
        number: "04",
        title: "Consecuencias de negarse a proporcionar datos",
        body: (
          <>
            <p>
              Si decides no proporcionar datos personales obligatorios, es posible que no podamos:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>agregarte a listas de avisos,</li>
              <li>enviarte actualizaciones del evento que hayas solicitado,</li>
              <li>responder adecuadamente a tu solicitud, o</li>
              <li>brindarte ciertas funciones o servicios del Sitio Web.</li>
            </ul>
            <p>
              Negarte a proporcionar datos opcionales no impedirá la navegación básica del Sitio Web
              público, pero sí puede limitar ciertas interacciones opcionales.
            </p>
          </>
        ),
      },
      {
        number: "05",
        title: "Base jurídica y consentimiento",
        body: (
          <>
            <p>
              Tratamos tus datos personales principalmente sobre la base de tu{" "}
              <strong className="text-cream">consentimiento informado y expreso</strong>, que
              otorgas cuando envías voluntariamente tu información a través de nuestros formularios
              u otros medios de recolección.
            </p>
            <p>
              Cuando corresponda, también podemos tratar ciertos datos técnicos en la medida
              necesaria para proteger la seguridad, disponibilidad e integridad del Sitio Web y para
              cumplir obligaciones legales.
            </p>
            <p>
              Puedes revocar tu consentimiento en cualquier momento, sin efecto retroactivo,
              escribiéndonos a:{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="ml-2 inline-flex items-center gap-1.5 rounded border border-cyber/30 bg-cyber/10 px-2 py-0.5 font-mono text-xs text-cyber transition-all duration-300 hover:border-cyber/50 hover:bg-cyber/20"
              >
                {contactEmail}
              </a>
            </p>
          </>
        ),
      },
      {
        number: "06",
        title: "Destinatarios y compartición de datos",
        body: (
          <>
            <p>
              <strong className="text-cream">No</strong> vendemos ni alquilamos tus datos
              personales.
            </p>
            <p>
              Solo podremos compartir datos personales con las siguientes categorías de
              destinatarios:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>proveedores de hosting e infraestructura web;</li>
              <li>proveedores de formularios, bases de datos y envío de correos;</li>
              <li>proveedores de analítica, como Google Analytics, cuando esté habilitado;</li>
              <li>
                proveedores técnicos que nos ayudan con la seguridad, mantenimiento o administración
                del Sitio Web; y
              </li>
              <li>
                autoridades competentes, cuando lo exijan la ley aplicable, un proceso legal o una
                solicitud válida.
              </li>
            </ul>
            <p>
              Exigimos a los proveedores que actúan por nuestra cuenta tratar los datos personales
              únicamente en la medida necesaria para el servicio correspondiente y aplicar medidas
              adecuadas de confidencialidad y seguridad.
            </p>
          </>
        ),
      },
      {
        number: "07",
        title: "Transferencias internacionales",
        body: (
          <>
            <p>
              Algunos de nuestros proveedores pueden tratar o almacenar datos personales fuera de
              Costa Rica.
            </p>
            <p>
              Al enviar tus datos personales a través del Sitio Web y aceptar esta Política de
              Privacidad, autorizas, cuando corresponda, la transferencia de tus datos personales a
              proveedores ubicados en otros países, únicamente para las finalidades descritas en
              esta Política de Privacidad y sujetas a salvaguardas contractuales u operativas
              apropiadas.
            </p>
          </>
        ),
      },
      {
        number: "08",
        title: "Google Analytics y cookies",
        body: (
          <>
            <p>
              Cuando esté habilitado, el Sitio Web utiliza{" "}
              <strong className="text-cream">Google Analytics</strong>, un servicio de analítica web
              proporcionado por Google, para ayudarnos a entender cómo usan el Sitio Web las
              personas visitantes y mejorar su rendimiento y usabilidad.
            </p>
            <p>
              Google indica que Analytics recopila cookies de primera parte, datos relacionados con
              el dispositivo y el navegador, datos de actividad dentro del sitio y datos vinculados
              a direcciones IP durante la recopilación, y también señala que Google Analytics no
              registra ni almacena direcciones IP en Analytics.
            </p>
            <p>
              Puedes obtener más información sobre cómo Google trata los datos en{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="link-styled"
              >
                los materiales de privacidad de Google
              </a>
              .
            </p>
          </>
        ),
      },
      {
        number: "09",
        title: "Seguridad",
        body: (
          <>
            <p>
              Adoptamos medidas técnicas, organizativas y administrativas razonables diseñadas para
              proteger los datos personales contra acceso no autorizado, alteración, divulgación,
              pérdida, destrucción o uso indebido.
            </p>
            <p>
              Sin embargo, ningún sitio web, método de transmisión o sistema de almacenamiento puede
              garantizarse como completamente seguro. Por esa razón, aunque tomamos medidas
              razonables para proteger los datos personales, no podemos garantizar seguridad
              absoluta.
            </p>
          </>
        ),
      },
      {
        number: "10",
        title: "Conservación de datos",
        body: (
          <>
            <p>
              Conservamos datos personales solo durante el tiempo razonablemente necesario para las
              finalidades descritas en esta Política de Privacidad, salvo que la ley exija o permita
              un plazo mayor.
            </p>
            <p>En general:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                los datos de listas de aviso se conservan hasta que termine el ciclo del evento
                correspondiente, dejen de ser necesarios o solicites su eliminación;
              </li>
              <li>
                los datos de contacto o consultas se conservan según sea necesario para responder y
                mantener registros administrativos razonables;
              </li>
              <li>
                las bitácoras técnicas y registros de seguridad se conservan por un período
                limitado, razonablemente necesario para proteger el Sitio Web e investigar abusos; y
              </li>
              <li>
                los datos de analítica se conservan de acuerdo con la configuración de las
                herramientas de analítica que utilicemos, cuando corresponda.
              </li>
            </ul>
            <p>
              Los datos personales que ya no sean necesarios para las finalidades indicadas deberán
              eliminarse, bloquearse o anonimizarse, según corresponda.
            </p>
          </>
        ),
      },
      {
        number: "11",
        title: "Tus derechos",
        body: (
          <>
            <p>Conforme a la ley costarricense, tienes derecho a:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>obtener confirmación de si tratamos tus datos personales;</li>
              <li>
                acceder a tus datos personales y recibir información sobre la finalidad y uso de
                esos datos;
              </li>
              <li>
                solicitar la rectificación, actualización, corrección o completitud de datos
                inexactos o incompletos;
              </li>
              <li>
                solicitar la eliminación, cancelación o supresión de datos tratados ilícitamente o
                que ya no sean necesarios;
              </li>
              <li>revocar tu consentimiento, sin efecto retroactivo; y</li>
              <li>ser informado sobre transferencias o divulgaciones, cuando corresponda.</li>
            </ul>
            <p>
              Para ejercer estos derechos, contáctanos en:{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="ml-2 inline-flex items-center gap-1.5 rounded border border-cyber/30 bg-cyber/10 px-2 py-0.5 font-mono text-xs text-cyber transition-all duration-300 hover:border-cyber/50 hover:bg-cyber/20"
              >
                {contactEmail}
              </a>
            </p>
            <p className="mt-4">
              Si consideras que tus derechos han sido vulnerados, también puedes acudir a la{" "}
              <strong className="text-cream">
                Agencia de Protección de Datos de los Habitantes (PRODHAB)
              </strong>
              .
            </p>
          </>
        ),
      },
      {
        number: "12",
        title: "Restricciones de acceso y prevención de abuso",
        body: (
          <>
            <p>
              Para proteger el Sitio Web, a nuestras personas organizadoras y a nuestras personas
              usuarias, podemos registrar eventos técnicos y tomar medidas razonables para
              investigar abuso, spam, scraping, actividad sospechosa, fraude, incidentes de
              seguridad o violaciones a nuestros Términos de Servicio o Código de Conducta.
            </p>
            <p>
              Cuando sea razonablemente necesario por razones de seguridad o integridad, podremos
              restringir o bloquear el acceso al Sitio Web, incluso mediante medidas técnicas
              basadas en IP u otras similares.
            </p>
          </>
        ),
      },
      {
        number: "13",
        title: "Cambios a esta Política de Privacidad",
        body: (
          <>
            <p>
              Podemos actualizar esta Política de Privacidad periódicamente. Cuando lo hagamos,
              publicaremos la versión actualizada en esta página y revisaremos la fecha de
              &quot;Última actualización&quot; indicada arriba.
            </p>
            <p>
              En la medida en que lo exija la ley aplicable, solicitaremos un nuevo consentimiento
              antes de aplicar cambios sustanciales a actividades de tratamiento que requieran un
              consentimiento renovado.
            </p>
          </>
        ),
      },
      {
        number: "14",
        title: "Contacto",
        body: (
          <>
            <p>
              Si tienes preguntas sobre esta Política de Privacidad, tus datos personales o cómo
              ejercer tus derechos, contáctanos:
            </p>
            <p>
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-1.5 rounded border border-cyber/30 bg-cyber/10 px-2 py-0.5 font-mono text-xs text-cyber transition-all duration-300 hover:border-cyber/50 hover:bg-cyber/20"
              >
                {contactEmail}
              </a>
            </p>
            <p className="mt-4">
              Responsable del tratamiento:{" "}
              <strong className="text-cream">
                Rafael Soley, actuando como organizador principal de HackCR
              </strong>
            </p>
          </>
        ),
      },
    ],
    contactTitle: "¿Preguntas sobre tu privacidad?",
    contactDescription:
      "Si tienes preguntas sobre esta Política de Privacidad o sobre cómo se manejan tus datos, no dudes en escribirnos.",
  },
};
