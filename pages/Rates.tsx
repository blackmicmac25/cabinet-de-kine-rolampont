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
                  <h4 className="font-bold text-lg">Massage Bien-être</h4>
                  <p className="text-sm text-sage-300">Détente musculaire (1h)</p>
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-serif text-white">60 €</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div>
                  <h4 className="font-bold text-lg">Pilates Individuel</h4>
                  <p className="text-sm text-sage-300">Coaching privé (1h)</p>
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-serif text-white">50 €</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                <div>
                  <h4 className="font-bold text-lg">Pilates Duo</h4>
                  <p className="text-sm text-sage-300">Séance à deux (1h)</p>
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-serif text-white">30 €</span>
                  <span className="text-xs text-sage-400">/ personne</span>
                </div>
              </div>

               <div className="mt-6 p-4 bg-sage-800/50 rounded-2xl text-sm text-sage-200 leading-relaxed border border-sage-700/50">
                <Info className="inline-block w-4 h-4 mr-2 -mt-0.5" />
                Une facture pourra vous être remise pour une éventuelle prise en charge par votre mutuelle (selon votre contrat "médecines douces" ou "bien-être").
              </div>
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
                Nous acceptons les règlements par <strong>Carte Bancaire</strong>, <strong>chèques</strong> et <strong>espèces</strong>.
              </p>
            </div>

            {/* Carte Vitale */}
            <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-4">
                <CreditCard size={24} />
              </div>
              <h4 className="font-bold text-stone-800 mb-2">Carte Vitale</h4>
              <p className="text-sm text-stone-500 leading-relaxed">
                Pensez à mettre à jour votre carte vitale avant votre première séance. Nous pratiquons le <strong>tiers-payant</strong> sur la part obligatoire.
              </p>
            </div>

            {/* Annulation */}
            <div className="bg-white p-8 rounded-3xl border border-red-50 shadow-sm">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4">
                <CalendarX size={24} />
              </div>
              <h4 className="font-bold text-stone-800 mb-2">Annulation</h4>
              <p className="text-sm text-stone-500 leading-relaxed">
                Tout rendez-vous non honoré ou non annulé <strong>24h à l'avance</strong> est considéré comme dû et ne sera pas remboursé par la sécurité sociale.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Rates;