import React from "react";

const Education = () => {
    return (
        <div className="pb-36 bg-base-100 px-4" id="education">
            <div className="sm:container sm:mx-auto">
                <h1>
                    <span className="relative z-10 bg-gradient-to-br from-pink-700 via-purple-700 to-blue-400 text-transparent h-full bg-clip-text text-5xl leading-loose font-black">
                        Studies
                    </span>{" "}
                    I&#39;ve followed
                </h1>

                <div className="grid grid-cols-3 grid-rows-5 gap-4">
                    <div className="col-span-2 row-span-2 p-20  rounded-2xl bg-gradient-to-br from-[#180042] via-[#2e017d] to-purple-900 flex flex-col justify-center h-full">
                        <div>
                            <span>2010 - 2014</span>
                            <h1>VMBO-Kader</h1>
                            <strong>Lentiz Floracollege</strong>
                            <p>VMBO</p>
                        </div>
                    </div>
                    <div className="row-span-2 col-start-3 p-20 rounded-2xl bg-gradient-to-bl from-[#180042] via-[#2e017d] to-purple-900 flex flex-col justify-center h-full">
                        <div>
                            <span>2014 - 2015</span>
                            <h1>Auto technicus</h1>
                            <strong>ROC Mondriaan</strong>
                            <p>MBO 2</p>
                        </div>
                    </div>
                    <div className="row-span-3 row-start-3 p-20 rounded-2xl bg-gradient-to-r from-[#180042] via-[#2e017d] to-purple-900 flex flex-col justify-center h-full">
                        <div>
                            <span>2015 - 2018</span>
                            <h1>Software Engineering</h1>
                            <strong>ROC Mondriaan</strong>
                            <p>MBO 4</p>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-3 row-start-3 p-20 rounded-2xl bg-gradient-to-tl from-[#180042] via-[#2e017d] to-purple-900 flex flex-col justify-center h-full">
                        <div>
                            <span>2018 - Heden</span>
                            <h1>Creative Media & Game Technologies</h1>
                            <strong>Hogeschool Rotterdam</strong>
                            <p>HBO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
