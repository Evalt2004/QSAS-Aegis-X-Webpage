export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-white px-6 py-28"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <p
            className="text-xs font-sans font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: '#6F6F6F' }}
          >
            Who We Are
          </p>
          <h2
            className="font-serif font-normal mb-6"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              letterSpacing: '-1.2px',
              color: '#000000',
              lineHeight: 1.1,
            }}
          >
            Built to protect what{' '}
            <span style={{ color: '#6F6F6F', fontStyle: 'italic' }}>
              matters most.
            </span>
          </h2>
          <p
            className="font-sans text-base leading-relaxed mb-5"
            style={{ color: '#6F6F6F' }}
          >
            David Carealle Digital Services Private Limited is an emerging
            technology company focused on cybersecurity intelligence and
            AI-powered developer tools. We believe that security should be
            proactive, not reactive.
          </p>
          <p
            className="font-sans text-base leading-relaxed"
            style={{ color: '#6F6F6F' }}
          >
            Our flagship product, QSAS, combines quantum-inspired threat
            modelling with local large language models to simulate the adversary
            before the adversary simulates you.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8">
          {[
            { value: '01',    label: 'Flagship product shipped' },
            { value: 'API',   label: 'Services available now'   },
            { value: 'LLM',   label: 'On-premise, private AI'   },
            { value: '∞',     label: 'Attack branches simulated' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-2">
              <span
                className="font-serif font-normal"
                style={{
                  fontSize: '2.5rem',
                  color: '#000000',
                  letterSpacing: '-1px',
                }}
              >
                {s.value}
              </span>
              <span
                className="font-sans text-sm leading-snug"
                style={{ color: '#6F6F6F' }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
