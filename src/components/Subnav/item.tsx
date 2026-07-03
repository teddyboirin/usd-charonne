import { memo } from 'react';
import Button from '../Button';

interface Props {
  children: string;
  href?: string;
}

function Item({ children }: Props) {
  return (
    <Button className="w-max shrink-0 border border-white/20 text-white/70 rounded-[24px] hover:bg-red hover:text-white hover:border-red bg-transparent text-12 px-4">
      {children}
    </Button>
  );
}
export default memo(Item);
