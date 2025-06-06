import { fetcher } from '@/helpers/utils';
import BasicHead from '@/components/BasicHead';
import ImageSide from '@/components/ImageSide';
import Subnav from '@/components/Subnav';
import Link from 'next/link';
import React from 'react';
import Item from '@/components/Subnav/item';

export default async function Pratiques() {
  const pratiquesData = await fetcher(
    '/pratiques?populate[0]=block&populate[1]=block.photo&sort[0]=id:asc',
    { next: { revalidate: 120 } }
  );

  return (
    <>
      <BasicHead
        title="Nos pratiques"
        image="https://images.unsplash.com/photo-1593935890446-2f13f143f363?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Subnav>
        <>
          {pratiquesData?.data?.map((item, index) => (
            <Link href={`#${item.attributes.block.id_item}`} key={index}>
              <Item>{item.attributes.block.titre}</Item>
            </Link>
          ))}
        </>
      </Subnav>
      {pratiquesData?.data?.map((item, index) => (
        <ImageSide
          key={index}
          id={item.attributes.block.id_item}
          title={item.attributes.block.titre}
          content={item.attributes.block.contenu}
          image={`${item.attributes.block.photo.data?.attributes?.url}`}
          color={item.attributes.block.couleur}
          reverse={item.attributes.block.reverse}
        />
      ))}
    </>
  );
}
