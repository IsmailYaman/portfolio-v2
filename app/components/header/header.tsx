"use client";
import React from "react";
import Logo from "./logo";
import DropDownMenu from "./dropdownMenu";
import { headerLinks } from "../../data/data";
import Link from "next/link";

const Header = () => {
    return (
        <div className="fixed z-50 w-full sm:left-0 sm:right-0 sm:top-2 sm:max-w-fit sm:mx-auto flex sm:rounded-full sm:backdrop-blur-lg header-blur" style={{ backgroundColor: "rgba(18,18,18, 0.2)" }}>
            <div className="w-full flex items-center justify-between sm:justify-start py-2 px-4">
                <div className="absolute left-1/2 transform -translate-x-1/2 sm:static sm:transform-none">
                    <a className="btn btn-ghost hover:bg-transparent" aria-label="Logo" href="/">
                        <Logo mode="white" />
                    </a>
                </div>
                <div className="flex-none sm:block hidden">
                    <ul className="menu menu-horizontal px-1">
                        {headerLinks.map((link) => (
                            <li key={link.target}>
                                <Link
                                    href={`#${link.target}`}
                                    className="text-white hover:text-white active:!bg-primary active:!text-white focus:!text-white focus:!bg-primary/75"
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
