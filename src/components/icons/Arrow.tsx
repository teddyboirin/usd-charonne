import { memo } from 'react';

 function Arrow() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.90995"
        y1="1.04842"
        x2="11.6623"
        y2="11.8008"
        stroke="white"
      />
      <line
        x1="0.894005"
        y1="11.8008"
        x2="11.6464"
        y2="1.04842"
        stroke="white"
      />
    </svg>
  );
}
export default memo(Arrow);