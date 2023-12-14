interface Props {
  children: string;
  red?: boolean;
  blue?: boolean;
  white?: boolean;
  black?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  red,
  blue,
  white,
  black,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      className={`py-2 px-3 md:py-3 md:px-4 text-14 md:text-16 rounded-basic duration-300 ${
        red ? 'bg-red hover:bg-blue ' : ''
      } ${blue ? 'bg-blue hover:bg-red ' : ''} ${
        white
          ? 'bg-white text-black hover:bg-transparent border border-white hover:text-white'
          : ''
      } ${black ? 'bg-dark-1 text-white hover:bg-white hover:text-dark-1' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
