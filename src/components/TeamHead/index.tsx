import React from 'react';
import H4 from '../Titles/h4';
import Ranking from '../Ranking';
import Markdown from 'react-markdown';

type Props = {
  description: string;
}

export default function TeamHead({description}: Props) {
  return (
    <div className="mt-[30px] md:mt-[50px] grid md:grid-cols-[8fr_2fr] gap-3 md:gap-6 py-2 md:py-3">
      <div className="w-full order-1 md:order-0">
          <Markdown className="text-dark-1 leading-normal text-14 md:text-16">{description}</Markdown>
      </div>
      <Ranking />
    </div>
  );
}
