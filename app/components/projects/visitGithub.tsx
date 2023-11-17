import React from "react";
import Link from "next/link";

const VisitGithub = () => {
    return (
        <Link href="https://github.com/IsmailYaman" target="_blank">
            <div className="card hover:shadow-xl hover:shadow-primary/25 group w-full h-full bg-base-100 hover:scale-105 mx-auto ease-out duration-100 cursor-pointer">
                <div className="card-body bg-gradient-to-br from-[#180042] via-[#2e017d] to-purple-900 rounded-2xl flex items-center justify-center h-full">
                    <h2 className="card-title text-white text-center">See more projects on my GitHub</h2>
                </div>
            </div>
        </Link>
    );
};

export default VisitGithub;
