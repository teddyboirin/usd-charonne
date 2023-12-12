import BasicHead from '@/components/BasicHead';
import Button from '@/components/Button';
import Container from '@/components/Container';
import ImageSide from '@/components/ImageSide';
import Link from 'next/link';
import React from 'react';

export default function Ecole() {
  return (
    <>
      <BasicHead
        title="École de basket"
        image="https://images.unsplash.com/photo-1523142096306-cca37b5aa001?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Container>
        <section className="w-full flex items-center justify-center flex-wrap gap-3 md:max-w-[25%] mx-auto my-6">
          <Link href="#baby">
            <Button white>Baby basket & Mini Basket</Button>
          </Link>
          <Link href="#arbitrage">
            <Button white>Opération JAP & Opération École</Button>
          </Link>
        </section>
      </Container>
      <ImageSide
        id="baby"
        title="Baby basket & Mini Basket"
        content="Nous proposons du baby-basket-ball pour nos graines de champion ! S’adressant aux enfants de 4 à 8 ans, les enfants découvrent les règles fondamentales du jeu et s'amusent en se familiarisant avec le basketball, autour de divers ateliers ludiques. L’école de basket a obtenu le label régional et départemental. Nous mettons tout en œuvre pour être labellisé au niveau fédéral."
        image="https://placehold.co/800x300"
      />
      <ImageSide
        id="arbitrage"
        title="Opération JAP & Opération École"
        image="https://placehold.co/800x300"
        content="à compléter"
        reverse
      />
    </>
  );
}