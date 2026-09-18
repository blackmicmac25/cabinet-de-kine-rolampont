import React from 'react';
import { Check, Info, CreditCard, CalendarX, ShieldCheck, Wallet } from 'lucide-react';

const Rates: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-serif text-5xl text-sage-900 mb-6">Tarifs & Remboursements</h1>
          <p className="text-stone-600 text-lg">
            La transparence est essentielle. Retrouvez ici le détail de nos honoraires pour les soins conventionnés et les séances de bien-être.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-20">
          
          {/* Soins Conventionnés */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <ShieldCheck size={120} />
            </div>
            
            <div className="mb-8 relative z-10">
              <span className="inline-block px-4 py-1.5 bg-sage-100 text-sage-800 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                Sur Ordonnance
              </span>
              <h2 className="font-serif text-3xl text-sage-900">Soins Conventionnés</h2>
              <p className="text-stone-500 mt-2">Prise en charge par la Sécurité Sociale et Mutuelle.</p>
            </div>

            <div className="space-y-6 flex-grow relative z-10">
              <div className="flex gap-4 items-start p-4 rounded-2xl hover:bg-stone-50 transition-colors">
                <div className="mt-1 w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 shrink-0">
                  <Check size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-sage-900">Consultation de Kinésithérapie</h4>
                  <p className="text-sm text-stone-500 mt-1 mb-2">Rééducation membres, dos, neuro, respiratoire.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium text-sage-700 bg-sage-50 px-2 py-1 rounded-md border border-sage-100">Base Sécu : ~16€ à 25€</span>
                    <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-md border border-green-100">100% Remboursé*</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 rounded-2xl hover:bg-stone-50 transition-colors">
                 <div className="mt-1 w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 shrink-0">
                  <Check size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-sage-900">Rééducation Périnéale</h4>
                  <p className="text-sm text-stone-500 mt-1 mb-2">Post-partum, uro-gynécologie.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium text-sage-700 bg-sage-50 px-2 py-1 rounded-md border border-sage-100">Base Sécu : ~17€ à 22€</span>
                    <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded-md border border-green-100">100% Remboursé*</span>
                  </div>
                </div>
              </div>

               <div className="flex gap-4 items-start p-4 rounded-2xl hover:bg-stone-50 transition-colors">
                 <div className="mt-1 w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 shrink-0">
                  <Check size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-sage-900">Bilan Diagnostic Kinésithérapique</h4>
                  <p className="text-sm text-stone-500 mt-1">Réalisé lors de la première séance (obligatoire).</p>
                  <span className="text-xs font-medium text-sage-700 bg-sage-50 px-2 py-1 rounded-md border border-sage-100 mt-2 inline-block">Base Sécu : 23.01€</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-stone-100 text-xs text-stone-400 italic relative z-10">
              * Le remboursement s'effectue à 60% par l'Assurance Maladie (AMO) et 40% par votre mutuelle (AMC). Le tiers payant est pratiqué sur la part AMO. Prise en charge à 100% pour les ALD, Maternité, AT.
            </div>
          </div>

          {/* Soins Hors Nomenclature */}
          <div className="bg-sage-900 text-sage-50 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            
            <div className="mb-8 relative z-10">
              <span className="inline-block px-4 py-1.5 bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4 backdrop-blur-sm">
                Sans Ordonnance
              </span>
              <h2 className="font-serif text-3xl text-white">Bien-être & Prévention</h2>
              <p className="text-sage-200 mt-2">Actes non remboursés, à votre charge.</p>
            </div>

            <div className="space-y-6 flex-grow relative z-10">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div>
                  <h4 className="font-bold text-lg">Drainage Lymphatique Brésilien</h4>
                  <p className="text-sm text-sage-300">Abonnement 5 ou 10 séances</p>
                </div>
                <div className="text-right">
                  <span className="block text-xl font-serif text-white">Dès 68 € / s.</span>
                  <a href="#drainage-bresilien" className="text-xs text-sage-300 underline hover:text-white">Voir détails</a>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div>
                  <h4 className="font-bold text-lg">Madérothérapie Colombienne</h4>
                  <p className="text-sm text-sage-300">Bas du corps, Ventre & Flancs, Haut du corps</p>
                </div>
                <div className="text-right">
                  <span className="block text-xl font-serif text-white">Dès 51 € / s.</span>
                  <a href="#maderotherapie" className="text-xs text-sage-300 underline hover:text-white">Voir détails</a>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div>
                  <h4 className="font-bold text-lg">Massage Bien-être</h4>
                  <p className="text-sm text-sage-300">Détente musculaire (1h)</p>
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-serif text-white">60 €</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div>
                  <h4 className="font-bold text-lg">Pilates Individuel / Duo</h4>
                  <p className="text-sm text-sage-300">Coaching privé ou à deux (1h)</p>
                </div>
                <div className="text-right">
                  <span className="block text-xl font-serif text-white">30 € à 50 €</span>
                </div>
              </div>

               <div className="mt-6 p-4 bg-sage-800/50 rounded-2xl text-sm text-sage-200 leading-relaxed border border-sage-700/50">
                <Info className="inline-block w-4 h-4 mr-2 -mt-0.5" />
                Une facture pourra vous être remise pour une éventuelle prise en charge par votre mutuelle (selon votre contrat "médecines douces" ou "bien-être").
              </div>
            </div>
          </div>
        </div>

        {/* SECTION DÉDIÉE : DRAINAGE BRÉSILIEN & MADÉROTHÉRAPIE */}
        <div className="max-w-5xl mx-auto mb-20 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-sage-200 text-sage-800 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
              Soins Experts & Remodelage
            </span>
            <h2 className="font-serif text-4xl text-sage-900 mb-4">Abonnements & Cures</h2>
            <p className="text-stone-600">
              Soins dispensés par <strong>Mauricia Guenengaye</strong> au Cabinet de Rolampont. Profitez de formules avantageuses en cure pour des résultats visibles et durables.
            </p>
          </div>

          {/* 1. DRAINAGE LYMPHATIQUE BRÉSILIEN */}
          <div id="drainage-bresilien" className="bg-gradient-to-br from-white to-[#faf6f0] p-8 md:p-12 rounded-[2.5rem] shadow-md border border-stone-200 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between mb-8 pb-8 border-b border-stone-200/80">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e8dfd3] text-stone-800 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                  <span>✨ L'offre de lancement devient abonnement</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-3">
                  Drainage Lymphatique Brésilien
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Massage manuel dynamique et appuyé qui stimule intensément la circulation lymphatique, déloge les toxines, réduit immédiatement la rétention d'eau et procure un effet remodelant et affinant.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-stone-600">
                  <span className="bg-stone-100 px-3 py-1 rounded-full border border-stone-200">Détoxification</span>
                  <span className="bg-stone-100 px-3 py-1 rounded-full border border-stone-200">Jambes légères</span>
                  <span className="bg-stone-100 px-3 py-1 rounded-full border border-stone-200">Ventre dégonflé</span>
                  <span className="bg-stone-100 px-3 py-1 rounded-full border border-stone-200">Effet sculptant</span>
                </div>
              </div>

              {/* Contact direct praticienne */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm text-sm w-full lg:w-auto shrink-0">
                <p className="font-semibold text-stone-900 mb-1">Praticienne : Mauricia Guenengaye</p>
                <p className="text-stone-500 text-xs mb-3">Sur rendez-vous uniquement</p>
                <div className="flex flex-col gap-2">
                  <a 
                    href="tel:0650893513" 
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-sage-900 text-white rounded-xl text-xs font-bold hover:bg-sage-800 transition-colors"
                  >
                    📞 06 50 89 35 13
                  </a>
                  <span className="text-[11px] text-stone-400 text-center">Réservation par téléphone ou message privé</span>
                </div>
              </div>
            </div>

            {/* Cartes Abonnements */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* 5 séances */}
              <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:border-sage-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-sage-700 bg-sage-50 px-3 py-1 rounded-full border border-sage-100">
                      Cure Découverte
                    </span>
                    <span className="text-stone-400 text-xs font-medium">5 séances</span>
                  </div>
                  <h4 className="font-serif text-2xl text-stone-900 mb-2">Abonnement 5 Séances</h4>
                  <p className="text-xs text-stone-500 mb-6">Idéal pour relancer le métabolisme et observer un premier dégonflement visible.</p>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-serif text-4xl font-bold text-stone-900">360 €</span>
                    <span className="text-xs text-stone-500 font-medium">(soit 72 € la séance)</span>
                  </div>
                  <p className="text-xs text-sage-600 font-medium">Paiement échelonné possible • Sur RDV</p>
                </div>
              </div>

              {/* 10 séances */}
              <div className="bg-stone-900 text-white p-8 rounded-3xl border border-stone-800 shadow-xl relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 bg-[#c9ab81] text-stone-900 text-[10px] font-extrabold uppercase px-4 py-1 rounded-bl-xl tracking-wider">
                  Recommandé
                </div>
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#d4b993] bg-white/10 px-3 py-1 rounded-full">
                      Cure Complète & Durable
                    </span>
                    <span className="text-stone-400 text-xs font-medium">10 séances</span>
                  </div>
                  <h4 className="font-serif text-2xl text-white mb-2">Abonnement 10 Séances</h4>
                  <p className="text-xs text-stone-300 mb-6">Pour une transformation profonde, durable et une silhouette redéfinie.</p>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-serif text-4xl font-bold text-[#f5e6d3]">680 €</span>
                    <span className="text-xs text-stone-300 font-medium">(soit 68 € la séance)</span>
                  </div>
                  <p className="text-xs text-[#c9ab81] font-medium">Tarif le plus avantageux • Merci pour votre confiance ♡</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200/80 text-xs text-stone-500">
              <span className="italic">📍 Cabinet de Rolampont — Mauricia Guenengaye</span>
              <a 
                href="/images/drainage-lymphatique-bresilien.jpg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-sage-700 hover:text-sage-900 font-bold underline"
              >
                📄 Voir l'affiche officielle du Drainage Brésilien
              </a>
            </div>
          </div>

          {/* 2. MADÉROTHÉRAPIE COLOMBIENNE */}
          <div id="maderotherapie" className="bg-gradient-to-br from-white to-[#f4f7f4] p-8 md:p-12 rounded-[2.5rem] shadow-md border border-stone-200 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 items-start justify-between mb-8 pb-8 border-b border-stone-200/80">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-sage-100 text-sage-800 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                  <span>🪵 Sculpte – Raffermit – Draine – Tonifie</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-3">
                  Madérothérapie Colombienne
                </h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  Technique naturelle de massage profond à l'aide d'instruments en bois anatomiques. Elle permet de casser les cellules graisseuses, de lisser la peau d'orange et de remodeler les courbes.
                </p>
                
                {/* 3 piliers */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold text-stone-700">
                  <div className="bg-white/80 p-2.5 rounded-xl border border-stone-200/80">
                    <span className="block text-base mb-0.5">🌿</span>
                    Affiner la silhouette
                  </div>
                  <div className="bg-white/80 p-2.5 rounded-xl border border-stone-200/80">
                    <span className="block text-base mb-0.5">⚡</span>
                    Booster le métabolisme
                  </div>
                  <div className="bg-white/80 p-2.5 rounded-xl border border-stone-200/80">
                    <span className="block text-base mb-0.5">✨</span>
                    Résultats visibles & durables
                  </div>
                </div>
              </div>

              {/* Contact direct praticienne */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm text-sm w-full lg:w-auto shrink-0">
                <p className="font-semibold text-stone-900 mb-1">Praticienne : Mauricia Guenengaye</p>
                <p className="text-stone-500 text-xs mb-3">Sur RDV uniquement • Rolampont</p>
                <div className="flex flex-col gap-2">
                  <a 
                    href="tel:0650893513" 
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-sage-900 text-white rounded-xl text-xs font-bold hover:bg-sage-800 transition-colors"
                  >
                    📞 06 50 89 35 13
                  </a>
                  <span className="text-[11px] text-stone-400 text-center">Contact via Téléphone, Messenger ou Instagram</span>
                </div>
              </div>
            </div>

            {/* Table des 3 Zones */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              
              {/* Zone 1 : Bas du corps */}
              <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:border-sage-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-sage-800 bg-sage-50 px-2.5 py-1 rounded-md">
                      Zone 1
                    </span>
                    <span className="text-stone-800 font-bold text-sm bg-stone-100 px-2 py-0.5 rounded-md">65 € / séance</span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-1">Bas du Corps</h4>
                  <p className="text-xs text-stone-400 italic mb-3">Fessiers – Cuisses</p>
                  
                  <div className="bg-stone-50 p-3 rounded-xl mb-6 text-xs text-stone-600">
                    <span className="font-bold text-stone-800 block mb-1">Cibles :</span>
                    Cellulite incrustée, relâchement cutané, sensation de jambes lourdes.
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <div className="bg-sage-50/60 p-3 rounded-xl">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-bold text-sage-900">Cure 5 séances</span>
                      <span className="text-lg font-serif font-bold text-sage-900">293 €</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-stone-500 mt-0.5">
                      <span>Au lieu de 325 €</span>
                      <span className="text-green-700 font-semibold">soit 58,60 € / séance</span>
                    </div>
                  </div>

                  <div className="bg-sage-900 text-white p-3 rounded-xl shadow-md">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-bold text-sage-200">Cure 10 séances</span>
                      <span className="text-lg font-serif font-bold text-white">553 €</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-sage-300 mt-0.5">
                      <span>Au lieu de 650 €</span>
                      <span className="text-amber-300 font-semibold">soit 55,30 € / séance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zone 2 : Ventre & Flancs */}
              <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:border-sage-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-sage-800 bg-sage-50 px-2.5 py-1 rounded-md">
                      Zone 2
                    </span>
                    <span className="text-stone-800 font-bold text-sm bg-stone-100 px-2 py-0.5 rounded-md">65 € / séance</span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-1">Ventre & Flancs</h4>
                  <p className="text-xs text-stone-400 italic mb-3">Taille – Abdomen</p>
                  
                  <div className="bg-stone-50 p-3 rounded-xl mb-6 text-xs text-stone-600">
                    <span className="font-bold text-stone-800 block mb-1">Cibles :</span>
                    Ventre plat, réduction des ballonnements, affinement du tour de taille.
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <div className="bg-sage-50/60 p-3 rounded-xl">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-bold text-sage-900">Cure 5 séances</span>
                      <span className="text-lg font-serif font-bold text-sage-900">293 €</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-stone-500 mt-0.5">
                      <span>Au lieu de 325 €</span>
                      <span className="text-green-700 font-semibold">soit 58,60 € / séance</span>
                    </div>
                  </div>

                  <div className="bg-sage-900 text-white p-3 rounded-xl shadow-md">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-bold text-sage-200">Cure 10 séances</span>
                      <span className="text-lg font-serif font-bold text-white">553 €</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-sage-300 mt-0.5">
                      <span>Au lieu de 650 €</span>
                      <span className="text-amber-300 font-semibold">soit 55,30 € / séance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zone 3 : Haut du corps */}
              <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:border-sage-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-sage-800 bg-sage-50 px-2.5 py-1 rounded-md">
                      Zone 3
                    </span>
                    <span className="text-stone-800 font-bold text-sm bg-stone-100 px-2 py-0.5 rounded-md">60 € / séance</span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-stone-900 mb-1">Haut du Corps</h4>
                  <p className="text-xs text-stone-400 italic mb-3">Bras – Dos – Épaules</p>
                  
                  <div className="bg-stone-50 p-3 rounded-xl mb-6 text-xs text-stone-600">
                    <span className="font-bold text-stone-800 block mb-1">Cibles :</span>
                    Relâchement cutané des bras, fermeté du dos, tonicité musculaire.
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <div className="bg-sage-50/60 p-3 rounded-xl">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-bold text-sage-900">Cure 5 séances</span>
                      <span className="text-lg font-serif font-bold text-sage-900">270 €</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-stone-500 mt-0.5">
                      <span>Au lieu de 300 €</span>
                      <span className="text-green-700 font-semibold">soit 54 € / séance</span>
                    </div>
                  </div>

                  <div className="bg-sage-900 text-white p-3 rounded-xl shadow-md">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-bold text-sage-200">Cure 10 séances</span>
                      <span className="text-lg font-serif font-bold text-white">510 €</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-sage-300 mt-0.5">
                      <span>Au lieu de 600 €</span>
                      <span className="text-amber-300 font-semibold">soit 51 € / séance</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200/80 text-xs text-stone-500">
              <span className="italic">📍 Sur RDV uniquement — Cabinet Rolampont — Mauricia Guenengaye</span>
              <a 
                href="/images/maderotherapie-colombienne.jpg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-sage-700 hover:text-sage-900 font-bold underline"
              >
                📄 Voir l'affiche officielle de la Madérothérapie
              </a>
            </div>
          </div>
        </div>

        {/* Infos Pratiques Grid */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-serif text-2xl text-sage-900 mb-8 px-4">Informations Pratiques</h3>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Paiement */}
            <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
              <div className="w-12 h-12 bg-sage-50 rounded-xl flex items-center justify-center text-sage-600 mb-4">
                <Wallet size={24} />
              </div>
              <h4 className="font-bold text-stone-800 mb-2">Moyens de paiement</h4>
              <p className="text-sm text-stone-500 leading-relaxed">
                Règlements acceptés par <strong>Carte Bancaire</strong>, <strong>chèques</strong> et <strong>espèces</strong>. Facilités de paiement en plusieurs fois pour les abonnements.
              </p>
            </div>

            {/* Carte Vitale */}
            <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-4">
                <CreditCard size={24} />
              </div>
              <h4 className="font-bold text-stone-800 mb-2">Carte Vitale</h4>
              <p className="text-sm text-stone-500 leading-relaxed">
                Pensez à mettre à jour votre carte vitale pour les soins conventionnés. Nous pratiquons le <strong>tiers-payant</strong> sur la part obligatoire.
              </p>
            </div>

            {/* Annulation */}
            <div className="bg-white p-8 rounded-3xl border border-red-50 shadow-sm">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4">
                <CalendarX size={24} />
              </div>
              <h4 className="font-bold text-stone-800 mb-2">Annulation & Prise de RDV</h4>
              <p className="text-sm text-stone-500 leading-relaxed">
                Tout rendez-vous non honoré ou non annulé <strong>24h à l'avance</strong> est dû. Les soins bien-être se réservent directement auprès de la praticienne.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Rates;