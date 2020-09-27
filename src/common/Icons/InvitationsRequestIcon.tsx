import React from 'react';

interface Props {
  color: string;
  width: number;
  height: number;
}
const InvitationRequestIcon: React.FC<Props> = ({ color, height, width }) => {
  return (
    <svg height={height} viewBox="0 0 512 512" width={width}>
      <path
        fill={color}
        d="M0 22.199l137.651 458.822 69.235-161.571zM22.193 0l297.265 206.883 161.562-69.23zM72.137 72.138L237.24 310.617l91.724 18.348-18.351-91.734zM352.19 373.492l21.21-21.21 138.495 138.496-21.21 21.21z"
      />
      <g>
        <path
          fill={color}
          d="M373.412 267.437l21.21-21.21 106.05 106.05-21.21 21.21z"
        />
      </g>
      <g>
        <path
          fill={color}
          d="M246.134 394.69l21.21-21.21 106.05 106.05-21.21 21.21z"
        />
      </g>
    </svg>
  );
};

export default InvitationRequestIcon;
