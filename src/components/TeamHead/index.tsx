import React from 'react';
import H4 from '../Titles/h4';

export default function TeamHead() {
  const TeamItemLine = ({ team, ranking }) => {
    return (
      <div className="grid grid-cols-[.9fr_.1fr] gap-2 text-white text-14 md:text-14 uppercase">
        <div className="">{team}</div>
        <div className="flex justify-end">{ranking}</div>
      </div>
    );
  };
  return (
    <div className="mt-[250px] grid md:grid-cols-[8fr_4fr] items-center gap-6 py-2 md:py-3">
      <div className="w-full">
        <H4 title="Séniors masculins 1" uppercase />
        <p className="text-white mt-2 leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          consequatur incidunt! Beatae, voluptatem. Veritatis sapiente iste ea,
          ad totam odit tempora maxime cupiditate possimus. Nisi minima,
          voluptas nesciunt sapiente deleniti, cupiditate aliquam temporibus est
          fugit enim architecto maxime repellendus optio.
        </p>
      </div>
      <div className="p-3 gradient_ranking w-full h-[150px] rounded-basic overflow-scroll">
        <div className="w-full flex items-center justify-center text-white uppercase text-16 md:text-16 mb-4">
          Classement
        </div>
        <div className="w-full h-auto flex flex-col gap-0.5 ">
          <TeamItemLine team="USD Charonne" ranking="1ER" />
          <TeamItemLine team="USD Charonne" ranking="1ER" />
          <TeamItemLine team="USD Charonne" ranking="1ER" />
          <TeamItemLine team="USD Charonne" ranking="1ER" />
          <TeamItemLine team="USD Charonne" ranking="1ER" />
          <TeamItemLine team="USD Charonne" ranking="1ER" />
        </div>
      </div>
    </div>
  );
}
