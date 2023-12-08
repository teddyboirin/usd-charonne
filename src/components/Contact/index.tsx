import { memo } from 'react';

interface Props {
  name: string;
  tel: string;
  team: string;
}

function Contact({ name, tel, team }: Props) {
  return (
    <div className="rounded-basic h-fit p-2 md:p-3 bg-gray-3 grid grid-cols-[50px_.5fr_.5fr] gap-3">
      <div className="gradient_menu text-white rounded-full h-[50px] w-[50px] flex items-center justify-center">
        {team}
      </div>
      <div className="w-full flex flex-col justify-center gap-y-0.25">
        <h6>{name}</h6>
        <h4 className="text-14 text-gray-1">{tel}</h4>
      </div>
      <div className="flex justify-end items-center">
        <a href={`tel:+33${tel}`}>
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2642 14.0216L16.1641 13.8215C15.8839 13.1609 12.441 12.1601 12.1608 12.1401L11.9406 12.1601C11.5203 12.2402 11.0599 12.6205 10.1592 13.4011C9.97901 13.5613 9.73882 13.6013 9.51863 13.4812C8.33766 12.8207 6.89647 11.4996 6.17587 10.6989C5.39523 9.83819 4.45445 8.41702 4.01408 7.27608C3.93402 7.05589 4.01409 6.8157 4.17422 6.65556C5.19506 5.7348 5.63542 5.29444 5.67546 4.81404C5.69547 4.53381 5.09498 0.990883 4.47447 0.650602L4.29432 0.530503C3.89399 0.270288 3.29349 -0.110026 2.63294 0.0300894C2.47281 0.0701225 2.31268 0.130172 2.17256 0.210238C1.7322 0.49047 0.63129 1.2511 0.130877 2.23191C-0.169371 2.85242 -0.309487 8.47707 3.89399 13.221C8.05743 17.9249 13.2017 18.125 13.9623 17.9649H13.9823L14.0424 17.9449C15.0832 17.5646 15.964 16.5838 16.3042 16.1634C16.9248 15.4228 16.5044 14.5221 16.2642 14.0216Z"
              fill="#1E1E1E"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
export default memo(Contact);
