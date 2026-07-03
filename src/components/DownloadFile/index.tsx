import React, { memo } from 'react';
import H5 from '../Titles/h5';

interface Props {
  title: string;
  text: string;
  file: string;
}

function DownloadFile({ title, text, file }: Props) {
  return (
    <a href={file} target="_blank" download={file} className="group block">
      <div className="border_files rounded-xl overflow-hidden">
        <div className="bg-dark-1 p-5 flex items-center justify-center flex-col text-center gap-3 rounded-xl group-hover:bg-dark-2 transition-colors duration-300 text-white">
          <H5 title={title} white />
          <p className="text-12 md:text-14 text-white/60">{text}</p>
          <span className="font-display text-12 uppercase tracking-widest text-accent mt-1 group-hover:text-white transition-colors">
            Télécharger →
          </span>
        </div>
      </div>
    </a>
  );
}

export default memo(DownloadFile);
