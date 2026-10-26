import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FlaskConical,
  ShieldCheck,
  Sparkles,
  Award,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Truck,
  CreditCard,
  Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Routines CAPI-LIFT | Votre Routine, Vos Résultats",
  description:
    "3 produits experts, 1 routine complète anti-chute et réparation. Chaque étape agit en synergie pour renforcer, revitaliser et sublimer vos cheveux de la racine jusqu'aux pointes.",
};

export default function RoutinesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-[family-name:var(--font-montserrat)] text-slate-800">
      {/* 1. Dark Navbar matching the reference design */}
      <Navbar theme="dark" activePage="routines" />

      <main className="flex-1">
        {/* ============================================================== */}
        {/* 2. HERO SECTION WITH BACKGROUND IMAGE & SCIENTIFIC MOLECULES   */}
        {/* ============================================================== */}
        <section className="relative min-h-[560px] lg:min-h-[620px] flex items-center overflow-hidden bg-[#070c1a] text-white">
          {/* Background image & molecular glow */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=85&w=1920&auto=format&fit=crop"
              alt="Femme aux cheveux soyeux et volumineux - Routines Capi-Lift"
              className="w-full h-full object-cover object-right filter brightness-[0.42] contrast-110"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040711] via-[#081126]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070c1a] via-transparent to-black/30" />

            {/* Glowing DNA double helix & molecular effect */}
            <div className="absolute right-1/4 top-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
            <div className="absolute right-1/3 bottom-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
            <div className="max-w-2xl space-y-6">
              
              <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-[0.3em] text-blue-300 block">
                Routines Capi-Lift
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08] font-[family-name:var(--font-playfair)]">
                Votre Routine, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-indigo-200">
                  Vos Résultats
                </span>
              </h1>

              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" />

              <div className="space-y-2 text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed font-normal">
                <p className="font-semibold text-white">
                  3 produits experts. 1 routine complète.
                </p>
                <p>
                  Chaque étape agit en synergie pour renforcer, revitaliser et sublimer vos cheveux de la racine jusqu&apos;aux pointes.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#routine-steps"
                  className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-full border border-white/40 hover:border-white bg-white/5 hover:bg-white/15 text-white text-xs uppercase tracking-widest font-bold backdrop-blur-md transition-all duration-300 group shadow-lg hover:shadow-blue-500/20"
                >
                  <span>Découvrir les étapes</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. SECTION TITLE: UNE ROUTINE ANTI-CHUTE & RÉPARATION          */}
        {/* ============================================================== */}
        <section id="routine-steps" className="pt-20 pb-12 bg-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-[#0f172a] font-[family-name:var(--font-playfair)]">
              Une Routine <span className="text-[#3b4b8a]">Anti-Chute & Réparation</span>
            </h2>
            <div className="w-16 h-1 bg-[#1e3a8a] mx-auto mt-3 rounded-full" />
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-3">
              Des cheveux plus forts, plus sains, plus beaux jour après jour.
            </p>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. THE 3 ROUTINES CONNECTED CARDS (EACH WITH OWN BG IMAGE)    */}
        {/* ============================================================== */}
        <section className="pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-4">
              
              {/* ------------------------------------------------------------ */}
              {/* CARD 01 : NETTOYER & STIMULER (Blue Oceanic Backdrop)        */}
              {/* ------------------------------------------------------------ */}
              <div className="flex-1 relative rounded-3xl overflow-hidden shadow-xl border border-sky-900/30 text-white flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* Background image for Step 01 */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=1200&auto=format&fit=crop"
                    alt="Shampooing Anti-Chute Routine"
                    className="w-full h-full object-cover object-center filter brightness-[0.35] saturate-150 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Oceanic blue gradient matching photo */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1b3457]/95 via-[#182c47]/90 to-[#0e1d32]/95 backdrop-blur-[1px]" />
                  {/* Molecular glow beads */}
                  <div className="absolute -left-10 top-1/3 w-40 h-40 bg-sky-400/20 rounded-full blur-2xl" />
                  <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
                </div>

                <div className="relative z-10 p-8 flex flex-col h-full justify-between space-y-6">
                  {/* Header: Step + Subtitle + Title */}
                  <div className="text-center space-y-2">
                    <span className="w-10 h-10 rounded-full border border-white/60 mx-auto flex items-center justify-center text-xs font-bold tracking-wider bg-white/10 shadow-xs">
                      01
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-sky-200 block">
                      Nettoyer & Stimuler
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-white font-[family-name:var(--font-playfair)]">
                      Shampooing <br /> Anti-Chute
                    </h3>
                    <p className="text-xs text-sky-100/90 leading-relaxed max-w-xs mx-auto pt-1 font-normal">
                      Nettoie en douceur, stimule le cuir chevelu et renforce les cheveux dès la racine.
                    </p>
                  </div>

                  {/* Product Visual Mockup */}
                  <div className="flex items-center justify-center py-4">
                    <div className="relative w-40 sm:w-44 bg-white/95 rounded-2xl p-4 shadow-2xl border border-white/80 text-slate-800 text-center transform group-hover:-translate-y-1 transition duration-300">
                      <span className="text-[8px] tracking-[0.25em] font-extrabold uppercase text-[#1e3a8a] block mb-1">
                        CAPI-LIFT
                      </span>
                      <div className="h-36 rounded-lg bg-sky-50 flex items-center justify-center overflow-hidden mb-2">
                        <img
                          src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=400&auto=format&fit=crop"
                          alt="Flacon Shampooing Anti-Chute"
                          className="w-full h-full object-cover mix-blend-multiply"
                        />
                      </div>
                      <span className="text-[10px] font-black uppercase text-[#1e3a8a] block leading-tight">
                        Shampooing Énergisant
                      </span>
                      <span className="text-[8px] text-rose-600 font-extrabold block mt-0.5">
                        0% Sulfate • Niacinamide
                      </span>
                    </div>
                  </div>

                  {/* Checklist of 4 items */}
                  <div className="space-y-2.5 pt-2 border-t border-white/15">
                    <div className="flex items-center space-x-2.5 text-xs text-white">
                      <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0" />
                      <span>Renforce les cheveux dès la racine</span>
                    </div>
                    <div className="flex items-center space-x-2.5 text-xs text-white">
                      <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0" />
                      <span>Réduit la chute de cheveux</span>
                    </div>
                    <div className="flex items-center space-x-2.5 text-xs text-white">
                      <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0" />
                      <span>Protège et équilibre le cuir chevelu</span>
                    </div>
                    <div className="flex items-center space-x-2.5 text-xs text-white">
                      <CheckCircle2 className="w-4 h-4 text-sky-300 shrink-0" />
                      <span>Sans sulfate, sans silicone, sans colorants</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting arrow 1 (Desktop) */}
              <div className="hidden lg:flex items-center justify-center -mx-2 z-20 text-slate-400">
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </div>

              {/* ------------------------------------------------------------ */}
              {/* CARD 02 : TRAITER & ACTIVER (Burgundy / Rose Backdrop)       */}
              {/* ------------------------------------------------------------ */}
              <div className="flex-1 relative rounded-3xl overflow-hidden shadow-xl border border-rose-900/30 text-white flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* Background image for Step 02 */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1608248597359-540134f54c15?q=80&w=1200&auto=format&fit=crop"
                    alt="Lotion Anti-Chute Routine"
                    className="w-full h-full object-cover object-center filter brightness-[0.35] saturate-150 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Burgundy/Wine gradient matching photo */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#5c2a38]/95 via-[#4a212d]/90 to-[#2c131a]/95 backdrop-blur-[1px]" />
                  {/* Molecular glow beads */}
                  <div className="absolute -left-10 top-1/3 w-40 h-40 bg-rose-400/20 rounded-full blur-2xl" />
                  <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl" />
                </div>

                <div className="relative z-10 p-8 flex flex-col h-full justify-between space-y-6">
                  {/* Header: Step + Subtitle + Title */}
                  <div className="text-center space-y-2">
                    <span className="w-10 h-10 rounded-full border border-white/60 mx-auto flex items-center justify-center text-xs font-bold tracking-wider bg-white/10 shadow-xs">
                      02
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-rose-200 block">
                      Traiter & Activer
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-white font-[family-name:var(--font-playfair)]">
                      Lotion <br /> Anti-Chute
                    </h3>
                    <p className="text-xs text-rose-100/90 leading-relaxed max-w-xs mx-auto pt-1 font-normal">
                      Active les follicules, stimule la croissance et renforce la fibre capillaire.
                    </p>
                  </div>

                  {/* Product Visual Mockup */}
                  <div className="flex items-center justify-center py-4">
                    <div className="relative w-40 sm:w-44 bg-white/95 rounded-2xl p-4 shadow-2xl border border-white/80 text-slate-800 text-center transform group-hover:-translate-y-1 transition duration-300">
                      <span className="text-[8px] tracking-[0.25em] font-extrabold uppercase text-[#1e3a8a] block mb-1">
                        CAPI-LIFT
                      </span>
                      <div className="h-36 rounded-lg bg-rose-50 flex items-center justify-center overflow-hidden mb-2">
                        <img
                          src="https://images.unsplash.com/photo-1608248597359-540134f54c15?q=80&w=400&auto=format&fit=crop"
                          alt="Flacon Sérum Lotion Anti-Chute"
                          className="w-full h-full object-cover mix-blend-multiply"
                        />
                      </div>
                      <span className="text-[10px] font-black uppercase text-rose-700 block leading-tight">
                        Lotion Anti-Chute
                      </span>
                      <span className="text-[8px] text-slate-600 font-semibold block mt-0.5">
                        ADN Moléculaire + Tripeptides
                      </span>
                    </div>
                  </div>

                  {/* Checklist of 4 items */}
                  <div className="space-y-2.5 pt-2 border-t border-white/15">
                    <div className="flex items-center space-x-2.5 text-xs text-white">
                      <CheckCircle2 className="w-4 h-4 text-rose-300 shrink-0" />
                      <span>Stimule la croissance des cheveux</span>
                    </div>
                    <div className="flex items-center space-x-2.5 text-xs text-white">
                      <CheckCircle2 className="w-4 h-4 text-rose-300 shrink-0" />
                      <span>Renforce la structure capillaire</span>
                    </div>
                    <div className="flex items-center space-x-2.5 text-xs text-white">
                      <CheckCircle2 className="w-4 h-4 text-rose-300 shrink-0" />
                      <span>Améliore la santé du cuir chevelu</span>
                    </div>
                    <div className="flex items-center space-x-2.5 text-xs text-white">
                      <CheckCircle2 className="w-4 h-4 text-rose-300 shrink-0" />
                      <span>Convient à tous types de cheveux</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting arrow 2 (Desktop) */}
              <div className="hidden lg:flex items-center justify-center -mx-2 z-20 text-slate-400">
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </div>

              {/* ------------------------------------------------------------ */}
              {/* CARD 03 : COLORER & PROTÉGER (Deep Violet / Indigo Backdrop) */}
              {/* ------------------------------------------------------------ */}
              <div className="flex-1 relative rounded-3xl overflow-hidden shadow-xl border border-indigo-900/30 text-white flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                {/* Background image for Step 03 */}
                <div className="absolute inset-0 z-0">
                  <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop"
                    alt="Coloration Capi-Lift Routine"
                    className="w-full h-full object-cover object-center filter brightness-[0.35] saturate-150 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Deep Violet / Indigo gradient matching photo */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#323963]/95 via-[#252a4b]/90 to-[#161a32]/95 backdrop-blur-[1px]" />
                  {/* Molecular glow beads */}
                  <div className="absolute -left-10 top-1/3 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl" />
                  <div className="absolute right-0 bottom-1/4 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl" />
                </div>

                <div className="relative z-10 p-8 flex flex-col h-full justify-between space-y-6">
                  {/* Header: Step + Subtitle + Title */}
                  <div className="text-center space-y-2">
                    <span className="w-10 h-10 rounded-full border border-white/60 mx-auto flex items-center justify-center text-xs font-bold tracking-wider bg-white/10 shadow-xs">
                      03
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-200 block">
                      Colorer & Protéger
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider text-white font-[family-name:var(--font-playfair)]">
                      Coloration <br /> Capi-Lift
                    </h3>
                    <p className="text-xs text-indigo-100/90 leading-relaxed max-w-xs mx-auto pt-1 font-normal">
                      Colorer et soigner en un seul geste grâce à une technologie qui protège et répare la fibre.
                    </p>
                  </div>

                  {/* Product Visual Mockup */}
                  <div className="flex items-center justify-center py-4">
                    <div className="relative w-40 sm:w-44 bg-gradient-to-b from-[#1e233d] to-[#121626] rounded-xl p-3 shadow-2xl border border-indigo-300/40 text-center transform group-hover:-translate-y-1 transition duration-300">
                      <div className="border border-indigo-400/30 rounded-lg p-2.5">
                        <span className="text-[8px] tracking-[0.25em] font-extrabold uppercase text-indigo-300 block mb-1">
                          CAPI-LIFT
                        </span>
                        <div className="h-28 rounded-md overflow-hidden bg-indigo-950 mb-2 relative">
                          <img
                            src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=400&auto=format&fit=crop"
                            alt="Nuance Coloration Capi-Lift"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-[9px] font-bold uppercase text-white block">
                          V-Plex + Argan
                        </span>
                        <span className="text-[7px] text-indigo-300 block">
                          Haute Technologie
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Checklist of 5 items */}
                  <div className="space-y-2.5 pt-2 border-t border-white/15">
                    <div className="flex items-center space-x-2.5 text-xs text-white">
                      <CheckCircle2 className="w-4 h-4 text-indigo-300 shrink-0" />
                      <span>100% couverture des cheveux blancs</span>
                    </div>
                    <div className="flex items-center space-x-2.5 text-xs text-white">
                      <CheckCircle2 className="w-4 h-4 text-indigo-300 shrink-0" />
                      <span>Couleur intense et lumineuse</span>
                    </div>
                    <div className="flex items-center space-x-2.5 text-xs text-white">
                      <CheckCircle2 className="w-4 h-4 text-indigo-300 shrink-0" />
                      <span>Zéro dommage à la cuticule</span>
                    </div>
                    <div className="flex items-center space-x-2.5 text-xs text-white">
                      <CheckCircle2 className="w-4 h-4 text-indigo-300 shrink-0" />
                      <span>Formule végane premium</span>
                    </div>
                    <div className="flex items-center space-x-2.5 text-xs text-white">
                      <CheckCircle2 className="w-4 h-4 text-indigo-300 shrink-0" />
                      <span>Sans ammoniaque agressif</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. FOUR SCIENTIFIC VALUE PILLARS (Clean White Strip)          */}
        {/* ============================================================== */}
        <section className="py-12 bg-white border-t border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Pillar 1 */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1e3a8a] shrink-0 shadow-2xs">
                  <FlaskConical className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#0f172a] mb-1">
                    Science Avancée
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Des technologies innovantes au service de la santé capillaire.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1e3a8a] shrink-0 shadow-2xs">
                  <ShieldCheck className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#0f172a] mb-1">
                    Résultats Visibles
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Des cheveux plus forts, plus denses et plus brillants.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1e3a8a] shrink-0 shadow-2xs">
                  <Sparkles className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#0f172a] mb-1">
                    Formules Premium
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Sans sulfate, sans silicone, sans colorants agressifs.
                  </p>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1e3a8a] shrink-0 shadow-2xs">
                  <Award className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#0f172a] mb-1">
                    Expertise Professionnelle
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Inspiré des standards professionnels pour des résultats performants.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. DARK BOTTOM BANNER: LA ROUTINE COMPLÈTE OPTIMALE           */}
        {/* ============================================================== */}
        <section className="py-8 bg-[#090e1c] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xs">
              
              {/* Product thumbnails together */}
              <div className="flex items-center space-x-4 shrink-0">
                <div className="flex items-end -space-x-2">
                  <div className="w-12 h-16 rounded bg-white/90 p-1 shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=200&auto=format&fit=crop"
                      alt="Shampooing"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-12 h-20 rounded bg-white/90 p-1 shadow-md -translate-y-1">
                    <img
                      src="https://images.unsplash.com/photo-1608248597359-540134f54c15?q=80&w=200&auto=format&fit=crop"
                      alt="Lotion"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-12 h-16 rounded bg-indigo-950 p-1 shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=200&auto=format&fit=crop"
                      alt="Coloration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-white">
                    La Routine Complète
                  </h4>
                  <p className="text-[11px] text-blue-200 uppercase font-semibold">
                    Pour des résultats optimaux
                  </p>
                  <p className="text-[11px] text-slate-400 max-w-md hidden sm:block">
                    Utilisez nos 3 étapes ensemble pour une efficacité maximale et des cheveux visiblement transformés.
                  </p>
                </div>
              </div>

              {/* Call to action button */}
              <div className="shrink-0">
                <a
                  href="/#diagnostic"
                  className="inline-flex items-center space-x-3 px-8 py-3 rounded-full border border-white/40 hover:border-white bg-white/5 hover:bg-white/15 text-white text-xs uppercase tracking-widest font-bold transition duration-300"
                >
                  <span>Découvrir ma routine</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 7. E-COMMERCE ASSURANCE BADGES                                 */}
        {/* ============================================================== */}
        <section className="py-6 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-slate-600">
              
              <div className="flex items-center justify-center space-x-2.5">
                <Truck className="w-4 h-4 text-[#1e3a8a]" />
                <div className="text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider block text-slate-800">
                    Livraison
                  </span>
                  <span className="text-[9px] text-slate-500 uppercase block">
                    Partout au Maroc
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2.5">
                <CreditCard className="w-4 h-4 text-[#1e3a8a]" />
                <div className="text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider block text-slate-800">
                    Paiement
                  </span>
                  <span className="text-[9px] text-slate-500 uppercase block">
                    Sécurisé
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2.5">
                <ShieldCheck className="w-4 h-4 text-[#1e3a8a]" />
                <div className="text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider block text-slate-800">
                    Produits
                  </span>
                  <span className="text-[9px] text-slate-500 uppercase block">
                    Authentiques
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2.5">
                <Headphones className="w-4 h-4 text-[#1e3a8a]" />
                <div className="text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider block text-slate-800">
                    Service Client
                  </span>
                  <span className="text-[9px] text-slate-500 uppercase block">
                    À votre écoute
                  </span>
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
