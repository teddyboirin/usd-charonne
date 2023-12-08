interface Props {
  children: string;
  red?: boolean;
  blue?: boolean;
  white?: boolean;
  onClick?: () => void;
}

export default function Button({ children, red, blue, white, onClick }: Props) {
  return (
    <button
      type="button"
      className={`py-2 px-3 md:py-3 md:px-4 text-14 md:text-16 rounded-basic duration-300 ${
        red ? 'bg-red hover:bg-blue ' : ''
      } ${blue ? 'bg-blue hover:bg-red ' : ''} ${
        white
          ? 'bg-white text-black hover:bg-transparent border border-white hover:text-white'
          : ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
