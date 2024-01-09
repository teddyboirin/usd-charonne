import { fetcher } from '@/helpers/utils';
import BasicHead from '@/components/BasicHead';
import Container from '@/components/Container';
import GalerieContainer from '@/components/Galerie';
import React from 'react';

export default async function Galerie() {
  const galerieData = await fetcher(
    '/galeries?populate=*',
    { next: { revalidate: 3600 } }
  );
  return (
    <>
      <BasicHead
        title="Galerie"
        image="https://images.unsplash.com/photo-1523142096306-cca37b5aa001?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Container className="mt-6">
        <GalerieContainer data={galerieData} />
      </Container>
    </>
  );
}
