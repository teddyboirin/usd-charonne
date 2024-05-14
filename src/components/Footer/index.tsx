'use client';
import React from 'react';
import Container from '../Container';
import Logo from '../icons/logo';
import Link from 'next/link';
import Instagram from '../icons/Instagram';

export default function Footer() {
  return (
    <div className="w-full pb-4 md:pb-0 text-dark-1 uppercase bg-gray-0">
      <div className="bg-black text-white p-4 md:p-6 flex items-center justify-center mb-2 md:mb-10 font-evog">
        <span className="text-26 md:text-40 font-bold flex items-center justify-center text-center">
        Charonne dans le 💙❤️ !
        </span>
      </div>
      <Container className="flex flex-col justify-center md:grid md:grid-cols-4 gap-2 md:gap-3 border_footer text-14">
        <div className="w-full flex justify-center md:block md:justify-start">
          <Logo />
        </div>
        <div className="w-full flex justify-center text-center md:text-left">
          <ul className="h-full flex flex-col gap-1 md:gap-2">
            <li>
              <Link href="">Le club</Link>
            </li>
            <li>
              <Link href="">Nous rejoindre</Link>
            </li>
            <li>
              <Link href="">Nos pratiques</Link>
            </li>
            <li>
              <Link href="">Formations</Link>
            </li>
            <li>
              <Link href="">École de basket</Link>
            </li>
            <li>
              <Link href="">Compétitions FFBB</Link>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center text-center md:text-left">
          <ul className="h-full flex flex-col gap-1 md:gap-2">
            <li>
              <Link href="">Mentions légales</Link>
            </li>
            <li>
             <a href="mailto:contact@usdcbasket.com">Nous contacter</a>
            </li>
          </ul>
        </div>
        <div className="w-full flex mt-3 justify-center text-center md:text-left md:justify-end">
          <ul className="flex flex-row gap-3">
            <li>
              <a href="https://www.instagram.com/usd.charonne/" target="_blank">
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="mt-6 flex items-center justify-center w-full text-12 md:text-10 border_footer pt-4 md:py-4">
        <p>
          Réalisé par{' '}
          <a href="https://www.teddyboirin.com/" target="_blank">
            Teddy Boirin
          </a>{' '}
          🏀
        </p>
      </div>
    </div>
  );
}
