import { useEffect, useRef } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

const FADE_DURATION = 0.5   // seconds
const LOOP_DELAY_MS = 100   // ms between end and restart

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef   = useRef<number>(0)

  /* ----------------------------------------------------------
     Manual looping with fade-in / fade-out
  ---------------------------------------------------------- */
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    function tick() {
      if (!video || video.paused || !video.duration) {
        rafRef.current = requestAnimationFrame(tick)
        return
      }

      const t   = video.currentTime
      const dur = video.duration

      if (t < FADE_DURATION) {
        // Fade in
        video.style.opacity = String(t / FADE_DURATION)
      } else if (t > dur - FADE_DURATION) {
        // Fade out
        video.style.opacity = String((dur - t) / FADE_DURATION)
      } else {
        video.style.opacity = '1'
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    function handleEnded() {
      if (!video) return
      video.style.opacity = '0'
      setTimeout(() => {
        if (!video) return
        video.currentTime = 0
        video.play().catch(() => {/* autoplay blocked */})
      }, LOOP_DELAY_MS)
    }

    video.addEventListener('ended', handleEnded)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: 'calc(100vh - 84px)' }}
    >
      {/* ── Video background ─────────────────────────────────── */}
      <div
        className="absolute inset-x-0 bottom-0 z-0 overflow-hidden"
        style={{ top: '300px' }}
      >
        <video
          ref={videoRef}
          src={VIDEO_URL}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 0 }}
        />
      </div>

      {/* ── Gradient overlays ────────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* top fade */}
        <div
          className="absolute inset-x-0 top-0 h-72"
          style={{
            background:
              'linear-gradient(to bottom, #ffffff 0%, transparent 100%)',
          }}
        />
        {/* bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-72"
          style={{
            background:
              'linear-gradient(to top, #ffffff 0%, transparent 100%)',
          }}
        />
      </div>

      {/* ── Hero content ─────────────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ paddingTop: 'calc(8rem - 75px)', paddingBottom: '10rem' }}
      >
        {/* Eyebrow */}
        <p
          className="animate-fade-rise text-xs font-sans font-medium tracking-[0.2em] uppercase mb-6"
          style={{ color: '#6F6F6F' }}
        >
          David Carealle Digital Services Pvt. Ltd.
        </p>

        {/* Headline */}
        <h1
          className="animate-fade-rise font-serif font-normal max-w-5xl"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5rem)',
            lineHeight: 0.95,
            letterSpacing: '-2.46px',
            color: '#000000',
          }}
        >
          Beyond intelligence,{' '}
          <span style={{ color: '#6F6F6F', fontStyle: 'italic' }}>
            we secure
          </span>{' '}
          the digital frontier.
        </h1>

        {/* Sub-headline */}
        <p
          className="animate-fade-rise-delay font-sans text-base sm:text-lg max-w-2xl mt-8 leading-relaxed"
          style={{ color: '#6F6F6F' }}
        >
          Quantum-inspired adversary simulation, enterprise API services, and
          cybersecurity intelligence — built for makers who refuse to leave
          their systems undefended.
        </p>

        {/* CTA row */}
        <div className="animate-fade-rise-delay-2 flex flex-col sm:flex-row gap-4 mt-12">
          <a
            href="#qsas"
            className="inline-flex items-center justify-center font-sans font-medium
                       rounded-full px-14 py-5 text-base no-underline
                       transition-transform duration-200 hover:scale-[1.03]"
            style={{ backgroundColor: '#000000', color: '#FFFFFF' }}
          >
            Explore QSAS
          </a>
          <a
            href="#api"
            className="inline-flex items-center justify-center font-sans font-medium
                       rounded-full px-14 py-5 text-base no-underline border
                       transition-transform duration-200 hover:scale-[1.03]"
            style={{
              backgroundColor: 'transparent',
              color: '#000000',
              borderColor: '#000000',
            }}
          >
            View API Services
          </a>
        </div>

        {/* Scroll hint */}
        <div
          className="animate-fade-rise-delay-3 mt-16 flex flex-col items-center gap-2"
          style={{ color: '#6F6F6F' }}
        >
          <span className="text-xs font-sans tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-current opacity-30" />
        </div>
      </div>
    </section>
  )
}
