import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';
import Partners from '@/components/sections/Partners';
import Press from '@/components/sections/Press';
import ClosingCTA from '@/components/sections/ClosingCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Team />
        <Partners />
        <Press />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
