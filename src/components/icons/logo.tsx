'use client';
import { useWindowSize } from 'react-use';
import { memo, useEffect, useState } from 'react';
import Image from 'next/image';
import LogoImg from '../../assets/logo.png';
import { isDesktop } from '@/helpers/utils';

function Logo() {
  const { width } = useWindowSize();
  const [isDesktopValue, setIsDesktopValue] = useState<boolean>();
  useEffect(() => {
    if (isDesktop(width)) setIsDesktopValue(true);
    else setIsDesktopValue(false);
  }, [width]);

  return isDesktopValue ? (
    <Image src={LogoImg} alt="logo-charonne" height={150} width={150} />
  ) : (
    <Image src={LogoImg} alt="logo-charonne" height={85} width={85} />
  );
}
export default memo(Logo);
