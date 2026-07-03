import { fetcher } from '@/helpers/utils';
import BasicHead from '@/components/BasicHead';
import Container from '@/components/Container';
import TeamsItem from '@/components/TeamsItem';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';
import React from 'react';

export default async function Teams() {
  const data = await fetcher('/equipes?populate=*', {
    next: { revalidate: 120 },
  });

  const teams = data?.data || [];

  return (
    <>
      <BasicHead title="Nos équipes" image="" />
      <Container className="pb-12">
        <ScrollReveal>
          <SectionHeader
            title={`${teams.length} équipe${teams.length > 1 ? 's' : ''}`}
            subtitle="Sélectionnez une équipe pour découvrir son effectif et ses informations."
            className="mt-10"
          />
        </ScrollReveal>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {teams.map((team, index) => (
            <ScrollReveal key={index} delay={(index % 3) * 0.1}>
              <TeamsItem
                title={team.attributes.nom}
                img={
                  team.attributes.photo.data?.attributes?.formats?.large?.url ||
                  team.attributes.photo.data?.attributes?.url
                }
                link={`/teams/${team.attributes.code}`}
              />
            </ScrollReveal>
          ))}
        </section>
      </Container>
    </>
  );
}
