import { fetcher } from '@/helpers/utils';
import BasicHead from '@/components/BasicHead';
import Container from '@/components/Container';
import ImageSide from '@/components/ImageSide';
import Subnav from '@/components/Subnav';
import Link from 'next/link';
import Item from '@/components/Subnav/item';

export default async function Ecole() {
  const data = await fetcher(
    '/ecole-de-baskets??populate[0]=Block&populate[1]=Block.photo',
    { next: { revalidate: 3600 } }
  );
  return (
    <>
      <BasicHead
        title="École de basket"
        image="https://images.unsplash.com/photo-1523142096306-cca37b5aa001?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Container>
        <Subnav>
          <>
            {data.data.map((item, index) => (
              <Link href={`#${item.attributes.Block.id_item}`} key={index}>
                <Item>{item.attributes.Block.titre}</Item>
              </Link>
            ))}
          </>
        </Subnav>
      </Container>
      {data.data.map((item, index) => (
        <ImageSide
          key={index}
          id={item.attributes.Block.id_item}
          title={item.attributes.Block.titre}
          content={item.attributes.Block.contenu}
          image={`${process.env.MEDIA_URL}${item.attributes.Block.photo.data?.attributes?.formats.large?.url}`}
          color={item.attributes.Block.couleur}
          reverse={item.attributes.Block.reverse}
        />
      ))}
    </>
  );
}
