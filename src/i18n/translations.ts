export const translations = {
  en: {
    hero: {
      title: 'Agent Coding',
      subtitle: 'Human Strategy. AI Tactics. Production Quality.',
      cta: 'Get Started'
    },
    features: {
      title: 'Why Agent Coding?'
    },
    carousel: {
      title: 'Core Principles',
      slides: [
        { title: 'Developers Architect', desc: 'Your value is in design decisions, not syntax. Focus on what matters.' },
        { title: 'Autonomy with Guardrails', desc: 'Agents are powerful but operate within clear boundaries and permissions.' },
        { title: 'Evidence Over Trust', desc: 'Every change proves itself through comprehensive tests and verification.' },
        { title: 'Iterative Refinement', desc: 'Agents observe outcomes and self-correct based on feedback loops.' },
        { title: 'Production Quality', desc: 'Mandatory reviews and automated gates ensure enterprise-grade results.' }
      ]
    },
    cta: {
      title: 'Get Involved',
      discord: 'Join Discord',
      github: 'View on GitHub',
      twitter: 'Follow on X'
    }
  },
  it: {
    hero: {
      title: 'Agent Coding',
      subtitle: 'Strategia Umana. Tattiche AI. Qualità Produttiva.',
      cta: 'Inizia Ora'
    },
    features: {
      title: 'Perché Agent Coding?'
    },
    carousel: {
      title: 'Principi Fondamentali',
      slides: [
        { title: 'Sviluppatori Architetti', desc: 'Il tuo valore sta nelle decisioni di design, non nella sintassi.' },
        { title: 'Autonomia con Limiti', desc: 'Gli agenti sono potenti ma operano entro confini e permessi chiari.' },
        { title: 'Evidenza Oltre Fiducia', desc: 'Ogni modifica si dimostra attraverso test e verifiche complete.' },
        { title: 'Perfezionamento Iterativo', desc: 'Gli agenti osservano i risultati e si auto-correggono.' },
        { title: 'Qualità Produttiva', desc: 'Revisioni obbligatorie e gate automatici garantiscono risultati enterprise.' }
      ]
    },
    cta: {
      title: 'Partecipa',
      discord: 'Unisciti a Discord',
      github: 'Vedi su GitHub',
      twitter: 'Seguici su X'
    }
  }
} as const;

export type Locale = keyof typeof translations;
