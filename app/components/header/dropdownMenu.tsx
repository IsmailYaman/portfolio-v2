import React from 'react';
import Link from 'next/link';

interface DropDownMenuProps {
    pages: { id: number; label: string; link: string }[];
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ pages }) => {
    return (
        <div className="dropdown dropdown-end float-right">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7"
                    />
                </svg>
            </label>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                {pages.map((page) => (
                    <li key={page.id}>
                        <Link aria-label={page.label} href={page.link} passHref>
                            {page.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropDownMenu;
