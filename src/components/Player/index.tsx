import { memo } from 'react';
import Image from 'next/image';

interface Props {
  name: string;
}

function Player({ name }: Props) {
  return (
    <div className="h-[400px] w-full relative">
      <Image
        src="https://placehold.co/400x400/jpg"
        alt="player-1"
        fill
        objectFit="cover"
      />
      <div className="absolute bottom-0 w-full h-[130px] gradient_red"></div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white uppercase font-semibold text-center">
        {name}
      </div>
    </div>
  );
}

export default memo(Player);
