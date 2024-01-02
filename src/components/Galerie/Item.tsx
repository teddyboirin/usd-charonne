import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Loading from '../icons/Loading';

interface Props {
  imageLink: string;
  imageLinkFull: string;
  title: string;
  height: number;
  onClick?: () => void;
}

const DynamicOpen = dynamic(() => import('./Open'), {
  loading: () => <Loading />,
});

function GalerieItem({ imageLink, title, height, imageLinkFull }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handlePicture = (action) => {
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
        type="button"
        style={{ height }}
        onClick={() => handlePicture(isOpen ? 'close' : 'open')}
      >
        <div className="w-full relative h-full">
          <Image src={imageLink} alt="desc" fill objectFit="cover" />
        </div>
      </button>
    </>
  );
}

export default GalerieItem;
