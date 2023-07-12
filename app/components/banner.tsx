import React from "react";

const Banner = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-center bg-[url('/img/purple.png')] ">
            <h1 className="">Ismail Kayadelen</h1>
            <h2 className="font-light">Web Development & Web Design</h2>
            <a href="#"className="my-4 px-5 py-2.5 relative rounded group text-white font-medium inline-block">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-primary to-secondary"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                <span className="relative">Contact</span>
            </a>
        </div>
    );
};

export default Banner;
