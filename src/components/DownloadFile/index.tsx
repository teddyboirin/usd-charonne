import React, { memo } from 'react';
import H5 from '../Titles/h5';
import Link from 'next/link';

interface Props {
  title: string;
  text: string;
  file: string;
}

function DownloadFile({ title, text, file }: Props) {
  return (
    <a href={file} target="_blank" download={file}>
      <div className="border_files rounded-basic">
        <div className="bg-black p-3 flex items-center justify-center flex-col text-center gap-3 rounded-basic text-white">
          <H5 title={title} white></H5>
          <p className="text-12 md:text-14">{text}</p>
        </div>
      </div>
    </a>
  );
}

export default memo(DownloadFile);
