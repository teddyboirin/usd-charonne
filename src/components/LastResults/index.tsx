import H2 from '../Titles/h2';

export default function LastResults({ data }) {
  const returnResult = (resultA: number, resultB: number) => {
    if (resultA > resultB) {
      return <div className="h-2 w-2 bg-green-500 rounded-full" />;
    }
    return <div className="h-2 w-2 bg-red rounded-full" />;
  };

  const Item = ({ teamA, teamB, resultA, resultB }) => (
    <>
      <div className="flex justify-center items-center gap-2 text-12 md:text-14 flex-col md:flex-row text-center font-display uppercase tracking-wide">
        {returnResult(resultA, resultB)}
        {teamA}
      </div>
      <div className="flex justify-center items-center text-12 text-accent font-display">
        VS
      </div>
      <div className="flex justify-center items-center gap-2 text-12 md:text-14 flex-col md:flex-row text-center font-display uppercase tracking-wide">
        {returnResult(resultB, resultA)}
        {teamB}
      </div>
      <div className="flex justify-center items-center font-display text-16 md:text-20 font-bold text-accent">
        {resultA} - {resultB}
      </div>
    </>
  );

  if (!data?.length) {
    return null;
  }

  return (
    <section className="bg-dark-1 py-10 md:py-12 w-full flex flex-col items-center gap-6 border-y border-white/10">
      <H2 title="Derniers résultats" uppercase center />
      <div className="w-[90%] max-w-[720px] gradient_ranking rounded-xl p-4 md:p-6 grid grid-cols-[.4fr_.05fr_.4fr_.2fr] md:grid-cols-[.4fr_.1fr_.4fr_.1fr] gap-3 md:gap-4 text-white">
        {data?.map((item, index) => (
          <Item
            key={index}
            teamA={item.attributes.team_a}
            teamB={item.attributes.team_b}
            resultA={item.attributes.score_team_a}
            resultB={item.attributes.score_team_b}
          />
        ))}
      </div>
    </section>
  );
}
