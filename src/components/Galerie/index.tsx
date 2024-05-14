'use client';
import { useWindowSize } from 'react-use';
import Item from './Item';
import ButtonFilter from './ButtonFilter';
import { useCallback, useState } from 'react';

export default function GlobalContainer({ data }) {
  const [teamType, setTeamType] = useState<string>('');

  const filteredTeams = useCallback(() => {
    return data?.data.filter((teamTypes) => {
      const { team } = teamTypes.attributes;
      const teamTypesFiltered = team
        .toLowerCase()
        .includes(teamType.toLowerCase());

      return teamTypesFiltered;
    });
  }, [data?.data, teamType]);

  const selectTeam = useCallback(
    (value) => {
      {
        if (teamType !== value) {
          setTeamType(value);
        } else {
          setTeamType('');
        }
      }
    },
    [teamType]
  );
  return (
    <>
      <section className="w-full bg-gray-0">
        <div className="w-full flex items-center justify-center">
          <div className="flex gap-3 items-center justify-center max-w-[80%] md:max-w-[600px]">
            <ButtonFilter
              value="SM1"
              onClick={() => selectTeam('SM1')}
              isActive={teamType === 'SM1'}
            />
            <ButtonFilter
              value="SF1"
              onClick={() => selectTeam('SF1')}
              isActive={teamType === 'SF1'}
            />
          </div>
        </div>
        <div className="my-3 md:my-6 w-full grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
          {filteredTeams()?.map((item, index) => (
            <Item
              key={index}
              imageLink={`${item.attributes.photo.data?.attributes.formats.large.url}`}
              imageLinkFull={`${item.attributes.photo.data?.attributes.url}`}
              title={item.attributes.titre}
            />
          ))}
        </div>
      </section>
    </>
  );
}
