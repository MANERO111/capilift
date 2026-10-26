import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  FlaskConical,
  ShieldCheck,
  Sparkles,
  Award,
  Heart,
  Droplet,
  Check,
  ChevronRight,
  Sparkle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nos Gammes Expertes | CAPI-LIFT Hair Total Repair",
  description:
    "Des solutions ciblées pour chaque besoin capillaire. Découvrez nos 3 gammes expertes : Coloration Capi-Lift, Shampooing Anti-Chute et Lotion Anti-Chute.",
};

export default function NosGammesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-[family-name:var(--font-montserrat)] text-slate-800">
      {/* 1. Dark Navbar matching the header in the screenshot */}
      <Navbar theme="dark" activePage="gammes" />

      <main className="flex-1">
        {/* ============================================================== */}
        {/* 2. HERO SECTION WITH BACKGROUND IMAGE & SCIENTIFIC MOLECULES   */}
        {/* ============================================================== */}
        <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden bg-[#060b18] text-white">
          
          {/* Background Image Layer (Unsplash high quality model + molecular styling) */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=85&w=1920&auto=format&fit=crop"
              alt="Capi-Lift Solutions Ciblées"
              className="w-full h-full object-cover object-right-top filter brightness-[0.45] contrast-110"
            />
            {/* Dark gradient overlay to match reference dark blue/violet glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040712] via-[#081026]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060b18] via-transparent to-black/40" />

            {/* Glowing molecular nodes effect */}
            <div className="absolute right-1/4 top-1/4 w-72 h-72 bg-indigo-600/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
            <div className="absolute right-1/3 bottom-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            
            {/* Molecular floating beads illustration */}
            <div className="hidden lg:block absolute right-[28%] top-[35%] w-16 h-16 rounded-full border border-blue-400/40 bg-blue-400/10 backdrop-blur-xs shadow-[0_0_30px_rgba(96,165,250,0.5)] pointer-events-none" />
            <div className="hidden lg:block absolute right-[22%] top-[55%] w-24 h-24 rounded-full border border-indigo-400/40 bg-indigo-400/10 backdrop-blur-xs shadow-[0_0_40px_rgba(129,140,248,0.5)] pointer-events-none" />
            <div className="hidden lg:block absolute right-[36%] bottom-[20%] w-12 h-12 rounded-full border border-sky-400/40 bg-sky-400/10 backdrop-blur-xs shadow-[0_0_25px_rgba(56,189,248,0.5)] pointer-events-none" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
            <div className="max-w-2xl space-y-6">
              
              <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-[0.3em] text-blue-300 block">
                Des solutions ciblées pour
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08] font-[family-name:var(--font-playfair)]">
                Chaque Besoin <br />
                <span className="text-white">Capillaire</span>
              </h1>

              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" />

              <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed font-normal">
                Capilift combine science avancée et actifs puissants pour des cheveux plus forts, plus sains et visiblement transformés.
              </p>

              <div className="pt-4">
                <a
                  href="#gammes-list"
                  className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-full border border-white/40 hover:border-white bg-white/5 hover:bg-white/15 text-white text-xs uppercase tracking-widest font-bold backdrop-blur-md transition-all duration-300 group shadow-lg hover:shadow-blue-500/20"
                >
                  <span>Découvrez nos gammes</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. SECTION TITLE: NOS 3 GAMMES EXPERTES                        */}
        {/* ============================================================== */}
        <section id="gammes-list" className="pt-16 pb-6 bg-[#f8fafc] text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-[#0f172a] font-[family-name:var(--font-playfair)]">
              Nos 3 Gammes Expertes
            </h2>
            <div className="w-16 h-1 bg-[#1e3a8a] mx-auto mt-3 rounded-full" />
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. THE 3 DETAILED GAMMES CARDS WITH BACKGROUND IMAGES          */}
        {/* ============================================================== */}
        <section className="pb-20 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

            {/* ------------------------------------------------------------ */}
            {/* GAMME 01 : COLORATION CAPI-LIFT (Violet / Purple Aesthetic)  */}
            {/* ------------------------------------------------------------ */}
            <div
              id="coloration"
              className="relative rounded-3xl overflow-hidden shadow-xl border border-purple-200/60 p-6 sm:p-10 transition-all duration-500 hover:shadow-2xl group"
            >
              {/* Background Image Layer for Gamme 01 */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop"
                  alt="Coloration Capi-Lift Background"
                  className="w-full h-full object-cover object-center filter brightness-[0.35] saturate-150"
                />
                {/* Purple gradient backdrop matching reference */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#422e6b]/95 via-[#543b8a]/90 to-[#7a58be]/85 backdrop-blur-[2px]" />
                
                {/* Subtle molecular/liquid pattern overlay */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
              </div>

              {/* Content Grid */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-white">
                
                {/* Left Info: Number + Title + Subtitle + 4 Badges + CTA */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex items-center space-x-3">
                    <span className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center text-xs font-bold tracking-wider bg-white/10">
                      01
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider font-[family-name:var(--font-playfair)]">
                      Coloration <br /> Capi-Lift
                    </h3>
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-widest text-purple-200">
                    Colorer et soigner en un seul geste
                  </p>

                  <p className="text-xs sm:text-sm text-purple-100/90 leading-relaxed max-w-md">
                    Une coloration nouvelle génération qui allie haute performance couleur et soin profond de la fibre capillaire.
                  </p>

                  {/* 4 Feature Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-1 text-white">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider">100%</span>
                      <span className="text-[8px] text-purple-200 uppercase">Couverture blancs</span>
                    </div>

                    <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-1 text-white">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider">Pigments</span>
                      <span className="text-[8px] text-purple-200 uppercase">Intenses</span>
                    </div>

                    <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-1 text-white">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider">Zéro</span>
                      <span className="text-[8px] text-purple-200 uppercase">Dommage cuticule</span>
                    </div>

                    <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-1 text-white">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider">Formule</span>
                      <span className="text-[8px] text-purple-200 uppercase">Végane</span>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-2">
                    <button className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full border border-white/60 hover:bg-white hover:text-purple-950 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer">
                      <span>Découvrir</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Center Visual: Product Box + Serum drop petri background */}
                <div className="lg:col-span-4 flex items-center justify-center relative py-4">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                    {/* Glowing Gel circle disk */}
                    <div className="absolute inset-0 rounded-full bg-purple-300/30 border border-white/40 backdrop-blur-md shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-purple-400/40 to-white/40 blur-xs" />
                    </div>

                    {/* Product Mockup Box */}
                    <div className="relative z-10 w-40 sm:w-44 bg-gradient-to-b from-[#201538] to-[#120b22] rounded-xl p-3 shadow-2xl border border-purple-300/40 transform group-hover:-translate-y-2 transition-transform duration-300">
                      <div className="border border-purple-400/40 rounded-lg p-2.5 text-center">
                        <span className="text-[8px] tracking-[0.25em] font-extrabold uppercase text-purple-300 block mb-1">
                          CAPI-LIFT
                        </span>
                        <div className="h-28 rounded-md overflow-hidden bg-purple-950 mb-2 relative">
                          <img
                            src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=400&auto=format&fit=crop"
                            alt="Teinte de coloration"
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute bottom-1 right-1 bg-black/60 px-1 py-0.5 rounded text-[7px] text-white font-mono">
                            PREMIUM
                          </span>
                        </div>
                        <span className="text-[9px] font-bold uppercase text-white block">
                          V-Plex + Argan
                        </span>
                        <span className="text-[7px] text-purple-300 block">
                          Formule Salon Haute Définition
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Technology Spec */}
                <div className="lg:col-span-3 space-y-3 lg:border-l lg:border-white/20 lg:pl-8">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-purple-200 block">
                    Technologie
                  </span>
                  <h4 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-white">
                    VPLEX + Arginine
                  </h4>
                  <p className="text-xs text-purple-100 leading-relaxed font-normal">
                    Répare la fibre en profondeur et protège durablement les cheveux pendant et après la coloration.
                  </p>
                  <a
                    href="#science"
                    className="inline-flex items-center text-xs uppercase tracking-wider font-bold text-white hover:text-purple-200 pt-2 transition"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </div>

              </div>
            </div>

            {/* ------------------------------------------------------------ */}
            {/* GAMME 02 : SHAMPOOING ANTI-CHUTE (Deep Blue / Sky Aesthetic) */}
            {/* ------------------------------------------------------------ */}
            <div
              id="shampooing"
              className="relative rounded-3xl overflow-hidden shadow-xl border border-sky-200/60 p-6 sm:p-10 transition-all duration-500 hover:shadow-2xl group"
            >
              {/* Background Image Layer for Gamme 02 */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=1600&auto=format&fit=crop"
                  alt="Shampooing Anti-Chute Background"
                  className="w-full h-full object-cover object-center filter brightness-[0.35] saturate-150"
                />
                {/* Deep Blue gradient backdrop matching reference */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#173d6b]/95 via-[#235894]/90 to-[#4185cf]/85 backdrop-blur-[2px]" />
                
                {/* Blue glow effect */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
              </div>

              {/* Content Grid */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-white">
                
                {/* Left Info: Number + Title + Subtitle + 4 Badges + CTA */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex items-center space-x-3">
                    <span className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center text-xs font-bold tracking-wider bg-white/10">
                      02
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider font-[family-name:var(--font-playfair)]">
                      Shampooing <br /> Anti-Chute
                    </h3>
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-widest text-sky-200">
                    Renforce dès la racine
                  </p>

                  <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed max-w-md">
                    Une formule avancée à la technologie TheraVitx5 et à la niacinamide pour revitaliser le cuir chevelu et réduire la chute.
                  </p>

                  {/* 4 Feature Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-1 text-white">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider">Renforce</span>
                      <span className="text-[8px] text-sky-200 uppercase">La racine</span>
                    </div>

                    <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-1 text-white">
                        <Sparkle className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider">Réduit</span>
                      <span className="text-[8px] text-sky-200 uppercase">La chute</span>
                    </div>

                    <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-1 text-white">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider">Cuir Chevelu</span>
                      <span className="text-[8px] text-sky-200 uppercase">Protégé</span>
                    </div>

                    <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-1 text-white">
                        <Droplet className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider">Sans Sulfate</span>
                      <span className="text-[8px] text-sky-200 uppercase">Ni silicone</span>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-2">
                    <button className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full border border-white/60 hover:bg-white hover:text-sky-950 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer">
                      <span>Découvrir</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Center Visual: Bottle + Fluid water ring disk */}
                <div className="lg:col-span-4 flex items-center justify-center relative py-4">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                    {/* Glowing water ring */}
                    <div className="absolute inset-0 rounded-full bg-sky-300/30 border border-white/40 backdrop-blur-md shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-sky-400/40 to-white/40 blur-xs" />
                    </div>

                    {/* Bottle mockup */}
                    <div className="relative z-10 w-36 sm:w-40 bg-white/95 rounded-2xl p-4 shadow-2xl border border-white text-slate-800 text-center transform group-hover:-translate-y-2 transition-transform duration-300">
                      <span className="text-[8px] tracking-[0.25em] font-extrabold uppercase text-[#1e3a8a] block mb-1">
                        CAPI-LIFT
                      </span>
                      <div className="h-32 rounded-lg bg-sky-50 flex items-center justify-center overflow-hidden mb-2">
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
                </div>

                {/* Right Technology Spec */}
                <div className="lg:col-span-3 space-y-3 lg:border-l lg:border-white/20 lg:pl-8">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-sky-200 block">
                    Technologie
                  </span>
                  <h4 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-white">
                    TheraVitx5 + Niacinamide
                  </h4>
                  <p className="text-xs text-sky-100 leading-relaxed font-normal">
                    Stimule la microcirculation du cuir chevelu et renforce les cheveux dès la racine pour contrer l&apos;affinement capillaire.
                  </p>
                  <a
                    href="#science"
                    className="inline-flex items-center text-xs uppercase tracking-wider font-bold text-white hover:text-sky-200 pt-2 transition"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </div>

              </div>
            </div>

            {/* ------------------------------------------------------------ */}
            {/* GAMME 03 : LOTION ANTI-CHUTE (Rose / Coral Aesthetic)        */}
            {/* ------------------------------------------------------------ */}
            <div
              id="lotion"
              className="relative rounded-3xl overflow-hidden shadow-xl border border-rose-200/60 p-6 sm:p-10 transition-all duration-500 hover:shadow-2xl group"
            >
              {/* Background Image Layer for Gamme 03 */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1608248597359-540134f54c15?q=80&w=1600&auto=format&fit=crop"
                  alt="Lotion Anti-Chute Background"
                  className="w-full h-full object-cover object-center filter brightness-[0.35] saturate-150"
                />
                {/* Rose / Coral gradient backdrop matching reference */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#6e2e43]/95 via-[#8a3c57]/90 to-[#b55877]/85 backdrop-blur-[2px]" />
                
                {/* Rose glow effect */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-400/20 rounded-full blur-3xl pointer-events-none" />
              </div>

              {/* Content Grid */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-white">
                
                {/* Left Info: Number + Title + Subtitle + 4 Badges + CTA */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex items-center space-x-3">
                    <span className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center text-xs font-bold tracking-wider bg-white/10">
                      03
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider font-[family-name:var(--font-playfair)]">
                      Lotion <br /> Anti-Chute
                    </h3>
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-widest text-rose-200">
                    Stimule la croissance et renforce la fibre
                  </p>

                  <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed max-w-md">
                    Un concentré innovant à base d&apos;ADN moléculaire et de tripeptides pour activer les follicules et densifier la chevelure.
                  </p>

                  {/* 4 Feature Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-1 text-white">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider">Stimule</span>
                      <span className="text-[8px] text-rose-200 uppercase">La croissance</span>
                    </div>

                    <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-1 text-white">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider">Renforce</span>
                      <span className="text-[8px] text-rose-200 uppercase">La structure</span>
                    </div>

                    <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-1 text-white">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider">Santé</span>
                      <span className="text-[8px] text-rose-200 uppercase">Cuir chevelu</span>
                    </div>

                    <div className="flex flex-col items-center text-center p-2 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mb-1 text-white">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider">Tous Types</span>
                      <span className="text-[8px] text-rose-200 uppercase">De cheveux</span>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-2">
                    <button className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full border border-white/60 hover:bg-white hover:text-rose-950 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer">
                      <span>Découvrir</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Center Visual: Serum spray bottle + Gel disc */}
                <div className="lg:col-span-4 flex items-center justify-center relative py-4">
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                    {/* Glowing rose serum disk */}
                    <div className="absolute inset-0 rounded-full bg-rose-300/30 border border-white/40 backdrop-blur-md shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-rose-400/40 to-white/40 blur-xs" />
                    </div>

                    {/* Spray Bottle mockup */}
                    <div className="relative z-10 w-36 sm:w-40 bg-white/95 rounded-2xl p-4 shadow-2xl border border-white text-slate-800 text-center transform group-hover:-translate-y-2 transition-transform duration-300">
                      <span className="text-[8px] tracking-[0.25em] font-extrabold uppercase text-[#1e3a8a] block mb-1">
                        CAPI-LIFT
                      </span>
                      <div className="h-32 rounded-lg bg-rose-50 flex items-center justify-center overflow-hidden mb-2">
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
                </div>

                {/* Right Technology Spec */}
                <div className="lg:col-span-3 space-y-3 lg:border-l lg:border-white/20 lg:pl-8">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-rose-200 block">
                    Technologie
                  </span>
                  <h4 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-white">
                    ADN Moléculaire + Tripeptides
                  </h4>
                  <p className="text-xs text-rose-100 leading-relaxed font-normal">
                    Active les follicules pileux et renforce la fibre en profondeur pour freiner visiblement la chute et stimuler la densité.
                  </p>
                  <a
                    href="#science"
                    className="inline-flex items-center text-xs uppercase tracking-wider font-bold text-white hover:text-rose-200 pt-2 transition"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. UNE ROUTINE COMPLÈTE POUR DES RÉSULTATS VISIBLES (DARK BG) */}
        {/* ============================================================== */}
        <section className="relative py-16 bg-[#080d19] text-white overflow-hidden border-t border-b border-white/10">
          {/* Microscopic fiber background image */}
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1600&auto=format&fit=crop"
              alt="Fibre capillaire au microscope"
              className="w-full h-full object-cover object-right filter brightness-50 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080d19] via-[#080d19]/90 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left headline */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wider font-[family-name:var(--font-playfair)]">
                  Une Routine Complète <br /> Pour des Résultats Visibles
                </h3>
                <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
                  Associez nos gammes pour une action complète à chaque étape de votre routine capillaire.
                </p>
                <div className="pt-2">
                  <a
                    href="/#diagnostic"
                    className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#3b5998] hover:bg-[#2d4373] text-white text-xs uppercase tracking-widest font-bold shadow-md transition"
                  >
                    Découvrir nos routines
                  </a>
                </div>
              </div>

              {/* 3 Steps Routine with arrows */}
              <div className="lg:col-span-7 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Step 01 */}
                <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xs w-full sm:w-auto flex-1">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 shrink-0">
                    <Droplet className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-blue-300 block">
                      01. Nettoyer & Équilibrer
                    </span>
                    <span className="text-xs font-semibold text-white block">
                      Shampooing Anti-Chute
                    </span>
                  </div>
                </div>

                <div className="hidden sm:block text-slate-400">
                  <ArrowRight className="w-5 h-5" />
                </div>

                {/* Step 02 */}
                <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xs w-full sm:w-auto flex-1">
                  <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-rose-300 block">
                      02. Traiter & Stimuler
                    </span>
                    <span className="text-xs font-semibold text-white block">
                      Lotion Anti-Chute
                    </span>
                  </div>
                </div>

                <div className="hidden sm:block text-slate-400">
                  <ArrowRight className="w-5 h-5" />
                </div>

                {/* Step 03 */}
                <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xs w-full sm:w-auto flex-1">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-purple-300 block">
                      03. Protéger & Renforcer
                    </span>
                    <span className="text-xs font-semibold text-white block">
                      Coloration Capi-Lift
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. BOTTOM VALUE PILLARS (5 Pillars matching the screenshot)   */}
        {/* ============================================================== */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              
              {/* Pillar 1 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1e3a8a] mb-2.5 shadow-2xs">
                  <FlaskConical className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900 mb-1">
                  Science Avancée
                </h4>
                <p className="text-[10px] text-slate-500 leading-normal max-w-[170px]">
                  Des formules innovantes qui agissent au cœur de la fibre et du cuir chevelu.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1e3a8a] mb-2.5 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900 mb-1">
                  Résultats Visibles
                </h4>
                <p className="text-[10px] text-slate-500 leading-normal max-w-[170px]">
                  Des cheveux plus forts, plus sains, plus brillants jour après jour.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1e3a8a] mb-2.5 shadow-2xs">
                  <Sparkles className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900 mb-1">
                  Formules Premium
                </h4>
                <p className="text-[10px] text-slate-500 leading-normal max-w-[170px]">
                  Sans sulfate, sans silicone, sans colorants agressifs.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1e3a8a] mb-2.5 shadow-2xs">
                  <Award className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900 mb-1">
                  Expertise Pro
                </h4>
                <p className="text-[10px] text-slate-500 leading-normal max-w-[170px]">
                  Inspiré des standards professionnels pour des résultats haute performance.
                </p>
              </div>

              {/* Pillar 5 */}
              <div className="flex flex-col items-center col-span-2 md:col-span-1">
                <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1e3a8a] mb-2.5 shadow-2xs">
                  <Heart className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900 mb-1">
                  Engagement Éthique
                </h4>
                <p className="text-[10px] text-slate-500 leading-normal max-w-[170px]">
                  Formules véganes, non testées sur les animaux.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* 7. Reusable Footer */}
      <Footer />
    </div>
  );
}
