// Lion.svg
import React from 'react';

const Lion: React.FC = () => (
  <svg width="100%" height="100%" viewBox="0 0 351 234" fill="none" xmlns="http://www.w3.org/2000/svg"
       xmlnsXlink="http://www.w3.org/1999/xlink">
    <g filter="url(#filter0_d_5159_61126)">
      <rect x="0.666626" width="350" height="230" rx="25" fill="url(#pattern0_5159_61126)"
            shape-rendering="crispEdges" />
      <rect x="2.66663" y="2" width="346" height="226" rx="23" stroke="#919191" stroke-width="4"
            shape-rendering="crispEdges" />
    </g>
    <defs>
      <filter id="filter0_d_5159_61126" x="0.666626" y="0" width="350" height="234" filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                       result="hardAlpha" />
        <feOffset dy="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.341176 0 0 0 0 0.341176 0 0 0 1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5159_61126" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5159_61126" result="shape" />
      </filter>
      <pattern id="pattern0_5159_61126" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_5159_61126" transform="matrix(0.00469484 0 0 0.00714432 0 -0.150133)" />
      </pattern>
      <image id="image0_5159_61126" width="213" height="182"
             xlinkHref="data:image/png;base64,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" />
    </defs>
  </svg>
);

export default Lion;
