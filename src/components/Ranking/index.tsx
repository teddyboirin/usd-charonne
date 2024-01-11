import React from 'react';

export default function Ranking() {
  const TeamItemLine = ({ team, points, victory, defeat, ranking }) => {
    return (
      <div className="grid grid-cols-4 gap-2 text-dark-1 text-14 md:text-14 uppercase">
        {/* <div>{team}</div> */}
        <div className="flex w-full">{ranking}</div>
        <div className="flex justify-end w-full">{points}</div>
        <div className="flex justify-end w-full">{victory}</div>
        <div className="flex justify-end w-full">{defeat}</div>
      </div>
    );
  };
  return (
    <div className="p-3 gradient_ranking w-full rounded-basic overflow-scroll">
      <div className="w-full flex items-center justify-center text-dark-1 uppercase text-16 md:text-16 mb-4">
        Position au classement
      </div>
      <div className="w-full h-auto flex flex-col gap-0.5 ">
        <TeamItemLine team="SM1" ranking="rang" victory="V"  defeat="D" points="pts"/>
        <TeamItemLine team="SM1" ranking="1ER" victory={10}  defeat={0} points={384}/>
      </div>
    </div>
  );
}
