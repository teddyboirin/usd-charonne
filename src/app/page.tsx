import Head from '@/components/Head';
import ImageSide from '@/components/ImageSide';
import LastResults from '@/components/LastResults';
import H2 from '@/components/Titles/h2';

export default function Home() {
  return (
    <>
      <Head title="MATCH SÉNIORS 1 VS FRESNES" desc="24 NOV 2023 20:30" />
      <section className="bg-black p-6 w-full flex flex-col items-center gap-6">
        <H2 title="Derniers résultats" uppercase/>
        <LastResults />
      </section>
      <ImageSide title="title1" content="text" image="https://placehold.co/600"/>
      <ImageSide title="title1" content="text" image="https://placehold.co/600" reverse />
    </>
  );
}
