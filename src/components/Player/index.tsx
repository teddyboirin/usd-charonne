import { memo } from 'react';
import Image from 'next/image';

interface Props {
  name: string;
  photo: string;
  poste: string;
}

function Player({ name, photo, poste }: Props) {
  return (
    <div className="h-[400px] w-full relative">
      <Image src={photo} alt="player-1" fill objectFit="cover" />
      <div className="absolute bottom-0 w-full h-[230px] gradient_red"></div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white uppercase font-semibold text-center">
        <div className="flex flex-col gap-0.5">
          <div>{name}</div>
          <div className="text-12">{poste.toLowerCase() !== "coach" ? "poste" : ""} {poste}</div>
        </div>
      </div>
    </div>
  );
}

export default memo(Player);
