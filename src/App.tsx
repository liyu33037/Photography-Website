/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-midnight relative overflow-x-hidden">
      <div className="aurora-bg fixed inset-0 z-0 pointer-events-none opacity-80" />
      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero />
        <Gallery />
        <Services />
        <BookingForm />
        <About />
      </main>
      <Footer />
    </div>
  );
}
