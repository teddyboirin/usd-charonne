'use client';
import { isDesktop } from '@/helpers/utils';
import { useWindowSize } from 'react-use';
import Item from './Item';
import ButtonFilter from './ButtonFilter';
import 'react-image-gallery/styles/css/image-gallery.css';
import Masonry from '@mui/lab/Masonry';
import { useState } from 'react';

export default function GlobalContainer({ data }) {
  const { width } = useWindowSize();
  const [teamType, setTeamType] = useState('');

  const filteredTeams = data?.data.filter(teamTypes => {
    const { team } = teamTypes.attributes;
    const teamTypesFiltered = team.toLowerCase().includes(teamType.toLowerCase());

    return teamTypesFiltered;
  })

  return (
    <>
      <section className="w-full bg-gray-0">
        <div className="w-full flex items-center justify-center">
          <div className="flex gap-3 items-center justify-center max-w-[80%] md:max-w-[600px]">
            <ButtonFilter value="SM1" onClick={() => setTeamType("SM1")} isActive={teamType === "SM1"} />
            <ButtonFilter value="SF1" onClick={() => setTeamType("SF1")} isActive={teamType === "SF1"} />
          </div>
        </div>
        <div className="mt-6 w-full">
          <Masonry columns={isDesktop(width) ? 4 : 2} spacing={2}>
            {filteredTeams?.map((item, index) => (
              <Item
                key={index}
                imageLink={`${
                  item.attributes.photo.data?.attributes.formats.large.url
                }`}
                imageLinkFull={`${
                  item.attributes.photo.data?.attributes.url
                }`}
                height={Math.random() * (900 - 200) + 200}
                title={item.attributes.titre}
              />
            ))}
          </Masonry>
        </div>
      </section>
    </>
  );
}
