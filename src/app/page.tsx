import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Work from '@/components/Work/Work';
import Engagement from '@/components/Engagement/Engagement';
import Founder from '@/components/Founder/Founder';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Engagement />
      <Founder />
      <Contact />
    </>
  );
}
