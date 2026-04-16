const features = [
  {
    title: 'Quantum Branch Generation',
    desc: 'Generates exponential attack-path trees inspired by quantum superposition — covering threat scenarios a linear model would miss.',
  },
  {
    title: 'LLM-Powered Reasoning',
    desc: 'Uses a local Mistral model via Ollama to predict attacker next moves and propose targeted defensive countermeasures.',
  },
  {
    title: 'Real-Time State Parsing',
    desc: 'Accepts manual input or structured JSON system states and instantly maps vulnerabilities across your attack surface.',
  },
  {
    title: 'API-First Architecture',
    desc: 'Every QSAS capability is exposed as a clean REST endpoint — integrate adversary simulation directly into your security pipeline.',
  },
]

export default function QsasSection() {
  return (
    <section
      id="qsas"
      className="w-full bg-white px-6 py-28"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p
            className="text-xs font-sans font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: '#6F6F6F' }}
          >
            Flagship Product
          </p>
          <h2
            className="font-serif font-normal"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              letterSpacing: '-1.5px',
              color: '#000000',
              lineHeight: 1.05,
            }}
          >
            QSAS —{' '}
            <span style={{ color: '#6F6F6F', fontStyle: 'italic' }}>
              Quantum Strategic
            </span>{' '}
            Adversary Simulator
          </h2>
          <p
            className="font-sans text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
            style={{ color: '#6F6F6F' }}
          >
            A next-generation cybersecurity prototype that simulates attacker
            behaviour across quantum-inspired future branches — so you can
            defend before the breach.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white p-10 flex flex-col gap-4 hover:bg-gray-50 transition-colors duration-200"
            >
              <div
                className="w-8 h-px"
                style={{ backgroundColor: '#000000' }}
              />
              <h3
                className="font-serif font-normal text-xl"
                style={{ color: '#000000', letterSpacing: '-0.5px' }}
              >
                {f.title}
              </h3>
              <p
                className="font-sans text-sm leading-relaxed"
                style={{ color: '#6F6F6F' }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center font-sans font-medium text-sm no-underline
                       rounded-full px-10 py-4 transition-transform duration-200
                       hover:scale-[1.03]"
            style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
          >
            Request QSAS Access
          </a>
        </div>

      </div>
    </section>
  )
}
