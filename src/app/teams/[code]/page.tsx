import { fetcher } from '@/helpers/utils';
import BasicHead from '@/components/BasicHead';
import Container from '@/components/Container';
import Player from '@/components/Player';
import TeamHead from '@/components/TeamHead';
import H2 from '@/components/Titles/h2';
import Link from 'next/link';

export default async function TeamItem({ params }) {
  const data = await fetcher(
    `/equipes?populate=*&filters[code][$eq]=${params.code}`,
    {
      next: { revalidate: 3600 },
    }
  );
  const dataPlayer = await fetcher(
    `/joueurs?populate=*&filters[equipe][code][$eq]=${params.code}&sort[0]=poste:desc`,
    {
      next: { revalidate: 3600 },
    }
  );

  return (
    <>
      <BasicHead
        title={data.data[0]?.attributes.nom}
        image={data.data[0]?.attributes.photo.data.attributes.url}
      />
      <Container>
        <>
          <Link
            href="/teams"
            className="bg-dark-1 p-2 w-fit flex gap-1 mt-3 text-white text-13 items-center justify-center rounded-basic"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                />
              </svg>
            </div>
            <div>Retour</div>
          </Link>
          <TeamHead description={data.data[0]?.attributes.description} />
          <H2
            title="Joueurs"
            color="black"
            className="mb-4 mt-4 md:mt-0 font-bold"
          />
          <section className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-8">
            {dataPlayer?.data?.map((player, index) => (
              <Player
                key={index}
                name={player.attributes.nom}
                poste={player.attributes.poste}
                photo={
                  player.attributes?.photo?.data
                    ? player.attributes?.photo?.data[0]?.attributes?.url
                    : 'https://res.cloudinary.com/dzljuty9d/image/upload/v1715694595/user_a5c8ea2906.jpg'
                }
              />
            ))}
          </section>
        </>
      </Container>
    </>
  );
}
