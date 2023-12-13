import BasicHead from '@/components/BasicHead';
import Button from '@/components/Button';
import Container from '@/components/Container';
import ImageSide from '@/components/ImageSide';
import Link from 'next/link';
import React from 'react';

export default function Formations() {
  return (
    <>
      <div className="fixed bg-black shadow_submenu p-2 md:p-4 bottom-[30px] left-1/2 -translate-x-1/2 rounded-[24px] flex items-center justify-center flex-wrap gap-3 mx-auto my-6">
        <Link href="#club">
          <Button white>Club formateur, détections, perfectionnement</Button>
        </Link>
        <Link href="#arbitrage">
          <Button white>École d'arbitrage</Button>
        </Link>
        <Link href="#stages">
          <Button white>Stages</Button>
        </Link>
      </div>
      <BasicHead
        title="Formations"
        image="https://images.unsplash.com/photo-1590227632180-80a3bf110871?q=80&w=2553&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ImageSide
        id="club"
        title="Club formateur, détections, perfectionnement"
        image="https://placehold.co/800x300"
        color="white"
      >
        <>
          <p className="text-14 md:text-16 mt-3 text-dark-1">
            Nous sommes fiers d’être un club formateur de talent, entièrement
            engagé pour que nos joueurs atteignent leur plein potentiel sur le
            terrain et puissent jouer à haut niveau.
          </p>
          <p className="text-14 md:text-16 mt-3 text-dark-1">
            Nous avons déjà obtenu les labels formateurs féminins et masculins
            ainsi que le label Or féminin, ; délivrés par la FFBB, reconnaissant
            notre travail et nos effort dans la formation tant féminine que
            masculine.
          </p>
          <p className="text-14 md:text-16 mt-3 text-dark-1">
            Nous avons des équipes évoluant en Région et avons connu la super
            Elite région U13 (finaliste du championnat) et l’aventure en
            prénational avec la CTC avec PB18. Plusieurs joueurs de renommée
            sont passés par Charonne comme Moussa Diabaté qui évolue en NBA
            aujourd’hui.. ; et bien d’autres !
          </p>
        </>
      </ImageSide>
      <ImageSide
        id="arbitrage"
        title="École d'arbitrage"
        image="https://placehold.co/800x300"
        reverse
        color="black"
      >
        <>
          <p className="text-14 md:text-16 mt-3 text-white">
            A Charonne, on aide nos jeunes dans leurs projets ! Pour les jeunes
            souhaitant devenir arbitre, nous avons l’école d’arbitrage.
            L’objectif est d’apprendre les règles de base et les techniques
            nécessaires pour appliquer les règles et diriger des matchs de
            basket-ball. Les jeunes sont également formés à communiquer
            clairement avec les joueurs, les entraîneurs et les autres arbitres,
            et à gérer les conflits de manière appropriée. L'école d'arbitrage
            peut donc être un excellent moyen pour les jeunes de se préparer à
            devenir des arbitres qualifiés et des futures personnes capables
            d’évoluer dans un milieu professionnel, dans l’arbitrage ou autre.
          </p>
          <p className="text-14 md:text-16 mt-3 text-white">
            Cette saison a vu 3 de nos jeunes diplômés arbitres départementaux
            et de belle manière, nous les avons vu officier sur les finales de
            la coupe de Paris. Bravo
          </p>
        </>
      </ImageSide>
      <ImageSide
        id="stages"
        title="Stages"
        content="fiozefjzefzegiozjgok"
        image="https://placehold.co/800x300"
        color="white"
      />
    </>
  );
}
