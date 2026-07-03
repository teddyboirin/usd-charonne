import React from 'react';
import Markdown from 'react-markdown';
import ScrollReveal from '../ScrollReveal';

type Props = {
  description: string;
};

export default function TeamHead({ description }: Props) {
  if (!description) return null;

  return (
    <ScrollReveal>
      <div className="mt-4 md:mt-6 p-5 md:p-6 bg-white rounded-xl border border-gray-3/50 shadow-card">
        <Markdown className="text-gray-2 leading-relaxed text-14 md:text-16 markdown-content">
          {description}
        </Markdown>
      </div>
    </ScrollReveal>
  );
}
