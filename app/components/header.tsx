import React from "react";
import Logo from "./logo";

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="container mx-auto">
                <div className="flex-1">
                    <a className="cursor-pointer" href="/">
                    {/* //this should change to black when dark mode is enabled */}
                        <Logo mode="white" /> 
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Portfolio</a>
                        </li>
                        <li>
                            <a>Experience</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
