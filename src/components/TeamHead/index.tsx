import React from 'react';
import H4 from '../Titles/h4';
import Ranking from '../Ranking';
import Markdown from 'react-markdown';

type Props = {
  title: string;
  description: string;
}

export default function TeamHead({title, description}: Props) {
  return (
    <div className="mt-[130px] md:mt-[250px] grid md:grid-cols-[8fr_2fr] items-center gap-6 py-2 md:py-3">
      <div className="w-full">
        <H4 title={title} uppercase color="black" />
          <Markdown className="text-dark-1 mt-2 leading-normal text-14 md:text-16">{description}</Markdown>
      </div>
      <Ranking />
    </div>
  );
}
