import Image from 'next/image'
import React, { memo } from 'react'

import LogoImg from '../../assets/logo.jpg';

function Logo() {
  return (
    <Image src={LogoImg} alt="logo-charonne" />
  )
}
export default memo(Logo)