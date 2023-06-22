import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

import HeroImg from './assets/hero.jpg';

export default function App() {
  return (
    <div
      className="min-h-screen flex flex-col bg-teal-500 text-white"
      style={{
        background: `url(${HeroImg}) no-repeat center/cover`,
      }}
    >
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
