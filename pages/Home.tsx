
import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Activity, Hand, Wind, Heart, Play, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HomeProps {
  onBookClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onBookClick }) => {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const specialties = [
    { icon: Activity, title: 'Kinésithérapie du Sport', desc: 'Récupération, réathlétisation, prévention.' },
    { icon: Hand, title: 'Main, Poignet & Coude', desc: 'Expertise spécifique du membre supérieur.' },
    { icon: Heart, title: 'Périnée & Endométriose', desc: 'Accompagnement spécifique et respectueux.' },
    { icon: Wind, title: 'Respiratoire & Pilates', desc: 'Travail du souffle, gainage et posture.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center bg-stone-50 pt-20 lg:pt-0">
        
        {/* Abstract organic shape background */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#f0f4f0] rounded-bl-[10rem] -z-0 hidden lg:block" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <motion.div 
              style={{ opacity: opacityText }}
              className="space-y-8 max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-sage-400"></span>
                  <span className="text-sage-600 text-sm font-bold tracking-widest uppercase">
                    Cabinet de Kinésithérapie
                  </span>
                </div>
                
                <h1 className="font-serif text-5xl md:text-7xl text-sage-900 leading-[1.1] mb-6">
                  Le soin par le <br/>
                  <span className="italic text-sage-500 font-light relative">
                    mouvement
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-sage-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                  </span>.
                </h1>
                
                <p className="text-xl text-stone-800 leading-relaxed">
                  <span className="font-semibold text-sage-900">Mauricia Guenengaye & Eline Henriot.</span><br/>
                  <span className="text-sage-700 font-medium text-lg">Masseurs-Kinésithérapeutes Diplômées d’État.</span>
                </p>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-stone-500 leading-relaxed border-l-2 border-sage-200 pl-6"
              >
                « Prendre soin du mouvement, du souffle et du bien-être dans un cadre serein à Rolampont. »
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <button 
                  onClick={onBookClick}
                  className="group px-8 py-4 bg-sage-900 text-white rounded-full font-medium hover:bg-sage-800 transition-all shadow-xl shadow-sage-900/20 flex items-center gap-3"
                >
                  <span>Prendre rendez-vous</span>
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </button>
                <Link 
                  to="/nos-soins"
                  className="px-8 py-4 bg-transparent border border-sage-200 text-sage-900 rounded-full font-medium hover:bg-sage-50 transition-colors"
                >
                  Découvrir nos soins
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image Composition */}
            <motion.div 
              style={{ y: yImage }}
              className="relative mt-12 lg:mt-0 perspective-1000"
            >
               <motion.div
                 initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
                 transition={{ duration: 1.2, ease: "circOut" }}
                 className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sage-900/10 aspect-[3/4] max-w-md mx-auto"
               >
                 <div className="absolute inset-0 bg-sage-900/10 mix-blend-multiply z-10 pointer-events-none" />
                 <img 
                   src="https://images.pexels.com/photos/8219055/pexels-photo-8219055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                   alt="Séance de kinésithérapie, thérapie manuelle" 
                   className="w-full h-full object-cover"
                 />
                 
                 {/* Glass Badge 1 */}
                 <motion.div 
                   initial={{ x: -50, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.8, duration: 0.8 }}
                   className="absolute top-8 right-8 bg-white/30 backdrop-blur-md border border-white/40 p-4 rounded-2xl z-20 text-white"
                 >
                   <Sparkles className="w-6 h-6 text-white mb-1" />
                   <p className="text-xs font-medium">Cadre apaisant</p>
                 </motion.div>
               </motion.div>

               {/* Background Decorative Elements */}
               <motion.div 
                 animate={{ rotate: [0, 5, 0] }}
                 transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                 className="absolute top-10 right-10 w-full h-full border-2 border-sage-300 rounded-[2.5rem] -z-10 translate-x-4 translate-y-4" 
               />
               <div className="absolute -bottom-12 -left-4 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[240px]">
                 <div className="flex items-center gap-3 mb-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <p className="text-xs font-bold text-stone-400 uppercase tracking-wide">Disponible</p>
                 </div>
                 <p className="font-serif text-sage-900 text-lg leading-tight">
                   Rendez-vous simple et rapide sur Maiia.
                 </p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl text-sage-900 mb-8">Bienvenue au cabinet</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Situé au cœur de Rolampont, notre cabinet vous accueille dans une ambiance douce et chaleureuse. 
              Nous mettons notre expertise au service de votre santé, de votre mobilité et de votre bien-être.
            </p>
            <p className="text-stone-500">
              Nos séances sont adaptées à chaque patient — qu’il s’agisse de rééducation après une blessure, 
              d’un suivi sportif, ou d’un accompagnement plus global du corps.
            </p>
          </div>
        </div>
      </section>

      {/* INTEGRATED CABINET SECTION: TEAM */}
      <section id="le-cabinet" className="py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
             <div>
                <span className="text-sage-600 font-bold tracking-widest uppercase text-sm">Notre Équipe</span>
                <h2 className="font-serif text-4xl text-sage-900 mt-2">Vos Kinésithérapeutes</h2>
             </div>
             <p className="text-stone-500 max-w-md text-right md:text-left">
               Deux professionnelles passionnées pour un accompagnement complet.
             </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Mauricia */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="h-80 overflow-hidden relative group">
                 <div className="absolute inset-0 bg-sage-900/10 group-hover:bg-transparent transition-colors z-10" />
                 <img src="https://www.maiia.com/files/625a1346-40f5-4f2b-b6b5-9a970f4884fc-photo-mauricia.jpg" alt="Mauricia Guenengaye" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="font-serif text-2xl text-sage-900 mb-2">Mauricia Guenengaye</h3>
                <p className="text-sage-600 text-xs font-bold uppercase tracking-wide mb-6">Masseur-Kinésithérapeute D.E.</p>
                <div className="text-stone-600 leading-relaxed space-y-4">
                  <p>
                    Passionnée par le mouvement et la rééducation fonctionnelle, j’accompagne chaque patient avec une approche personnalisée et bienveillante.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Eline */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="h-80 overflow-hidden relative group">
                 <div className="absolute inset-0 bg-sage-900/10 group-hover:bg-transparent transition-colors z-10" />
                 <img src="https://jhm.fr/wp-content/uploads/2025/02/875105.HR_-1024x683.jpg" alt="Eline Henriot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="font-serif text-2xl text-sage-900 mb-2">Eline Henriot</h3>
                <p className="text-sage-600 text-xs font-bold uppercase tracking-wide mb-6">Masseur-Kinésithérapeute D.E. — Collaboratrice</p>
                <p className="text-stone-600 leading-relaxed">
                  Formée à différentes techniques de rééducation et de bien-être, j’accorde une grande importance à la prévention, la posture et la reprise d’activité en toute sécurité.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTEGRATED CABINET SECTION: THE PLACE */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-sage-900 text-sage-50 rounded-[3rem] p-10 md:p-20 overflow-hidden relative">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl mb-6">Le Lieu</h2>
              <p className="text-sage-200 text-lg mb-8 leading-relaxed">
                Le cabinet se situe au 2 rue de la mairie à Rolampont. Une salle lumineuse, du matériel moderne et une ambiance naturelle favorisent la détente pendant les soins.
              </p>
              <ul className="space-y-4 text-sage-100">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-sage-400 rounded-full"></span>
                  Environnement calme
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-sage-400 rounded-full"></span>
                  Accessible PMR
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-sage-400 rounded-full"></span>
                  Parking facile
                </li>
              </ul>
            </div>
            <div className="h-80 md:h-[400px] rounded-2xl overflow-hidden border border-sage-700 relative">
               <img src="https://i.ibb.co/8Lz0b4pN/6563919013293198839.jpg" alt="Cabinet intérieur" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
               <h2 className="font-serif text-4xl text-sage-900 mb-4">Nos domaines d'expertise</h2>
               <p className="text-stone-500 max-w-md">Une prise en charge globale adaptée à vos besoins spécifiques.</p>
            </div>
            <Link to="/nos-soins" className="group flex items-center gap-2 text-sage-700 font-medium hover:text-sage-900 transition-colors">
              Voir tous les soins
              <span className="block w-6 h-px bg-sage-700 group-hover:w-10 transition-all"></span>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((spec, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-stone-50 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-sage-100/50 transition-all duration-300 border border-transparent hover:border-sage-100"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-sage-600 mb-6 group-hover:scale-110 transition-transform shadow-sm">
                  <spec.icon size={24} />
                </div>
                <h3 className="font-serif text-xl mb-3 text-stone-800">{spec.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Booking CTA */}
      <section className="py-32 bg-sage-900 text-sage-50 relative overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sage-800/50 rounded-full mix-blend-overlay filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sage-700/30 rounded-full mix-blend-overlay filter blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-8">Prêt à prendre soin de vous ?</h2>
          <p className="text-sage-200 mb-12 max-w-xl mx-auto text-lg">
            Les rendez-vous se font directement via la plateforme Maiia. Simple, rapide et disponible 24h/24.
          </p>
          <button 
            onClick={onBookClick}
            className="px-12 py-5 bg-white text-sage-900 rounded-full font-bold text-lg hover:bg-sage-50 transition-all hover:scale-105 shadow-2xl"
          >
            Prendre rendez-vous sur Maiia
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
