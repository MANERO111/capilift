"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  Search,
  ChevronDown,
  Calendar,
  Clock,
  BookOpen,
  Mail,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";

interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryTag: string;
  categoryColor: string;
  date: string;
  readTime: string;
  image: string;
}

const articlesData: Article[] = [
  {
    id: "pourquoi-les-cheveux-tombent",
    title: "Pourquoi les cheveux tombent ?",
    description:
      "Comprendre les causes de la chute de cheveux et identifier les facteurs qui fragilisent le cuir chevelu.",
    category: "sante",
    categoryTag: "SANTÉ CAPILLAIRE",
    categoryColor: "bg-purple-100 text-purple-800",
    date: "12 Mai 2024",
    readTime: "5 min de lecture",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "comment-renforcer-la-fibre-capillaire",
    title: "Comment renforcer la fibre capillaire ?",
    description:
      "Les meilleurs actifs et gestes à adopter pour réparer, renforcer et protéger la fibre en profondeur.",
    category: "soins",
    categoryTag: "SOINS & TRAITEMENTS",
    categoryColor: "bg-purple-100 text-purple-800",
    date: "26 Avril 2024",
    readTime: "6 min de lecture",
    image:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "coloration-sans-abimer-les-cheveux",
    title: "Coloration sans abîmer les cheveux",
    description:
      "Tout savoir sur les colorations respectueuses qui préservent la santé et la brillance du cheveu.",
    category: "coloration",
    categoryTag: "COLORATION",
    categoryColor: "bg-purple-100 text-purple-800",
    date: "15 Avril 2024",
    readTime: "4 min de lecture",
    image:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "routine-anti-chute-efficace",
    title: "Routine anti-chute efficace",
    description:
      "Les étapes clés d'une routine complète pour freiner la chute et stimuler la croissance.",
    category: "routines",
    categoryTag: "ROUTINES & CONSEILS",
    categoryColor: "bg-purple-100 text-purple-800",
    date: "02 Avril 2024",
    readTime: "6 min de lecture",
    image:
      "https://images.unsplash.com/photo-1608248597359-540134f54c15?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "les-erreurs-capillaires-a-eviter",
    title: "Les erreurs capillaires à éviter",
    description:
      "Ces habitudes qui fragilisent vos cheveux sans que vous le sachiez et comment les corriger.",
    category: "pratiques",
    categoryTag: "BONNES PRATIQUES",
    categoryColor: "bg-purple-100 text-purple-800",
    date: "20 Mars 2024",
    readTime: "5 min de lecture",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ArticlesConseilsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const filteredArticles = articlesData.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white font-[family-name:var(--font-montserrat)] text-slate-800">
      {/* 1. Dark Navbar with active indicator on "ARTICLES" */}
      <Navbar theme="dark" activePage="articles" />

      <main className="flex-1">
        {/* ============================================================== */}
        {/* 2. HERO SECTION WITH BACKGROUND IMAGE & MOLECULAR VISUALS      */}
        {/* ============================================================== */}
        <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center overflow-hidden bg-[#060b18] text-white">
          {/* Background image & deep gradient overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=85&w=1920&auto=format&fit=crop"
              alt="L'expertise capillaire Capi-Lift"
              className="w-full h-full object-cover object-right-top filter brightness-[0.42] contrast-110"
            />
            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#040711] via-[#091228]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060b18] via-transparent to-black/30" />

            {/* Glowing Molecular Beads Overlay */}
            <div className="absolute right-1/4 top-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
            <div className="absolute right-1/3 bottom-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Floating glass molecules */}
            <div className="hidden lg:block absolute right-[28%] top-[35%] w-16 h-16 rounded-full border border-blue-400/40 bg-blue-400/10 backdrop-blur-xs shadow-[0_0_30px_rgba(96,165,250,0.5)] pointer-events-none" />
            <div className="hidden lg:block absolute right-[22%] top-[55%] w-24 h-24 rounded-full border border-indigo-400/40 bg-indigo-400/10 backdrop-blur-xs shadow-[0_0_40px_rgba(129,140,248,0.5)] pointer-events-none" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
            <div className="max-w-2xl space-y-5">
              <span className="text-[11px] sm:text-xs uppercase font-extrabold tracking-[0.3em] text-blue-300 block">
                Articles & Conseils
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08] font-[family-name:var(--font-playfair)]">
                L&apos;Expertise Capillaire <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-indigo-200">
                  Au Service de vos Cheveux
                </span>
              </h1>

              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" />

              <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed font-normal">
                Découvrez nos conseils, nos astuces et nos guides d&apos;experts pour mieux comprendre vos cheveux et adopter les bons gestes au quotidien.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 3. FILTER BAR (CATEGORIES & SEARCH)                           */}
        {/* ============================================================== */}
        <section className="py-8 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Category Dropdown */}
              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f172a] shrink-0">
                  Catégories
                </span>
                <div className="relative w-full sm:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold py-2.5 px-4 pr-10 rounded-lg focus:outline-none focus:border-[#1e3a8a] focus:bg-white cursor-pointer transition shadow-2xs"
                  >
                    <option value="all">Toutes les catégories</option>
                    <option value="sante">Santé Capillaire</option>
                    <option value="soins">Soins & Traitements</option>
                    <option value="coloration">Coloration</option>
                    <option value="routines">Routines & Conseils</option>
                    <option value="pratiques">Bonnes Pratiques</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Search input with search icon */}
              <div className="relative w-full sm:w-80">
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-xs py-2.5 pl-4 pr-10 rounded-lg focus:outline-none focus:border-[#1e3a8a] focus:bg-white transition shadow-2xs"
                />
                <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 4. ARTICLES GRID (EXACT SAME CARDS & IMAGES FROM PHOTO)        */}
        {/* ============================================================== */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
                >
                  {/* Article Thumbnail */}
                  <div className="relative h-56 overflow-hidden bg-slate-900">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Article Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                    <div>
                      {/* Category Tag */}
                      <span className="inline-block px-3 py-1 rounded bg-purple-100/90 text-purple-900 text-[10px] font-extrabold uppercase tracking-wider mb-3">
                        {article.categoryTag}
                      </span>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-[#1e3a8a] transition-colors leading-snug mb-2 font-[family-name:var(--font-playfair)]">
                        {article.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {article.description}
                      </p>
                    </div>

                    {/* Metadata Footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                      <div className="flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-16 text-slate-400">
                <p className="text-sm">Aucun article ne correspond à votre recherche.</p>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================== */}
        {/* 5. EXPERT BANNER (DES CONSEILS D'EXPERTS...)                    */}
        {/* ============================================================== */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-r from-[#212f54] via-[#2d3a68] to-[#1c2646] p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
              
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-xs">
                  <BookOpen className="w-6 h-6 text-blue-200" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-white">
                    Des conseils d&apos;experts pour des cheveux plus forts, plus sains, plus beaux.
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Restez informé(e) de nos derniers articles et astuces capillaires.
                  </p>
                </div>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <a
                  href="#articles"
                  className="inline-flex items-center justify-center space-x-3 w-full md:w-auto px-8 py-3 rounded-full border border-white/40 hover:border-white bg-white/5 hover:bg-white/15 text-white text-xs uppercase tracking-widest font-bold transition duration-300 shadow-md"
                >
                  <span>Découvrir tous les articles</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 6. NEWSLETTER SUBSCRIPTION SECTION                             */}
        {/* ============================================================== */}
        <section className="py-10 bg-[#0c1427] text-white border-t border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              
              {/* Left headline with Mail icon */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white">
                    Recevez nos conseils experts et nos offres exclusives
                  </h4>
                  <p className="text-xs text-slate-400">
                    Abonnez-vous à notre newsletter.
                  </p>
                </div>
              </div>

              {/* Right input form */}
              <div className="w-full lg:w-auto flex-1 max-w-md">
                {newsletterSubmitted ? (
                  <div className="p-3 bg-emerald-900/60 border border-emerald-500 rounded-lg text-emerald-200 text-xs text-center font-semibold">
                    ✓ Merci pour votre inscription !
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (email) setNewsletterSubmitted(true);
                    }}
                    className="flex rounded-lg overflow-hidden border border-white/20 bg-white/5 backdrop-blur-xs focus-within:border-blue-400"
                  >
                    <input
                      type="email"
                      placeholder="Votre email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#6b58a6] hover:bg-[#5b4a8f] text-white text-xs uppercase font-extrabold tracking-widest flex items-center space-x-2 transition cursor-pointer shrink-0"
                    >
                      <span>S&apos;inscrire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* 7. DEDICATED DARK FOOTER MATCHING THE SCREENSHOT EXACTLY       */}
        {/* ============================================================== */}
        <footer className="bg-[#070b16] text-white pt-16 pb-10 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
              
              {/* Col 1: Brand & Bio */}
              <div className="space-y-4">
                <Link href="/" className="inline-block">
                  <div className="text-2xl font-extrabold tracking-wider text-white font-[family-name:var(--font-playfair)]">
                    CAPI-LIFT
                  </div>
                  <span className="text-[9px] tracking-[0.28em] font-semibold text-blue-300 uppercase block -mt-1">
                    Hair Total Repair
                  </span>
                </Link>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Des solutions capillaires expertes qui allient science, innovation et performance pour des cheveux plus forts, plus sains et plus beaux.
                </p>
                {/* Social icons */}
                <div className="flex items-center space-x-3 pt-2">
                  <a
                    href="#instagram"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition"
                  >
                    <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>
                  <a
                    href="#facebook"
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="#tiktok"
                    aria-label="TikTok"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.48 2.74 1.44-.04 2.74-.99 3.14-2.37.15-.49.2-1.01.2-1.52.03-5.26.01-10.51.01-15.77z"/>
                    </svg>
                  </a>
                  <a
                    href="#youtube"
                    aria-label="YouTube"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Col 2: Nos Gammes */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                  Nos Gammes
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-400">
                  <li>
                    <Link href="/nos-gammes#coloration" className="hover:text-white transition">
                      Coloration Capi-Lift
                    </Link>
                  </li>
                  <li>
                    <Link href="/nos-gammes#shampooing" className="hover:text-white transition">
                      Shampooing Anti-Chute
                    </Link>
                  </li>
                  <li>
                    <Link href="/nos-gammes#lotion" className="hover:text-white transition">
                      Lotion Anti-Chute
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 3: Informations */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                  Informations
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-400">
                  <li>
                    <Link href="#livraison" className="hover:text-white transition">
                      Livraison & Retours
                    </Link>
                  </li>
                  <li>
                    <Link href="#mentions" className="hover:text-white transition">
                      Mentions légales
                    </Link>
                  </li>
                  <li>
                    <Link href="#cgv" className="hover:text-white transition">
                      Conditions générales de vente
                    </Link>
                  </li>
                  <li>
                    <Link href="#confidentialite" className="hover:text-white transition">
                      Politique de confidentialité
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 4: Besoin d'aide ? */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                  Besoin d&apos;aide ?
                </h4>
                <ul className="space-y-2.5 text-xs text-slate-400">
                  <li>
                    <Link href="#faq" className="hover:text-white transition">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" className="hover:text-white transition">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#rendez-vous" className="hover:text-white transition">
                      Prendre rendez-vous
                    </Link>
                  </li>
                  <li>
                    <Link href="#commande" className="hover:text-white transition">
                      Suivre ma commande
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Col 5: Nous Contacter */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                  Nous Contacter
                </h4>
                <ul className="space-y-3 text-xs text-slate-400">
                  <li className="flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>+212 5 22 12 34 56</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>contact@capi-lift.ma</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Route de Nouaceur, Casablanca, Maroc</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom copyright line */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 space-y-2 sm:space-y-0">
              <p>© 2024 Capi-Lift – ICG Group. Tous droits réservés.</p>
              <p>Conçu avec passion au service de vos cheveux.</p>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
