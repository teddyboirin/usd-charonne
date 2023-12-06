import { memo } from 'react';
import H1 from '../Titles/h1';

interface Props {
  image: string;
}

function BasicHead({ image }: Props) {
  return (
    <div
      className="bg-black w-full min-h-[270px] md:min-h-[390px] flex items-center justify-center"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <H1
        title="Historique et valeurs"
        className="mt-10 uppercase max-w-[400px]"
      />
    </div>
  );
}
export default memo(BasicHead);
