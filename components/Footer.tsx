
import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToCabinet = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
       const element = document.getElementById('le-cabinet');
       if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
       navigate('/#le-cabinet');
    }
  };

  return (
    <footer className="bg-sage-900 text-sage-50 py-12 border-t border-sage-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="font-serif text-2xl mb-4">Kine Rolampont</h4>
            <p className="text-sage-200 text-sm leading-relaxed">
              Un espace dédié à votre santé, votre mouvement et votre bien-être.
              Soins conventionnés et séances bien-être personnalisées.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold mb-4 text-white">Navigation</h5>
            <ul className="space-y-2 text-sm text-sage-200">
              <li><a href="/#le-cabinet" onClick={handleScrollToCabinet} className="hover:text-white transition-colors">Le Cabinet</a></li>
              <li><NavLink to="/nos-soins" className="hover:text-white transition-colors">Nos Soins</NavLink></li>
              <li><NavLink to="/tarifs" className="hover:text-white transition-colors">Tarifs</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition-colors">Contact</NavLink></li>
            </ul>
          </div>

          <div>
             <h5 className="font-bold mb-4 text-white">Coordonnées</h5>
             <address className="not-italic text-sm text-sage-200 space-y-2">
               <p>2 rue de la Mairie</p>
               <p>52260 Rolampont</p>
               <p className="pt-2">Lundi - Vendredi: 8h - 19h</p>
               <p>Samedi - Dimanche: Fermé</p>
             </address>
          </div>
        </div>

        <div className="pt-8 border-t border-sage-800 text-xs text-sage-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col gap-1">
            <p>© {new Date().getFullYear()} Cabinet de Kinésithérapie de Rolampont.</p>
            <p className="flex items-center gap-1">
              Fait avec <Heart size={10} className="text-red-400 fill-red-400" /> par <a href="https://monarkup.com" target="_blank" rel="noopener noreferrer" className="hover:text-white underline transition-colors">Monarkup</a>
            </p>
          </div>
          <div className="text-center md:text-right">
            <p>Site édité par Mauricia Guenengaye — Masseur-Kinésithérapeute D.E.</p>
            <p>Conformément au RGPD, aucune donnée personnelle n’est conservée sans consentement.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
