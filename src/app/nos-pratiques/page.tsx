import BasicHead from '@/components/BasicHead';
import Button from '@/components/Button';
import Container from '@/components/Container';
import ImageSide from '@/components/ImageSide';
import { fetcher } from '@/helpers/utils';
import Link from 'next/link';
import React from 'react';

export default async function Pratiques() {
  const pratiquesData = await fetcher(
    'http://localhost:1337/api/pratiques?populate=*'
  );

  console.log(pratiquesData);

  return (
    <>
      <BasicHead
        title="Nos pratiques"
        image="https://images.unsplash.com/photo-1593935890446-2f13f143f363?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="fixed bg-black shadow_submenu p-2 md:p-4 bottom-[30px] left-1/2 -translate-x-1/2 rounded-[24px] flex items-center justify-center flex-wrap gap-3 mx-auto my-6">
      {pratiquesData.map((item) => (
          <Link href="#5x5" key={item}>
            <Button white>{item.attributes.titre}</Button>
          </Link>
        ))}
      </div>
      {pratiquesData.map((item, index) => {
        return (
          <ImageSide
            key={index}
            id={item.attributes.item_id}
            title={item.attributes.titre}
            content={item.attributes.contenu}
            image={`${process.env.MEDIA_URL}${item.attributes.photo.data.attributes.url}`}
            color={item.attributes.couleur}
            reverse={item.attributes.reverse}
          />
        );
      })}
    </>
  );
}
