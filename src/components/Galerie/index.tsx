'use client';
import Item from './Item';
import ButtonFilter from './ButtonFilter';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

const FILTERS = ['', 'SM1', 'SM2', 'SF1', 'SF2'] as const;

const SM1_VIDEOS = [
  {
    src: 'https://res.cloudinary.com/dvnqnq87m/video/upload/v1738593891/Match_Ozoir_fhpcxh.mp4',
    thumb: 'https://res.cloudinary.com/dvnqnq87m/image/upload/v1738592272/Capture_d_ecran_2025_02_03_a_15_17_06_ab55194134.png',
    title: 'SM1 | Récap match VS Ozoir',
  },
  {
    src: 'https://res.cloudinary.com/dvnqnq87m/video/upload/v1738594217/Vide%CC%81o_Pre%CC%81pa_ysdodb.mp4',
    thumb: 'https://res.cloudinary.com/dvnqnq87m/image/upload/v1738592062/Capture_d_ecran_2025_02_03_a_15_13_51_7ae167dd15.png',
    title: 'SM1 | Entraînement de reprise & préparation physique',
  },
  {
    src: 'https://res.cloudinary.com/dvnqnq87m/video/upload/v1727292934/Video_SM1_w3ydqb.mp4',
    thumb: 'https://res.cloudinary.com/dvnqnq87m/image/upload/v1727294686/Capture_d_ecran_2024_09_25_a_22_04_18_1cff719f0a.png',
    title: 'SM1 | Récap match VS Le Vésinet (Coupe de France)',
  },
];

export default function GlobalContainer({ data }) {
  const [teamType, setTeamType] = useState<string>('');
  const [openVideo, setOpenVideo] = useState<boolean>(false);
  const [linkVideo, setLinkVideo] = useState<string>('');

  const filteredTeams = useCallback(() => {
    if (!teamType) return data?.data || [];
    return data?.data.filter((teamTypes) => {
      const { team } = teamTypes.attributes;
      return team?.toLowerCase()?.includes(teamType.toLowerCase());
    });
  }, [data?.data, teamType]);

  const selectTeam = useCallback(
    (value: string) => {
      setTeamType(teamType !== value ? value : '');
    },
    [teamType]
  );

  const handleVideo = (link: string) => {
    setOpenVideo(true);
    setLinkVideo(link);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenVideo(false);
    };
    if (openVideo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [openVideo]);

  const photos = filteredTeams();
  const showVideos = teamType === '' || teamType === 'SM1';

  return (
    <>
      {openVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={() => setOpenVideo(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Fermer la vidéo"
              className="absolute right-3 top-3 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-red text-white flex items-center justify-center transition-colors backdrop-blur-sm"
              onClick={() => setOpenVideo(false)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <video src={linkVideo} controls autoPlay className="w-full h-full object-contain" />
          </div>
        </div>
      )}

      <section className="w-full">
        <div className="flex flex-wrap gap-2 items-center justify-center mb-6">
          {FILTERS.map((filter) => (
            <ButtonFilter
              key={filter || 'all'}
              value={filter || 'Tous'}
              onClick={() => selectTeam(filter)}
              isActive={teamType === filter}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {showVideos &&
            SM1_VIDEOS.map((video) => (
              <button
                key={video.src}
                type="button"
                className="group relative h-[160px] md:h-[280px] rounded-xl overflow-hidden"
                onClick={() => handleVideo(video.src)}
              >
                <Image
                  fill
                  src={video.thumb}
                  alt={video.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 p-2 md:p-3 text-11 md:text-13 text-center bg-gradient-to-t from-black/80 to-transparent w-full text-white font-display uppercase tracking-wide">
                  {video.title}
                </div>
              </button>
            ))}

          {photos?.map((item, index) => (
            <Item
              key={index}
              imageLink={`${item.attributes.photo.data?.attributes.formats.large.url}`}
              imageLinkFull={`${item.attributes.photo.data?.attributes.url}`}
              title={item.attributes.titre}
            />
          ))}
        </div>

        {photos?.length === 0 && !showVideos && (
          <div className="text-center py-16 text-gray-2">
            <p className="font-display text-18 uppercase tracking-wide mb-2">Aucun contenu</p>
            <p className="text-14">Aucune photo pour cette catégorie pour le moment.</p>
          </div>
        )}
      </section>
    </>
  );
}
