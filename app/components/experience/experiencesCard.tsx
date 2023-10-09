import React from "react";
import Image from "next/image";
interface ExperiencePrompts {
    id: number;
    label: string;
    image: string;
}
const ExperiencesCard: React.FC<ExperiencePrompts> = ({ label, image }) => {
    return (
        <div className=" flex flex-col items-center justify-center">
            <Image src={image} width={100} height={100} alt={label} quality={100} />
            <p className="text-center">{label}</p>
        </div>
    );
};

export default ExperiencesCard;
