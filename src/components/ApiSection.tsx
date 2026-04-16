const endpoints = [
  { method: 'POST', path: '/api/qsas/simulate',    desc: 'Run a full adversary simulation against a provided system state.' },
  { method: 'POST', path: '/api/qsas/predict',     desc: "Predict the attacker's most likely next move from current context." },
  { method: 'POST', path: '/api/arch/generate',    desc: 'Generate a neural network architecture JSON from a task description.' },
  { method: 'POST', path: '/api/arch/validate',    desc: 'Validate and normalise a PyTorch architecture specification.' },
  { method: 'POST', path: '/api/arch/smoke_test',  desc: 'Validate and run a single training step to confirm the model builds.' },
]

const methodColor: Record<string, string> = {
  GET:    '#22863a',
  POST:   '#0366d6',
  DELETE: '#cb2431',
}

export default function ApiSection() {
  return (
    <section
      id="api"
      className="w-full px-6 py-28"
      style={{ backgroundColor: '#F8F8F8' }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs font-sans font-medium tracking-[0.2em] uppercase mb-4"
            style={{ color: '#6F6F6F' }}
          >
            Developer Platform
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
            API Services
          </h2>
          <p
            className="font-sans text-base sm:text-lg max-w-xl mt-6 leading-relaxed"
            style={{ color: '#6F6F6F' }}
          >
            Every capability we build is accessible as a clean REST API.
            Integrate adversary simulation and architecture intelligence
            directly into your products.
          </p>
        </div>

        {/* Endpoint list */}
        <div className="flex flex-col gap-3">
          {endpoints.map((ep) => (
            <div
              key={ep.path}
              className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white
                         border border-gray-100 rounded-xl px-6 py-5
                         hover:border-gray-300 transition-colors duration-200"
            >
              <span
                className="font-sans text-xs font-semibold tracking-wider uppercase
                           rounded px-2 py-1 flex-shrink-0"
                style={{
                  color: methodColor[ep.method] ?? '#000',
                  backgroundColor: methodColor[ep.method]
                    ? `${methodColor[ep.method]}11`
                    : '#f0f0f0',
                }}
              >
                {ep.method}
              </span>
              <code
                className="font-mono text-sm flex-shrink-0"
                style={{ color: '#000000' }}
              >
                {ep.path}
              </code>
              <span
                className="font-sans text-sm leading-relaxed sm:ml-auto text-left sm:text-right"
                style={{ color: '#6F6F6F' }}
              >
                {ep.desc}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex gap-4 flex-wrap">
          <a
            href="#contact"
            className="inline-flex items-center font-sans font-medium text-sm no-underline
                       rounded-full px-10 py-4 transition-transform duration-200
                       hover:scale-[1.03]"
            style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
          >
            Get API Access
          </a>
          <a
            href="#contact"
            className="inline-flex items-center font-sans font-medium text-sm no-underline
                       rounded-full px-10 py-4 border transition-transform duration-200
                       hover:scale-[1.03]"
            style={{
              backgroundColor: 'transparent',
              color: '#000000',
              borderColor: '#000000',
            }}
          >
            View Docs
          </a>
        </div>

      </div>
    </section>
  )
}
