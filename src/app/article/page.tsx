import BasicHead from '@/components/BasicHead';
import Button from '@/components/Button';
import Container from '@/components/Container';
import ImageSide from '@/components/ImageSide';
import OtherArticle from '@/components/OtherArticle';
import H3 from '@/components/Titles/h3';
import H4 from '@/components/Titles/h4';
import Link from 'next/link';
import React from 'react';

export default function Article() {
  return (
    <>
      <BasicHead
        title="nom de l'article"
        image="https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Container className="mt-4">
        <div className="w-full mb-10 grid grid-cols-1 md:grid-cols-[.7fr_.2fr] justify-between gap-10 pb-3">
          <div className="text-white text-16 text-justify">
            <H3 title="titre"></H3>
            <p className="my-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              quia quidem alias ipsam praesentium aliquam expedita, itaque quam,
              placeat cupiditate impedit commodi, adipisci magnam? Aut delectus
              accusamus, sit explicabo, minima iure excepturi doloremque facilis
              impedit error quia. Nemo repellendus sequi, odit natus ab libero
              fuga porro obcaecati consequatur quam dicta quod harum nobis amet
              inventore asperiores qui magni quo soluta tempora nesciunt. Error
              obcaecati iste cupiditate, nulla id hic recusandae provident aut
              modi, consectetur voluptatibus est sunt! Iste facilis cupiditate
              molestiae reiciendis nesciunt ab earum voluptas voluptatibus
              quaerat quod, magnam eius debitis fugiat. Eum veritatis
              consectetur quos repellendus animi ad!
            </p>
            <H3 title="titre"></H3>
            <p className="mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              quia quidem alias ipsam praesentium aliquam expedita, itaque quam,
              placeat cupiditate impedit commodi, adipisci magnam? Aut delectus
              accusamus, sit explicabo, minima iure excepturi doloremque facilis
              impedit error quia. Nemo repellendus sequi, odit natus ab libero
              fuga porro obcaecati consequatur quam dicta quod harum nobis amet
              inventore asperiores qui magni quo soluta tempora nesciunt. Error
              obcaecati iste cupiditate, nulla id hic recusandae provident aut
              modi, consectetur voluptatibus est sunt! Iste facilis cupiditate
              molestiae reiciendis nesciunt ab earum voluptas voluptatibus
              quaerat quod, magnam eius debitis fugiat. Eum veritatis
              consectetur quos repellendus animi ad!
            </p>
          </div>
          <div className="flex py-3 flex-col rounded-basic">
            <h4 className="font-black md:text-center text-24 uppercase text-white">
              Autres articles
            </h4>
            <ul className="w-full py-2 gap-3 flex flex-col">
              <OtherArticle
                title="Lorem ipsum dolor sit amet consectetur."
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni nemo consequatur rem."
                link="#"
              />
              <OtherArticle
                title="Lorem ipsum dolor sit amet consectetur."
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni nemo consequatur rem."
                link="#"
              />
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
