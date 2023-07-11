"use client";
import React from "react";
import Link from "next/link";
import Logo from "../logo";

import DropDownMenu from "./dropdownMenu";

interface HeaderProps {
    pages: { id: number; label: string; link: string }[]; // Define the prop type for 'pages'
}

const Header: React.FC<HeaderProps> = ({ pages }) => {
    console.log(pages);

    // Use the prop 'pages' in the component
    return (
        <div className="navbar bg-gradient-to-r from-primary via-indigo-900  to-secondary">
            <div className="container mx-auto">
                <div className="flex-1">
                    <a className="cursor-pointer" href="/">
                        <Logo mode="white" />
                    </a>
                </div>
                <div className="flex-none sm:block hidden">
                    <ul className="menu menu-horizontal px-1">
                        {pages.map((page) => (
                            <li key={page.id}>
                                <Link
                                    aria-label={page.label}
                                    href={page.link}
                                    passHref
                                >
                                    {page.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end sm:hidden">
                    <DropDownMenu pages={pages} />
                </div>
            </div>
        </div>
    );
};

export default Header;
