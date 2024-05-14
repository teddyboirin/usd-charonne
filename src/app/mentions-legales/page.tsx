import BasicHead from '@/components/BasicHead';
import H1 from '@/components/Titles/h1';
import React from 'react';

export default function page() {
  return (
    <>
      <BasicHead title="Mentions Légales" />
      <section className="w-[80%] mx-auto p-3 md:p-6">
        <p>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          pour la confiance en l&apos;économie numérique, il est précisé aux
          utilisateurs du site USD Basket l&apos;identité des différents
          intervenants dans le cadre de sa réalisation et de son suivi.
        </p>
        <H1 title="Edition du site" className="!text-black !text-left my-3" />
        <p>
          Le présent site, accessible à l’URL https://www.usdcbasket.com/ (le «
          Site »), est édité par : Teddy Boirin, de nationalité Française
          (France), né le 17/09/1997,
        </p>
        <H1 title="Hébergement" className="!text-black !text-left my-3" />
        <p>
          Le Site est hébergé par la société 1&1 / IONOS, situé 7 Place de la
          Gare - 57200 Sarreguemines, (contact téléphonique ou email : (+33) 9
          70 80 89 11).
        </p>
        <H1
          title="Directeur de publication"
          className="!text-black !text-left my-3"
        />
        <p>Le Directeur de la publication du Site est Marylin ORLANDINI.</p>
        <H1 title="Nous contacter" className="!text-black !text-left my-3" />
        <p>Par email : contact@usdcbasket.com</p>
        <H1
          title="Données personnelles"
          className="!text-black !text-left my-3"
        />
        <p>
          Le traitement de vos données à caractère personnel est régi par notre
          Charte du respect de la vie privée, disponible depuis la section
          &quot;Charte de Protection des Données Personnelles&quot;,
          conformément au Règlement Général sur la Protection des Données
          2016/679 du 27 avril 2016 («RGPD»).
        </p>
        <H1 title="Crédits" className="!text-black !text-left my-3" />
        <p>
          Certaines photos - images utilisées peuvent être issues du site{' '}
          <a href="https://unsplash.com/">Unsplash</a>
        </p>
      </section>
    </>
  );
}
