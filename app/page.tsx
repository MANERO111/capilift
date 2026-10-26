import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FlaskConical,
  ShieldCheck,
  Sparkles,
  Award,
  ArrowRight,
  TrendingDown,
  CheckCircle,
  Gem,
  Clock,
  Atom,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Header / Navbar */}
      <Navbar theme="dark" />

      <main className="flex-1">
        {/* 2. Hero Section with Background image & scientific aesthetic */}
        <section className="relative overflow-hidden bg-gradient-to-r from-slate-100 via-sky-50/50 to-blue-100/40 min-h-[580px] lg:min-h-[660px] flex items-center border-b border-slate-100">
          {/* Subtle DNA & molecular background glow/shapes */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute -right-20 -top-20 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute right-1/4 bottom-0 w-[450px] h-[450px] bg-indigo-100/40 rounded-full blur-2xl" />
            <div className="absolute left-10 top-1/4 w-[300px] h-[300px] bg-sky-200/20 rounded-full blur-3xl" />
            
            {/* Molecular overlay grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(#1e3a8a 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Headline and Call to action */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="inline-flex items-center space-x-2 text-[12px] uppercase font-bold tracking-[0.3em] text-[#1e3a8a] bg-blue-50/80 px-3.5 py-1.5 rounded-full border border-blue-200/60">
                  <span className="w-2 h-2 rounded-full bg-[#1e3a8a] animate-ping" />
                  <span>CAPI-LIFT EXPERT</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0f172a] uppercase leading-[1.08] font-[family-name:var(--font-playfair)]">
                  Colorer. <br />
                  <span className="text-[#1e3a8a]">Réparer.</span> <br />
                  Revitaliser.
                </h1>

                <p className="text-base sm:text-lg text-slate-700 max-w-xl font-medium leading-relaxed">
                  La nouvelle génération de soin capillaire avec des technologies avancées :
                  <br />
                  <span className="font-bold text-[#0f172a] text-sm sm:text-base block mt-2">
                    VPlex — TheraVitx5 — ADN Moléculaire + Tripeptides
                  </span>
                </p>

                {/* Hero CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="#diagnostic"
                    className="inline-flex justify-center items-center px-8 py-3.5 bg-[#1b2b52] hover:bg-[#152342] text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Découvrir ma routine
                  </a>

                  <a
                    href="#gammes"
                    className="inline-flex justify-center items-center px-8 py-3.5 bg-white/90 hover:bg-white text-[#1b2b52] border border-[#1b2b52] text-xs sm:text-sm font-bold tracking-widest uppercase rounded hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Découvrir nos produits
                  </a>
                </div>

                {/* Trust badges below buttons */}
                <div className="pt-6 flex items-center space-x-6 text-xs text-slate-500 border-t border-slate-200/80">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Testé dermatologiquement</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Sans sulfate ni parabène</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual composition */}
              <div className="lg:col-span-6 relative flex justify-center items-center">
                <div className="relative w-full max-w-lg lg:max-w-none flex items-center justify-center">
                  
                  {/* Decorative glowing backdrops */}
                  <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-blue-400/20 via-sky-300/30 to-indigo-400/20 blur-2xl pointer-events-none" />

                  {/* Main Hero Composite Image Card */}
                  <div className="relative z-10 w-full overflow-hidden rounded-2xl shadow-2xl border border-white/60 bg-gradient-to-b from-white/90 to-blue-50/70 p-3 sm:p-4 group">
                    <div className="relative h-[360px] sm:h-[420px] lg:h-[460px] rounded-xl overflow-hidden flex items-end justify-center bg-slate-900">
                      
                      {/* Background model image */}
                      <img
                        src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
                        alt="Femme aux cheveux soyeux et volumineux Capi-Lift"
                        className="absolute inset-0 w-full h-full object-cover object-top filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      {/* Scientific DNA helix overlay overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-white tracking-widest uppercase border border-white/30 flex items-center gap-1.5">
                        <Atom className="w-3.5 h-3.5 text-blue-300 animate-spin" style={{ animationDuration: "12s" }} />
                        <span>ADN Moléculaire</span>
                      </div>

                      {/* Foreground Product Mockups */}
                      <div className="relative z-20 w-full px-4 pb-6 flex items-end justify-center space-x-3 sm:space-x-5">
                        
                        {/* Product 1: Shampooing */}
                        <div className="w-28 sm:w-36 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-2xl border border-white/80 transform hover:-translate-y-2 transition duration-300 text-center">
                          <div className="h-28 sm:h-36 rounded-lg bg-gradient-to-b from-blue-50 to-slate-100 flex items-center justify-center overflow-hidden mb-1.5">
                            <img
                              src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=400&auto=format&fit=crop"
                              alt="Shampooing Énergisant Capi-Lift"
                              className="w-full h-full object-cover mix-blend-multiply"
                            />
                          </div>
                          <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#1b2b52] block">
                            Shampooing
                          </span>
                          <span className="text-[8px] text-slate-500 font-semibold block">
                            TheraVitx5
                          </span>
                        </div>

                        {/* Product 2: Lotion Anti-Chute */}
                        <div className="w-28 sm:w-36 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-2xl border border-white/80 transform -translate-y-3 hover:-translate-y-5 transition duration-300 text-center">
                          <div className="h-32 sm:h-40 rounded-lg bg-gradient-to-b from-blue-50 to-slate-100 flex items-center justify-center overflow-hidden mb-1.5">
                            <img
                              src="https://images.unsplash.com/photo-1608248597359-540134f54c15?q=80&w=400&auto=format&fit=crop"
                              alt="Lotion Anti-Chute Capi-Lift"
                              className="w-full h-full object-cover mix-blend-multiply"
                            />
                          </div>
                          <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#1b2b52] block">
                            Lotion Sérum
                          </span>
                          <span className="text-[8px] text-rose-600 font-bold block">
                            Anti-Chute
                          </span>
                        </div>

                        {/* Product 3: Coloration Premium */}
                        <div className="w-28 sm:w-36 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-2xl border border-white/80 transform hover:-translate-y-2 transition duration-300 text-center hidden sm:block">
                          <div className="h-28 sm:h-36 rounded-lg bg-gradient-to-b from-blue-50 to-slate-100 flex items-center justify-center overflow-hidden mb-1.5">
                            <img
                              src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=400&auto=format&fit=crop"
                              alt="Coloration V-Plex Capi-Lift"
                              className="w-full h-full object-cover mix-blend-multiply"
                            />
                          </div>
                          <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#1b2b52] block">
                            Coloration
                          </span>
                          <span className="text-[8px] text-blue-600 font-semibold block">
                            V-Plex Argan
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Four Value Pillars / Badges Section */}
        <section className="py-10 bg-slate-50 border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Pillar 1 */}
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white hover:shadow-xs transition duration-300">
                <div className="w-14 h-14 rounded-full bg-blue-100/60 border border-blue-200/80 flex items-center justify-center text-[#1e3a8a] mb-3 shadow-xs">
                  <FlaskConical className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#0f172a] mb-1.5">
                  Science Avancée
                </h3>
                <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                  Des formules innovantes qui agissent au cœur de la fibre et du cuir chevelu.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white hover:shadow-xs transition duration-300">
                <div className="w-14 h-14 rounded-full bg-blue-100/60 border border-blue-200/80 flex items-center justify-center text-[#1e3a8a] mb-3 shadow-xs">
                  <ShieldCheck className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#0f172a] mb-1.5">
                  Résultats Visibles
                </h3>
                <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                  Des cheveux plus forts, plus sains, plus brillants jour après jour.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white hover:shadow-xs transition duration-300">
                <div className="w-14 h-14 rounded-full bg-blue-100/60 border border-blue-200/80 flex items-center justify-center text-[#1e3a8a] mb-3 shadow-xs">
                  <Sparkles className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#0f172a] mb-1.5">
                  Formules Premium
                </h3>
                <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                  Sans sulfate, sans silicone nocif, sans colorants agressifs.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white hover:shadow-xs transition duration-300">
                <div className="w-14 h-14 rounded-full bg-blue-100/60 border border-blue-200/80 flex items-center justify-center text-[#1e3a8a] mb-3 shadow-xs">
                  <Award className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#0f172a] mb-1.5">
                  Expertise Professionnelle
                </h3>
                <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                  Inspiré des standards professionnels pour des résultats haute performance.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 4. NOS GAMMES Section */}
        <section id="gammes" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-[#0f172a] font-[family-name:var(--font-playfair)]">
                Nos Gammes
              </h2>
              <div className="w-12 h-0.5 bg-[#1e3a8a] mx-auto mt-2 mb-3" />
              <p className="text-sm text-slate-500 font-medium">
                Des solutions complètes pour chaque besoin capillaire.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Gamme 1: Coloration Capi-Lift */}
              <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1b253c] to-[#0e1628] text-white p-7 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                <div>
                  <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6 bg-slate-900 border border-white/10 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop"
                      alt="Coloration Capi-Lift Professionnelle"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b253c] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-xs text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded text-white border border-blue-400/30">
                      V-Plex + Argan
                    </span>
                  </div>

                  <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-2">
                    Coloration Capi-Lift
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                    Colorer et soigner en un seul geste avec une brillance durable et protection intense.
                  </p>
                </div>

                <a
                  href="#gammes"
                  className="w-full py-2.5 px-4 rounded border border-white/30 text-white hover:bg-white hover:text-slate-900 text-xs uppercase tracking-widest font-bold text-center transition-all duration-200"
                >
                  Découvrir
                </a>
              </div>

              {/* Gamme 2: Shampooing Anti-Chute */}
              <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#1b2a4a] to-[#0d1c38] text-white p-7 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                <div>
                  <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6 bg-slate-900 border border-white/10 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=600&auto=format&fit=crop"
                      alt="Shampooing Anti-Chute Capi-Lift"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b2a4a] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 bg-indigo-600/90 backdrop-blur-xs text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded text-white border border-indigo-400/30">
                      TheraVitx5
                    </span>
                  </div>

                  <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-2">
                    Shampooing Anti-Chute
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                    Renforce dès la racine et réduit la chute des cheveux tout en stimulant le cuir chevelu.
                  </p>
                </div>

                <a
                  href="#gammes"
                  className="w-full py-2.5 px-4 rounded border border-white/30 text-white hover:bg-white hover:text-slate-900 text-xs uppercase tracking-widest font-bold text-center transition-all duration-200"
                >
                  Découvrir
                </a>
              </div>

              {/* Gamme 3: Lotion Anti-Chute */}
              <div className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#2a1b24] to-[#1a0f16] text-white p-7 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
                <div>
                  <div className="relative h-64 w-full rounded-xl overflow-hidden mb-6 bg-slate-900 border border-white/10 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1608248597359-540134f54c15?q=80&w=600&auto=format&fit=crop"
                      alt="Lotion Anti-Chute Capi-Lift"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2a1b24] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 bg-rose-600/90 backdrop-blur-xs text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded text-white border border-rose-400/30">
                      ADN Moléculaire
                    </span>
                  </div>

                  <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-2">
                    Lotion Anti-Chute
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                    Stimule la croissance active et renforce la fibre capillaire en profondeur.
                  </p>
                </div>

                <a
                  href="#gammes"
                  className="w-full py-2.5 px-4 rounded border border-white/30 text-white hover:bg-white hover:text-slate-900 text-xs uppercase tracking-widest font-bold text-center transition-all duration-200"
                >
                  Découvrir
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* 5. UNE ROUTINE ADAPTÉE À VOS BESOINS */}
        <section id="routines" className="py-20 bg-slate-50 border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-[#0f172a] font-[family-name:var(--font-playfair)]">
                Une Routine Adaptée à vos Besoins
              </h2>
              <div className="w-12 h-0.5 bg-[#1e3a8a] mx-auto mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Routine 1: Anti-Chute */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group border border-slate-100">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop"
                    alt="Routine Anti-Chute"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1e3a8a] shadow-md border border-white">
                    <FlaskConical className="w-5 h-5 stroke-[1.8]" />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-base font-extrabold uppercase tracking-wider text-[#0f172a] mb-2">
                      Anti-Chute
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      Réduit significativement la chute et stimule la repousse vigoureuse des cheveux.
                    </p>
                  </div>

                  <a
                    href="#diagnostic"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#1e3a8a] hover:text-[#132860] group-hover:translate-x-1 transition-all"
                  >
                    <span>Découvrir</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              {/* Routine 2: Réparation & Force */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group border border-slate-100">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop"
                    alt="Routine Réparation et Force"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1e3a8a] shadow-md border border-white">
                    <ShieldCheck className="w-5 h-5 stroke-[1.8]" />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-base font-extrabold uppercase tracking-wider text-[#0f172a] mb-2">
                      Réparation & Force
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      Renforce la fibre en profondeur et répare les cheveux abîmés ou dévitalisés.
                    </p>
                  </div>

                  <a
                    href="#diagnostic"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#1e3a8a] hover:text-[#132860] group-hover:translate-x-1 transition-all"
                  >
                    <span>Découvrir</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              {/* Routine 3: Coloration & Brillance */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group border border-slate-100">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
                    alt="Routine Coloration et Brillance"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1e3a8a] shadow-md border border-white">
                    <Sparkles className="w-5 h-5 stroke-[1.8]" />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-base font-extrabold uppercase tracking-wider text-[#0f172a] mb-2">
                      Coloration & Brillance
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      Couleur intense, brillance éclatante et tenue longue durée sans agresser la fibre.
                    </p>
                  </div>

                  <a
                    href="#diagnostic"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#1e3a8a] hover:text-[#132860] group-hover:translate-x-1 transition-all"
                  >
                    <span>Découvrir</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. LA PERFORMANCE, PROUVÉE (Dark Blue Scientific Section) */}
        <section className="relative py-20 bg-gradient-to-br from-[#0c162d] via-[#101d3b] to-[#070e1e] text-white overflow-hidden">
          {/* Hair fiber microscopic background effect */}
          <div className="absolute inset-0 z-0 opacity-25 mix-blend-screen pointer-events-none">
            <div className="absolute right-0 top-0 bottom-0 w-2/3 bg-radial from-blue-500/20 to-transparent" />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 75% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 60%)`,
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-white font-[family-name:var(--font-playfair)]">
                La Performance, Prouvée
              </h2>
              <div className="w-12 h-0.5 bg-blue-400 mx-auto mt-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              
              {/* Stat 1 */}
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xs hover:bg-white/[0.08] transition duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300 mb-4">
                  <TrendingDown className="w-6 h-6" />
                </div>
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
                  -87%
                </span>
                <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">
                  de chute de cheveux*
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xs hover:bg-white/[0.08] transition duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300 mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
                  +92%
                </span>
                <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">
                  de cheveux plus forts*
                </p>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xs hover:bg-white/[0.08] transition duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300 mb-4">
                  <Gem className="w-6 h-6" />
                </div>
                <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
                  +94%
                </span>
                <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">
                  de brillance intense*
                </p>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xs hover:bg-white/[0.08] transition duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300 mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 pt-2">
                  Couleur durable
                </span>
                <p className="text-xs text-blue-200 uppercase tracking-wider font-semibold">
                  et éclat longue durée
                </p>
              </div>

            </div>

            <p className="text-center text-[11px] text-slate-400 italic">
              *Test d&apos;usage sous contrôle dermatologique sur un panel de consommateurs réguliers.
            </p>
          </div>
        </section>

        {/* 7. DUAL SECTION: DIAGNOSTIC CAPILLAIRE & LA SCIENCE AU SERVICE DE VOTRE BEAUTÉ */}
        <section id="diagnostic" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Left Card: Diagnostic Capillaire */}
              <div className="rounded-2xl border border-slate-200/90 p-8 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-white to-slate-50 shadow-sm hover:shadow-md transition">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Doctor / Specialist image */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border-2 border-blue-100 shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop"
                      alt="Dermatologue experte en soin capillaire"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#0f172a] font-[family-name:var(--font-playfair)] mb-2">
                      Diagnostic Capillaire
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                      Quel est votre besoin capillaire ? <br />
                      Répondez à quelques questions et découvrez votre routine personnalisée idéale.
                    </p>
                    <button className="px-6 py-3 bg-[#1b2b52] hover:bg-[#152342] text-white text-xs uppercase font-extrabold tracking-widest rounded shadow-md hover:shadow-lg transition cursor-pointer">
                      Faire le diagnostic
                    </button>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span>⏱ Moins de 2 minutes</span>
                  <span>100% Personnalisé & Gratuit</span>
                </div>
              </div>

              {/* Right Card: La Science au Service de votre Beauté */}
              <div className="rounded-2xl border border-slate-200/90 p-8 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-white to-blue-50/40 shadow-sm hover:shadow-md transition">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#0f172a] font-[family-name:var(--font-playfair)] mb-2 text-center sm:text-left">
                    La Science au Service de votre Beauté
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8 text-center sm:text-left font-medium">
                    Capi-Lift s&apos;engage à offrir des soins capillaires innovants, efficaces et respectueux de vos cheveux et de votre cuir chevelu.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-[#1e3a8a] mb-2">
                        <Atom className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800">
                        Technologie Avancée
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-[#1e3a8a] mb-2">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800">
                        Actifs Ciblés
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-[#1e3a8a] mb-2">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800">
                        Sécurité & Qualité
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center text-[#1e3a8a] mb-2">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800">
                        Résultats Durables
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center text-[#1e3a8a] font-semibold">
                    <CheckCircle className="w-4 h-4 mr-1 text-emerald-500" /> Formules brevetées
                  </span>
                  <a href="#science" className="font-bold text-[#1e3a8a] hover:underline flex items-center">
                    En savoir plus <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* 8. Reusable Footer */}
      <Footer />
    </div>
  );
}
