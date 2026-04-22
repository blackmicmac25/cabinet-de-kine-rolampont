
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Hand, Wind, Heart, Flower, Sparkles, CheckCircle2, ArrowRight, Brain, Footprints, Droplets, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

const approachSteps = [
  {
    icon: Brain,
    title: "1. Bilan Initial",
    desc: "Un diagnostic précis pour comprendre l'origine de vos douleurs et définir vos objectifs."
  },
  {
    icon: Activity,
    title: "2. Soin Personnalisé",
    desc: "Des techniques manuelles et des exercices adaptés à votre pathologie et votre rythme."
  },
  {
    icon: Footprints,
    title: "3. Autonomie",
    desc: "Des conseils et exercices à faire chez soi pour pérenniser les résultats et éviter la récidive."
  }
];

const reeducationTreatments = [
  {
    icon: Activity,
    title: "Kinésithérapie du Sport",
    desc: "Une prise en charge dynamique pour vous accompagner de la blessure jusqu'au retour sur le terrain.",
    details: [
      "Traumatologie : Entorses, fractures, lésions musculaires",
      "Post-opératoire : Ligamentoplastie (LCA), ménisque, coiffe",
      "Tendinopathies et douleurs chroniques",
      "Réathlétisation et prévention des blessures"
    ]
  },
  {
    icon: Hand,
    title: "Main, Poignet & Coude",
    desc: "Une expertise spécifique pour les pathologies complexes du membre supérieur, alliant douceur et technicité.",
    details: [
      "Fractures du poignet, des doigts et du coude",
      "Pathologies nerveuses (Canal carpien, ulnaire)",
      "Chirurgie de la main (Dupuytren, kystes)",
      "Tendinites (De Quervain, épicondylite)"
    ]
  },
  {
    icon: Smile,
    title: "Maxillo-Faciale & ATM",
    desc: "Prise en charge ciblée des troubles de la mâchoire, de la face et du cou.",
    details: [
      "Rééducation des dysfonctions de l'articulation temporo-mandibulaire",
      "Douleurs de la mâchoire et bruxisme",
      "Céphalées de tension",
      "Rééducation post-chirurgie maxillo-faciale"
    ]
  },
  {
    icon: Droplets,
    title: "Cicatrices & Brûlures",
    desc: "Traitements spécifiques pour améliorer la souplesse des tissus et réduire les adhérences cutanées.",
    details: [
      "Soins post-opératoires immédiats et tardifs",
      "Massage et mobilisations des cicatrices",
      "Prise en charge des brûlures (phase de remodelage)",
      "Récupération de la mobilité cutanée"
    ]
  },
  {
    icon: Flower,
    title: "Périnée & Santé de la Femme",
    desc: "Un accompagnement respectueux de l'intimité pour toutes les étapes de la vie d'une femme.",
    details: [
      "Rééducation post-partum (après accouchement)",
      "Incontinence urinaire et prolapsus",
      "Douleurs pelviennes et endométriose",
      "Gymnastique abdominale hypopressive"
    ]
  },
  {
    icon: Wind,
    title: "Kinésithérapie Respiratoire",
    desc: "Des techniques de désencombrement et de rééducation ventilatoire pour mieux respirer.",
    details: [
      "Bronchiolite du nourrisson",
      "Bronchopneumopathie (BPCO)",
      "Asthme et pathologies chroniques",
      "Réhabilitation à l'effort"
    ]
  }
];

const wellnessTreatments = [
  {
    icon: Sparkles,
    title: "Pilates Thérapeutique",
    desc: "Une méthode douce pour renforcer les muscles profonds et corriger la posture durablement.",
    details: [
      "Renforcement de la sangle abdominale (Core)",
      "Lutte contre le mal de dos chronique",
      "Amélioration de la souplesse et de l'équilibre",
      "Cours individuels ou en duo"
    ]
  },
  {
    icon: Droplets,
    title: "Drainage Lymphatique Brésilien",
    desc: "Un massage tonique et profond pour stimuler la circulation, réduire la rétention d'eau et sculpter le corps.",
    details: [
      "Réduction des œdèmes et sensation de jambes lourdes",
      "Amélioration de la circulation sanguine et lymphatique",
      "Détoxification de l'organisme",
      "Effet sculptant et affinant immédiat"
    ]
  },
  {
    icon: Hand,
    title: "Maderothérapie Colombienne",
    desc: "Une technique de massage utilisant des instruments en bois pour remodeler la silhouette et éliminer la cellulite.",
    details: [
      "Casse les amas graisseux et la cellulite",
      "Tonifie et raffermit la peau",
      "Stimule la production d'élastine et de collagène",
      "Détend les tensions musculaires"
    ]
  }
];

const Treatments: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-sage-50 text-sage-700 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles size={16} />
            <span>Expertise & Bienveillance</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-sage-900 mb-8"
          >
            Nos Soins & Spécialités
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-xl leading-relaxed"
          >
            Le cabinet propose une approche thérapeutique complète, alliant thérapie manuelle, exercices actifs et éducation du patient pour une récupération durable.
          </motion.p>
        </div>
      </div>

      {/* Approach Section */}
      <section className="bg-stone-50 py-20 mb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl text-sage-900">Votre parcours de soin</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-sage-200 border-t border-dashed border-sage-400 z-0"></div>
            
            {approachSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-white rounded-full border-4 border-sage-100 flex items-center justify-center text-sage-600 mb-6 shadow-sm">
                  <step.icon size={32} />
                </div>
                <h3 className="font-serif text-xl text-sage-900 mb-3">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl text-sage-900">Kinésithérapie & Rééducation</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {reeducationTreatments.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2.5rem] p-8 lg:p-10 border border-stone-100 hover:border-sage-200 hover:shadow-2xl hover:shadow-sage-100/40 transition-all duration-500 flex flex-col"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-sage-50 rounded-2xl flex items-center justify-center text-sage-600 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-500">
                  <t.icon size={32} />
                </div>
                <div className="bg-stone-50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-sage-600" />
                </div>
              </div>
              
              <h3 className="font-serif text-2xl lg:text-3xl text-sage-900 mb-4 group-hover:text-sage-700 transition-colors">{t.title}</h3>
              <p className="text-stone-500 mb-8 leading-relaxed">
                {t.desc}
              </p>

              <div className="mt-auto bg-stone-50/50 rounded-2xl p-6">
                <p className="text-xs font-bold text-sage-500 uppercase tracking-widest mb-4">Prise en charge</p>
                <ul className="space-y-3">
                  {t.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-stone-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-sage-400 mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl text-sage-900">Soins de Bien-Être</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {wellnessTreatments.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2.5rem] p-8 lg:p-10 border border-stone-100 hover:border-sage-200 hover:shadow-2xl hover:shadow-sage-100/40 transition-all duration-500 flex flex-col"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-sage-50 rounded-2xl flex items-center justify-center text-sage-600 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-500">
                  <t.icon size={32} />
                </div>
                <div className="bg-stone-50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-sage-600" />
                </div>
              </div>
              
              <h3 className="font-serif text-2xl lg:text-3xl text-sage-900 mb-4 group-hover:text-sage-700 transition-colors">{t.title}</h3>
              <p className="text-stone-500 mb-8 leading-relaxed">
                {t.desc}
              </p>

              <div className="mt-auto bg-stone-50/50 rounded-2xl p-6">
                <p className="text-xs font-bold text-sage-500 uppercase tracking-widest mb-4">Prise en charge</p>
                <ul className="space-y-3">
                  {t.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-stone-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-sage-400 mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prescription Notice */}
        <div className="mt-24 p-8 md:p-12 bg-sage-900 rounded-[3rem] text-center text-sage-50 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl mb-4">Informations Importantes</h3>
            <p className="text-sage-200 mb-8 leading-relaxed">
              La plupart des soins de kinésithérapie nécessitent une prescription médicale pour faire l'objet d'un remboursement par l'Assurance Maladie. Les soins de bien-être (massages non thérapeutiques, Pilates) sont accessibles sans ordonnance.
            </p>
            <Link to="/tarifs" className="inline-block px-8 py-3 bg-white text-sage-900 rounded-full font-bold hover:bg-sage-100 transition-colors">
              Consulter les tarifs
            </Link>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
