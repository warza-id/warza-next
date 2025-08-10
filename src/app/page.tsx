import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Products from '@/components/landing/products';
import Pricing from '@/components/landing/pricing';
import Testimonials from '@/components/landing/testimonials';
import Contact from '@/components/landing/contact';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
