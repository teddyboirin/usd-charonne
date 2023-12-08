import React, { ReactNode } from 'react';

type Props = {
  children: JSX.Element | ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return <div className={`max-w-[85%] md:max-w-[90%] mx-auto ${className || ''}`}>{children}</div>;
}
