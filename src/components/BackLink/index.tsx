import Link from 'next/link';

interface Props {
  href: string;
  label?: string;
}

export default function BackLink({ href, label = 'Retour' }: Props) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 font-display text-13 uppercase tracking-wider text-gray-2 hover:text-red transition-colors duration-200 mt-6 mb-2"
    >
      <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-3 group-hover:border-red group-hover:bg-red/5 transition-all duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-3.5 h-3.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </span>
      {label}
    </Link>
  );
}
