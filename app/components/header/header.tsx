import React from "react";
import Logo from "./logo";
import DropDownMenu from "./dropdownMenu";
import { headerLinks } from "../../data/data";
import Link from "next/link";

const Header = () => {
    return (
        <div className="navbar bg-transparent absolute z-10 top-0">
            <div className="container mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost hover:bg-transparent" href="/">
                        <Logo mode="white" />
                    </a>
                </div>
                <div className="flex-none sm:block hidden">
                    <ul className="menu menu-horizontal px-1">
                        {headerLinks.map((link) => (
                            <li key={link.target}>
                                <Link href={`#${link.target}`} className="hover:bg-primary/50 hover:text-white active:!bg-primary active:!text-white focus:!text-white focus:!bg-primary/75 ">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
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
