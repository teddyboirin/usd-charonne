import { memo } from 'react';
import Image from 'next/image';
import { useWindowSize } from 'react-use';
import LogoImg from '../../assets/logo.png';

function Logo() {
  const { width } = useWindowSize();
  return width > 768 ? <Image src={LogoImg} alt="logo-charonne" height={150} width={150} /> : <Image src={LogoImg} alt="logo-charonne" height={85} width={85} />;
}
export default memo(Logo);
