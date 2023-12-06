import Image from 'next/image';
import { useState } from 'react';
import Arrow from '../icons/Arrow';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
  imageLink: string;
  onClick?: () => void;
}

const RenderPhoto = ({ imageLink, onClick }): JSX.Element => {
  return (
    <>
      <div className="h-screen w-screen bg-filter z-[100] fixed top-0 left-0 flex items-center justify-center">
        <div className="right-4 top-4 absolute text-white cursor-pointer h-[20px] w-[20px] flex items-center justify-center">
          <button type="button" onClick={onClick}>
            <Arrow />
          </button>
        </div>
        <div className="w-[90%] h-[90%] bg-orange-400 relative">
          <Image src={imageLink} alt="image" fill objectFit="cover" />
        </div>
      </div>
    </>
  );
};

function GalerieItem({ imageLink, onClick }: Props) {
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
            initial={{ opacity: 0, y: -45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, y: -45 }}
          >
            <RenderPhoto
              imageLink={imageLink}
              onClick={() => handlePicture(isOpen ? 'close' : 'open')}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        className="h-[300px] md:h-[675px] bg-[pink] w-full relative"
        onClick={() => handlePicture(isOpen ? 'close' : 'open')}
      >
        <Image src={imageLink} alt="desc" fill objectFit="cover" />
      </button>
    </>
  );
}

export default GalerieItem;
