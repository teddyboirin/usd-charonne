'use client';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Logo from '../icons/logo';
import Link from 'next/link';

const navLinks = [
  { href: '/club', label: 'Le club' },
  { href: '/teams', label: 'Équipes' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/nos-pratiques', label: 'Pratiques' },
  { href: '/formations', label: 'Formation' },
  { href: '/ecole-de-basket', label: 'École' },
];

function NavLink({
  href,
  label,
  pathname,
  solid,
}: {
  href: string;
  label: string;
  pathname: string;
  solid: boolean;
}) {
  const isActive =
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`relative font-display text-14 uppercase tracking-wider transition-colors duration-200 py-1 ${
        isActive
          ? 'text-red'
          : solid
            ? 'text-white/80 hover:text-white'
            : 'text-white hover:text-red'
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red rounded-full" />
      )}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === '/';
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3);

  return (
    <>
      <header
        className={`fixed top-9 left-0 z-40 w-full transition-all duration-300 ${
          solid ? 'header-scrolled py-3' : 'py-4 md:py-5 bg-transparent'
        }`}
      >
        <div className="w-[90%] max-w-container mx-auto">
          <nav className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-6 items-center">
            <ul className="flex items-center justify-end gap-6">
              {leftLinks.map((link) => (
                <li key={link.href}>
                  <NavLink {...link} pathname={pathname} solid={solid} />
                </li>
              ))}
            </ul>

            <Link href="/" className="flex items-center justify-center">
              <Logo />
            </Link>

            <div className="flex items-center justify-start gap-6">
              <ul className="flex items-center gap-6">
                {rightLinks.map((link) => (
                  <li key={link.href}>
                    <NavLink {...link} pathname={pathname} solid={solid} />
                  </li>
                ))}
              </ul>
              <Link
                href="/nous-rejoindre"
                className="font-display text-13 uppercase tracking-wider bg-red hover:bg-blue text-white px-4 py-2 rounded-basic transition-all duration-200 whitespace-nowrap hover:shadow-glow"
              >
                Rejoindre
              </Link>
            </div>
          </nav>

          <div className="md:hidden flex items-center justify-between gap-3">
            <Link href="/">
              <Logo />
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
              className="h-6 w-6 bg-red/90 box_menu rounded-md flex items-center flex-col justify-center gap-[3px] shrink-0"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={`h-[1.5px] w-4 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-[4.5px]' : ''
                }`}
              />
              <span
                className={`h-[1.5px] w-4 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`h-[1.5px] w-4 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-[4.5px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-dark-1/98 backdrop-blur-lg md:hidden"
          >
            <button
              type="button"
              aria-label="Fermer le menu"
              className="absolute top-5 right-5 z-10 h-6 w-6 bg-red/90 box_menu rounded-md flex items-center justify-center text-white hover:bg-red transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <div className="flex flex-col h-full pt-24 px-6">
              <div className="flex justify-center mb-6">
                <Logo />
              </div>
              <nav className="flex-1 flex flex-col items-center justify-center gap-0">
                {navLinks.map((link, i) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== '/' && pathname.startsWith(link.href));
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="w-full"
                    >
                      <Link
                        href={link.href}
                        className={`font-display text-xl uppercase tracking-widest py-3.5 block text-center transition-colors border-b border-white/5 ${
                          isActive ? 'text-red' : 'text-white hover:text-red'
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pb-10 flex flex-col gap-3 items-center"
              >
                <Link
                  href="/nous-rejoindre"
                  className="font-display text-16 uppercase tracking-wider bg-red text-white px-8 py-3 rounded-basic w-full text-center max-w-xs hover:bg-blue transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Nous rejoindre
                </Link>
                <a
                  href="https://www.instagram.com/usd.charonne/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-13 text-gray-4 hover:text-white transition-colors"
                >
                  @usd.charonne
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
