import React from 'react';

interface IProps {
  size: string;
}

const Logo = ({ size }: IProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M58.6666 14.9333C58.6666 15.5225 58.1891 16 57.6 16L48 16V6.40002C48 5.81091 48.4775 5.33335 49.0666 5.33335L57.6 5.33335C58.1891 5.33335 58.6666 5.81091 58.6666 6.40001V14.9333Z"
        fill="#07E4D7"
        fillOpacity="0.9"
      />
      <path
        d="M58.6666 36.2667C58.6666 36.8558 58.1891 37.3333 57.6 37.3333H49.0666C48.4775 37.3333 48 36.8558 48 36.2667V26.6667L57.6 26.6667C58.1891 26.6667 58.6666 27.1442 58.6666 27.7333V36.2667Z"
        fill="#07E4D7"
        fillOpacity="0.95"
      />
      <rect
        x="58.6666"
        y="58.6667"
        width="10.6667"
        height="10.6667"
        rx="1.06667"
        transform="rotate(-180 58.6666 58.6667)"
        fill="#07E4D7"
      />
      <rect
        x="16"
        y="16"
        width="10.6667"
        height="10.6667"
        rx="1.06667"
        transform="rotate(-180 16 16)"
        fill="#07E4D7"
        fillOpacity="0.6"
      />
      <path
        d="M16 37.3333H6.4C5.8109 37.3333 5.33333 36.8558 5.33333 36.2667L5.33333 27.7333C5.33333 27.1442 5.8109 26.6667 6.4 26.6667L14.9333 26.6667C15.5224 26.6667 16 27.1442 16 27.7333L16 37.3333Z"
        fill="#07E4D7"
        fillOpacity="0.65"
      />
      <path
        d="M16 57.6C16 58.1891 15.5224 58.6667 14.9333 58.6667H6.4C5.8109 58.6667 5.33333 58.1891 5.33333 57.6L5.33333 49.0667C5.33333 48.4776 5.8109 48 6.4 48H16L16 57.6Z"
        fill="#07E4D7"
        fillOpacity="0.7"
      />
      <path
        d="M26.6666 46.9333C26.6666 47.5224 26.1891 48 25.6 48H16L16 37.3333H26.6666L26.6666 46.9333Z"
        fill="#07E4D7"
        fillOpacity="0.75"
      />
      <path
        d="M37.3334 36.2667C37.3334 36.8558 36.8558 37.3333 36.2667 37.3333H26.6667L26.6667 27.7333C26.6667 27.1442 27.1443 26.6667 27.7334 26.6667L37.3334 26.6667V36.2667Z"
        fill="#07E4D7"
        fillOpacity="0.8"
      />
      <path
        d="M48 26.6667L37.3333 26.6667V17.0667C37.3333 16.4776 37.8109 16 38.4 16L48 16V26.6667Z"
        fill="#07E4D7"
        fillOpacity="0.85"
      />
      <rect
        x="62.72"
        y="62.72"
        width="61.44"
        height="61.44"
        rx="5.12"
        transform="rotate(-180 62.72 62.72)"
        stroke="#07E4D7"
        strokeWidth="2.56"
      />
      <rect
        x="62.72"
        y="62.72"
        width="61.44"
        height="61.44"
        rx="5.12"
        transform="rotate(-180 62.72 62.72)"
        stroke="url(#paint0_linear_5_7)"
        strokeWidth="2.56"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5_7"
          x1="63.8617"
          y1="96.1506"
          x2="128.181"
          y2="95.7851"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#120E3D" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
