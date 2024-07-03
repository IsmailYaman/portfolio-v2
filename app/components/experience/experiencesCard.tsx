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
            <div className="card border-2 
             hover:border-2 hover:border-primary border-transparent hover:shadow-xl hover:shadow-primary/25 bg-neutral text-neutral-content duration-300 ease">
                <div className="card-body items-center text-center">
                    <Image src={image} width={100} height={100} alt={label} quality={100} />
                    <div className="card-actions justify-end">
                        <p className="text-white font-bold">{label}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExperiencesCard;
