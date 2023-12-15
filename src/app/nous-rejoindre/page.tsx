import BasicHead from '@/components/BasicHead';
import Button from '@/components/Button';
import Contact from '@/components/Contact';
import DownloadFile from '@/components/DownloadFile';
import ImageSide from '@/components/ImageSide';
import Subnav from '@/components/Subnav';
import { fetcher } from '@/helpers/utils';
import Link from 'next/link';
import React from 'react';

export default async function Pratiques() {
  const coachData = await fetcher(
    'http://localhost:1337/api/entraineurs?populate=*',
    { next: { revalidate: 3600 } }
  );
  const planningData = await fetcher(
    'http://localhost:1337/api/plannings?populate=*',
    { next: { revalidate: 3600 } }
  );

  console.log(planningData);

  return (
    <>
      <BasicHead
        title="Nous rejoindre"
        image="https://images.unsplash.com/photo-1577416412292-747c6607f055?q=80&w=3042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Subnav>
        <>
          <Link href="#inscription">
            <Button white>Inscription</Button>
          </Link>
          <Link href="#planning">
            <Button white>Planning des entrainements</Button>
          </Link>
          <Link href="#contacts">
            <Button white>Contacts Entraineurs</Button>
          </Link>
        </>
      </Subnav>
      <ImageSide
        id="inscription"
        title="Documents du club essentiels"
        image="https://placehold.co/800x300"
        color="black"
      >
        <div className="w-full grid grid-cols-1 md:flex md:flex-wrap gap-3 mt-3 items-center justify-center">
          <DownloadFile
            title="Inscriptions 2023-2024"
            text="Télécharger le formulaire d'inscription 2023-2024"
            file="#"
          />
          <DownloadFile
            title="Fiche de renseignements"
            text="À remplir et à renvoyer par mail à usdc.basket@gmail.com ou à remettre aux entraîneurs"
            file="#"
          />
          <DownloadFile
            title="Certificat médical"
            text="Télécharger le formulaire de certificat médical"
            file="#"
          />
          <DownloadFile
            title="INSCRIPTIONS LOISIRS SENIORS"
            text="Télécharger le formulaire d'inscription loisirs séniors"
            file="#"
          />
          <DownloadFile
            title="AGES DES SURCLASSEMENTS"
            text="Télécharger le formulaire des âges des surclassements"
            file="#"
          />
        </div>
      </ImageSide>
      <ImageSide
        id="planning"
        title={planningData.data[0].attributes.title}
        image={`${process.env.MEDIA_URL}${planningData.data[0].attributes.photo.data.attributes.url}`}
        color="white"
        reverse
      >
        <>
          <a
            href={`${process.env.MEDIA_URL}${planningData.data[0].attributes.fichier.data.attributes?.url}`}
            target="_blank"
          >
            <Button black>Télécharger le planning</Button>
          </a>
        </>
      </ImageSide>
      <ImageSide
        id="contacts"
        title="Contacts Entraineurs"
        image="https://placehold.co/800x300"
        color="black"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
          {coachData.data.map((coach, index) => {
            return (
              <Contact
                key={index}
                name={coach.attributes.nom}
                tel={coach.attributes.telephone}
                team={coach.attributes.equipe}
              />
            );
          })}
        </div>
      </ImageSide>
    </>
  );
}
