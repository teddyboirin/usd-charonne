import { fetcher } from '@/helpers/utils';
import BasicHead from '@/components/BasicHead';
import Container from '@/components/Container';
import TeamsItem from '@/components/TeamsItem';
import React from 'react';

export default async function Teams() {
  const data = await fetcher('/equipes?populate=*', {
    next: { revalidate: 120 },
  });
  return (
    <>
      <BasicHead title="Nos équipes" image="" />
      <Container>
        <section className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-6 pb-6 mt-10">
          {data.data?.map((team, index) => {
            return (
              <TeamsItem
                key={index}
                title={team.attributes.nom}
                img={team.attributes.photo.data?.attributes?.formats.large.url}
                link={`/teams/${team.attributes.code}`}
              />
            );
          })}
        </section>
      </Container>
    </>
  );
}
