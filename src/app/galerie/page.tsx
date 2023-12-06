import BasicHead from '@/components/BasicHead';
import Container from '@/components/Container';
import Galerie from '@/components/Galerie';
import ImageSide from '@/components/ImageSide';
import React from 'react';

export default function Histoire() {
  return (
    <>
      <BasicHead title="Galerie" image="" />
      {/* <BasicHead image="https://placehold.co/800x300" /> */}
      <Container>
        <Galerie />
      </Container>
    </>
  );
}
