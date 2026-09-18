import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    alert("Votre message a bien été envoyé (Simulation).");
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <h1 className="font-serif text-5xl text-center text-sage-900 mb-16">Contact & Accès</h1>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Info Card */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100 flex flex-col h-full">
            <h3 className="font-serif text-2xl text-sage-900 mb-8">Coordonnées</h3>
            
            <div className="space-y-8 flex-grow">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center text-sage-600 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Adresse</h4>
                  <p className="text-stone-600">Cabinet de Kinésithérapie de Rolampont</p>
                  <p className="text-stone-600">2 rue de la Mairie</p>
                  <p className="text-stone-600">52260 Rolampont</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                 <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center text-sage-600 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Téléphone</h4>
                  <p className="text-stone-600 text-sm">Cabinet (fixe) : <a href="tel:0983093343" className="font-semibold text-sage-800 hover:underline">09 83 09 33 43</a></p>
                  <p className="text-stone-600 text-sm mt-1">
                    Mauricia (Bien-être, Drainage, Madérothérapie, Pilates) : <br/>
                    <a href="tel:0650893513" className="font-semibold text-sage-800 hover:underline">06 50 89 35 13</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                 <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center text-sage-600 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Email</h4>
                  <a href="mailto:contact@kinerolampont.com" className="text-stone-600 hover:text-sage-800 transition-colors">contact@kinerolampont.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                 <div className="w-12 h-12 bg-sage-50 rounded-full flex items-center justify-center text-sage-600 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">Horaires</h4>
                  <div className="text-stone-600">
                    <div>
                      <span className="block text-sm font-bold text-sage-600">Lundi - Vendredi</span>
                      <span>8h00 – 19h00</span>
                    </div>
                    <div className="mt-2">
                      <span className="block text-sm font-bold text-stone-400">Samedi - Dimanche</span>
                      <span className="text-stone-400">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-sage-50 rounded-2xl">
              <h4 className="font-bold text-sage-800 mb-2">Accessibilité</h4>
              <ul className="text-sm text-sage-700 space-y-1">
                <li>• Stationnement facile à proximité</li>
                <li>• Cabinet accessible aux personnes à mobilité réduite (PMR)</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100 flex flex-col h-full">
            <h3 className="font-serif text-2xl text-sage-900 mb-6">Nous écrire</h3>
            <p className="text-stone-500 mb-8">
              Pour toute question ou demande de renseignements, n'hésitez pas à nous envoyer un message.
              <br/><span className="text-xs italic mt-1 block">Pour les prises de rendez-vous, privilégiez Maiia ou le téléphone.</span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstname" className="text-sm font-medium text-stone-700">Prénom</label>
                  <input 
                    type="text" 
                    id="firstname"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-100 outline-none transition-all"
                    placeholder="Votre prénom"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastname" className="text-sm font-medium text-stone-700">Nom</label>
                  <input 
                    type="text" 
                    id="lastname"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-100 outline-none transition-all"
                    placeholder="Votre nom"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-stone-700">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-100 outline-none transition-all"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-stone-700">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-100 outline-none transition-all resize-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-sage-900 text-white rounded-xl font-medium hover:bg-sage-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mt-4 group"
              >
                <span>Envoyer le message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Map Area - Full Width */}
        <div className="h-[400px] w-full rounded-[2.5rem] overflow-hidden shadow-lg relative bg-stone-200">
           <iframe 
             width="100%" 
             height="100%" 
             frameBorder="0" 
             scrolling="no" 
             marginHeight={0} 
             marginWidth={0} 
             src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2%20rue%20de%20la%20Mairie%20Rolampont+(Cabinet%20Kine%20Rolampont)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
             className="grayscale hover:grayscale-0 transition-all duration-700"
             title="Google Map"
           >
           </iframe>
           <div className="absolute bottom-6 right-6 bg-white px-6 py-3 rounded-full shadow-lg font-medium text-sage-900 pointer-events-none hidden md:block">
             📍 Rolampont Centre
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;