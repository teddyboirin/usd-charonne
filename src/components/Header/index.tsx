import React, { useMemo } from 'react';
import Logo from '../icons/logo';

export default function Header() {
  const ulStyle = useMemo(() => 'flex gap-6', []);
  return (
    <div className="absolute top-0 left-0 z-10 w-full p-4 text-white">
      <nav className="grid grid-cols-[1fr_auto_1fr] gap-6 items-center">
        <div className="flex items-center justify-end">
          <ul className={ulStyle}>
            <li className="text-16">
              <a href="">Le club</a>
            </li>
            <li className="text-16">
              <a href="">Nous rejoindre</a>
            </li>
            <li className="text-16">
              <a href="">Nos pratiques</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <div className="flex items-center justify-start">
          <ul className={ulStyle}>
            <li className="text-16">
              <a href="">Formations</a>
            </li>
            <li className="text-16">
              <a href="">École de basket</a>
            </li>
            <li className="text-16">
              <a href="">Compétition FFBB</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
