import React from 'react';

export default function LastResults() {
  const returnResult = (resultA, resultB) => {
    if (resultA > resultB) {
      return <div className="h-[8px] w-[8px] bg-[#2dfa2d] rounded-full"></div>;
    } else {
      return <div className="h-[8px] w-[8px] bg-[red] rounded-full"></div>;
    }
  };
  const Item = ({ teamA, teamB, resultA, resultB }) => {
    return (
      <>
        <div className="flex justify-center items-center gap-1 md:gap-2 text-12 md:text-16 flex-col md:flex-row text-center">
          {returnResult(resultA, resultB)}
          {teamA}
        </div>
        <div className="flex justify-center items-center text-12 md:text-14">
          VS
        </div>
        <div className="flex justify-center items-center gap-1 md:gap-2 text-14 md:text-16 flex-col md:flex-row text-center">
          {returnResult(resultB, resultA)}
          {teamB}
        </div>
        <div className="flex justify-center items-center text-12 md:text-16">
          {resultA}-{resultB}
        </div>
      </>
    );
  };
  return (
    <div className="min-w-[100%] md:min-w-[680px] gradient_ranking rounded-basic p-2 md:p-4 border-[red] grid grid-cols-[.4fr_.05fr_.4fr_.2fr] md:grid-cols-[.4fr_.1fr_.4fr_.1fr] gap-2 md:gap-3 text-white">
      <Item
        teamA="USD Charonne"
        teamB="Los Angeles Lakers"
        resultA="122"
        resultB="119"
      />
      <Item
        teamA="USD Charonne (SM1)"
        teamB="Los Angeles Lakers (NBA)"
        resultA="122"
        resultB="119"
      />
      <Item
        teamA="USD Charonne (SF1)"
        teamB="San Antonio Spurs (NBA)"
        resultA="132"
        resultB="141"
      />
      <Item
        teamA="USD Charonne (U20)"
        teamB="Los Angeles Lakers (U20)"
        resultA="67"
        resultB="48"
      />
    </div>
  );
}
