import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-teal-500 text-white">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
