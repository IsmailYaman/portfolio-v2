import Image from "next/image";
import React from "react";

interface SocialLink {
    id: number;
    label: string;
    image: string;
    link: string;
}

interface SocialLinksProps {
    socials: SocialLink[];
}

const Social: React.FC<SocialLinksProps> = ({ socials }) => {
    return (
        <div className="flex w-1/5 justify-center  space-x-4 items-center">
            {socials.map((social) => (
                <a className=" transition-transform transform hover:scale-110" key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
                    <Image src={social.image} alt={social.label} width={50} height={50} />
                </a>
            ))}
        </div>
    );
};

export default Social;
