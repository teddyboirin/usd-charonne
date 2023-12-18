import { memo } from 'react';
import Button from '../Button';

interface Props {
  children: string;
}

function Item({ children }: Props) {
  return (
    <Button className="w-max border border-gray-3 text-gray-3 rounded-[24px] hover:bg-white hover:text-dark-1">
      {children}
    </Button>
  );
}
export default memo(Item);
