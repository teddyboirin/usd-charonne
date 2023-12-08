'use client';
import React, { useMemo, useRef } from 'react';
import { useWindowSize } from 'react-use';
import Logo from '../icons/logo';
import Link from 'next/link';

export default function Header() {
  const ulStyle = useMemo(() => 'flex gap-6', []);
  const liStyle = useMemo(() => 'text-16 hover:text-red duration-300', []);
  const { width } = useWindowSize();

  const MenuRef = useRef(null);

  const handleMenu = (action: string) => {
    if (action === 'open') {
      MenuRef?.current.classList.add('open_menu');
    } else if (action === 'close') {
      MenuRef?.current.classList.remove('open_menu');
    }
  };
  return width > 768 ? (
    <header className="hidden md:block absolute top-0 left-0 z-10 w-full p-4 text-white">
      <nav className="grid grid-cols-[1fr_auto_1fr] gap-6 items-center">
        <div className="flex items-center justify-end">
          <ul className={ulStyle}>
            <li className={liStyle}>
              <Link href="/club">Le club</Link>
            </li>
            <li className={liStyle}>
              <Link href="/histoire">Nous rejoindre</Link>
            </li>
            <li className={liStyle}>
              <Link href="/nos-pratiques">Nos pratiques</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex items-center justify-start">
          <ul className={ulStyle}>
            <li className={liStyle}>
            <Link href="/">Formation</Link>
            </li>
            <li className={liStyle}>
            <Link href="/">École de basket</Link>
            </li>
            <li className={liStyle}>
            <Link href="/histoire">Compétitions FFBB</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  ) : (
    <header className="md:hidden absolute top-0 left-0 z-10 w-full p-4 text-white flex items-center justify-between">
      <Logo />
      <div
        className="h-[36px] w-[36px] bg-red box_menu rounded-[8px] flex items-center flex-col justify-center gap-0.25 cursor-pointer"
        onClick={() => handleMenu('open')}
      >
        <div className="h-[2px] w-[20px] bg-white rounded-[8px]" />
        <div className="h-[2px] w-[20px] bg-white rounded-[8px]" />
        <div className="h-[2px] w-[20px] bg-white rounded-[8px]" />
      </div>
      <div
        ref={MenuRef}
        className="opacity-0 invisible absolute bg-black text-white pb-6 pt-3 w-screen left-0 top-[-100vw] duration-[300ms] ease-linear"
      >
        <div
          className="h-[36px] w-[36px] bg-red box_menu rounded-[8px] flex items-center flex-col justify-center gap-0.25 cursor-pointer absolute right-[24px] top-[24px]"
          onClick={() => handleMenu('close')}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.90995"
              y1="1.04842"
              x2="11.6623"
              y2="11.8008"
              stroke="white"
            />
            <line
              x1="0.894005"
              y1="11.8008"
              x2="11.6464"
              y2="1.04842"
              stroke="white"
            />
          </svg>
        </div>
        <div className="w-full flex items-center justify-center">
          <Logo />
        </div>
        <nav className="h-full w-full">
          <ul className="h-full w-full flex items-center justify-center flex-col gap-2">
            <li className="text-16">
              <Link href="/club">Le club</Link>
            </li>
            <li className="text-16">
            <Link href="/histoire">Nous rejoindre</Link>
            </li>
            <li className="text-16">
            <Link href="/nos-pratiques">Nos pratiques</Link>
            </li>
            <li className="text-16">
            <Link href="/histoire">Formations</Link>
            </li>
            <li className="text-16">
            <Link href="/histoire">École de basket</Link>
            </li>
            <li className="text-16">
              <a href="">Compétitions FFBB</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
