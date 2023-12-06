import { memo } from 'react';

interface Props {
  value: string;
  onClick?: () => void;
}

function ButtonFilter({ value, onClick }: Props) {
  return (
    <button
      type="button"
      className="bg-white rounded-basic py-2 px-3 text-12 hover:bg-blue hover:text-white duration-300"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default memo(ButtonFilter);
