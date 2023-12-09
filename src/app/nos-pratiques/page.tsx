import BasicHead from '@/components/BasicHead';
import Button from '@/components/Button';
import Container from '@/components/Container';
import ImageSide from '@/components/ImageSide';
import Link from 'next/link';
import React from 'react';

export default function Pratiques() {
  return (
    <>
      <BasicHead
        title="Nos pratiques"
        image="https://images.unsplash.com/photo-1593935890446-2f13f143f363?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Container>
        <section className="w-full flex items-center justify-center flex-wrap gap-3 md:max-w-[25%] mx-auto my-6">
          <Link href="#5x5">
            <Button white>Basket 5x5</Button>
          </Link>
          <Link href="#3x3">
            <Button white>Basket 3x3</Button>
          </Link>
          <Link href="#loisir">
            <Button white>Basket Loisirs</Button>
          </Link>
          <Link href="#decouverte">
            <Button white>Basket Découverte, santé, Intergénération</Button>
          </Link>
          <Link href="#ecoledebasket">
            <Button white>École de basket</Button>
          </Link>
          <Link href="#35">
            <Button white>+35 ans</Button>
          </Link>
        </section>
      </Container>
      <ImageSide
        id="5x5"
        title="Basket 5X5"
        content="fiozefjzefzegiozjgok"
        image="https://placehold.co/800x300"
      />
      <ImageSide
        id="3x3"
        title="Basket 3X3"
        content="fiozefjzefzegiozjgok"
        image="https://placehold.co/800x300"
        reverse
      />
      <ImageSide
        id="loisir"
        title="Basket Loisirs"
        content="fiozefjzefzegiozjgok"
        image="https://placehold.co/800x300"
      />
      <ImageSide
        id="decouverte"
        title="Basket Découverte, santé, Intergénération"
        content="fiozefjzefzegiozjgok"
        image="https://placehold.co/800x300"
        reverse
      />
      <ImageSide
        id="ecoledebasket"
        title="École de basket"
        content="fiozefjzefzegiozjgok"
        image="https://placehold.co/800x300"
      />
      <ImageSide
        id="35"
        title="+35 ans"
        content="fiozefjzefzegiozjgok"
        image="https://placehold.co/800x300"
        reverse
      />
    </>
  );
}
