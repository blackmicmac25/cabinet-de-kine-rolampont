
import React from 'react';
import { motion } from 'framer-motion';

const Cabinet: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div className="container mx-auto px-6 mb-20">
        <h1 className="font-serif text-5xl md:text-6xl text-sage-900 mb-6">Le Cabinet</h1>
        <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
          Un lieu dédié à la santé, au mouvement et au bien-être, conçu pour favoriser la détente et la concentration.
        </p>
      </div>

      {/* Team Section */}
      <section className="mb-24 bg-stone-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl text-sage-800 mb-12 text-center">L'Équipe</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Mauricia */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="h-80 overflow-hidden">
                 <img src="https://www.maiia.com/files/625a1346-40f5-4f2b-b6b5-9a970f4884fc-photo-mauricia.jpg" alt="Mauricia Guenengaye" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-sage-900">Mauricia Guenengaye</h3>
                <p className="text-sage-600 text-sm font-bold uppercase tracking-wide mb-4">Masseur-Kinésithérapeute D.E.</p>
                <div className="text-stone-600 leading-relaxed space-y-4">
                  <p>
                    Passionnée par le mouvement et la rééducation fonctionnelle, j’accompagne chaque patient avec une approche personnalisée et bienveillante. Mon objectif est d’allier efficacité du soin et confort global du patient.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Eline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="h-80 overflow-hidden">
                 <img src="https://jhm.fr/wp-content/uploads/2025/02/875105.HR_-1024x683.jpg" alt="Eline Henriot" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-sage-900">Eline Henriot</h3>
                <p className="text-sage-600 text-sm font-bold uppercase tracking-wide mb-4">Masseur-Kinésithérapeute D.E. — Collaboratrice</p>
                <p className="text-stone-600 leading-relaxed">
                  Formée à différentes techniques de rééducation et de bien-être, j’accorde une grande importance à la prévention, la posture et la reprise d’activité en toute sécurité.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Place Section */}
      <section className="container mx-auto px-6">
        <div className="bg-sage-900 text-sage-50 rounded-[3rem] p-10 md:p-20 overflow-hidden relative">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl mb-6">Le Lieu</h2>
              <p className="text-sage-200 text-lg mb-6 leading-relaxed">
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
            <div className="h-80 md:h-[400px] rounded-2xl overflow-hidden border border-sage-700">
               <img src="https://i.ibb.co/8Lz0b4pN/6563919013293198839.jpg" alt="Cabinet intérieur" className="w-full h-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cabinet;
