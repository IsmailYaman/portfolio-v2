import React from "react";
import { headerLinks } from "../../data/data";

const DropDownMenu = () => {
    return (
        <div className="dropdown dropdown-start float-right">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </label>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100/50 text-white rounded-box w-52"
            >
                {headerLinks.map((link) => (
                    <li key={link.target}>
                        <a
                            href={`#${link.target}`}
                            className="hover:bg-primary/50 hover:text-white active:!bg-primary active:!text-white focus:!text-white focus:!bg-primary/75 "
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropDownMenu;
