import React from 'react';
import { CartProvider } from './context/CartContext.jsx';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { TrustStrip } from './components/TrustStrip.jsx';
import { ProductSection } from './components/ProductSection.jsx';
import { BatchReport } from './components/BatchReport.jsx';
import { Process } from './components/Process.jsx';
import { About } from './components/About.jsx';
import { FAQ } from './components/FAQ.jsx';
import { Footer } from './components/Footer.jsx';
import { CartDrawer } from './components/CartDrawer.jsx';
import { Toast } from './components/Toast.jsx';
import { useCart } from './hooks/useCart.js';

const MainContent = () => {
  const { toastMessage, hideToast } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-salt text-date-brown">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <ProductSection />
        <BatchReport />
        <Process />
        <About />
        <FAQ />
      </main>
      <Footer />
      <CartDrawer />
      <Toast message={toastMessage} onClose={hideToast} />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainContent />
    </CartProvider>
  );
}
