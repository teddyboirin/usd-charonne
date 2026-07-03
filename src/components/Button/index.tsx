import { memo } from 'react';

interface Props {
  children: string;
  red?: boolean;
  blue?: boolean;
  white?: boolean;
  black?: boolean;
  outline?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  red,
  blue,
  white,
  black,
  outline,
  className,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      className={`font-display uppercase tracking-wider ${
        className || ''
      } py-2.5 px-5 md:py-3 md:px-6 text-13 md:text-14 rounded-basic duration-300 transition-all ${
        red ? 'bg-red hover:bg-blue text-white hover:shadow-glow' : ''
      } ${blue ? 'bg-blue hover:bg-red text-white' : ''} ${
        white
          ? 'bg-transparent text-white border border-white hover:bg-white hover:text-dark-1'
          : ''
      } ${
        black ? 'bg-dark-1 text-white hover:bg-white hover:text-dark-1' : ''
      } ${
        outline
          ? 'bg-transparent border border-red text-red hover:bg-red hover:text-white'
          : ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
