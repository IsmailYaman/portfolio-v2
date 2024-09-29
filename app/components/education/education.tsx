import React from "react";
import { education } from "@/app/data/data";

interface EducationItem {
    id: number;
    year: string;
    title: string;
    school: string;
    description: string;
}

const Education = () => {
    const renderEducationItem = (item: EducationItem) => {
        let gridClasses = "";
        switch (item.id) {
            case 1:
                gridClasses =
                    "lg:col-span-2 lg:row-span-2 p-20 hover:shadow-primary/25 text-white shadow-xl duration-100 ease-in-out rounded-2xl lg:bg-gradient-to-br bg-gradient-to-br from-[#180042] via-[#2e017d] to-purple-900 flex flex-col justify-center h-full hover:border-2 border-primary";
                break;
            case 2:
                gridClasses =
                    "lg:row-span-2 lg:col-start-3 p-20 hover:shadow-primary/25 text-white shadow-xl duration-100 ease-in-out rounded-2xl lg:bg-gradient-to-bl from-[#180042] bg-gradient-to-tr via-[#2e017d] to-purple-900 flex flex-col justify-center h-full hover:border-2 border-primary";
                break;
            case 3:
                gridClasses =
                    "lg:row-span-3 lg:row-start-3 p-20 hover:shadow-primary/25 text-white shadow-xl duration-100 ease-in-out rounded-2xl lg:bg-gradient-to-tr bg-gradient-to-br from-[#180042] via-[#2e017d] to-purple-900 flex flex-col justify-center h-full hover:border-2 border-primary";
                break;
            case 4:
                gridClasses =
                    "lg:col-span-2 lg:row-span-3 row-start-4 p-20 hover:shadow-primary/25 text-white shadow-xl duration-100 ease-in-out rounded-2xl lg:bg-gradient-to-tl bg-gradient-to-tr from-[#180042] via-[#2e017d] to-purple-900 flex flex-col justify-center h-full hover:border-2 border-primary";
                break;
            default:
                break;
        }

        return (
            <div className={gridClasses}>
                <div>
                    <span>{item.year}</span>
                    <h1 className="text-3xl py-3 sm:text-4xl sm:py-0">{item.title}</h1>
                    <strong>{item.school}</strong>
                    <p>{item.description}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="pb-36 px-4" id="education">
            <div className="sm:container sm:mx-auto">
                <h2>
                    <span className="relative z-10 bg-gradient-to-br from-pink-700 via-purple-700 to-blue-400 text-transparent h-full bg-clip-text text-4xl leading-loose font-black">
                        Studies
                    </span>{" "}
                    I&#39;ve followed
                </h2>

                <div className="grid lg:grid-cols-3 lg:grid-rows-5 sm:grid-rows-4 sm:grid-cols-1 xs:grid-rows-4 xs:grid-cols-1 gap-4">
                    {education.map(renderEducationItem)}
                </div>
            </div>
        </div>
    );
};

export default Education;
