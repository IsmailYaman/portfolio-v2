import SocialLinks from "./social";
import { socials } from "../../data/data";

const Footer = () => {
    return (
        <footer className="footer footer-center h-96 p-10 text-primary-content bg-[url('/img/oooscillate.svg')] bg-no-repeat lg:bg-bottom sm:bg-cover ">
            <SocialLinks socials={socials} />
            <p className="justify-bottom">Copyright © {new Date().getFullYear()} - All right reserved</p>
        </footer>
    );
};

export default Footer;
