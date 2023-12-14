import { fetcher } from '@/helpers/utils';
import Head from '@/components/Head';
import ImageSide from '@/components/ImageSide';
import LastResults from '@/components/LastResults';
import H2 from '@/components/Titles/h2';

export default async function Home() {
  const dataSlider = await fetcher(
    'http://localhost:1337/api/sliders?populate=*'
  );
  const dataHomepage = await fetcher(
    'http://localhost:1337/api/homepages?populate[0]=homepage&populate[1]=homepage.photo'
  );
  return (
    <>
      <Head data={dataSlider} />
      <section className="bg-black p-6 w-full flex flex-col md:items-center gap-6">
        <H2 title="Derniers résultats" uppercase center />
        <LastResults />
      </section>
      {dataHomepage.map((item, index) => (
        <ImageSide
          key={index}
          id={item.attributes.homepage.id_item}
          title={item.attributes.homepage.titre}
          content={item.attributes.homepage.contenu}
          image={`${process.env.MEDIA_URL}${item.attributes.homepage.photo.data?.attributes?.formats.large?.url}`}
          color={item.attributes.homepage.couleur}
          reverse={item.attributes.homepage.reverse}
        />
      ))}
    </>
  );
}
