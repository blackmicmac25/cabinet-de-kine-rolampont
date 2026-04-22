
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import Rates from './pages/Rates';
import Contact from './pages/Contact';
import Pilates from './pages/Pilates';
import BookingModal from './components/BookingModal';
import { Practitioner } from './types';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    // Only scroll to top if not a hash link
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
};

const practitioners: Practitioner[] = [
  {
    id: '1',
    name: 'Mauricia Guenengaye',
    role: 'Masseur-Kinésithérapeute D.E.',
    description: 'Spécialisée en sport et thérapie manuelle.',
    maiiaUrl: 'https://www.maiia.com/masseur-kinesitherapeute/52260-rolampont/guenengaye-mauricia',
    image: 'https://www.maiia.com/files/625a1346-40f5-4f2b-b6b5-9a970f4884fc-photo-mauricia.jpg',
  },
  {
    id: '2',
    name: 'Eline Henriot',
    role: 'Collaboratrice',
    description: 'Spécialisée en posture et pédiatrie.',
    maiiaUrl: 'https://www.maiia.com/masseur-kinesitherapeute/52260-rolampont/henriot-eline',
    image: 'https://jhm.fr/wp-content/uploads/2025/02/875105.HR_-1024x683.jpg',
  }
];

const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const toggleBooking = () => setIsBookingOpen(!isBookingOpen);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-stone-50 selection:bg-sage-200 selection:text-sage-900">
        <Navbar onBookClick={toggleBooking} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onBookClick={toggleBooking} />} />
            <Route path="/nos-soins" element={<Treatments />} />
            <Route path="/mau-pilates" element={<Pilates onBookClick={toggleBooking} />} />
            <Route path="/tarifs" element={<Rates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        
        <BookingModal 
          isOpen={isBookingOpen} 
          onClose={() => setIsBookingOpen(false)}
          practitioners={practitioners}
        />
      </div>
    </Router>
  );
};

export default App;
