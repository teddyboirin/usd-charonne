import React from 'react';

export default function Ranking() {
  const TeamItemLine = ({ team, ranking }) => {
    return (
      <div className="grid grid-cols-[.9fr_.1fr] gap-2 text-white text-14 md:text-14 uppercase">
        <div>{team}</div>
        <div className="flex justify-end">{ranking}</div>
      </div>
    );
  };
  return (
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
  );
}
