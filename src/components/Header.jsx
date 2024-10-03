import { MountainIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-white/30 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50">
      <Link className="flex items-center justify-center" href="/">
        <MountainIcon className="h-6 w-6 text-purple-600" />
        <span className="ml-2 text-xl font-bold text-purple-600">
          Agence de Logement Tana
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:text-purple-600 transition-colors"
          href="/"
        >
          Accueil
        </Link>
        <Link
          className="text-sm font-medium hover:text-purple-600 transition-colors"
          href="/services"
        >
          Services
        </Link>
        <Link
          className="text-sm font-medium hover:text-purple-600 transition-colors"
          href="/appartements"
        >
          Appartements
        </Link>
        <Link
          className="text-sm font-medium hover:text-purple-600 transition-colors"
          href="/apropos"
        >
          À Propos
        </Link>
        <Link
          className="text-sm font-medium hover:text-purple-600 transition-colors"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
