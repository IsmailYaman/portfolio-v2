"use client";
import React from "react";
import Logo from "./logo";
import DropDownMenu from "./dropdownMenu";
import { headerLinks } from "../../data/data";
import Link from "next/link";

const Header = () => {
    return (
        <div className="fixed z-50 w-full sm:left-0 sm:right-0 sm:top-6 sm:max-w-fit sm:mx-auto flex sm:rounded-full backdrop-blur-lg header-blur bg-black/10">
            <div className="w-full flex items-center justify-between sm:justify-start py-4 px-4">
                <div className="absolute left-1/2 transform -translate-x-1/2 sm:static sm:transform-none">
                    <a className="btn btn-ghost hover:bg-transparent" aria-label="Logo" href="/">
                        <Logo mode="white" />
                    </a>
                </div>
                <div className="flex-none sm:block hidden">
                    <ul className="menu menu-horizontal px-1 ">
                        {headerLinks.map((link) => (
                            <li key={link.target}>
                                <Link
                                    href={`#${link.target}`}
                                    className="text-white hover:text-white focus:bg-primary active:!text-white focus:!text-white bg-black/10 focus:!bg-primary/75"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sm:hidden">
                    <DropDownMenu />
                </div>
            </div>
        </div>
    );
};

export default Header;
