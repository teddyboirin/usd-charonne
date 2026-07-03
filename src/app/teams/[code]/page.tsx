import { fetcher } from '@/helpers/utils';
import BasicHead from '@/components/BasicHead';
import Container from '@/components/Container';
import Player from '@/components/Player';
import TeamHead from '@/components/TeamHead';
import BackLink from '@/components/BackLink';
import SectionHeader from '@/components/SectionHeader';
import ScrollReveal from '@/components/ScrollReveal';

export default async function TeamItem({ params }) {
  const data = await fetcher(
    `/equipes?populate=*&filters[code][$eq]=${params.code}`,
    {
      next: { revalidate: 120 },
    }
  );
  const dataPlayer = await fetcher(
    `/joueurs?populate=*&filters[equipe][code][$eq]=${params.code}&sort[0]=id:desc`,
    {
      next: { revalidate: 120 },
    }
  );

  const team = data.data[0]?.attributes;
  const players = dataPlayer?.data || [];

  return (
    <>
      <BasicHead
        title={team?.nom}
        image={team?.photo?.data?.attributes?.url}
      />
      <Container className="pb-12">
        <BackLink href="/teams" label="Toutes les équipes" />
        <TeamHead description={team?.description} />

        {players.length > 0 && (
          <ScrollReveal>
            <SectionHeader
              title="Effectif"
              subtitle={`${players.length} membre${players.length > 1 ? 's' : ''} dans l'effectif`}
              className="mt-8"
            />
          </ScrollReveal>
        )}

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 pb-8">
          {players.map((player, index) => (
            <ScrollReveal key={index} delay={(index % 4) * 0.08}>
              <Player
                name={player.attributes.nom}
                poste={player.attributes.poste}
                photo={
                  player.attributes?.photo?.data
                    ? player.attributes?.photo?.data[0]?.attributes?.url
                    : 'https://res.cloudinary.com/dzljuty9d/image/upload/v1715694595/user_a5c8ea2906.jpg'
                }
              />
            </ScrollReveal>
          ))}
        </section>
      </Container>
    </>
  );
}
