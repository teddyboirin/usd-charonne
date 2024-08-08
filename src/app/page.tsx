import { fetcher } from '@/helpers/utils';
import Head from '@/components/Head';
import ImageSide from '@/components/ImageSide';
import LastResults from '@/components/LastResults';
import H2 from '@/components/Titles/h2';
import Logo from '@/components/icons/logo';
import H5 from '@/components/Titles/h5';

export default async function Home() {
  const dataSlider = await fetcher(`/sliders?populate=*`);
  const dataHomepage = await fetcher(
    '/homepages?populate[0]=homepage&populate[1]=homepage.photo'
  );
  const dataResultats = await fetcher('/resultats');

  const maintenance = true;

  if (maintenance) {
    return (
      <div className="h-screen bg-black w-full text-white flex items-center justify-center flex-col gap-3 px-3">
        <Logo />
        <H2 title="Le site est actuellement en maintenance." center />
        <H5 title="Merci de revenir plus tard." />
      </div>
    );
  }

  return (
    <>
      <Head data={dataSlider} />
      <section className="bg-black p-6 w-full flex flex-col md:items-center gap-6">
        <H2 title="Derniers résultats" uppercase center />
        <LastResults data={dataResultats?.data} />
      </section>
      {dataHomepage?.data?.map((item, index) => (
        <ImageSide
          key={index}
          id={item.attributes.homepage.id_item}
          title={item.attributes.homepage.titre}
          content={item.attributes.homepage.contenu}
          image={`${item.attributes.homepage.photo.data?.attributes.url}`}
          color={item.attributes.homepage.couleur}
          reverse={item.attributes.homepage.reverse}
        />
      ))}
    </>
  );
}
