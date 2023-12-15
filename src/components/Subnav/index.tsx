import { memo } from 'react';

interface Props {
  children: JSX.Element;
}

function Subnav({ children }: Props) {
  return (
    <div className="fixed bg-dark-1 shadow_submenu p-2 md:p-2 bottom-[32px] duration-300 left-1/2 -translate-x-1/2 rounded-[24px] flex items-center justify-center flex-wrap gap-3">
      {children}
    </div>
  );
}

export default memo(Subnav);
