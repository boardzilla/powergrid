import React from "react";
import { City } from '../../game/index.js';
import type { Powergrid } from '../../game/index.js';

export default ({distance, to, from} : {
  distance: number,
  to: City,
  from: City
}) => {
  const zones = (to.game as Powergrid).zones;
  const color = distance >= 10 ? "#fbff89" : 'white';
  if (distance === 0) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 139.729 139.729"
      className={zones.includes(to.zone) && zones.includes(from.zone) ? '' : 'out-of-zone'}
    >
      <defs>
        <path id="rect1" d="M145.075 80.331H336.71V268.461H145.075z"></path>
      </defs>
      <g fillOpacity="1" transform="translate(-63.678 -67.174)">
        <path
          fill={color}
          fillRule="evenodd"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M188.466 137.064a54.91 54.91 0 01-54.91 54.91 54.91 54.91 0 01-54.91-54.91 54.91 54.91 0 0154.91-54.91 54.91 54.91 0 0154.91 54.91z"
        ></path>
        <path
          fill={color}
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          d="M78.949 130.176l-13.77 2.797v7.531l13.555 3.443"
        ></path>
        <circle
          cx="86.067"
          cy="136.631"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
        ></circle>
        <circle
          cx="121.931"
          cy="88.68"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="rotate(18)"
        ></circle>
        <circle
          cx="141.222"
          cy="31.993"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="rotate(36)"
        ></circle>
        <circle
          cx="142.051"
          cy="-27.88"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="rotate(54)"
        ></circle>
        <circle
          cx="124.339"
          cy="-85.08"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="rotate(72)"
        ></circle>
        <path
          fill={color}
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          d="M140.405 82.445l-2.797-13.771h-7.53l-3.444 13.555"
        ></path>
        <circle
          cx="89.563"
          cy="-133.95"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="rotate(90)"
        ></circle>
        <circle
          cx="41.641"
          cy="-169.738"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="rotate(108)"
        ></circle>
        <circle
          cx="-14.994"
          cy="-188.966"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="rotate(126)"
        ></circle>
        <circle
          cx="-74.799"
          cy="-189.752"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="rotate(144)"
        ></circle>
        <circle
          cx="-131.919"
          cy="-172.019"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="rotate(162)"
        ></circle>
        <path
          fill={color}
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          d="M188.137 143.9l13.77-2.796v-7.531l-13.555-3.443"
        ></path>
        <circle
          cx="-181.019"
          cy="-137.446"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="scale(-1)"
        ></circle>
        <circle
          cx="-216.777"
          cy="-89.449"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="rotate(-162)"
        ></circle>
        <circle
          cx="-235.953"
          cy="-32.751"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="rotate(-144)"
        ></circle>
        <circle
          cx="-236.67"
          cy="27.098"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="rotate(-126)"
        ></circle>
        <circle
          cx="-218.858"
          cy="84.239"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="rotate(-108)"
        ></circle>
        <path
          fill={color}
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          d="M126.68 191.632l2.798 13.771h7.53l3.443-13.555"
        ></path>
        <circle
          cx="-184.514"
          cy="133.135"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="rotate(-90)"
        ></circle>
        <circle
          cx="-136.487"
          cy="168.97"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="rotate(-72)"
        ></circle>
        <circle
          cx="-79.738"
          cy="188.209"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="rotate(-54)"
        ></circle>
        <circle
          cx="-19.82"
          cy="188.97"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="rotate(-36)"
        ></circle>
        <circle
          cx="37.4"
          cy="171.178"
          r="3.873"
          fill="none"
          fillRule="evenodd"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="3"
          transform="rotate(-18)"
        ></circle>
        <path
          fill="#fff"
          fillRule="evenodd"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M173.553 137.064a39.996 39.996 0 01-39.997 39.996 39.996 39.996 0 01-39.996-39.996 39.996 39.996 0 0139.996-39.997 39.996 39.996 0 0139.997 39.997z"
        ></path>
        <text
          x="24.32"
          y="0"
          textAnchor="middle"
          fill="#000"
          stroke="none"
          strokeWidth="10.56"
          display="inline"
          fontFamily="Din Condensed Web"
          fontSize="58.083"
          fontStretch="condensed"
          fontWeight="bold"
          transform="matrix(.51475 0 0 .521 8.898 60.482)"
          xmlSpace="preserve"
          style={{
            textAlign: "center",
            whiteSpace: "pre",
          }}
        >
          <tspan x="240.688" y="195.032">
            <tspan fontSize="134.956">{distance}</tspan>
          </tspan>
        </text>
      </g>
    </svg>
  );
};
