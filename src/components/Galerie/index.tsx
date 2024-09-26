'use client';
import { useWindowSize } from 'react-use';
import Item from './Item';
import ButtonFilter from './ButtonFilter';
import { useCallback, useState } from 'react';
import Image from 'next/image';
import Arrow from '../icons/Arrow';

export default function GlobalContainer({ data }) {
  const [teamType, setTeamType] = useState<string>('');
  const [openVideo, setOpenVideo] = useState<boolean>(false);

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
      {openVideo && (
        <div className="h-screen w-screen bg-filter absolute left-0 top-0 z-[100]">
          <div className="absolute w-[95vw] h-[95vh] bg-[black] z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button
              type="button"
              className="absolute right-4 top-4 text-black z-[100] bg-black text-12 p-2"
              onClick={() => setOpenVideo(false)}
            >
              <Arrow />
            </button>
            <video
              src="https://res.cloudinary.com/dvnqnq87m/video/upload/v1727292934/Video_SM1_w3ydqb.mp4"
              controls
            ></video>
          </div>
        </div>
      )}
      <section className="w-full bg-gray-0">
        <div className="w-full flex items-center justify-center">
          <div className="flex gap-3 items-center justify-center max-w-[80%] md:max-w-[600px]">
            <ButtonFilter
              value="SM1"
              onClick={() => selectTeam('SM1')}
              isActive={teamType === 'SM1'}
            />
            <ButtonFilter
              value="SM2"
              onClick={() => selectTeam('SM2')}
              isActive={teamType === 'SM2'}
            />
            <ButtonFilter
              value="SF1"
              onClick={() => selectTeam('SF1')}
              isActive={teamType === 'SF1'}
            />
            <ButtonFilter
              value="SF2"
              onClick={() => selectTeam('SF2')}
              isActive={teamType === 'SF2'}
            />
          </div>
        </div>
        <div className="my-3 md:my-6 w-full grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
          {teamType === 'SM1' && (
            <button
              type="button"
              className="h-[150px] md:h-[300px] relative"
              onClick={() => setOpenVideo(true)}
            >
              <div className="absolute bottom-0 p-1 text-12 md:text-14 md:p-4 text-center bg-filter w-full left-1/2 text-white z-10 -translate-x-1/2">
                Vidéo SM1 VS Le Vésinet (Coupe de France)
              </div>
              <Image
                fill
                src="https://res.cloudinary.com/dvnqnq87m/image/upload/v1727294686/Capture_d_ecran_2024_09_25_a_22_04_18_1cff719f0a.png"
                alt="cover-video-sm1"
                objectFit="cover"
              />
            </button>
          )}

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
