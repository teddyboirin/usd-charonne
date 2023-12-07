import BasicHead from '@/components/BasicHead';
import Container from '@/components/Container';
import Galerie2 from '@/components/Galerie';
import ImageSide from '@/components/ImageSide';
import React from 'react';

export default function Galerie() {
  return (
    <>
      <BasicHead title="Galerie" image="" />
      {/* <BasicHead image="https://placehold.co/800x300" /> */}
      <Container>
        <Galerie2 />
      </Container>
    </>
  );
}
