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
  const handlePicture = (action) => {
    console.log('ok');

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
            onClick={() => handlePicture(isOpen ? 'close' : 'open')}
          />
        )}
      </AnimatePresence>
      <button
        className="h-[150px] md:h-[300px]"
        type="button"
        onClick={() => handlePicture(isOpen ? 'close' : 'open')}
      >
        <div className="w-full relative h-full">
          <Image
            src={imageLink}
            alt="desc"
            fill
            objectFit="cover"
            loading="lazy"
          />
        </div>
      </button>
    </>
  );
}

export default GalerieItem;
