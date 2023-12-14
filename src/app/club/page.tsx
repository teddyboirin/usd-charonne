import { fetcher } from '@/helpers/utils';
import BasicHead from '@/components/BasicHead';
import Button from '@/components/Button';
import ImageSide from '@/components/ImageSide';

import Link from 'next/link';
import Subnav from '@/components/Subnav';

export default async function Club() {
  const data = await fetcher('http://localhost:1337/api/le-clubs?populate=*');

  return (
    <>
      <BasicHead
        title="Le club"
        image="https://images.unsplash.com/photo-1626003573503-2e088d82c647?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Subnav>
        <>
          {data.map((item, index) => (
            <Link href={`#${item.attributes.block.id_item}`} key={index}>
              <Button white>{item.attributes.block.titre}</Button>
            </Link>
          ))}
           <Link href="galerie">
              <Button white>Nos photos</Button>
            </Link>
        </>
      </Subnav>
      {data.map((item, index) => (
        <ImageSide
        key={index}
        id={item.attributes.block.id_item}
        title={item.attributes.block.titre}
        content={item.attributes.block.contenu}
        image="https://placehold.co/800x300"
        color={item.attributes.block.couleur}
        reverse={item.attributes.block.reverse}
      />
      ))}
    </>
  );
}
