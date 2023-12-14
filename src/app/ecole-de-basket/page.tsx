import { fetcher } from '@/helpers/utils';
import BasicHead from '@/components/BasicHead';
import Button from '@/components/Button';
import Container from '@/components/Container';
import ImageSide from '@/components/ImageSide';
import Subnav from '@/components/Subnav';
import Link from 'next/link';

export default async function Ecole() {
  const data = await fetcher(
    'http://localhost:1337/api/ecole-de-baskets??populate[0]=Block&populate[1]=Block.photo'
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
            {data.map((item, index) => (
              <Link href={`#${item.attributes.Block.id_item}`} key={index}>
                <Button white>{item.attributes.Block.titre}</Button>
              </Link>
            ))}
          </>
        </Subnav>
      </Container>
      {data.map((item, index) => (
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
