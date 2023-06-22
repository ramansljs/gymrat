import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

import HeroImg from './assets/hero.jpg';

export default function App() {
  return (
    <div
      className="min-h-screen flex flex-col text-white"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImg}) no-repeat center/cover`,
      }}
    >
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
