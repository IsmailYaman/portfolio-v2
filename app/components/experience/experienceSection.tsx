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

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ title, data }) => (
    <>
        <h2 className="mb-4">{title}</h2>
        <div className="grid grid-cols-8 gap-4 mb-10">
            {data.map((item) => (
                <ExperiencesCard key={item.id} label={item.label} image={item.image} id={0} />
            ))}
        </div>
    </>
);

export default ExperienceSection;
