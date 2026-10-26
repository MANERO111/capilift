"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Truck } from "lucide-react";

interface NavbarProps {
  theme?: "light" | "dark";
  activePage?: "accueil" | "gammes" | "routines" | "science" | "conseils" | "apropos" | "articles";
}

export default function Navbar({ theme = "dark", activePage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gammeDropdownOpen, setGammeDropdownOpen] = useState(false);

  // Always dark as requested
  const isDark = true;

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300 bg-[#080d19]/90 backdrop-blur-md text-white border-b border-white/10">
      {/* Top Notification Banner */}
      <div className="text-[11px] sm:text-xs py-2 px-4 border-b bg-[#040711] text-slate-300 border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-medium tracking-wide">
          <div className="flex items-center space-x-2">
            <Truck className="w-3.5 h-3.5 text-blue-400" />
            <span className="uppercase text-[10px] sm:text-[11px] tracking-wider font-semibold">
              Livraison partout au Maroc
            </span>
          </div>

          <div className="text-center font-bold tracking-widest text-[11px] sm:text-xs text-white uppercase px-2 hidden sm:block">
            La Science au Service de vos Cheveux
          </div>

          <div className="flex items-center space-x-1.5 text-slate-400 text-[11px]">
            <span>Distribué par</span>
            <span className="font-extrabold text-white tracking-wider px-1.5 py-0.5 rounded bg-blue-600/30 border border-blue-500/40 text-[10px]">
              ICG
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex flex-col group py-1">
              <img src="/img/logo.png" alt="Logo" className="w-40 " />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 font-semibold text-[13px] tracking-wider uppercase text-slate-200">
            <Link
              href="/"
              className={`pb-1 transition-all ${
                activePage === "accueil"
                  ? "text-white border-b-2 border-white font-bold"
                  : "hover:text-white"
              }`}
            >
              Accueil
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setGammeDropdownOpen(true)}
              onMouseLeave={() => setGammeDropdownOpen(false)}
            >
              <Link
                href="/nos-gammes"
                className={`flex items-center space-x-1 pb-1 uppercase font-medium cursor-pointer transition-colors ${
                  activePage === "gammes"
                    ? "text-white border-b-2 border-white font-bold"
                    : "hover:text-white"
                }`}
              >
                <span>Nos Gammes</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    gammeDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Submenu Dropdown */}
              {gammeDropdownOpen && (
                <div className="absolute top-full left-0 w-64 rounded-xl shadow-2xl py-3 px-2 border transition-all animate-in fade-in slide-in-from-top-2 duration-150 bg-[#0c1426] border-white/10 text-slate-200">
                  <Link
                    href="/nos-gammes#coloration"
                    className="block px-4 py-2.5 text-xs uppercase tracking-wider rounded-lg font-semibold transition hover:bg-white/10 hover:text-white"
                  >
                    01. Coloration Capi-Lift
                  </Link>
                  <Link
                    href="/nos-gammes#shampooing"
                    className="block px-4 py-2.5 text-xs uppercase tracking-wider rounded-lg font-semibold transition hover:bg-white/10 hover:text-white"
                  >
                    02. Shampooing Anti-Chute
                  </Link>
                  <Link
                    href="/nos-gammes#lotion"
                    className="block px-4 py-2.5 text-xs uppercase tracking-wider rounded-lg font-semibold transition hover:bg-white/10 hover:text-white"
                  >
                    03. Lotion Anti-Chute
                  </Link>
                  <Link
                    href="/nos-gammes"
                    className="block px-4 py-2.5 text-xs uppercase tracking-wider rounded-lg font-semibold border-t mt-1 border-white/10 hover:bg-white/10 text-blue-300"
                  >
                    Voir les 3 gammes expertes →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/routines"
              className={`pb-1 uppercase font-medium transition-colors ${
                activePage === "routines"
                  ? "text-white border-b-2 border-white font-bold"
                  : "hover:text-white"
              }`}
            >
              Routines
            </Link>

            <Link
              href="/#science"
              className={`hover:opacity-90 transition-colors ${
                activePage === "science" ? "font-bold border-b-2" : ""
              } hover:text-white`}
            >
              Notre Science
            </Link>

            <Link
              href="/articles-conseils"
              className={`pb-1 uppercase font-medium transition-colors ${
                activePage === "conseils"
                  ? "text-white border-b-2 border-white font-bold"
                  : "hover:text-white"
              }`}
            >
              Conseils
            </Link>

            <Link
              href="/a-propos"
              className={`hover:opacity-90 transition-colors ${
                activePage === "apropos" ? "text-white border-b-2 border-white font-bold" : ""
              } hover:text-white`}
            >
              À Propos
            </Link>

            <Link
              href="/articles-conseils"
              className={`pb-1 uppercase font-medium transition-colors ${
                activePage === "articles"
                  ? "text-white border-b-2 border-white font-bold"
                  : "hover:text-white"
              }`}
            >
              Articles
            </Link>
          </nav>

          {/* Right Action Area - Mobile menu trigger */}
          <div className="flex items-center space-x-4">
            <Link
              href="/a-propos"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md shadow-blue-900/30"
            >
              Découvrir Capi-Lift
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg focus:outline-none hover:bg-white/10 text-white cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-t px-6 py-5 shadow-2xl animate-in slide-in-from-top duration-200 ${
            isDark
              ? "bg-[#0b1222] border-white/10 text-white"
              : "bg-white border-slate-100 text-slate-800"
          }`}
        >
          <nav className="flex flex-col space-y-4 font-semibold text-sm tracking-wider uppercase">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-white/10 hover:opacity-80"
            >
              Accueil
            </Link>
            <Link
              href="/nos-gammes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-white/10 text-blue-400 font-bold"
            >
              Nos Gammes
            </Link>
            <Link
              href="/#routines"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:opacity-80 py-1 border-b border-white/10"
            >
              Routines
            </Link>
            <Link
              href="/#science"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:opacity-80 py-1 border-b border-white/10"
            >
              Notre Science
            </Link>
            <Link
              href="/#conseils"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:opacity-80 py-1 border-b border-white/10"
            >
              Conseils
            </Link>
            <Link
              href="/a-propos"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:opacity-80 py-1"
            >
              À Propos
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
