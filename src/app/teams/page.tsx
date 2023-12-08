import BasicHead from '@/components/BasicHead';
import Container from '@/components/Container';
import TeamsItem from '@/components/TeamsItem';
import React from 'react';

export default function Teams() {
  return (
    <>
      <BasicHead title="Nos équipes" image="" />
      {/* <BasicHead image="https://placehold.co/800x300" /> */}
      <Container>
        <section className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6 pb-6">
          <TeamsItem title="Séniors Masculins 1" img="https://placehold.co/500" link="#" />
          <TeamsItem title="Séniors Masculins 1" img="https://placehold.co/500" link="#" />
          <TeamsItem title="Séniors Masculins 1" img="https://placehold.co/500" link="#" />
          <TeamsItem title="Séniors Masculins 1" img="https://placehold.co/500" link="#" />
        </section>
      </Container>
    </>
  );
}
