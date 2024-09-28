import React from "react";
import ExperiencesCard from "./experiencesCard";

interface ExperienceItem {
    id: number;
    label: string;
    image: string;
}

interface ExperienceSectionProps {
    title: string;
    data: ExperienceItem[];
}

const ExperienceSection = ({ title, data }: ExperienceSectionProps) => {
    return (
        <>
            <h3 className="mb-4">{title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-10">
                {data.map((item) => (
                    <ExperiencesCard key={item.id} label={item.label} image={item.image} id={0} />
                ))}
            </div>
        </>
    );
};

export default ExperienceSection;
