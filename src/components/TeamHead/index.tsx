import React from 'react';
import H4 from '../Titles/h4';
import Ranking from '../Ranking';

export default function TeamHead() {
  return (
    <div className="mt-[130px md:mt-[250px] grid md:grid-cols-[8fr_4fr] items-center gap-6 py-2 md:py-3">
      <div className="w-full">
        <H4 title="Séniors masculins 1" uppercase color='black' />
        <p className="text-dark-1 mt-2 leading-normal text-14 md:text-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          consequatur incidunt! Beatae, voluptatem. Veritatis sapiente iste ea,
          ad totam odit tempora maxime cupiditate possimus. Nisi minima,
          voluptas nesciunt sapiente deleniti, cupiditate aliquam temporibus est
          fugit enim architecto maxime repellendus optio.
        </p>
      </div>
      <Ranking />
    </div>
  );
}
