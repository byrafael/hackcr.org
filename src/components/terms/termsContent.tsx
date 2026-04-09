import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import type { Locale } from "../../i18n/locale.ts";

interface TermsSectionContent {
  number: string;
  title: string;
  body: ReactNode;
}

interface TermsContentData {
  currentDate: string;
  lastUpdatedLabel: string;
  lastUpdatedPrefix: string;
  bannerSummary: string;
  intro: ReactNode;
  sections: TermsSectionContent[];
  contactTitle: string;
  contactDescription: string;
}

const contactEmail = "legal@hackcr.org";

export const termsContent: Record<Locale, TermsContentData> = {
  en: {
    currentDate: "April 8th, 2026",
    lastUpdatedLabel: "Last Updated",
    lastUpdatedPrefix: "Last updated:",
    bannerSummary:
      "By accessing or using our website, you agree to be bound by these Terms of Service and by our Privacy Policy. Please read them carefully.",
    intro: (
      <>
        <p>
          These Terms of Service (&ldquo;<strong className="text-cream">Terms</strong>&rdquo;)
          govern your access to and use of the websites located at{" "}
          <code className="rounded bg-cream/10 px-1.5 py-0.5 font-mono text-sm text-cyber">
            hackcr.org
          </code>
          ,{" "}
          <code className="rounded bg-cream/10 px-1.5 py-0.5 font-mono text-sm text-cyber">
            hackcr.com
          </code>
          , and any associated subdomains, webpages, applications, forms, event platforms, content,
          communications, or related services that link to these Terms (collectively, the &ldquo;
          <strong className="text-cream">Services</strong>&rdquo;).
        </p>
        <p>
          For purposes of these Terms, the Services are operated by{" "}
          <strong className="text-cream">Rafael Soley, acting as Lead Organizer of HackCR</strong>{" "}
          (&ldquo;<strong className="text-cream">HackCR</strong>&rdquo;,&ldquo;
          <strong className="text-cream">we</strong>&rdquo;,&ldquo;
          <strong className="text-cream">us</strong>&rdquo;, or &ldquo;
          <strong className="text-cream">our</strong>&rdquo;), unless otherwise expressly indicated.
          HackCR is an organizer-led initiative and not, according to the information provided for
          these Terms, a separate registered legal entity.
        </p>
        <p>
          By accessing or using the Services, you agree to be bound by these Terms and by our{" "}
          <Link to="/privacy" className="link-styled">
            Privacy Policy
          </Link>
          . If you do not agree, you must not access or use the Services.
        </p>
      </>
    ),
    sections: [
      {
        number: "01",
        title: "Privacy and Personal Data",
        body: (
          <>
            <p>
              Any personal data you provide to us, whether voluntarily submitted (for example,
              through contact forms, registration forms, applications, or email communications) or
              automatically collected (for example, through logs, telemetry, cookies, device data,
              IP addresses, or similar technical means), will be processed in accordance with our{" "}
              <Link to="/privacy" className="link-styled">
                Privacy Policy
              </Link>
              .
            </p>
            <p>
              By using the Services, you acknowledge that your information may be collected, used,
              stored, and disclosed as described in our Privacy Policy. Where Costa Rican law
              requires express consent for specific processing activities, such consent may be
              requested separately through the relevant form, interface, or consent mechanism.
            </p>
          </>
        ),
      },
      {
        number: "02",
        title: "Eligibility and Lawful Use",
        body: (
          <>
            <p>
              You agree to use the Services only for lawful purposes and in a manner that does not
              infringe the rights of, restrict, or interfere with any other person&apos;s use and
              enjoyment of the Services.
            </p>
            <p>
              You must not use the Services in any way that causes, or may cause, damage to the
              Services or impairment of the availability, accessibility, integrity, or security of
              the Services.
            </p>
          </>
        ),
      },
      {
        number: "03",
        title: "Prohibited Conduct",
        body: (
          <>
            <p>You agree that you will not, directly or indirectly:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>use the Services for any unlawful, fraudulent, abusive, or harmful purpose;</li>
              <li>violate any applicable law or regulation;</li>
              <li>
                infringe the intellectual property, privacy, publicity, contractual, or other rights
                of any person or entity;
              </li>
              <li>
                use the Services to copy, store, host, transmit, send, use, publish, or distribute
                any material that consists of, contains, installs, or is linked to any spyware,
                computer virus, Trojan horse, worm, keystroke logger, rootkit, ransomware, bot, or
                other malicious or harmful software or code;
              </li>
              <li>
                access, scrape, crawl, index, monitor, or otherwise interact with the Services by
                means of any robot, spider, scraper, harvester, or other automated means, except as
                expressly authorized by us in writing or as allowed through standard public search
                engine indexing in accordance with our robots instructions;
              </li>
              <li>
                send or facilitate spam, unsolicited communications, chain letters, bulk messages,
                or deceptive communications through or relating to the Services;
              </li>
              <li>
                attempt to gain unauthorized access to any portion of the Services or to any
                systems, accounts, servers, databases, or networks connected to the Services;
              </li>
              <li>
                interfere with, disrupt, attack, or compromise the security, integrity, performance,
                or proper operation of the Services;
              </li>
              <li>
                impersonate any person or entity, or falsely state or otherwise misrepresent your
                affiliation with a person, entity, sponsor, organizer, institution, or HackCR;
              </li>
              <li>
                harvest, collect, extract, or compile email addresses, phone numbers, profile data,
                or other contact information of users or visitors without authorization;
              </li>
              <li>submit false, inaccurate, misleading, or deceptive information;</li>
              <li>
                use the Services in a manner that violates any applicable HackCR{" "}
                <Link to="/code-of-conduct" className="link-styled">
                  Code of Conduct
                </Link>
                ; or
              </li>
              <li>attempt, encourage, assist, or facilitate any of the foregoing.</li>
            </ul>
          </>
        ),
      },
      {
        number: "04",
        title: "Code of Conduct",
        body: (
          <>
            <p>
              If the Services reference or connect to any HackCR event, program, registration flow,
              volunteer activity, participant application, or community space, your use of those
              Services is also subject to any applicable HackCR{" "}
              <Link to="/code-of-conduct" className="link-styled">
                Code of Conduct
              </Link>
              .
            </p>
            <p>A violation of the Code of Conduct may constitute a violation of these Terms.</p>
          </>
        ),
      },
      {
        number: "05",
        title: "Intellectual Property",
        body: (
          <>
            <p>
              Unless otherwise expressly indicated, all content and materials made available through
              the Services, including without limitation text, graphics, logos, icons, images,
              photographs, audio clips, videos, digital downloads, data compilations, software,
              source code, design, layout, look and feel, and other content (collectively, &ldquo;
              <strong className="text-cream">Content</strong>&rdquo;), are owned by Rafael Soley
              and/or the applicable content suppliers, contributors, or licensors, and are protected
              by the laws of Costa Rica and applicable international intellectual property laws.
            </p>
            <p>
              <strong className="text-cream">HackCR</strong> and related names, logos, branding,
              event names, and associated visual identifiers are, unless otherwise indicated, used
              under the authority of Rafael Soley as Lead Organizer of HackCR. Except where
              otherwise expressly stated, all decisions regarding the administrative use of the
              HackCR website assets, public-facing brand assets, and platform materials made
              available through the Services rest with Rafael Soley acting in that capacity.
            </p>
            <p>
              Nothing in these Terms transfers any ownership interest to you. Subject to these
              Terms, we grant you a limited, revocable, non-exclusive, non-transferable license to
              access and use the Services for personal, informational, and non-commercial purposes
              only. You may not reproduce, distribute, modify, create derivative works from,
              publicly display, publicly perform, republish, reverse engineer, or exploit any part
              of the Services or Content except as expressly permitted by law or by our prior
              written consent.
            </p>
          </>
        ),
      },
      {
        number: "06",
        title: "Third-Party Content and Links",
        body: (
          <>
            <p>
              The Services may contain links to third-party websites, services, forms, platforms,
              social media pages, or content not controlled by us. We do not control and are not
              responsible for third-party content, policies, security, availability, or practices.
            </p>
            <p>
              Your use of any third-party service is at your own risk and may be subject to separate
              terms and privacy policies.
            </p>
          </>
        ),
      },
      {
        number: "07",
        title: "Availability, Changes, and Service Integrity",
        body: (
          <>
            <p>
              We may modify, suspend, discontinue, restrict, or remove all or any part of the
              Services at any time, with or without notice, to the fullest extent permitted by
              applicable law.
            </p>
            <p>
              We do not guarantee that the Services will always be available, uninterrupted, timely,
              secure, or error-free, or that defects will be corrected.
            </p>
          </>
        ),
      },
      {
        number: "08",
        title: "Suspension, Termination, and Enforcement",
        body: (
          <>
            <p>
              We reserve the right, at our sole discretion and to the fullest extent permitted by
              law, to restrict, suspend, terminate, or otherwise deny your access to the Services at
              any time, without prior notice and without liability, for any reason, including
              without limitation if we believe that you:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>have violated these Terms;</li>
              <li>have violated an applicable Code of Conduct;</li>
              <li>are engaging in suspicious, bad-faith, abusive, or unauthorized activity;</li>
              <li>are attempting to exploit, attack, or misuse the Services;</li>
              <li>
                are causing, or are reasonably likely to cause, harm to HackCR, its organizers,
                participants, volunteers, partners, events, systems, or reputation; or
              </li>
              <li>are otherwise acting contrary to the spirit, safety, or integrity of HackCR.</li>
            </ul>
            <p>
              We may also block your IP address, device, account, email domain, network range, or
              use other technical or administrative measures we consider reasonably necessary to
              protect our interests, personnel, participants, events, or the integrity and security
              of the Services.
            </p>
            <p>
              We reserve the right to take any action we deem appropriate in response to violations
              of these Terms or conduct we determine to be harmful, abusive, unlawful, or contrary
              to the spirit of HackCR, including without limitation:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>immediate termination of access to the Services;</li>
              <li>IP blocking and other technical restrictions;</li>
              <li>removal of submissions, messages, or materials;</li>
              <li>
                reporting to law enforcement or other competent authorities when appropriate; and
              </li>
              <li>pursuit of any legal or equitable remedies available to us.</li>
            </ul>
            <p>
              To the fullest extent permitted by law, our decisions under this Section are final.
            </p>
          </>
        ),
      },
      {
        number: "09",
        title: "User Submissions",
        body: (
          <>
            <p>
              If you send us messages, feedback, applications, nominations, suggestions, ideas, or
              other materials through the Services (&ldquo;
              <strong className="text-cream">Submissions</strong>
              &rdquo;), you represent that you have the right to send them and that they do not
              violate any law or third-party right.
            </p>
            <p>
              Unless we expressly state otherwise in writing, you grant us a non-exclusive,
              worldwide, royalty-free license to use, reproduce, store, adapt, display, and
              otherwise process such Submissions as reasonably necessary to operate, administer,
              improve, promote, or document the Services, HackCR, and related events or programs,
              subject always to our{" "}
              <Link to="/privacy" className="link-styled">
                Privacy Policy
              </Link>{" "}
              where personal data is involved.
            </p>
          </>
        ),
      },
      {
        number: "10",
        title: "Disclaimer of Warranties",
        body: (
          <>
            <p>
              The Services and all Content are provided on an &ldquo;
              <strong className="text-cream">as is</strong>,&rdquo; &ldquo;
              <strong className="text-cream">as available</strong>,&rdquo; and &ldquo;
              <strong className="text-cream">with all faults</strong>&rdquo; basis.
            </p>
            <p>
              To the fullest extent permitted by applicable law, and without limiting any
              non-waivable rights under Costa Rican law, HackCR disclaims all representations,
              warranties, and conditions of any kind, whether express, implied, statutory, or
              otherwise, including without limitation warranties of merchantability, fitness for a
              particular purpose, title, non-infringement, availability, accuracy, or suitability.
            </p>
            <p>
              We do not warrant that the Services will be secure, free of bugs, free of harmful
              code, or compatible with your systems, or that the information provided through the
              Services will always be complete, accurate, or current.
            </p>
          </>
        ),
      },
      {
        number: "11",
        title: "Limitation of Liability",
        body: (
          <>
            <p>
              To the fullest extent permitted by applicable law, and without limiting any liability
              that cannot lawfully be excluded or limited, HackCR, Rafael Soley, HackCR organizers,
              volunteers, affiliates, collaborators, licensors, and service providers will not be
              liable for any direct, indirect, incidental, consequential, special, exemplary, or
              punitive damages, or for any loss of data, loss of profits, loss of revenue, loss of
              opportunity, loss of goodwill, business interruption, or other loss arising out of or
              in connection with:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>your access to, use of, inability to use, or reliance on the Services;</li>
              <li>
                any errors, omissions, interruptions, delays, or unavailability of the Services;
              </li>
              <li>unauthorized access to or alteration of transmissions, accounts, or data;</li>
              <li>third-party conduct or content;</li>
              <li>
                malware, viruses, distributed denial-of-service attacks, or other technologically
                harmful material that may affect your computer equipment, software, data, or other
                property due to your use of the Services or downloads from them.
              </li>
            </ul>
            <p>
              Nothing in these Terms excludes or limits liability for fraud, willful misconduct, or
              death or personal injury caused by negligence, or any other liability that cannot be
              excluded or limited under applicable law.
            </p>
          </>
        ),
      },
      {
        number: "12",
        title: "Indemnity",
        body: (
          <>
            <p>
              To the fullest extent permitted by law, you agree to defend, indemnify, and hold
              harmless HackCR, Rafael Soley, HackCR organizers, volunteers, affiliates,
              collaborators, and service providers from and against any claims, liabilities,
              damages, losses, costs, and expenses, including reasonable legal fees, arising out of
              or related to:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>your breach of these Terms;</li>
              <li>your misuse of the Services;</li>
              <li>your violation of applicable law; or</li>
              <li>your violation of any rights of another person or entity.</li>
            </ul>
          </>
        ),
      },
      {
        number: "13",
        title: "Governing Law and Jurisdiction",
        body: (
          <>
            <p>
              These Terms, and any dispute, claim, or controversy arising out of or relating to the
              Services or these Terms, whether contractual or non-contractual, shall be governed by
              and construed in accordance with the laws of the{" "}
              <strong className="text-cream">Republic of Costa Rica</strong>, without regard to
              conflict-of-law principles.
            </p>
            <p>
              Subject to any mandatory forum, venue, or consumer-protection rights provided by
              applicable law, you agree that the courts of{" "}
              <strong className="text-cream">San José, Costa Rica</strong> shall have exclusive
              jurisdiction over any dispute arising out of or relating to these Terms or the
              Services.
            </p>
          </>
        ),
      },
      {
        number: "14",
        title: "Language",
        body: (
          <p>
            If these Terms are made available in Spanish and another language, the{" "}
            <strong className="text-cream">Spanish version shall prevail</strong> in the event of
            any inconsistency, ambiguity, or conflict, to the extent permitted by applicable law.
          </p>
        ),
      },
      {
        number: "15",
        title: "Changes to These Terms",
        body: (
          <>
            <p>
              We may update or modify these Terms at any time. Any changes will become effective
              when posted on the Services, unless a later effective date is stated.
            </p>
            <p>
              Your continued use of the Services after revised Terms are posted constitutes your
              acceptance of the updated Terms.
            </p>
          </>
        ),
      },
      {
        number: "16",
        title: "Severability",
        body: (
          <p>
            If any provision of these Terms is held to be unlawful, invalid, or unenforceable, that
            provision shall be enforced to the maximum extent permitted by law, and the remaining
            provisions shall remain in full force and effect.
          </p>
        ),
      },
      {
        number: "17",
        title: "Entire Agreement",
        body: (
          <p>
            These Terms, together with any documents expressly incorporated by reference, including
            our{" "}
            <Link to="/privacy" className="link-styled">
              Privacy Policy
            </Link>{" "}
            and any applicable{" "}
            <Link to="/code-of-conduct" className="link-styled">
              Code of Conduct
            </Link>
            , constitute the entire agreement between you and us regarding your use of the Services,
            except to the extent superseded by a separate written agreement.
          </p>
        ),
      },
      {
        number: "18",
        title: "Contact",
        body: (
          <p>
            If you have questions about these Terms, please contact us at:{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="ml-2 inline-flex items-center gap-1.5 rounded border border-cyber/30 bg-cyber/10 px-2 py-0.5 font-mono text-xs text-cyber transition-all duration-300 hover:border-cyber/50 hover:bg-cyber/20"
            >
              {contactEmail}
            </a>
          </p>
        ),
      },
    ],
    contactTitle: "Questions About These Terms?",
    contactDescription:
      "If you have any questions about these Terms of Service or need clarification on any section, please reach out to our team.",
  },
  es: {
    currentDate: "8 de abril de 2026",
    lastUpdatedLabel: "Última actualización",
    lastUpdatedPrefix: "Última actualización:",
    bannerSummary:
      "Al acceder o utilizar nuestro sitio web, aceptas quedar sujeto a estos Términos de Servicio y a nuestra Política de Privacidad. Léelos con atención.",
    intro: (
      <>
        <p>
          Estos Términos de Servicio (&ldquo;<strong className="text-cream">Términos</strong>
          &rdquo;) rigen tu acceso y uso de los sitios web ubicados en{" "}
          <code className="rounded bg-cream/10 px-1.5 py-0.5 font-mono text-sm text-cyber">
            hackcr.org
          </code>
          ,{" "}
          <code className="rounded bg-cream/10 px-1.5 py-0.5 font-mono text-sm text-cyber">
            hackcr.com
          </code>
          , y cualquier subdominio, página web, aplicación, formulario, plataforma de eventos,
          contenido, comunicación o servicio relacionado que enlace a estos Términos (en conjunto,
          los &ldquo;<strong className="text-cream">Servicios</strong>&rdquo;).
        </p>
        <p>
          Para efectos de estos Términos, los Servicios son operados por{" "}
          <strong className="text-cream">
            Rafael Soley, actuando como organizador principal de HackCR
          </strong>{" "}
          (&ldquo;<strong className="text-cream">HackCR</strong>&rdquo;,&ldquo;
          <strong className="text-cream">nosotros</strong>&rdquo; o &ldquo;
          <strong className="text-cream">nuestro</strong>&rdquo;), salvo que se indique expresamente
          lo contrario. HackCR es una iniciativa liderada por su equipo organizador y no, conforme a
          la información disponible para estos Términos, una entidad jurídica registrada separada.
        </p>
        <p>
          Al acceder o usar los Servicios, aceptas quedar vinculado por estos Términos y por nuestra{" "}
          <Link to="/privacy" className="link-styled">
            Política de Privacidad
          </Link>
          . Si no estás de acuerdo, no debes acceder ni utilizar los Servicios.
        </p>
      </>
    ),
    sections: [
      {
        number: "01",
        title: "Privacidad y datos personales",
        body: (
          <>
            <p>
              Cualquier dato personal que nos proporciones, ya sea de forma voluntaria (por ejemplo,
              mediante formularios de contacto, formularios de inscripción, solicitudes o
              comunicaciones por correo electrónico) o recopilado automáticamente (por ejemplo,
              mediante bitácoras, telemetría, cookies, datos del dispositivo, direcciones IP u otros
              medios técnicos similares), será tratado de conformidad con nuestra{" "}
              <Link to="/privacy" className="link-styled">
                Política de Privacidad
              </Link>
              .
            </p>
            <p>
              Al utilizar los Servicios, reconoces que tu información podrá ser recopilada,
              utilizada, almacenada y divulgada según se describe en nuestra Política de Privacidad.
              Cuando la ley costarricense exija consentimiento expreso para actividades específicas
              de tratamiento, dicho consentimiento podrá solicitarse por separado mediante el
              formulario, interfaz o mecanismo correspondiente.
            </p>
          </>
        ),
      },
      {
        number: "02",
        title: "Elegibilidad y uso lícito",
        body: (
          <>
            <p>
              Aceptas usar los Servicios únicamente con fines lícitos y de una manera que no
              infrinja los derechos de otras personas ni restrinja o interfiera con el uso y
              disfrute de los Servicios por parte de terceros.
            </p>
            <p>
              No debes usar los Servicios de ninguna manera que cause, o pueda causar, daño a los
              Servicios o deterioro de su disponibilidad, accesibilidad, integridad o seguridad.
            </p>
          </>
        ),
      },
      {
        number: "03",
        title: "Conducta prohibida",
        body: (
          <>
            <p>Aceptas que no harás, directa ni indirectamente, lo siguiente:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>usar los Servicios con fines ilícitos, fraudulentos, abusivos o dañinos;</li>
              <li>violar cualquier ley o reglamento aplicable;</li>
              <li>
                infringir derechos de propiedad intelectual, privacidad, imagen, contractuales u
                otros derechos de cualquier persona o entidad;
              </li>
              <li>
                usar los Servicios para copiar, almacenar, alojar, transmitir, enviar, usar,
                publicar o distribuir cualquier material que consista en, contenga, instale o esté
                vinculado a spyware, virus informáticos, troyanos, gusanos, keyloggers, rootkits,
                ransomware, bots u otro software o código malicioso o dañino;
              </li>
              <li>
                acceder, hacer scraping, rastrear, indexar, monitorear o interactuar de otro modo
                con los Servicios mediante robots, spiders, scrapers, harvesters u otros medios
                automatizados, salvo autorización expresa por escrito de nuestra parte o el indexado
                público estándar permitido conforme a nuestras instrucciones de robots;
              </li>
              <li>
                enviar o facilitar spam, comunicaciones no solicitadas, cadenas, mensajes masivos o
                comunicaciones engañosas a través de los Servicios o relacionadas con ellos;
              </li>
              <li>
                intentar obtener acceso no autorizado a cualquier parte de los Servicios o a
                sistemas, cuentas, servidores, bases de datos o redes conectadas a ellos;
              </li>
              <li>
                interferir, interrumpir, atacar o comprometer la seguridad, integridad, rendimiento
                o funcionamiento adecuado de los Servicios;
              </li>
              <li>
                suplantar a cualquier persona o entidad, o declarar falsamente o tergiversar tu
                afiliación con una persona, entidad, patrocinador, organizador, institución o con
                HackCR;
              </li>
              <li>
                recolectar, extraer o compilar direcciones de correo, números de teléfono, datos de
                perfil u otra información de contacto de usuarios o visitantes sin autorización;
              </li>
              <li>enviar información falsa, inexacta, engañosa o decepcionante;</li>
              <li>
                usar los Servicios de una forma que viole cualquier{" "}
                <Link to="/code-of-conduct" className="link-styled">
                  Código de Conducta
                </Link>{" "}
                aplicable de HackCR; o
              </li>
              <li>
                intentar, fomentar, asistir o facilitar cualquiera de las conductas anteriores.
              </li>
            </ul>
          </>
        ),
      },
      {
        number: "04",
        title: "Código de Conducta",
        body: (
          <>
            <p>
              Si los Servicios hacen referencia o se conectan con un evento, programa, proceso de
              inscripción, actividad de voluntariado, solicitud de participación o espacio
              comunitario de HackCR, tu uso de esos Servicios también está sujeto a cualquier{" "}
              <Link to="/code-of-conduct" className="link-styled">
                Código de Conducta
              </Link>{" "}
              aplicable de HackCR.
            </p>
            <p>
              Una violación del Código de Conducta puede constituir también una violación de estos
              Términos.
            </p>
          </>
        ),
      },
      {
        number: "05",
        title: "Propiedad intelectual",
        body: (
          <>
            <p>
              Salvo que se indique expresamente lo contrario, todo el contenido y material puesto a
              disposición a través de los Servicios, incluyendo sin limitación textos, gráficos,
              logos, íconos, imágenes, fotografías, clips de audio, videos, descargas digitales,
              compilaciones de datos, software, código fuente, diseño, maquetación, apariencia y
              otros contenidos (en conjunto, &ldquo;
              <strong className="text-cream">Contenido</strong>&rdquo;), pertenece a Rafael Soley
              y/o a los proveedores, contribuidores o licenciantes correspondientes, y está
              protegido por las leyes de Costa Rica y por la normativa internacional aplicable en
              materia de propiedad intelectual.
            </p>
            <p>
              <strong className="text-cream">HackCR</strong> y los nombres relacionados, logos,
              branding, nombres de eventos e identificadores visuales asociados son, salvo
              indicación en contrario, utilizados bajo la autoridad de Rafael Soley como organizador
              principal de HackCR. Salvo que se indique expresamente lo contrario, todas las
              decisiones sobre el uso administrativo de los activos del sitio web de HackCR, los
              activos públicos de marca y los materiales de plataforma puestos a disposición
              mediante los Servicios corresponden a Rafael Soley en esa calidad.
            </p>
            <p>
              Nada de lo dispuesto en estos Términos te transfiere un derecho de propiedad. Sujeto a
              estos Términos, te otorgamos una licencia limitada, revocable, no exclusiva e
              intransferible para acceder y usar los Servicios únicamente con fines personales,
              informativos y no comerciales. No podrás reproducir, distribuir, modificar, crear
              obras derivadas, exhibir públicamente, ejecutar públicamente, republicar, hacer
              ingeniería inversa o explotar cualquier parte de los Servicios o del Contenido, salvo
              que la ley lo permita expresamente o contemos con tu consentimiento previo por
              escrito.
            </p>
          </>
        ),
      },
      {
        number: "06",
        title: "Contenido y enlaces de terceros",
        body: (
          <>
            <p>
              Los Servicios pueden contener enlaces a sitios web, servicios, formularios,
              plataformas, redes sociales o contenidos de terceros que no controlamos. No
              controlamos ni somos responsables del contenido, políticas, seguridad, disponibilidad
              o prácticas de terceros.
            </p>
            <p>
              El uso que hagas de cualquier servicio de terceros será bajo tu propio riesgo y podrá
              estar sujeto a términos y políticas de privacidad independientes.
            </p>
          </>
        ),
      },
      {
        number: "07",
        title: "Disponibilidad, cambios e integridad del servicio",
        body: (
          <>
            <p>
              Podemos modificar, suspender, discontinuar, restringir o eliminar todo o parte de los
              Servicios en cualquier momento, con o sin previo aviso, en la máxima medida permitida
              por la ley aplicable.
            </p>
            <p>
              No garantizamos que los Servicios estén siempre disponibles, sean ininterrumpidos,
              oportunos, seguros o estén libres de errores, ni que los defectos serán corregidos.
            </p>
          </>
        ),
      },
      {
        number: "08",
        title: "Suspensión, terminación y medidas de cumplimiento",
        body: (
          <>
            <p>
              Nos reservamos el derecho, a nuestra entera discreción y en la máxima medida permitida
              por la ley, de restringir, suspender, terminar o de otro modo negar tu acceso a los
              Servicios en cualquier momento, sin previo aviso y sin responsabilidad, por cualquier
              motivo, incluyendo sin limitación cuando consideremos que:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>has violado estos Términos;</li>
              <li>has violado un Código de Conducta aplicable;</li>
              <li>participas en actividad sospechosa, abusiva, de mala fe o no autorizada;</li>
              <li>intentas explotar, atacar o usar indebidamente los Servicios;</li>
              <li>
                estás causando, o es razonablemente probable que causes, daño a HackCR, sus
                organizadores, participantes, voluntarios, aliados, eventos, sistemas o reputación;
                o
              </li>
              <li>
                actúas de otro modo en contra del espíritu, la seguridad o la integridad de HackCR.
              </li>
            </ul>
            <p>
              También podremos bloquear tu dirección IP, dispositivo, cuenta, dominio de correo,
              rango de red u otras medidas técnicas o administrativas que consideremos
              razonablemente necesarias para proteger nuestros intereses, personal, participantes,
              eventos o la integridad y seguridad de los Servicios.
            </p>
            <p>
              Nos reservamos el derecho de tomar cualquier medida que consideremos apropiada frente
              a violaciones de estos Términos o conductas que determinemos como dañinas, abusivas,
              ilícitas o contrarias al espíritu de HackCR, incluyendo sin limitación:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>terminación inmediata del acceso a los Servicios;</li>
              <li>bloqueo de IP y otras restricciones técnicas;</li>
              <li>eliminación de envíos, mensajes o materiales;</li>
              <li>
                reporte a autoridades competentes o de cumplimiento de la ley, cuando proceda; y
              </li>
              <li>ejercicio de las acciones legales o equitativas que tengamos disponibles.</li>
            </ul>
            <p>
              En la máxima medida permitida por la ley, nuestras decisiones bajo esta Sección serán
              definitivas.
            </p>
          </>
        ),
      },
      {
        number: "09",
        title: "Envíos del usuario",
        body: (
          <>
            <p>
              Si nos envías mensajes, comentarios, solicitudes, nominaciones, sugerencias, ideas u
              otros materiales a través de los Servicios (&ldquo;
              <strong className="text-cream">Envíos</strong>&rdquo;), declaras que tienes derecho a
              enviarlos y que no infringen ninguna ley ni derecho de terceros.
            </p>
            <p>
              Salvo que indiquemos expresamente lo contrario por escrito, nos otorgas una licencia
              no exclusiva, mundial y libre de regalías para usar, reproducir, almacenar, adaptar,
              mostrar y de cualquier otro modo tratar dichos Envíos en la medida razonablemente
              necesaria para operar, administrar, mejorar, promover o documentar los Servicios,
              HackCR y eventos o programas relacionados, siempre sujeto a nuestra{" "}
              <Link to="/privacy" className="link-styled">
                Política de Privacidad
              </Link>{" "}
              cuando haya datos personales involucrados.
            </p>
          </>
        ),
      },
      {
        number: "10",
        title: "Exoneración de garantías",
        body: (
          <>
            <p>
              Los Servicios y todo el Contenido se proporcionan &ldquo;
              <strong className="text-cream">tal cual</strong>&rdquo;, &ldquo;
              <strong className="text-cream">según disponibilidad</strong>&rdquo; y &ldquo;
              <strong className="text-cream">con todos sus defectos</strong>&rdquo;.
            </p>
            <p>
              En la máxima medida permitida por la ley aplicable, y sin limitar derechos
              irrenunciables bajo la legislación costarricense, HackCR rechaza toda representación,
              garantía o condición de cualquier tipo, ya sea expresa, implícita, legal o de otra
              índole, incluidas sin limitación garantías de comerciabilidad, idoneidad para un fin
              particular, titularidad, no infracción, disponibilidad, exactitud o adecuación.
            </p>
            <p>
              No garantizamos que los Servicios sean seguros, estén libres de bugs, de código dañino
              o sean compatibles con tus sistemas, ni que la información proporcionada a través de
              los Servicios sea siempre completa, exacta o actual.
            </p>
          </>
        ),
      },
      {
        number: "11",
        title: "Limitación de responsabilidad",
        body: (
          <>
            <p>
              En la máxima medida permitida por la ley aplicable, y sin limitar cualquier
              responsabilidad que legalmente no pueda excluirse o limitarse, HackCR, Rafael Soley,
              las personas organizadoras de HackCR, voluntarias, afiliadas, colaboradoras,
              licenciantes y prestadoras de servicios no serán responsables por daños directos,
              indirectos, incidentales, consecuenciales, especiales, ejemplares o punitivos, ni por
              pérdida de datos, ganancias, ingresos, oportunidades, reputación, interrupción del
              negocio u otras pérdidas derivadas de o relacionadas con:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>tu acceso, uso, imposibilidad de uso o confianza en los Servicios;</li>
              <li>
                errores, omisiones, interrupciones, retrasos o indisponibilidad de los Servicios;
              </li>
              <li>acceso no autorizado o alteración de transmisiones, cuentas o datos;</li>
              <li>conducta o contenido de terceros;</li>
              <li>
                malware, virus, ataques de denegación de servicio distribuido u otro material
                tecnológicamente dañino que pueda afectar tu equipo, software, datos u otra
                propiedad debido a tu uso de los Servicios o a descargas realizadas desde ellos.
              </li>
            </ul>
            <p>
              Nada en estos Términos excluye o limita la responsabilidad por fraude, dolo o muerte o
              lesiones personales causadas por negligencia, ni cualquier otra responsabilidad que no
              pueda excluirse o limitarse conforme a la ley aplicable.
            </p>
          </>
        ),
      },
      {
        number: "12",
        title: "Indemnización",
        body: (
          <>
            <p>
              En la máxima medida permitida por la ley, aceptas defender, indemnizar y mantener
              indemne a HackCR, Rafael Soley, las personas organizadoras de HackCR, voluntarias,
              afiliadas, colaboradoras y prestadoras de servicios frente a cualquier reclamación,
              responsabilidad, daño, pérdida, costo o gasto, incluidos honorarios legales
              razonables, derivados de o relacionados con:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>tu incumplimiento de estos Términos;</li>
              <li>tu uso indebido de los Servicios;</li>
              <li>tu violación de la ley aplicable; o</li>
              <li>tu violación de derechos de otra persona o entidad.</li>
            </ul>
          </>
        ),
      },
      {
        number: "13",
        title: "Ley aplicable y jurisdicción",
        body: (
          <>
            <p>
              Estos Términos, y cualquier disputa, reclamo o controversia derivada de o relacionada
              con los Servicios o con estos Términos, ya sea contractual o extracontractual, se
              regirán e interpretarán de conformidad con las leyes de la{" "}
              <strong className="text-cream">República de Costa Rica</strong>, sin atender a
              principios de conflicto de leyes.
            </p>
            <p>
              Sujeto a cualquier derecho obligatorio de foro, competencia o protección al consumidor
              establecido por la ley aplicable, aceptas que los tribunales de{" "}
              <strong className="text-cream">San José, Costa Rica</strong> tendrán jurisdicción
              exclusiva sobre cualquier disputa derivada de o relacionada con estos Términos o con
              los Servicios.
            </p>
          </>
        ),
      },
      {
        number: "14",
        title: "Idioma",
        body: (
          <p>
            Si estos Términos se ponen a disposición en español y en otro idioma, la{" "}
            <strong className="text-cream">versión en español prevalecerá</strong> en caso de
            inconsistencia, ambigüedad o conflicto, en la medida permitida por la ley aplicable.
          </p>
        ),
      },
      {
        number: "15",
        title: "Cambios a estos Términos",
        body: (
          <>
            <p>
              Podemos actualizar o modificar estos Términos en cualquier momento. Cualquier cambio
              será efectivo cuando se publique en los Servicios, salvo que se indique una fecha de
              vigencia posterior.
            </p>
            <p>
              Tu uso continuado de los Servicios después de la publicación de Términos revisados
              constituye tu aceptación de los Términos actualizados.
            </p>
          </>
        ),
      },
      {
        number: "16",
        title: "Divisibilidad",
        body: (
          <p>
            Si alguna disposición de estos Términos se considera ilícita, inválida o inexigible,
            dicha disposición se aplicará en la máxima medida permitida por la ley y las
            disposiciones restantes permanecerán en pleno vigor y efecto.
          </p>
        ),
      },
      {
        number: "17",
        title: "Acuerdo completo",
        body: (
          <p>
            Estos Términos, junto con cualquier documento incorporado expresamente por referencia,
            incluyendo nuestra{" "}
            <Link to="/privacy" className="link-styled">
              Política de Privacidad
            </Link>{" "}
            y cualquier{" "}
            <Link to="/code-of-conduct" className="link-styled">
              Código de Conducta
            </Link>{" "}
            aplicable, constituyen el acuerdo completo entre tú y nosotros respecto al uso de los
            Servicios, salvo en la medida en que sea sustituido por un acuerdo escrito separado.
          </p>
        ),
      },
      {
        number: "18",
        title: "Contacto",
        body: (
          <p>
            Si tienes preguntas sobre estos Términos, contáctanos en:{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="ml-2 inline-flex items-center gap-1.5 rounded border border-cyber/30 bg-cyber/10 px-2 py-0.5 font-mono text-xs text-cyber transition-all duration-300 hover:border-cyber/50 hover:bg-cyber/20"
            >
              {contactEmail}
            </a>
          </p>
        ),
      },
    ],
    contactTitle: "¿Preguntas sobre estos Términos?",
    contactDescription:
      "Si tienes preguntas sobre estos Términos de Servicio o necesitas aclaración sobre alguna sección, escríbenos.",
  },
};
