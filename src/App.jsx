import { LanguageProvider } from './contexts/LanguageContext';
import AppLoader from './components/AppLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <LanguageProvider>
      <AppLoader>
        <div className="min-h-screen bg-white font-sans px-0 md:px-8 lg:px-16 pt-12 md:pt-0">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
        </div>
      </AppLoader>
    </LanguageProvider>
  );
}

export default App;
