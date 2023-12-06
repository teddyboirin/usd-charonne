import H2 from '../Titles/h2';
import H4 from '../Titles/h4';

type Props = {
  title: string;
  desc: string;
};

export default function Head({ title, desc }: Props) {
  return (
    <div
      className="h-screen bg-black w-full relative"
      style={{
        backgroundImage: "url('./assets/bg-head.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="min-h-[700px] md:min-h-[600px] absolute w-full p-4 md:p-7 gradient_head bottom-0 flex items-center justify-end flex-col">
        <H2 title={title} />
        <H4 title={desc} />
      </div>
    </div>
  );
}
