import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Arrow from '../icons/Arrow';
import Open from './Open';

interface Props {
  imageLink: string;
  height: number;
  onClick?: () => void;
}

const DynamicOpen = dynamic(() => import('./Open'), {
  loading: () => <p>Chargement...</p>,
});

function GalerieItem({ imageLink, height }: Props) {
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
          <motion.div
            className="h-screen w-screen bg-filter z-[100] fixed top-0 left-0 flex items-center justify-center"
            initial={{ opacity: 0, y: -45, left: 0, top: 0 }}
            animate={{ opacity: 1, y: 0, left: 0, top: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, y: -45, left: 0, top: 0 }}
          >
            <DynamicOpen
              imageLink={imageLink}
              onClick={() => handlePicture(isOpen ? 'close' : 'open')}
            />
          </motion.div>
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
