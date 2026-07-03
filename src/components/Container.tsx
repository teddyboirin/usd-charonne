import React, { ReactNode } from 'react';

type Props = {
  children: JSX.Element | ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={`w-[90%] max-w-container mx-auto ${className || ''}`}>
      {children}
    </div>
  );
}
