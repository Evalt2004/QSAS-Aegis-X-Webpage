import './index.css'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import QsasSection    from './components/QsasSection'
import ApiSection     from './components/ApiSection'
import AboutSection   from './components/AboutSection'
import EmbedSection   from './components/EmbedSection'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <QsasSection />
      <ApiSection />
      <AboutSection />
      <EmbedSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-black px-6 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs" style={{ color: '#6F6F6F' }}>
            © {new Date().getFullYear()} David Carealle Digital Services Private Limited
          </p>
          <p className="font-sans text-xs" style={{ color: '#6F6F6F' }}>
            India · Cybersecurity · AI APIs
          </p>
        </div>
      </footer>
    </div>
  )
}
