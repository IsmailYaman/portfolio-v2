import React from 'react';
import { experiences } from '../../data/data';
import ExperienceSection from './experienceSection';

const Experiences: React.FC = () => {
    function camelCaseToTitleCase(text: string): string {
        const result = text.replace(/([A-Z])/g, ' $1');
        return result.charAt(0).toUpperCase() + result.slice(1);
    }
    
    return (
        <div className="pb-36 bg-base-100 px-4" id='experience'>
            <div className="sm:container sm:mx-auto">
            <h1><span className="relative z-10 bg-gradient-to-br from-pink-700 via-purple-700 to-blue-400 text-transparent h-full bg-clip-text text-5xl leading-loose font-black">Tools</span> I'm using</h1>

                {Object.entries(experiences).map(([key, value]) => (
                    <ExperienceSection key={key} title={camelCaseToTitleCase(key)} data={value} />
                ))}
            </div>
        </div>
    );
};

export default Experiences;
