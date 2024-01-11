import Container from '@/components/Container';
import Player from '@/components/Player';
import TeamHead from '@/components/TeamHead';
import { fetcher } from '@/helpers/utils';

export default async function TeamItem({ params }) {
  const data = await fetcher(
    `/equipes?populate=*&filters[code][$eq]=${params.code}`,
    {
      next: { revalidate: 3600 },
    }
  );
  const dataPlayer = await fetcher(
    `/joueurs?populate=*&filters[equipe][code][$eq]=${params.code}`,
    {
      next: { revalidate: 3600 },
    }
  );

  return (
    <>
      <Container>
        <>
          <TeamHead
            title={data.data[0]?.attributes.nom}
            description={data.data[0]?.attributes.description}
          />
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8">
            {dataPlayer?.data?.map((player, index) => (
              <Player
                key={index}
                name={player.attributes.nom}
                poste={player.attributes.poste}
                photo={player.attributes.photo.data[0].attributes.url}
              />
            ))}
          </section>
        </>
      </Container>
    </>
  );
}
