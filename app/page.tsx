import Hero from '@/components/Hero';
import Products from '@/components/Products';
import UseCases from '@/components/UseCases';
import Academy from '@/components/Academy';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Products />
      <UseCases />
      <Academy />
      <Footer />
    </main>
  );
}
