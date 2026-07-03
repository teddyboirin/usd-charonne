'use client';
import React from 'react';
import Container from '../Container';
import Logo from '../icons/logo';
import Link from 'next/link';
import Instagram from '../icons/Instagram';

export default function Footer() {
  return (
    <footer className="w-full text-dark-1 bg-dark-1">
      <div className="gradient_brand h-1 w-full" />

      <div className="bg-dark-2 text-white py-8 md:py-10">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-evog text-26 md:text-40 text-center md:text-left">
              Charonne dans le 💙❤️ !
            </span>
            <div className="flex items-center gap-3">
              <span className="badge-prenational font-display text-11 uppercase tracking-widest px-3 py-1.5 rounded-full">
                Pré-National
              </span>
              <span className="text-13 text-gray-4 hidden md:block">
                Paris 20e — Basket de haut niveau
              </span>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-gray-0 py-8 md:py-10">
        <Container className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 text-14">
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>

          <div className="text-center md:text-left">
            <p className="font-display uppercase tracking-widest text-12 text-gray-2 mb-3">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/club" className="hover:text-red transition-colors">
                  Le club
                </Link>
              </li>
              <li>
                <Link href="/teams" className="hover:text-red transition-colors">
                  Nos équipes
                </Link>
              </li>
              <li>
                <Link href="/nous-rejoindre" className="hover:text-red transition-colors">
                  Nous rejoindre
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="hover:text-red transition-colors">
                  Galerie
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <p className="font-display uppercase tracking-widest text-12 text-gray-2 mb-3">
              Formation
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/nos-pratiques" className="hover:text-red transition-colors">
                  Nos pratiques
                </Link>
              </li>
              <li>
                <Link href="/formations" className="hover:text-red transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/ecole-de-basket" className="hover:text-red transition-colors">
                  École de basket
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-red transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <p className="font-display uppercase tracking-widest text-12 text-gray-2 mb-3">
              Contact
            </p>
            <a
              href="mailto:contact@usdcbasket.com"
              className="hover:text-red transition-colors block mb-4"
            >
              contact@usdcbasket.com
            </a>
            <a
              href="https://www.instagram.com/usd.charonne/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-red transition-colors"
            >
              <Instagram />
              <span>@usd.charonne</span>
            </a>
          </div>
        </Container>
      </div>

      <div className="bg-gray-0 border-t border-gray-3 py-4 text-center text-11 text-gray-2">
        <p>
          © {new Date().getFullYear()} USD Charonne — Réalisé par{' '}
          <a
            href="https://www.teddyboirin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red transition-colors"
          >
            Teddy Boirin
          </a>
        </p>
      </div>
    </footer>
  );
}
