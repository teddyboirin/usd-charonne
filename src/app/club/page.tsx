import { fetcher } from '@/helpers/utils';
import { Suspense } from 'react';
import BasicHead from '@/components/BasicHead';
import Button from '@/components/Button';
import ImageSide from '@/components/ImageSide';

import Link from 'next/link';
import Subnav from '@/components/Subnav';
import Loading from '@/components/icons/Loading';
import Item from '@/components/Subnav/item';

export default async function Club() {
  const data = await fetcher('http://localhost:1337/api/le-clubs?populate[0]=block&populate[1]=block.photo', {
    next: { revalidate: 3600 },
  });

  return (
    <>
      <BasicHead
        title="Le club"
        image="https://images.unsplash.com/photo-1626003573503-2e088d82c647?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Suspense fallback={<Loading />}>
        <Subnav>
          <>
            {data.data.map((item, index) => (
              <Link href={`#${item.attributes.block.id_item}`} key={index}>
                <Item>{item.attributes.block.titre}</Item>
              </Link>
            ))}
            <Link href="/galerie">
              <Item>Nos photos</Item>
            </Link>
          </>
        </Subnav>
      </Suspense>
      <Suspense fallback={<Loading />}>
        {data.data.map((item, index) => (
          <ImageSide
            key={index}
            id={item.attributes.block.id_item}
            title={item.attributes.block.titre}
            content={item.attributes.block.contenu}
            image={`${process.env.MEDIA_URL}${item.attributes.block.photo.data?.attributes?.url}`}
            color={item.attributes.block.couleur}
            reverse={item.attributes.block.reverse}
          />
        ))}
      </Suspense>
    </>
  );
}
