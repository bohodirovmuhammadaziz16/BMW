/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { NewModelsSection } from './components/NewModelsSection';
import { HeritageCarouselSection } from './components/HeritageCarouselSection';
import { HistorySection } from './components/HistorySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [preselectedModel, setPreselectedModel] = useState<string>('');

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#07080A] text-white font-sans">
        <Navbar />
        <main>
          <HeroSection />
          <NewModelsSection />
          <HeritageCarouselSection onSelectModelForContact={setPreselectedModel} />
          <HistorySection />
          <ContactSection preselectedModel={preselectedModel} />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
