export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full px-6 py-28"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="max-w-3xl mx-auto text-center">

        <p
          className="text-xs font-sans font-medium tracking-[0.2em] uppercase mb-6"
          style={{ color: '#6F6F6F' }}
        >
          Get In Touch
        </p>

        <h2
          className="font-serif font-normal mb-6"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            letterSpacing: '-1.5px',
            color: '#FFFFFF',
            lineHeight: 1.05,
          }}
        >
          Ready to secure your{' '}
          <span style={{ color: '#6F6F6F', fontStyle: 'italic' }}>future?</span>
        </h2>

        <p
          className="font-sans text-base sm:text-lg leading-relaxed mb-12"
          style={{ color: '#6F6F6F' }}
        >
          Whether you want early access to QSAS, API integration support, or
          just want to learn more — we'd love to hear from you.
        </p>

        <a
          href="mailto:evaltdavid2020@gmail.com"
          className="inline-flex items-center font-sans font-medium text-base no-underline
                     rounded-full px-14 py-5 transition-transform duration-200
                     hover:scale-[1.03]"
          style={{ backgroundColor: '#FFFFFF', color: '#000000' }}
        >
          Email Us
        </a>

        <p
          className="font-sans text-xs mt-8"
          style={{ color: '#6F6F6F' }}
        >
          David Carealle Digital Services Private Limited
        </p>

      </div>
    </section>
  )
}
