"use client";

import React, { useEffect, useState } from "react";

const Banner = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const animationTimer = setTimeout(() => {
            setIsAnimated(true);
        }, 800);

        const visibilityTimer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => {
            clearTimeout(animationTimer);
            clearTimeout(visibilityTimer);
        };
    }, []);

    const slidingImage = `transition-all ${isAnimated ? "w-1/2" : "w-full"} ${
        isAnimated ? "translate-x-3/5" : "translate-x-0"
    }`;

    return (
        <div className="bg-primary flex">
            <div className={`h-screen ${slidingImage} bg-no-repeat bg-cover bg-center duration-1000 bg-[url('/img/purple.png')]`}></div>
            <div
                className={`max-w-2/5 flex flex-col items-center justify-center h-screen mx-auto bg-center  ${
                    isAnimated && isVisible ? "" : "hidden"
                }`}
            >
                <h1 className="text-4xl font-bold animate-fade-down animate-duration-500 animate-delay-3000 animate-ease-out">Ismail Kayadelen</h1>
                <h2 className="font-light">Web Development & Web Design</h2>
                <a href="#_" className="relative bg-primary my-4 inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                    <span className="relative">Let&#39;s work together!</span>
                </a>
            </div>
        </div>
    );
};

export default Banner;
