import React from "react";
import github from "public/github.svg";
import Image from "next/image";

const Footer = () => {
    return (
        <footer
            className="footer footer-center fixed inset-x-0 bottom-0 p-10 text-base-content bg-gradient-to-l from-primary via-indigo-900  to-secondary"
        >
            <p>Connect with me!</p>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="mailto:iso_yaman@outlook.com">
                        <Image
                            className="hover:cursor-pointer"
                            src={github}
                            height={40}
                            alt="Email"
                        />
                    </a>
                    <a href="https://github.com/IsmailYaman">
                        <Image
                            className="hover:cursor-pointer"
                            src={github}
                            height={40}
                            alt="Github"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/ismail-kayadelen-56a0b6133/">
                        <Image
                            className="hover:cursor-pointer"
                            src={github}
                            height={40}
                            alt="LinkedIn"
                        />
                    </a>
                </div>
            </div>
            <div>
                <p>Ismail Kayadelen | 2023</p>
            </div>
        </footer>
    );
};

export default Footer;
