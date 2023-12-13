import { fetcher } from '@/helpers/utils';
import BasicHead from '@/components/BasicHead';
import Button from '@/components/Button';
import ImageSide from '@/components/ImageSide';

import Link from 'next/link';

export default async function Club() {
  const data = await fetcher('http://localhost:1337/api/le-club?populate=*');

  return (
    <>
      <BasicHead
        title="Le club"
        image="https://images.unsplash.com/photo-1626003573503-2e088d82c647?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="w-full mb-6 flex items-center justify-center gap-3">
        <Link href="/galerie">
          <Button white>Photos du club</Button>
        </Link>
        <Link href="/teams">
          <Button white>Équipes</Button>
        </Link>
      </div>
      <ImageSide
        content={data.attributes.content}
        title={data.attributes.titre}
        image={`${process.env.MEDIA_URL}${data.attributes.photo.data.attributes.formats.large.url}`}
        color="white"
      />
    </>
  );
}
