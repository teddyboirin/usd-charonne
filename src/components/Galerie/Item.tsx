import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Loading from '../icons/Loading';

interface Props {
  imageLink: string;
  imageLinkFull: string;
  title: string;
  onClick?: () => void;
}

const DynamicOpen = dynamic(() => import('./Open'), {
  loading: () => <Loading />,
});

function GalerieItem({ imageLink, title, imageLinkFull }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlePicture = (action: 'open' | 'close') => {
    if (action === 'open') {
      document.body.classList.add('overflow-hidden');
      setIsOpen(true);
    }
    if (action === 'close') {
      document.body.classList.remove('overflow-hidden');
      setIsOpen(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <DynamicOpen
            imageLink={imageLinkFull}
            title={title}
            onClick={() => handlePicture('close')}
          />
        )}
      </AnimatePresence>
      <button
        className="group relative h-[160px] md:h-[280px] rounded-xl overflow-hidden w-full"
        type="button"
        aria-label={`Voir ${title}`}
        onClick={() => handlePicture('open')}
      >
        <Image
          src={imageLink}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-11 md:text-13 font-display uppercase tracking-wide truncate">
            {title}
          </p>
        </div>
      </button>
    </>
  );
}

export default GalerieItem;
