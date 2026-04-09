import type { ReactNode } from "react";

import type { Locale } from "../../i18n/locale.ts";

interface CocSectionContent {
  title: string;
  body: ReactNode;
}

interface CocContentData {
  currentDate: string;
  lastUpdatedPrefix: string;
  introTitle: string;
  introDescription: string;
  protectedCharacteristicsLabel: string;
  protectedCharacteristics: string[];
  sections: CocSectionContent[];
  contactTitle: string;
  contactDescription: string;
}

const conductEmail = "conduct@hackcr.org";

export const cocContent: Record<Locale, CocContentData> = {
  en: {
    currentDate: "April 7th, 2026",
    lastUpdatedPrefix: "Last updated:",
    introTitle: "A Safe Space for Everyone",
    introDescription:
      "Hack Costa Rica is dedicated to providing a harassment-free experience for everyone. We welcome participants from all backgrounds and identities.",
    protectedCharacteristicsLabel: "This includes, but is not limited to",
    protectedCharacteristics: [
      "Gender",
      "Gender Identity",
      "Age",
      "Sexual Orientation",
      "Disability",
      "Physical Appearance",
      "Body Size",
      "Race",
      "Ethnicity",
      "Nationality",
      "Religion",
      "Technology Choices",
    ],
    sections: [
      {
        title: "Our Values",
        body: (
          <>
            <p>
              We believe in fostering a community where everyone feels welcome to learn, create, and
              collaborate. Our hackathon is built on the principles of:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>
                <strong className="text-cream">Inclusivity:</strong> Everyone has something valuable
                to contribute, regardless of experience level.
              </li>
              <li>
                <strong className="text-cream">Respect:</strong> Treat all participants, mentors,
                judges, and organizers with kindness and professionalism.
              </li>
              <li>
                <strong className="text-cream">Collaboration:</strong> Help others learn and grow
                while working together toward common goals.
              </li>
              <li>
                <strong className="text-cream">Integrity:</strong> Be honest in your work and
                respectful of others&apos; intellectual property.
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Expected Behavior",
        body: (
          <>
            <p>We expect all participants to:</p>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>
                Participate in an authentic and active way, contributing to the health and longevity
                of the community.
              </li>
              <li>Exercise consideration and respect in your speech and actions.</li>
              <li>Attempt collaboration before conflict.</li>
              <li>Refrain from demeaning, discriminatory, or harassing behavior and speech.</li>
              <li>Be mindful of your surroundings and of your fellow participants.</li>
              <li>
                Alert community leaders if you notice a dangerous situation, someone in distress, or
                violations of this Code of Conduct.
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Unacceptable Behavior",
        body: (
          <>
            <p>Unacceptable behaviors include, but are not limited to:</p>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>
                Intimidation, harassment, abuse, discrimination, derogatory or demeaning conduct.
              </li>
              <li>
                Offensive comments related to personal characteristics or choices, including those
                related to gender, gender identity, sexual orientation, race, religion, or
                disability.
              </li>
              <li>Inappropriate use of nudity and/or sexual images or language.</li>
              <li>Threats of violence or violent language directed against another person.</li>
              <li>Stalking or following someone without their consent.</li>
              <li>
                Harassing photography or recording, including logging online activity for harassment
                purposes.
              </li>
              <li>Sustained disruption of talks or other events.</li>
              <li>Unwelcome sexual attention or advances.</li>
              <li>Advocating for, or encouraging, any of the above behavior.</li>
            </ul>
          </>
        ),
      },
      {
        title: "Enforcement",
        body: (
          <>
            <p>
              Participants asked to stop any unacceptable behavior are expected to comply
              immediately. If a participant engages in unacceptable behavior, the organizers retain
              the right to take any actions to keep the event a welcoming environment for all
              participants.
            </p>
            <p className="mt-4">
              This includes warning the offender, expulsion from the hackathon with a report to
              parents/guardians/educational institutions, and/or reporting their behavior to local
              law enforcement / appropriate authorities.
            </p>
            <p className="mt-4">
              Organizers may take action to redress anything designed to, or with the clear impact
              of, disrupting the event or making the environment hostile for any participants.
            </p>
          </>
        ),
      },
      {
        title: "Reporting",
        body: (
          <>
            <p>
              If you are subject to or witness unacceptable behavior, or have any other concerns,
              please notify a hackathon organizer as soon as possible. You can also contact us via
              email at any time, at{" "}
              <a
                href={`mailto:${conductEmail}`}
                className="inline-flex items-center gap-1.5 rounded border border-cyber/30 bg-cyber/10 px-2 py-0.5 font-mono text-xs text-cyber transition-all duration-300 hover:border-cyber/50 hover:bg-cyber/20"
              >
                {conductEmail}
              </a>
              .
            </p>
            <p className="mt-4">
              All reports will be handled with discretion and confidentiality. We will investigate
              promptly and thoroughly, and take appropriate action based on the circumstances.
            </p>
            <p className="mt-4">In your report, please include:</p>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>Your contact information</li>
              <li>Names (real, nicknames, or pseudonyms) of any individuals involved</li>
              <li>Description of the incident</li>
              <li>Date and time of the incident</li>
              <li>Any additional context or evidence</li>
            </ul>
          </>
        ),
      },
      {
        title: "This Policy",
        body: (
          <>
            <p>
              Hack Costa Rica reserves the right to amend, modify, or update this Code of Conduct,
              as well as any and all other policies, guidelines, or terms, at any time without prior
              notice. Changes will become effective immediately upon posting to our website or
              communication through official channels.
            </p>
            <p className="mt-4">
              Continued participation in HackCR events constitutes acceptance of any revised
              policies. We encourage all participants to review our policies periodically to stay
              informed of any updates.
            </p>
            <p className="mt-4">
              The HackCR Leads and Organizing Team reserve the right and authority to interpret this
              Code of Conduct, including what constitutes the spirit of the conduct, and may issue
              violations when behavior violates the spirit of this code even if it does not
              explicitly violate the text.
            </p>
          </>
        ),
      },
    ],
    contactTitle: "Questions or Concerns?",
    contactDescription:
      "If you have any questions about this Code of Conduct, or need to report an incident, please don't hesitate to reach out to our team.",
  },
  es: {
    currentDate: "7 de abril de 2026",
    lastUpdatedPrefix: "Última actualización:",
    introTitle: "Un espacio seguro para todas las personas",
    introDescription:
      "Hack Costa Rica está comprometido con ofrecer una experiencia libre de acoso para todas las personas. Damos la bienvenida a participantes de todos los orígenes e identidades.",
    protectedCharacteristicsLabel: "Esto incluye, entre otros aspectos",
    protectedCharacteristics: [
      "Género",
      "Identidad de género",
      "Edad",
      "Orientación sexual",
      "Discapacidad",
      "Apariencia física",
      "Tamaño corporal",
      "Raza",
      "Etnia",
      "Nacionalidad",
      "Religión",
      "Preferencias tecnológicas",
    ],
    sections: [
      {
        title: "Nuestros valores",
        body: (
          <>
            <p>
              Creemos en construir una comunidad donde todas las personas se sientan bienvenidas
              para aprender, crear y colaborar. Nuestro hackathon se basa en estos principios:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>
                <strong className="text-cream">Inclusión:</strong> Todas las personas tienen algo
                valioso que aportar, sin importar su nivel de experiencia.
              </li>
              <li>
                <strong className="text-cream">Respeto:</strong> Trata con amabilidad y
                profesionalismo a participantes, mentores, jueces y organizadores.
              </li>
              <li>
                <strong className="text-cream">Colaboración:</strong> Ayuda a otras personas a
                aprender y crecer mientras trabajan juntas hacia objetivos comunes.
              </li>
              <li>
                <strong className="text-cream">Integridad:</strong> Sé honesto con tu trabajo y
                respetuoso con la propiedad intelectual de las demás personas.
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Comportamiento esperado",
        body: (
          <>
            <p>Esperamos que todas las personas participantes:</p>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>
                Participen de forma auténtica y activa, contribuyendo a la salud y permanencia de la
                comunidad.
              </li>
              <li>Actúen con consideración y respeto en sus palabras y acciones.</li>
              <li>Intenten colaborar antes de escalar un conflicto.</li>
              <li>
                Se abstengan de comportamientos o expresiones degradantes, discriminatorias o de
                acoso.
              </li>
              <li>Sean conscientes de su entorno y de las demás personas participantes.</li>
              <li>
                Alerten a líderes de la comunidad si notan una situación peligrosa, a alguien en
                situación de angustia o violaciones a este Código de Conducta.
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Comportamiento inaceptable",
        body: (
          <>
            <p>Los comportamientos inaceptables incluyen, entre otros:</p>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>
                Intimidación, acoso, abuso, discriminación o conducta despectiva o degradante.
              </li>
              <li>
                Comentarios ofensivos relacionados con características personales o decisiones,
                incluidas las relacionadas con género, identidad de género, orientación sexual,
                raza, religión o discapacidad.
              </li>
              <li>Uso inapropiado de desnudez y/o imágenes o lenguaje sexual.</li>
              <li>Amenazas de violencia o lenguaje violento dirigido a otra persona.</li>
              <li>Perseguir o seguir a alguien sin su consentimiento.</li>
              <li>
                Fotografía o grabación con fines de acoso, incluyendo registrar actividad en línea
                para acosar.
              </li>
              <li>Interrupción sostenida de charlas u otras actividades.</li>
              <li>Atención o insinuaciones sexuales no deseadas.</li>
              <li>Promover o alentar cualquiera de las conductas anteriores.</li>
            </ul>
          </>
        ),
      },
      {
        title: "Aplicación",
        body: (
          <>
            <p>
              Se espera que cualquier participante a quien se le solicite detener un comportamiento
              inaceptable cumpla de inmediato. Si una persona participante incurre en comportamiento
              inaceptable, la organización se reserva el derecho de tomar cualquier medida necesaria
              para mantener el evento como un entorno acogedor para todas las personas.
            </p>
            <p className="mt-4">
              Esto incluye advertencias, expulsión del hackathon con reporte a madres, padres,
              encargados o instituciones educativas, y/o el reporte de la conducta a autoridades
              locales o competentes, según corresponda.
            </p>
            <p className="mt-4">
              La organización puede actuar para corregir cualquier conducta diseñada para
              interrumpir el evento o que tenga el efecto claro de volver hostil el ambiente para
              otras personas participantes.
            </p>
          </>
        ),
      },
      {
        title: "Reportes",
        body: (
          <>
            <p>
              Si eres objeto o testigo de un comportamiento inaceptable, o tienes cualquier otra
              preocupación, por favor avisa a una persona organizadora del hackathon lo antes
              posible. También puedes escribirnos en cualquier momento a{" "}
              <a
                href={`mailto:${conductEmail}`}
                className="inline-flex items-center gap-1.5 rounded border border-cyber/30 bg-cyber/10 px-2 py-0.5 font-mono text-xs text-cyber transition-all duration-300 hover:border-cyber/50 hover:bg-cyber/20"
              >
                {conductEmail}
              </a>
              .
            </p>
            <p className="mt-4">
              Todos los reportes serán tratados con discreción y confidencialidad. Investigaremos
              con prontitud y profundidad, y tomaremos las medidas apropiadas según las
              circunstancias.
            </p>
            <p className="mt-4">En tu reporte, incluye:</p>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>Tu información de contacto</li>
              <li>Nombres (reales, apodos o seudónimos) de las personas involucradas</li>
              <li>Descripción del incidente</li>
              <li>Fecha y hora del incidente</li>
              <li>Cualquier contexto o evidencia adicional</li>
            </ul>
          </>
        ),
      },
      {
        title: "Esta política",
        body: (
          <>
            <p>
              Hack Costa Rica se reserva el derecho de enmendar, modificar o actualizar este Código
              de Conducta, así como cualquier otra política, lineamiento o término, en cualquier
              momento y sin previo aviso. Los cambios serán efectivos inmediatamente tras su
              publicación en nuestro sitio web o su comunicación por canales oficiales.
            </p>
            <p className="mt-4">
              La participación continua en eventos de HackCR constituye aceptación de las políticas
              revisadas. Recomendamos a todas las personas participantes revisar nuestras políticas
              periódicamente para mantenerse informadas sobre cualquier actualización.
            </p>
            <p className="mt-4">
              Las personas líderes y el equipo organizador de HackCR se reservan el derecho y la
              autoridad de interpretar este Código de Conducta, incluyendo qué constituye el
              espíritu del código, y pueden emitir sanciones cuando una conducta viole ese espíritu
              aunque no infrinja explícitamente el texto.
            </p>
          </>
        ),
      },
    ],
    contactTitle: "¿Preguntas o preocupaciones?",
    contactDescription:
      "Si tienes alguna pregunta sobre este Código de Conducta, o necesitas reportar un incidente, no dudes en escribirnos.",
  },
};
