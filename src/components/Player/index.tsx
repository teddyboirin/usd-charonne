'use client';
import { memo } from 'react';
import Image from 'next/image';

interface Props {
  name: string;
  photo: string;
  poste: string;
}

function Player({ name, photo, poste }: Props) {
  const isCoach = poste.toLowerCase() === 'coach';

  return (
    <div className="group h-[420px] w-full relative overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300">
      <Image
        src={photo}
        alt={name}
        fill
        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 gradient_red" />
      <div className="absolute top-0 left-0 w-full h-1 gradient_brand" />
      <div className="absolute bottom-0 w-full p-4 text-white">
        <div className="flex flex-col gap-1">
          <span className="font-display text-18 md:text-20 uppercase tracking-wide font-bold">
            {name}
          </span>
          <span className="font-display text-12 uppercase tracking-widest text-accent">
            {isCoach ? 'Coach' : poste}
          </span>
        </div>
      </div>
    </div>
  );
}

export default memo(Player);
