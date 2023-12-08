import BasicHead from '@/components/BasicHead';
import Button from '@/components/Button';
import Container from '@/components/Container';
import ImageSide from '@/components/ImageSide';
import React from 'react';

export default function Pratiques() {
  return (
    <>
      <BasicHead title="Nos pratiques" image="" />
      {/* <BasicHead title="Nos pratiques" image="https://placehold.co/800x300" /> */}
      <Container>
        <section className="w-full flex items-center justify-center flex-wrap gap-3 md:max-w-[25%] mx-auto mb-10">
          <Button white>Basket 5x5</Button>
          <Button white>Basket 3x3</Button>
          <Button white>Basket Loisirs</Button>
          <Button white>Basket Découverte, santé, Intergénération</Button>
          <Button white>École de basket</Button>
          <Button white>+35 ans</Button>
        </section>
      </Container>
      <ImageSide
        title="test"
        content="fiozefjzefzegiozjgok"
        image="https://placehold.co/800x300"
      />
    </>
  );
}
