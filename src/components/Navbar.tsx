"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Serviços", href: "#servicos" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Ana Paula RH"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <span className="font-bold text-gray-900 hidden sm:block">
            Ana Paula RH
          </span>
        </a>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA desktop */}
        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105 shadow-md shadow-indigo-500/20"
        >
          Fale Conosco
        </a>

        {/* Botão mobile (hamburger) */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Menu"
        >
          <span
            className={`w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${
              menuAberto ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${
              menuAberto ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${
              menuAberto ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuAberto ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 pt-2 bg-white border-t border-gray-100 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuAberto(false)}
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-2.5 rounded-lg transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuAberto(false)}
            className="mt-2 text-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-bold px-5 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </nav>
  );
}
