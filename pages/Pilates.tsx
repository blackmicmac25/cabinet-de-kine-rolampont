
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Sparkles, 
  User, 
  HelpCircle, 
  ArrowRight, 
  Quote, 
  Calendar, 
  Clock, 
  CheckCircle2,
  Info,
  Waves,
  Phone,
  Instagram,
  MessageCircle
} from 'lucide-react';

const MAURICIA_MAIIA_URL = "https://www.maiia.com/masseur-kinesitherapeute/52260-rolampont/guenengaye-mauricia";
const PILATES_PHONE = "06 50 89 37 13";

interface PilatesProps {
  onBookClick?: () => void;
}

const Pilates: React.FC<PilatesProps> = () => {
  const handleBooking = () => {
    window.open(MAURICIA_MAIIA_URL, '_blank');
  };

  const faqs = [
    {
      q: "Combien de personnes dans vos cours ?",
      a: "8 personnes maximum. Ceci afin de proposer des cours de qualité et de pouvoir vous guider au mieux lors des séances. Je peux plus facilement aller vers vous pour vous aider à intégrer les mouvements."
    },
    {
      q: "Suis-je le ou la plus âgé(e) ?",
      a: "Il y aura toujours plus ou moins âgé que soi. Le Pilates n’a pas de contre-indications. L’essentiel sur les cours étant de pouvoir se mouvoir à minimum. Je suis formée au Pilates seniors et je vous orienterais sur celui le plus adapté à vous en fonction de vos capacités."
    },
    {
      q: "Je suis enceinte, puis-je pratiquer la méthode Pilates ?",
      a: "Oui, évidemment. D’autant plus que je suis formée en Pilates femmes enceintes. Cette méthode douce est à adapter en fonction du trimestre de la grossesse et également des difficultés rencontrées par les futures mamans."
    },
    {
      q: "Le Pilates est-il semblable au yoga ?",
      a: "Même si ces deux pratiques semblent identiques notamment sur le principe de respiration profonde, elles sont très différentes. Le yoga permet d’accroitre un certain équilibre et de faire abstraction de tout ce qui nous entoure. La méthode Pilates est un enchainement d’exercice visant à renforcer la musculature profonde via 8 principes fondamentaux."
    }
  ];

  const schedule = [
    { day: "Mardi", time: "10h00 - 11h00", level: "Niveau Débutant", color: "bg-emerald-50 text-emerald-700" },
    { day: "Mercredi", time: "17h00 - 18h00", level: "Niveau Avancé", color: "bg-amber-50 text-amber-700" },
    { day: "Jeudi", time: "09h00 - 10h00", level: "Niveau Débutant", color: "bg-emerald-50 text-emerald-700" }
  ];

  const rates = [
    {
      title: "Séance d'essai",
      price: "14 €",
      description: "Réservation dans la mesure des places disponibles. Une première approche pour ressentir les bienfaits.",
      details: ["Séance d'1 heure", "Bilan postural rapide inclus"]
    },
    {
      title: "Cours individuel / Duo",
      price: "30 €",
      description: "Séance individuelle ou par 2 possible, en fonction des disponibilités et de l'emploi du temps du coach.",
      details: ["Séance d'1 heure", "Programme 100% sur mesure", "Option Duo disponible"]
    },
    {
      title: "10 séances",
      price: "100 €",
      description: "Abonnement à régler suite à la séance d'essai. Valable 6 mois.",
      details: ["Collectif (8 pers. max)", "Paiement en 3x max"]
    },
    {
      title: "20 séances",
      price: "180 €",
      description: "Abonnement à régler suite à la séance d'essai. Valable 6 mois.",
      details: ["Collectif (8 pers. max)", "Paiement en 3x max"]
    },
    {
      title: "40 séances",
      price: "300 €",
      description: "Abonnement à régler suite à la séance d'essai. Valable 1 an.",
      details: ["Collectif (8 pers. max)", "Paiement en 3x max"]
    }
  ];

  return (
    <div className="pt-32 pb-24 overflow-hidden selection:bg-sage-100 selection:text-sage-900">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="relative rounded-[4rem] overflow-hidden bg-stone-100 min-h-[80vh] flex items-center shadow-2xl">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4?q=80&w=2000&auto=format&fit=crop" 
               alt="Pilates background" 
               className="w-full h-full object-cover opacity-30 scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-sage-900/10" />
          </div>
          
          <div className="relative z-10 w-full p-8 lg:p-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="h-px w-12 bg-sage-400"></span>
                <span className="text-sage-600 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">Harmonie Corps & Esprit</span>
                <span className="h-px w-12 bg-sage-400"></span>
              </div>
              
              <h1 className="font-serif text-6xl md:text-[10rem] text-sage-900 mb-8 leading-[0.85] tracking-tight">
                Mau <span className="italic font-light text-sage-500">Pilates</span>
              </h1>
              
              <p className="font-serif text-xl md:text-3xl text-stone-600 italic mb-12 max-w-2xl mx-auto leading-relaxed">
                "Découvrez cette discipline et réharmonisez votre silhouette."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={handleBooking}
                  className="group px-14 py-6 bg-sage-900 text-white rounded-full font-bold text-lg hover:bg-sage-800 transition-all shadow-2xl flex items-center justify-center gap-4 hover:-translate-y-1"
                >
                  Réserver un cours
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href="#tarifs"
                  className="px-14 py-6 bg-white/80 backdrop-blur-md border border-stone-200 text-sage-900 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center justify-center hover:-translate-y-1"
                >
                  Voir les offres
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-4xl md:text-5xl text-sage-900 mb-8 leading-tight">Qu’est ce que le Pilates ?</h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-8">
                  C’est une méthode douce qui vise grâce au **centrage** (engagement du plancher pelvien et du muscle transverse) à renforcer les muscles en profondeur.
                </p>
                <p className="text-stone-600 text-lg leading-relaxed italic border-l-2 border-sage-200 pl-6">
                  Il s’agit d’un enchainement d’exercices à exécuter précisément dans un alignement parfait qui fait appel à 5 référentiels : nuque, épaule, bassin neutre, respiration thoracique et centrage.
                </p>
              </motion.div>
              
              <div className="relative">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                  <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800&auto=format&fit=crop" alt="Posture Pilates" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-sage-50 rounded-full -z-0 mix-blend-multiply blur-2xl animate-pulse" />
                <motion.div 
                  initial={{ opacity: 0, rotate: -5 }}
                  whileInView={{ opacity: 1, rotate: 5 }}
                  viewport={{ once: true }}
                  className="absolute -top-12 -left-12 bg-sage-900 text-white p-8 rounded-[2.5rem] shadow-xl hidden md:block"
                >
                  <Waves className="mb-4 text-sage-400" />
                  <p className="font-serif text-lg italic">"Alignement parfait."</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-32 bg-stone-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
            <div className="w-full md:w-2/5 relative">
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://www.maiia.com/files/625a1346-40f5-4f2b-b6b5-9a970f4884fc-photo-mauricia.jpg" 
                  alt="Mauricia" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-lg border border-stone-100">
                <p className="font-serif text-sage-900 font-bold">Mauricia</p>
                <p className="text-xs text-stone-500 tracking-widest uppercase">Masseur-Kinésithérapeute D.E.</p>
              </div>
            </div>
            
            <div className="w-full md:w-3/5 space-y-8">
              <span className="text-sage-500 font-bold uppercase tracking-widest text-xs">Qui suis-je ?</span>
              <h2 className="font-serif text-5xl md:text-6xl text-sage-900 italic font-light">"Mau pour les intimes"</h2>
              <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
                <p>
                  Masseur-kinésithérapeute, basketteuse à mes heures perdues, maman à temps plein. Comme tout le monde, je peux être fatiguée, débordée, stressée… mais se recentrer sur soi permet d’aborder et d’affronter les problèmes du quotidien.
                </p>
                <p className="text-sage-800 font-medium font-serif text-xl italic bg-sage-50 p-6 rounded-3xl border-l-4 border-sage-600">
                  "Ma clé : le Pilates. Cette discipline est une réelle synergie entre le corps et l’esprit."
                </p>
                <p>
                  Mon métier me permet d’anticiper les petites pathologies et d’adapter la séance de façon individuelle de sorte que cela soit véritablement **« votre Pilates »**.
                </p>
                <button 
                  onClick={handleBooking}
                  className="inline-flex items-center gap-3 text-sage-900 font-bold hover:gap-5 transition-all"
                >
                  Découvrir mes cours
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-sage-900 mb-4">Horaires des cours</h2>
            <p className="text-stone-500 italic mb-8">Des créneaux pour se recentrer, chaque semaine.</p>
            <div className="inline-block px-6 py-3 bg-sage-50 rounded-full border border-sage-100 text-sage-700 font-medium text-sm">
              Cours individuel ou par 2 possible en fonction des disponibilités.
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {schedule.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-stone-50 p-10 rounded-[3rem] text-center border border-stone-100 group transition-all duration-500 hover:bg-sage-900 hover:text-white"
              >
                <Calendar className="mx-auto mb-6 text-sage-500 group-hover:text-sage-300" size={32} />
                <h4 className="font-serif text-2xl mb-2">{item.day}</h4>
                <p className="text-stone-500 group-hover:text-sage-200 text-sm mb-6">{item.time}</p>
                <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest ${item.color} group-hover:bg-white/10 group-hover:text-white`}>
                  {item.level}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Direct Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-sage-50 rounded-[3rem] p-12 border border-sage-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl text-sage-900 mb-2">Un renseignement ?</h3>
              <p className="text-stone-600">Contactez-moi directement pour toute question sur les cours.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${PILATES_PHONE.replace(/\s/g, '')}`} className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-sm hover:shadow-md transition-all text-sage-900 font-bold border border-stone-100">
                <Phone size={20} className="text-sage-600" />
                {PILATES_PHONE}
              </a>
              <div className="flex gap-2">
                <button className="p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-sage-900 border border-stone-100" title="Instagram">
                  <Instagram size={20} className="text-sage-600" />
                </button>
                <button className="p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all text-sage-900 border border-stone-100" title="Messenger">
                  <MessageCircle size={20} className="text-sage-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section id="tarifs" className="py-32 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sage-500 font-bold uppercase tracking-widest text-xs mb-4 block">Investissement</span>
            <h2 className="font-serif text-5xl text-sage-900 mb-6 italic">Tarifs 2025 - 2026</h2>
            <p className="text-stone-500 leading-relaxed">
              Des forfaits pensés pour une pratique régulière et durable. Règlement en plusieurs fois accepté (3 fois maximum).
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rates.map((rate, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 rounded-[3rem] border flex flex-col h-full transition-all duration-500 ${
                  idx === 2 ? 'bg-sage-900 text-white shadow-3xl border-sage-800 scale-105 z-10' : 'bg-white border-stone-200 text-sage-900 hover:shadow-xl'
                }`}
              >
                <h4 className="font-serif text-2xl mb-4">{rate.title}</h4>
                <div className="text-5xl font-serif mb-8 flex items-baseline gap-2">
                  {rate.price}
                </div>
                <p className={`text-sm mb-10 leading-relaxed flex-grow ${idx === 2 ? 'text-sage-200' : 'text-stone-500'}`}>
                  {rate.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {rate.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 size={18} className={idx === 2 ? 'text-sage-400' : 'text-sage-600'} />
                      {detail}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={handleBooking}
                  className={`w-full py-5 rounded-2xl font-bold transition-all text-lg ${
                    idx === 2 ? 'bg-white text-sage-900 hover:bg-stone-100' : 'bg-sage-900 text-white hover:bg-sage-800'
                  }`}
                >
                  Réserver
                </button>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 max-w-2xl mx-auto bg-stone-200/50 p-8 rounded-[2rem] flex items-start gap-5 border border-white/40">
             <div className="bg-sage-600 text-white p-2 rounded-full shadow-lg">
                <Info size={20} />
             </div>
             <p className="text-sm text-stone-600 leading-relaxed italic">
               Les abonnements de 10 et 20 séances sont valables **6 mois**. L’abonnement de 40 séances est valable **1 an**. Réservation obligatoire dans la limite des places disponibles.
             </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-sage-900 italic">FAQ</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                className="p-10 rounded-[2.5rem] bg-stone-50 border border-stone-100 hover:shadow-lg transition-all"
              >
                <h4 className="font-serif text-xl text-sage-900 mb-5 flex gap-3">
                  <span className="text-sage-300">Q.</span> {faq.q}
                </h4>
                <p className="text-stone-500 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="container mx-auto px-6 mt-12 mb-24">
        <div className="bg-sage-900 rounded-[4rem] p-16 lg:p-32 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="text-sage-400 font-bold uppercase tracking-[0.4em] text-xs mb-8 block">Au plaisir de vous voir</span>
            <h2 className="font-serif text-5xl md:text-8xl text-white mb-12 italic leading-tight">C'est votre Pilates.</h2>
            <button 
              onClick={handleBooking}
              className="px-16 py-7 bg-white text-sage-900 rounded-full font-bold text-xl hover:bg-stone-100 transition-all hover:scale-105 shadow-2xl"
            >
              Prendre rendez-vous avec Mauricia
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pilates;
