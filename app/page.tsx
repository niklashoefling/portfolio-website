import type { Metadata } from 'next';
import Hero from '@/app/components/Hero';
import Navbar from '@/app/components/Navbar';
import About from '@/app/components/About';
import Experience from '@/app/components/Experience';
import Projects from '@/app/components/Projects';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'Niklas Höfling - Resume',
  description:
    'Resume of Niklas Höfling, dual student Business Information Systems at SAP Germany.',
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="home" className="pt-16 -mt-16">
        <Hero />
      </div>
      <div id="about" className="pt-16 -mt-16">
        <About />
      </div>
      <div id="experience" className="pt-16 -mt-16">
        <Experience />
      </div>
      <div id="projects" className="pt-16 -mt-16">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
