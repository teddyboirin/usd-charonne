import { fetcher } from '@/helpers/utils';
import BasicHead from '@/components/BasicHead';
import Container from '@/components/Container';
import TeamsItem from '@/components/TeamsItem';
import React from 'react';

export default async function Teams() {
  const data = await fetcher('/equipes?populate=*', {
    next: { revalidate: 3600 },
  });
  return (
    <>
      <BasicHead title="Nos équipes" image="" />
      {/* <BasicHead image="https://placehold.co/800x300" /> */}
      <Container>
        <section className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6 pb-6 mt-10">
          {data.data?.map((team, index) => {
            return (
              <TeamsItem
                key={index}
                title={team.attributes.nom}
                img={`${process.env.MEDIA_URL}${team.attributes.photo.data?.attributes?.formats.large.url}`}
                link="/teams/item"
              />
            );
          })}
        </section>
      </Container>
    </>
  );
}
