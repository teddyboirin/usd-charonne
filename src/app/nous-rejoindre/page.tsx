import { fetcher } from '@/helpers/utils';
import BasicHead from '@/components/BasicHead';
import Button from '@/components/Button';
import Contact from '@/components/Contact';
import DownloadFile from '@/components/DownloadFile';
import ImageSide from '@/components/ImageSide';
import Subnav from '@/components/Subnav';
import Item from '@/components/Subnav/item';
import Link from 'next/link';
import React from 'react';

export default async function Pratiques() {
  const coachData = await fetcher('/entraineurs?populate=*', {
    next: { revalidate: 120 },
  });

  return (
    <>
      <BasicHead
        title="Nous rejoindre"
        image="https://images.unsplash.com/photo-1577416412292-747c6607f055?q=80&w=3042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Subnav>
        <>
          <Link href="#docs">
            <Item>Documents essentiels</Item>
          </Link>
          <Link href="#contacts">
            <Item>Contacts Entraineurs</Item>
          </Link>
        </>
      </Subnav>
      <ImageSide
        id="docs"
        title="Documents du club essentiels"
        image="./assets/team.jpg"
        color="black"
      >
        <div className="w-full grid grid-cols-1 md:flex md:flex-wrap gap-3 mt-3 items-center justify-center">
          <DownloadFile
            title="Inscriptions 2024-2025"
            text="Télécharger le formulaire d'inscription 2024-2025"
            file="/docs/inscription.pdf"
          />
          <DownloadFile
            title="Fiche de renseignements"
            text="À remplir et à renvoyer par mail à usdc.basket@gmail.com ou à remettre aux entraîneurs"
            file="/docs/fiche-de-renseignements.pdf"
          />
          <DownloadFile
            title="Certificat médical"
            text="Télécharger le formulaire de certificat médical"
            file="/docs/certificat-medical.pdf"
          />
          <DownloadFile
            title="INSCRIPTIONS LOISIRS SENIORS"
            text="Télécharger le formulaire d'inscription loisirs séniors"
            file="/docs/inscription-loisir-senior.pdf"
          />
          <DownloadFile
            title="AGES DES SURCLASSEMENTS"
            text="Télécharger le formulaire des âges des surclassements"
            file="/docs/surclassement.pdf"
          />
          <DownloadFile
            title="Planning des entrainements"
            text="Télécharger le planning des entrainements"
            file="/docs/planning.pdf"
          />
        </div>
      </ImageSide>
      <ImageSide
        id="contacts"
        title="Contacts Entraineurs"
        image="./assets/team2.jpg"
        color="black"
        reverse
      >
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
          {coachData?.data?.map((coach, index) => {
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
