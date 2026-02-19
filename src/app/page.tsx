'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Team from '@/components/sections/Team';
import Partners from '@/components/sections/Partners';
import Press from '@/components/sections/Press';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Team />
        <Partners />
        <Press />
      </main>
      <Footer />
    </>
  );
}
