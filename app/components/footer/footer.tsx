'use client'
import SocialLinks from "./social";
import { socials } from "../../data/data";
import { scrollToTop } from "../../functions/scrollToTop"; // Import the utility function

const Footer = () => {
  return (
    <footer className="footer footer-center h-96 p-10 text-primary-content bg-[url('/img/oooscillate.svg')] bg-no-repeat lg:bg-bottom sm:bg-cover ">
      <SocialLinks socials={socials} />
      <p className="justify-bottom">Copyright © {new Date().getFullYear()} - All right reserved</p>
      <a className="cursor-pointer" onClick={scrollToTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
          />
        </svg>
        Back to top
      </a>
    </footer>
  );
};

export default Footer;
