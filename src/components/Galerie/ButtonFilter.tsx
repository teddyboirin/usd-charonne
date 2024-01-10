import { memo } from "react";

interface Props {
  value: string;
  onClick?: () => void;
  isActive: boolean;
}

function ButtonFilter({ value, onClick, isActive }: Props) {
  return (
    <button
      type="button"
      className={`border border-black rounded-basic py-2 px-3 text-12 hover:bg-white hover:text-dark-1 duration-300 ${isActive ? 'bg-white text-dark-1' : 'bg-dark-1 text-white'}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default memo(ButtonFilter);
