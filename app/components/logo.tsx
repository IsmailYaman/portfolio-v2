import React from "react";

interface LogoProps {
    mode: string;
  }
  
const Logo: React.FC<LogoProps> = ({ mode }) => {
    return (
        <svg
        // className="md:m"
            height={50}
            fill={mode}
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2376 2376"
        >
            <path
                id="Border"
                d="M0,1188v740.62C0,2175.7,200.21,2376,447.18,2376H1928.82c247,0,447.18-200.3,447.18-447.38V447.38C2376,200.3,2175.79,0,1928.82,0H447.18C200.21,0,0,200.3,0,447.38Zm2088,0v670.49C2088,1998,1993.43,2088,1854,2088H513.62C374.19,2088,288,1998,288,1858.49v-1341C288,378,383.19,288,522.62,288H1863c139.43,0,225,90,225,229.51Z"
            />
            <g id="K">
                <rect x="1602" y="648" width="252" height="1080" rx="60" />
                <path d="M962.59,1728h142.06a60,60,0,0,0,47.37-23.16l224-281.53a60,60,0,0,0-4.93-79.26l-92.47-92.47a60,60,0,0,0-91.25,7.55l-273.56,374C885.4,1672.84,913.79,1728,962.59,1728Z" />
                <path d="M1146,648H990.5c-53.41,0-80.2,64.53-42.5,102.35l279.84,280.81,403.07,403.08a60,60,0,0,0,84.85,0l92.34-92.34a60,60,0,0,0-1-85.83L1187.39,664.6A60,60,0,0,0,1146,648Z" />
            </g>
            <rect id="I" x="522" y="648" width="252" height="1080" rx="60" />
        </svg>
    );
};

export default Logo;