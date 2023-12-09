import { memo } from 'react';
import Link from 'next/link';

interface Props {
  title: string;
  desc: string;
  link: string;
}
function OtherArticle({ title, desc, link }: Props) {
  return (
    <Link href={link}>
      <li className="flex flex-col p-2 gap-0.25 bg-white">
        <div className="font-bold text-18">{title}</div>
        <p className="text-14">{desc}...</p>
      </li>
    </Link>
  );
}
export default memo(OtherArticle);
