import { useRef } from 'react'

export default function EmbedSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  function openFullscreen() {
    const el = containerRef.current
    if (!el) return

    if (el.requestFullscreen) {
      el.requestFullscreen()
    } else if ((el as any).webkitRequestFullscreen) {
      ;(el as any).webkitRequestFullscreen()   // Safari
    } else if ((el as any).mozRequestFullScreen) {
      ;(el as any).mozRequestFullScreen()      // Firefox legacy
    } else if ((el as any).msRequestFullscreen) {
      ;(el as any).msRequestFullscreen()       // IE/Edge legacy
    }
  }

  return (
    <section className="w-full bg-white px-4 pt-14 pb-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

        <p
          className="text-xs font-sans font-medium tracking-[0.2em] uppercase mb-4"
          style={{ color: '#6F6F6F' }}
        >
          Product Overview
        </p>

        {/* Title row + fullscreen button */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <h2
            className="font-serif font-normal"
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              letterSpacing: '-1.2px',
              color: '#000000',
              lineHeight: 1.1,
            }}
          >
            QSAS Aegis-X —{' '}
            <span style={{ color: '#6F6F6F', fontStyle: 'italic' }}>
              in depth.
            </span>
          </h2>

          <button
            onClick={openFullscreen}
            className="flex items-center gap-2 font-sans font-medium text-sm
                       rounded-full px-5 py-2.5 border transition-all duration-200
                       hover:scale-[1.04] hover:bg-black hover:text-white hover:border-black
                       flex-shrink-0"
            style={{
              backgroundColor: 'transparent',
              color: '#000000',
              borderColor: '#000000',
            }}
            title="Open fullscreen"
          >
            {/* Expand icon */}
            <svg
              width="15" height="15" viewBox="0 0 15 15"
              fill="none" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 1h4.5M1 1v4.5M1 1l5 5M14 1h-4.5M14 1v4.5M14 1l-5 5M1 14h4.5M1 14v-4.5M1 14l5-5M14 14h-4.5M14 14v-4.5M14 14l-5-5"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
              />
            </svg>
            Fullscreen
          </button>
        </div>

        {/* Embed container — also the fullscreen target */}
        <div
          ref={containerRef}
          className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
          style={{ height: '93vh', minHeight: '700px' }}
        >
          <iframe
            src="https://gamma.app/embed/qurjpdxi23cpc1u"
            style={{ width: '100%', height: '100%', display: 'block', border: 'none' }}
            allow="fullscreen"
            title="QSAS Aegis-X"
          />
        </div>

      </div>
    </section>
  )
}
