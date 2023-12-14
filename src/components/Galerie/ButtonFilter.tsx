import { memo } from 'react';

interface Props {
  value: string;
  onClick?: () => void;
}

function ButtonFilter({ value, onClick }: Props) {
  return (
    <button
      type="button"
      className="bg-dark-1 text-white rounded-basic py-2 px-3 text-12 hover:bg-white hover:text-dark-1 duration-300"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default memo(ButtonFilter);
