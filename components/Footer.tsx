import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-700 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          
          {/* Col 1: Logo & Socials */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="inline-block">
              <img src="/img/logo.png" alt="Logo" className="w-40" />
            </Link>

            <p className="text-xs text-slate-500 leading-relaxed pr-4">
              L&apos;alliance de la haute technologie moléculaire et de l&apos;expertise capillaire professionnelle.
            </p>

            {/* Social Icons with SVG */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-[#1e3a8a] hover:text-white transition duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-[#1e3a8a] hover:text-white transition duration-200"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-[#1e3a8a] hover:text-white transition duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="#tiktok"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-[#1e3a8a] hover:text-white transition duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.48 2.74 1.44-.04 2.74-.99 3.14-2.37.15-.49.2-1.01.2-1.52.03-5.26.01-10.51.01-15.77z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Nos Gammes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1e293b] mb-4">
              Nos Gammes
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="#gammes" className="hover:text-[#1e3a8a] hover:underline transition">
                  Coloration
                </Link>
              </li>
              <li>
                <Link href="#gammes" className="hover:text-[#1e3a8a] hover:underline transition">
                  Shampooing Anti-Chute
                </Link>
              </li>
              <li>
                <Link href="#gammes" className="hover:text-[#1e3a8a] hover:underline transition">
                  Lotion Anti-Chute
                </Link>
              </li>
              <li>
                <Link href="#gammes" className="hover:text-[#1e3a8a] hover:underline transition">
                  Kératine & Soins V-Plex
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Aide & Conseils */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1e293b] mb-4">
              Aide & Conseils
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="#routines" className="hover:text-[#1e3a8a] hover:underline transition">
                  Routine Capillaire
                </Link>
              </li>
              <li>
                <Link href="#diagnostic" className="hover:text-[#1e3a8a] hover:underline transition">
                  Diagnostic Capillaire
                </Link>
              </li>
              <li>
                <Link href="#conseils" className="hover:text-[#1e3a8a] hover:underline transition">
                  Conseils & Articles
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#1e3a8a] hover:underline transition">
                  Questions Fréquentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: À Propos */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#1e293b] mb-4">
              À Propos
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="#a-propos" className="hover:text-[#1e3a8a] hover:underline transition">
                  Notre Histoire
                </Link>
              </li>
              <li>
                <Link href="#science" className="hover:text-[#1e3a8a] hover:underline transition">
                  Notre Science
                </Link>
              </li>
              <li>
                <Link href="#engagements" className="hover:text-[#1e3a8a] hover:underline transition">
                  Nos Engagements
                </Link>
              </li>
              <li>
                <Link href="#salons" className="hover:text-[#1e3a8a] hover:underline transition">
                  Espace Salons & Professionnels
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Infos Pratiques & Distributeur */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#1e293b] mb-4">
                Infos Pratiques
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                <li>
                  <Link href="#livraison" className="hover:text-[#1e3a8a] hover:underline transition">
                    Livraison & Paiement
                  </Link>
                </li>
                <li>
                  <Link href="#retours" className="hover:text-[#1e3a8a] hover:underline transition">
                    Retours & Échanges
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-[#1e3a8a] hover:underline transition">
                    Contactez-nous
                  </Link>
                </li>
              </ul>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider block mb-1.5">
                Distribué par
              </span>
              <div className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 text-white font-extrabold text-sm rounded tracking-widest shadow-xs">
                ICG
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 space-y-3 sm:space-y-0">
          <p>© 2026 CAPI-LIFT Morocco. Tous droits réservés.</p>
          <div className="flex space-x-6">
            <Link href="#mentions" className="hover:text-slate-800 transition">
              Mentions Légales
            </Link>
            <Link href="#confidentialite" className="hover:text-slate-800 transition">
              Politique de Confidentialité
            </Link>
            <Link href="#cgv" className="hover:text-slate-800 transition">
              Conditions Générales de Vente
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
