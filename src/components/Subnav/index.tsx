import { memo } from 'react';

interface Props {
  children: JSX.Element;
}

function Subnav({ children }: Props) {
  return (
    <div className="fixed bg-dark-1 shadow_submenu p-2 md:py-2 md:px-4 bottom-[32px] duration-300 left-1/2 -translate-x-1/2 rounded-[24px] max-w-[90%] md:max-w-[600px]">
      <div className="subnav_gradient" />
      <div className="subnav_gradient subnav_gradient--start" />
      <div className="flex gap-3 overflow-scroll scrollbar-width-none">
        {children}
      </div>
    </div>
  );
}

export default memo(Subnav);
