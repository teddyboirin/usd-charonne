import { fetcher } from '@/helpers/utils';
import TeamsItem from '@/components/TeamsItem';
import SectionHeader from '@/components/SectionHeader';
import Container from '@/components/Container';
import Link from 'next/link';
import Button from '@/components/Button';
import ScrollReveal from '@/components/ScrollReveal';

const PRENATIONAL_TEAMS = ['SM1', 'SF1'];

function findPrenationalTeams(allTeams: { attributes: { nom?: string; code?: string } }[]) {
  return PRENATIONAL_TEAMS.map((name) =>
    allTeams.find(
      (team) => team.attributes.nom?.trim().toUpperCase() === name
    )
  ).filter(Boolean);
}

export default async function TeamsPreview() {
  const data = await fetcher('/equipes?populate=*', {
    next: { revalidate: 120 },
  });

  const allTeams = data?.data || [];
  const prenationalTeams = findPrenationalTeams(allTeams);

  if (!prenationalTeams.length) return null;

  return (
    <section className="bg-gray-0 py-12 md:py-16">
      <Container>
        <ScrollReveal>
          <SectionHeader
            title="Nos équipes phares"
            subtitle="SM1 et SF1 évoluent en championnat Pré-National — le plus haut niveau du club."
            center
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {prenationalTeams.map((team, index) => (
            <ScrollReveal key={team.attributes.code} delay={index * 0.1}>
              <TeamsItem
                title={team.attributes.nom}
                img={
                  team.attributes.photo.data?.attributes?.formats?.large?.url ||
                  team.attributes.photo.data?.attributes?.url
                }
                link={`/teams/${team.attributes.code}`}
                prenational
              />
            </ScrollReveal>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/teams">
            <Button black>Toutes les équipes</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
