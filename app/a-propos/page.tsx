import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sparkles,
  ShieldCheck,
  FlaskConical,
  Award,
  Atom,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Leaf,
  Microscope,
  Building2,
  Users2,
  Clock,
  Sparkle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "À Propos | CAPI-LIFT - La Haute Technologie Moléculaire Capillaire",
  description:
    "Découvrez l'histoire, la vision scientifique et les engagements d'excellence de CAPI-LIFT, marque pionnière distribuée par ICG au Maroc.",
};

export default function AProposPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-[family-name:var(--font-montserrat)] text-slate-800">
      {/* 1. Always Dark Navbar */}
      <Navbar activePage="apropos" />

      <main className="flex-1">
        {/* ============================================================== */}
        {/* 1. HERO SECTION WITH MOLECULAR AESTHETICS & SCIENTIFIC GLOW    */}
        {/* ============================================================== */}
        <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden bg-gradient-to-br from-[#060b18] via-[#0b152d] to-[#040813] text-white">
          {/* Background image & gradient overlays */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=85&w=1920&auto=format&fit=crop"
              alt="CAPI-LIFT Haute Technologie Capillaire"
              className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040713] via-[#08122c]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060b18] via-transparent to-black/40" />

            {/* Glowing orbs */}
            <div className="absolute right-1/4 top-1/4 w-80 h-80 bg-blue-600/25 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
            <div className="absolute right-1/3 bottom-12 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Subtle molecular grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `radial-gradient(#60a5fa 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
            <div className="max-w-2xl space-y-6">
              
              <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs uppercase font-extrabold tracking-[0.3em] text-blue-300 bg-blue-900/40 border border-blue-400/30 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                <span>Notre Maison & Vision</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08] font-[family-name:var(--font-playfair)]">
                L&apos;Excellence Scientifique, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-100 to-indigo-200">
                  Sublimée par la Passion.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-xl">
                CAPI-LIFT est née de la convergence entre la recherche bio-moléculaire la plus avancée et le savoir-faire de la haute coiffure professionnelle internationale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#histoire"
                  className="inline-flex justify-center items-center px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded shadow-lg shadow-blue-900/30 hover:-translate-y-0.5 transition duration-200"
                >
                  Notre Histoire
                </a>

                <a
                  href="#valeurs"
                  className="inline-flex justify-center items-center px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs sm:text-sm font-bold tracking-widest uppercase rounded backdrop-blur-md hover:-translate-y-0.5 transition duration-200"
                >
                  Nos Piliers
                </a>
              </div>

              {/* Key Trust Counters */}
              <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/10 text-white">
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white">100%</span>
                  <span className="text-[10px] sm:text-xs uppercase text-slate-400 font-semibold tracking-wider">
                    Formules Testées
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-blue-300">3 Brevets</span>
                  <span className="text-[10px] sm:text-xs uppercase text-slate-400 font-semibold tracking-wider">
                    Technologies Clés
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white">ICG</span>
                  <span className="text-[10px] sm:text-xs uppercase text-slate-400 font-semibold tracking-wider">
                    Distributeur Officiel
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 2. NOTRE HISTOIRE & MANIFESTE                                  */}
        {/* ============================================================== */}
        <section id="histoire" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Images Composition */}
              <div className="lg:col-span-6 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  
                  {/* Decorative background aura */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl -rotate-2 transform blur-lg opacity-70" />
                  
                  {/* Main Large Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                    <img
                      src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=900&auto=format&fit=crop"
                      alt="Laboratoire et expertise Capi-Lift"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] uppercase font-bold tracking-widest bg-blue-600/90 px-2 py-0.5 rounded">
                        Laboratoire de Formulation
                      </span>
                      <p className="text-xs font-medium mt-1">Recherche & Développement de pointe</p>
                    </div>
                  </div>

                  {/* Overlapping Badge Card */}
                  <div className="absolute -bottom-8 -right-6 sm:bottom-6 sm:-right-8 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 max-w-[240px] hidden sm:block animate-pulse-glow">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1e3a8a]">
                        <Microscope className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase text-[#0f172a]">ADN Moléculaire</p>
                        <p className="text-[10px] text-slate-500">Complexe Bio-Actif</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      Pénétration intramoléculaire jusqu&apos;au cortex capillaire.
                    </p>
                  </div>

                </div>
              </div>

              {/* Right Story Description */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center space-x-2 text-[11px] uppercase font-bold tracking-[0.25em] text-[#1e3a8a] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  <Sparkle className="w-3.5 h-3.5 text-[#1e3a8a]" />
                  <span>Genèse & Ambition</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#0f172a] font-[family-name:var(--font-playfair)] leading-tight">
                  Repousser les limites du soin capillaire
                </h2>

                <div className="w-12 h-0.5 bg-[#1e3a8a]" />

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Chaque cheveu porte en lui une architecture moléculaire délicate, exposée en permanence aux agressions environnementales, aux traitements thermiques et aux décolorations répétées.
                </p>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Fondée avec l&apos;ambition de ne faire aucun compromis entre efficacité esthétique immédiate et santé biologique à long terme, la gamme <strong className="text-slate-900 font-semibold">CAPI-LIFT</strong> intègre des actifs tripeptides, des vitamines hydrosolubles et des complexes régénérants d&apos;avant-garde.
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Origine Certifiée</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Normes internationales strictes de fabrication.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Sans Compromis</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">0% sulfate toxique, parabènes et perturbateurs.</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. LES 3 TECHNOLOGIES SCIENTIFIQUES SIGNATURES                 */}
        {/* ============================================================== */}
        <section className="py-20 bg-gradient-to-br from-[#0a1224] via-[#0f1b38] to-[#080d19] text-white relative overflow-hidden">
          {/* Subtle micro background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] uppercase font-bold tracking-[0.3em] text-blue-300 block mb-2">
                Haute Technologie Moléculaire
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white font-[family-name:var(--font-playfair)]">
                Nos 3 Piliers Technologiques
              </h2>
              <div className="w-12 h-0.5 bg-blue-400 mx-auto mt-3 mb-4" />
              <p className="text-xs sm:text-sm text-slate-300">
                La science brevetée au service d&apos;une métamorphose durable de votre chevelure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Pillar 1: V-PLEX */}
              <div className="group rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-400/40 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.08] shadow-xl">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Atom className="w-7 h-7" />
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-widest text-blue-300 block mb-1">
                    Technologie 01
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-3">
                    Complexe V-Plex
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                    Reconstitue les ponts disulfures rompus par les décolorations et agressions chimiques. Renforce la cohésion interne du cheveu en prévenant la casse jusqu&apos;à 94%.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center text-[11px] text-blue-200 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-blue-400 mr-2" />
                  Présent dans la Gamme Coloration
                </div>
              </div>

              {/* Pillar 2: TheraVitx5 */}
              <div className="group rounded-2xl bg-white/[0.04] border border-white/10 hover:border-indigo-400/40 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.08] shadow-xl">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                    <FlaskConical className="w-7 h-7" />
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-300 block mb-1">
                    Technologie 02
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-3">
                    TheraVitx5 Multi-Actif
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                    Cocktail synergique de 5 vitamines et nutriments essentiels (B3, B5, B6, Biotine & Kératine pure) dynamisant l&apos;ancrage racinaire et boostant la circulation au bulbe.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center text-[11px] text-indigo-200 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2" />
                  Présent dans le Shampooing Énergisant
                </div>
              </div>

              {/* Pillar 3: ADN Moléculaire & Tripeptides */}
              <div className="group rounded-2xl bg-white/[0.04] border border-white/10 hover:border-rose-400/40 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.08] shadow-xl">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-7 h-7" />
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-widest text-rose-300 block mb-1">
                    Technologie 03
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-3">
                    ADN Moléculaire + Tripeptides
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                    Stimulation cellulaire ciblée pour relancer la phase anagène de croissance. Agit contre la chute saisonnière et l&apos;affinement prématuré des cheveux.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center text-[11px] text-rose-200 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-rose-400 mr-2" />
                  Présent dans la Lotion Sérum Anti-Chute
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. NOS VALEURS & ENGAGEMENTS ÉTHIQUES                          */}
        {/* ============================================================== */}
        <section id="valeurs" className="py-24 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] uppercase font-bold tracking-[0.3em] text-[#1e3a8a] block mb-2">
                Ce Qui Nous Anime
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#0f172a] font-[family-name:var(--font-playfair)]">
                Nos Engagements Fondamentaux
              </h2>
              <div className="w-12 h-0.5 bg-[#1e3a8a] mx-auto mt-3 mb-4" />
              <p className="text-xs sm:text-sm text-slate-600">
                L&apos;éthique de nos formules est au cœur de chaque flacon que nous créons.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md hover:-translate-y-1 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1e3a8a] mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#0f172a] mb-2">
                  Sécurité & Innocuité
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Formulations douces respectant l&apos;équilibre physiologique du cuir chevelu le plus sensible.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md hover:-translate-y-1 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1e3a8a] mb-5">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#0f172a] mb-2">
                  Actifs Éco-Conçus
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Ingrédients nobles d&apos;origine végétale et synthèses biomimétiques propres.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md hover:-translate-y-1 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1e3a8a] mb-5">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#0f172a] mb-2">
                  Testé en Salon
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Validé et plébiscité par des coloristes et spécialistes de la coiffure haute couture.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md hover:-translate-y-1 transition duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1e3a8a] mb-5">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#0f172a] mb-2">
                  Engagement Client
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Transparence totale sur la composition et accompagnement sur-mesure pour chaque type de cheveu.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. DISTRIBUÉ PAR ICG AU MAROC                                  */}
        {/* ============================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-[#0c172f] via-[#122449] to-[#091122] text-white p-8 sm:p-14 overflow-hidden relative shadow-2xl">
              
              {/* Background abstract element */}
              <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none" />
              <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase font-extrabold tracking-widest text-blue-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Réseau Officiel au Maroc</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-white font-[family-name:var(--font-playfair)]">
                    Distribué en Exclusivité par ICG
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
                    Acteur de référence dans la distribution de marques cosmétiques et capillaires premium à travers l&apos;ensemble du Royaume du Maroc. ICG garantit l&apos;authenticité de chaque référence CAPI-LIFT, une logistique rapide partout au Maroc et un service client dédié aux particuliers comme aux salons de coiffure professionnels.
                  </p>

                  <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-blue-200">
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Authenticité 100% Garantie</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Livraison Rapide 58 Villes</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Support Salons Agréés</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center w-full max-w-xs shadow-xl">
                    <span className="text-[11px] text-slate-300 uppercase tracking-widest block mb-2 font-semibold">
                      Partenaire Officiel
                    </span>
                    <div className="w-24 h-24 mx-auto rounded-full bg-slate-900 border-2 border-blue-400/50 flex items-center justify-center text-white text-3xl font-black tracking-widest shadow-inner mb-4">
                      ICG
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-white block">
                      ICG Morocco Distribution
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-1">
                      Cosmétiques & Soins Haute Performance
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. CALL TO ACTION TO DISCOVER ROUTINES & GAMMES                */}
        {/* ============================================================== */}
        <section className="py-20 bg-gradient-to-b from-white to-slate-50 text-center border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0f172a] font-[family-name:var(--font-playfair)] mb-3">
              Prêt(e) à révéler la force de vos cheveux ?
            </h2>
            <div className="w-12 h-0.5 bg-[#1e3a8a] mx-auto mb-5" />
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-8 font-medium">
              Explorez nos gammes expertes et nos routines sur-mesure pour trouver la réponse exacte aux besoins de vos cheveux.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/nos-gammes"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#1b2b52] hover:bg-[#152342] text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded shadow-lg shadow-blue-900/20 hover:-translate-y-0.5 transition duration-200"
              >
                Explorer Nos Gammes
              </Link>
              <Link
                href="/routines"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#1b2b52] border border-[#1b2b52] hover:bg-slate-50 text-xs sm:text-sm font-bold tracking-widest uppercase rounded hover:-translate-y-0.5 transition duration-200"
              >
                Découvrir Les Routines
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Reusable Light Footer */}
      <Footer />
    </div>
  );
}
