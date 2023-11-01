import React from 'react';
import ExperiencesCard from './experiencesCard';

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
        <h2 className="mb-8">{title}</h2>
        <div className="flex flex-wrap items-center mx-2">
            {data.map((item) => (
                <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
                    <ExperiencesCard label={item.label} image={item.image} id={0} />
                </div>
            ))}
        </div>
    </>
);

export default ExperienceSection;
