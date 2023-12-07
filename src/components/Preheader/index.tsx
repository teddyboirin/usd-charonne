import { memo } from 'react';

function Preheader() {
  return (
    <div className="absolute top-0 w-full p-1.5 bg-dark-1 text-white z-50 text-14 flex items-center justify-center">
      <p>Recherchons joueurs, joueuses et entraineurs</p>
    </div>
  );
}
export default memo(Preheader);
