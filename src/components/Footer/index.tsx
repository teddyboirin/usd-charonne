'use client';
import React from 'react';
import Container from '../Container';
import Logo from '../icons/logo';
import Link from 'next/link';
import Instagram from '../icons/Instagram';
import Facebook from '../icons/Facebook';

export default function Footer() {
  return (
    <div className="w-full pb-4 md:pt-6 md:pb-0 text-white border_footer uppercase bg-black">
      <Container className="flex flex-col justify-center md:grid md:grid-cols-4 gap-3">
        <div className="w-full flex justify-center md:block md:justify-start">
          <Logo />
        </div>
        <div className="w-full flex justify-center text-center md:text-left">
          <ul className="h-full flex flex-col gap-3">
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
          <ul className="h-full flex flex-col gap-3">
            <li>
              <Link href="">Mentions légales</Link>
            </li>
            <li>
              <Link href="">Nous contacter</Link>
            </li>
          </ul>
        </div>
        <div className="w-full flex mt-3 justify-center text-center md:text-left md:justify-end">
          <ul className="flex flex-row gap-3">
            <li>
              <a href="">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="">
                <Facebook />
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="mt-6 flex items-center justify-center w-full text-12 md:text-14 border_footer pt-4 md:py-4">
        <p>Réalisé par Teddy Boirin 🏀</p>
      </div>
    </div>
  );
}
