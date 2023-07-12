"use client";
import React from "react";
import Link from "next/link";
import Logo from "../logo";
import DropDownMenu from "./dropdownMenu";

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="container mx-auto">
                <div className="flex-1">
                    <a className="cursor-pointer" href="/">
                        <Logo mode="white" />
                    </a>
                </div>
                <div className="flex-none sm:block hidden">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Experience</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end sm:hidden">
                    <DropDownMenu />
                </div>
            </div>
        </div>
    );
};

export default Header;
