export const translations = {
  en: {
    hero: {
      title: 'Agent Coding',
      subtitle: 'Human Strategy. AI Tactics. Production Quality.',
      cta: 'Join the Movement'
    },
    text: {
      title: 'A New Paradigm',
      content: 'Software development is at a crossroads. Vibe coding promises speed but delivers technical debt. Traditional coding offers control but sacrifices velocity. We need a third way.'
    },
    carousel: {
      title: 'Core Principles',
      slides: [
        { title: 'Developers Architect', desc: 'Your value is in design decisions, not syntax' },
        { title: 'Autonomy with Guardrails', desc: 'Agents should be powerful but bounded' },
        { title: 'Evidence Over Trust', desc: 'Every change must prove itself through tests' }
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
      cta: 'Unisciti al Movimento'
    },
    text: {
      title: 'Un Nuovo Paradigma',
      content: 'Lo sviluppo software è a un bivio. Il vibe coding promette velocità ma genera debito tecnico. La programmazione tradizionale offre controllo ma sacrifica la velocità. Serve una terza via.'
    },
    carousel: {
      title: 'Principi Fondamentali',
      slides: [
        { title: 'Sviluppatori Architetti', desc: 'Il tuo valore sta nelle decisioni di design, non nella sintassi' },
        { title: 'Autonomia con Limiti', desc: 'Gli agenti devono essere potenti ma vincolati' },
        { title: 'Evidenza Oltre Fiducia', desc: 'Ogni modifica deve dimostrarsi attraverso i test' }
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
