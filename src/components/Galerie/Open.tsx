import React from 'react';
import Arrow from '../icons/Arrow';
import Image from 'next/image';

export default function Open({ imageLink, title, onClick }) {
  return (
    <div className="h-screen w-screen bg-filter z-[100] fixed top-0 left-0 flex items-center justify-center">
      <div className="right-4 top-4 absolute text-white cursor-pointer h-[20px] w-[20px] flex items-center justify-center">
        <button type="button" onClick={onClick}>
          <Arrow />
        </button>
      </div>
      <div className="w-[90%] h-[90%] relative">
        <Image src={imageLink} alt="image" fill objectFit="contain" />
      <div className="text-white absolute bottom-[-42px] left-1/2 z-50 -translate-x-1/2">
        {title}
      </div>
      </div>
    </div>
  );
}
