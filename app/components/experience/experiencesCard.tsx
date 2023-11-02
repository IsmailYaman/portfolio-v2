import React from "react";
import Image from "next/image";
interface ExperiencePrompts {
    id: number;
    label: string;
    image: string;
}
const ExperiencesCard: React.FC<ExperiencePrompts> = ({ label, image }) => {
    return (
        <>
            <div className="card bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <Image src={image} width={100} height={100} alt={label} quality={100} />
                    <div className="card-actions justify-end">
                        <p>{label}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExperiencesCard;
