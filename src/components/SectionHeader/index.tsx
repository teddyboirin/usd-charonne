import H2 from '../Titles/h2';

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  center,
  dark,
  className,
}: Props) {
  return (
    <div className={`mb-6 md:mb-8 ${center ? 'text-center' : ''} ${className || ''}`}>
      <div className={`w-12 h-1 gradient_brand mb-4 ${center ? 'mx-auto' : ''}`} />
      <H2
        title={title}
        color={dark ? 'white' : 'black'}
        uppercase
        center={center}
      />
      {subtitle && (
        <p
          className={`mt-3 text-14 md:text-16 max-w-xl leading-relaxed ${
            center ? 'mx-auto' : ''
          } ${dark ? 'text-white/70' : 'text-gray-2'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
