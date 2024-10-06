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
                    "hover:shadow-primary/25 hover:border-primary box-border flex h-full flex-col justify-center rounded-2xl border-4 border-transparent bg-gradient-to-br from-[#180042] via-[#2e017d] to-purple-900 p-20 text-white shadow-xl duration-200 ease-in-out hover:border-4 lg:col-span-3 lg:row-span-1 lg:bg-gradient-to-br bg-[length:calc(100%+(theme(borderWidth.4)*2))_calc(100%+(theme(borderWidth.4)*2))] bg-[position:calc(theme(borderWidth.4)*-1)_calc(theme(borderWidth.4)*-1)]";
                break;
            case 2:
                gridClasses =
                    "hover:shadow-primary/25 hover:border-primary box-border flex h-full flex-col justify-center rounded-2xl border-4 border-transparent bg-gradient-to-tr from-[#180042] via-[#2e017d] to-purple-900 p-20 text-white shadow-xl duration-200 ease-in-out hover:border-4 lg:col-span-2 lg:row-span-1 lg:bg-gradient-to-bl bg-[length:calc(100%+(theme(borderWidth.4)*2))_calc(100%+(theme(borderWidth.4)*2))] bg-[position:calc(theme(borderWidth.4)*-1)_calc(theme(borderWidth.4)*-1)]";
                break;
            case 3:
                gridClasses =
                    "hover:shadow-primary/25 hover:border-primary box-border flex h-full flex-col justify-center rounded-2xl border-4 border-transparent bg-gradient-to-bl from-[#180042] via-[#2e017d] to-purple-900 p-20 text-white shadow-xl duration-200 ease-in-out hover:border-4 lg:col-span-2 lg:row-span-1 lg:bg-gradient-to-tr bg-[length:calc(100%+(theme(borderWidth.4)*2))_calc(100%+(theme(borderWidth.4)*2))] bg-[position:calc(theme(borderWidth.4)*-1)_calc(theme(borderWidth.4)*-1)]";
                break;
            case 4:
                gridClasses =
                    "hover:shadow-primary/25 hover:border-primary box-border flex h-full flex-col justify-center rounded-2xl border-4 border-transparent bg-gradient-to-tl from-[#180042] via-[#2e017d] to-purple-900 p-20 text-white shadow-xl duration-200 ease-in-out hover:border-4 lg:col-span-3 lg:row-span-1 lg:bg-gradient-to-tl bg-[length:calc(100%+(theme(borderWidth.4)*2))_calc(100%+(theme(borderWidth.4)*2))] bg-[position:calc(theme(borderWidth.4)*-1)_calc(theme(borderWidth.4)*-1)]";
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

                <div className="grid lg:grid-cols-5 lg:grid-rows-2 sm:grid-rows-4 sm:grid-cols-1 xs:grid-rows-4 xs:grid-cols-1 gap-4">
                    {education.map(renderEducationItem)}
                </div>
            </div>
        </div>
    );
};

export default Education;
