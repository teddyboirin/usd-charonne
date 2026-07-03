import { memo } from 'react';

interface Props {
  value: string;
  onClick?: () => void;
  isActive: boolean;
}

function ButtonFilter({ value, onClick, isActive }: Props) {
  return (
    <button
      type="button"
      className={`font-display uppercase tracking-wider border rounded-basic py-2 px-4 text-12 transition-all duration-300 ${
        isActive
          ? 'bg-red border-red text-white shadow-glow'
          : 'bg-white border-gray-3 text-dark-1 hover:border-red hover:text-red'
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default memo(ButtonFilter);
